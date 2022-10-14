import { DocumentsApi, DocumentsDocumentModel,FlowActionsFlowActionModel, NotificationsApi } from "signer-node-client";
import { config, CreateDocument } from "./scenario";




CreateDocument().then((response)=>{

const  notification = new NotificationsApi(config)
const document = new DocumentsApi(config)
document.apiDocumentsIdGet(response.documentId).then((res)=>{

    res.data.flowActions.forEach(element => {

        notification.apiNotificationsFlowActionReminderPost({flowActionId : element.id, documentId: response.documentId}).then((resp)=>

        console.log("Participante Notified, Status :" , resp.status)

        )
    });




})



})

