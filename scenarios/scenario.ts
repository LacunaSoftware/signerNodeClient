import { Configuration, DocumentsCreateDocumentResult, UploadApi, FileUploadModel, UsersParticipantUserModel, FlowActionsFlowActionCreateModel, FlowActionType, DocumentsCreateDocumentRequest, DocumentsApi } from "signer-node-client";
import * as fs from 'fs';

export const config: Configuration = { // set your configs here!
    apiKey: "API Sample App|43fc0da834e48b4b840fd6e8c37196cf29f919e5daedba0f1a5ec17406c13a99",
    basePath: "https://signer-lac.azurewebsites.net"
}

const uploadApi = new UploadApi(config);
const documentApi = new DocumentsApi(config);
const filepath = "..\\samples\\sample.pdf"
const fileName = "sample.pdf"
const base64File = getBase64(filepath)

export async function CreateDocument(): Promise<DocumentsCreateDocumentResult> {
    const response = await uploadApi.apiUploadsBytesPost({
        bytes: base64File
    });
    const fileUploadModel: FileUploadModel = {
        displayName: "Check Status Sample",
        id: response.data.id,
        contentType: "application/pdf",
        name:fileName
    }
    const participant: UsersParticipantUserModel = {
        name: "Jack Bauer",
        email: "jack.bauer@mailnator.com",
        identifier: "75502846369"
    }
    const flowAction: FlowActionsFlowActionCreateModel = {
        type: FlowActionType.Signer,
        user: participant
    }
    const files = new Array(fileUploadModel);
    const flowActions = new Array(flowAction);
    const documentRequest: DocumentsCreateDocumentRequest = {
        files: files,
        flowActions: flowActions
    }
    const result = await documentApi.apiDocumentsPost(documentRequest);
    return result.data[0]
}

export function getBase64(file: fs.PathOrFileDescriptor) {
    const result = fs.readFileSync(file, {encoding: 'base64'});
    return result;
}