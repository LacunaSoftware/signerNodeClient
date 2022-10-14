import {
  DocumentsApi,
  FileUploadModel,
  UploadApi,
  UsersParticipantUserModel,
  FlowActionsFlowActionCreateModel,
  FlowActionType,
  DocumentsCreateDocumentRequest,
} from "signer-node-client";
import { config, getBase64 } from "./scenario";

const uploadApi = new UploadApi(config);
const documentsApi = new DocumentsApi(config);
const filepath = "../samples/sample.pdf";
const filename = "sample.pdf";

// 1. The file's bytes must be read by the application and uploaded
uploadApi.apiUploadsBytesPost({ bytes: getBase64(filepath) }).then((res) => {
  // 2. Define the name of the document which will be visible in the application
  const uploadModel: FileUploadModel = {
    id: res.data.id,
    name: filename,
    contentType: "application/pdf",
    displayName: "Two Signers Without Order Sample",
  };
  // 3. For each participant on the flow, create one instance of ParticipantUserModel
  const participantUserOne: UsersParticipantUserModel = {
    name: "Jack Bauer",
    email: "jack.bauer@mailinator.com",
    identifier: "75502846369",
  };
  const participantUserTwo: UsersParticipantUserModel = {
    name: "James Bond",
    email: "james.bond@mailinator.com",
    identifier: "95588148061",
  };
  // 4. Create a FlowActionCreateModel instance for each action (signature or approval) in the flow.
  //    This object is responsible for defining the personal data of the participant, the type of
  //    action that he will perform on the flow and the order in which this action will take place
  //    (Step property). If the Step property of all action are the same or not specified they
  //    may be executed at any time
  const flowActionCreateModelOne: FlowActionsFlowActionCreateModel = {
    type: FlowActionType.Signer,
    user: participantUserOne,
  };
  const flowActionCreateModelTwo: FlowActionsFlowActionCreateModel = {
    type: FlowActionType.Signer,
    user: participantUserTwo,
  };

  // 5. Send the document create request
  const documentRequest: DocumentsCreateDocumentRequest = {
    files: [uploadModel],
    flowActions: [flowActionCreateModelOne, flowActionCreateModelTwo],
  };
  documentsApi.apiDocumentsPost(documentRequest).then((res) => {
    console.log("Document ", res.data[0].documentId, " Created");
  });
});