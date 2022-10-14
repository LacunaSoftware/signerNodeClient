"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signer_node_client_1 = require("signer-node-client");
const scenario_1 = require("./scenario");
(0, scenario_1.CreateDocument)().then((response) => {
    const notification = new signer_node_client_1.NotificationsApi(scenario_1.config);
    const document = new signer_node_client_1.DocumentsApi(scenario_1.config);
    document.apiDocumentsIdGet(response.documentId).then((res) => {
        res.data.flowActions.forEach(element => {
            notification.apiNotificationsFlowActionReminderPost({ flowActionId: element.id, documentId: response.documentId }).then((resp) => console.log("Participante Notified, Status :", resp.status));
        });
    });
});
