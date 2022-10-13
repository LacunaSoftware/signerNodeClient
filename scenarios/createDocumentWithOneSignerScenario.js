"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signer_node_client_1 = require("signer-node-client");
const scenario_1 = require("./scenario");
const uploadApi = new signer_node_client_1.UploadApi(scenario_1.config);
const documentsApi = new signer_node_client_1.DocumentsApi(scenario_1.config);
const filepath = '../samples/sample.pdf';
const filename = "sample.pdf";
uploadApi.apiUploadsBytesPost({ bytes: (0, scenario_1.getBase64)(filepath) }).then((res) => {
    const uploadModel = {
        id: res.data.id,
        name: filename,
        contentType: "application/pdf",
        displayName: "One Signer Sample"
    };
    const participant = {
        name: "Jack Bauer",
        email: "jack.bauer@mailinator.com",
        identifier: "75502846369"
    };
    const flowAction = {
        type: signer_node_client_1.FlowActionType.Signer,
        user: participant
    };
    const documentRequest = {
        files: [uploadModel],
        flowActions: [flowAction]
    };
    documentsApi.apiDocumentsPost(documentRequest).then((res) => {
        console.log("Document ", res.data[0].documentId, " created");
    });
});
