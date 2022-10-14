"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signer_node_client_1 = require("signer-node-client");
const scenario_1 = require("./scenario");
const filePath = "../samples/sample.pdf";
const fileName = "sample.pdf";
const uploadApi = new signer_node_client_1.UploadApi(scenario_1.config);
const documentsApi = new signer_node_client_1.DocumentsApi(scenario_1.config);
uploadApi.apiUploadsBytesPost({
    bytes: (0, scenario_1.getBase64)(filePath)
}).then((res) => {
    const fileUploadModel = {
        displayName: "Check Status Sample",
        id: res.data.id,
        contentType: "application/pdf",
        name: fileName
    };
    const participant = {
        name: "Jack Bauer",
        email: "jack.bauer@mailnator.com",
        identifier: "75502846369"
    };
    const flowAction = {
        type: signer_node_client_1.FlowActionType.Signer,
        user: participant
    };
    const paginatedSearchParams = {};
    const files = new Array(fileUploadModel);
    const flowActions = new Array(flowAction);
    const documentRequest = {
        files: files,
        flowActions: flowActions
    };
});
