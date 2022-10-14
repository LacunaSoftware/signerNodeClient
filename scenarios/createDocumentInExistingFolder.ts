import { DocumentsApi, DocumentsCreateDocumentRequest, FileUploadModel, FlowActionsFlowActionCreateModel, FlowActionType, PaginatedSearchResponseDocumentFlowsDocumentFlowModel, PaginatedSearchResponseDocumentsDocumentListModel, PaginatedSearchResponseFoldersFolderInfoModel, UploadApi, UsersParticipantUserModel } from 'signer-node-client'
import {config, getBase64} from './scenario'

const filePath = "../samples/sample.pdf"
const fileName = "sample.pdf"

const uploadApi = new UploadApi(config);
const documentsApi = new DocumentsApi(config)

uploadApi.apiUploadsBytesPost({
    bytes: getBase64(filePath)
}).then((res) => {
    const fileUploadModel: FileUploadModel = {
        displayName: "Check Status Sample",
        id: res.data.id,
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
    const paginatedSearchParams: PaginatedSearchResponseDocumentsDocumentListModel = {

    }

    const files = new Array(fileUploadModel);
    const flowActions = new Array(flowAction);
    const documentRequest: DocumentsCreateDocumentRequest = {
        files: files,
        flowActions: flowActions
    }




});
