import {
    DocumentsApi,
    FileUploadModel,
    UploadApi,
    DocumentsDocumentAddVersionRequest,
    UsersParticipantUserModel,
    FlowActionsFlowActionCreateModel,
    FlowActionType,
    DocumentsCreateDocumentRequest,
  } from "signer-node-client";
  import { config, CreateDocument, getBase64 } from "./scenario";


const uploadApi = new UploadApi(config);
const documentsApi = new DocumentsApi(config);


const filepath ='../samples/sample.pdf';
const filename ="sample.pdf";

uploadApi.apiUploadsBytesPost({bytes:getBase64(filepath)}).then((res)=>{
    const uploadModel : FileUploadModel = {

        id : res.data.id,
        name : filename,
        contentType : "application/pdf",
        displayName : "One Signer Sample"
    }
    const participant : UsersParticipantUserModel = {

        name : "Jack Bauer",
        email: "jack.bauer@mailinator.com",
        identifier:"75502846369"

    }
    const flowAction : FlowActionsFlowActionCreateModel = {
        type: FlowActionType.Signer,
        user: participant
    }
    const documentRequest: DocumentsCreateDocumentRequest = {

        files: [uploadModel],
        flowActions: [flowAction]


    }
    documentsApi.apiDocumentsPost(documentRequest).then((res)=>{
        console.log("Document ", res.data[0].documentId , " Created")
    })
})

