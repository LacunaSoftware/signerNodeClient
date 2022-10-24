import {
  UploadApi,
  FlowActionType,
  FoldersApi,
  DocumentsApi,
  getBase64
} from "signer-node-client";
import { config } from "./scenario";

/**
 * This scenario demonstrates the creation of a document into an existing folder.
 */

const uploadApi = new UploadApi(config);
const foldersApi = new FoldersApi(config);
const documentsApi = new DocumentsApi(config);
const filePath = "../samples/sample.pdf";
const fileName = "sample.pdf";

// 1. The file's bytes must be read by the application and uploaded
uploadApi
  .apiUploadsBytesPost({
    bytes: getBase64(filePath),
  })
  .then((res) => {
    // 2. Define the name of the document which will be visible in the application
    const fileUploadModel = {
      displayName: "New file in existing folder sample",
      id: res.data.id,
      contentType: "application/pdf",
      name: fileName,
    };
    // 3. For each participant on the flow, create one instance of ParticipantUserModel
    const participant = {
      name: "Jack Bauer",
      email: "jack.bauer@mailnator.com",
      identifier: "75502846369",
    };

    // 4. Create a FlowActionCreateModel instance for each action (signature or approval) in the flow.
    //    This object is responsible for defining the personal data of the participant and the type of 
    //    action that he will perform on the flow
    const flowAction = {
      type: FlowActionType.Signer,
      user: participant,
    };
    const files = [fileUploadModel];
    const flowActions = [flowAction];
    let folderId = "";

    // 5. Search a folder by it's name
    foldersApi.apiFoldersGet("Sample folder").then(
      (res) => {
        console.log("Available items: ", res.data.items);
        folderId = res.data.items[0].id;
        // 6. Send the document create request setting the FolderId property
        if(folderId != null){
          const documentRequest = {
            files: files,
            flowActions: flowActions,
            folderId: folderId,
          };
          // 7. Send the request
          documentsApi.apiDocumentsPost(documentRequest).then((response) => {
            console.log(
              "Document: ",
              response.data[0],
              "created in folder",
              folderId
            );  
          });
        }
      },
      () => {
        console.log("Folder not found");
      }
    );
  });
