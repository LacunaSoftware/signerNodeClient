"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signer_node_client_1 = require("signer-node-client");
const scenario_1 = require("./scenario");
const uploadApi = new signer_node_client_1.UploadApi(scenario_1.config);
const documentsApi = new signer_node_client_1.DocumentsApi(scenario_1.config);
let document = (0, scenario_1.CreateDocument)().then((res) => {
    // 1. Retrieve document id
    let docId = res.documentId;
    // 2. The file's bytes must be read by the application and uploaded
    const filepath = "..\\samples\\sample.pdf";
    const fileName = "sample.pdf";
    const base64File = (0, scenario_1.getBase64)(filepath);
    uploadApi.apiUploadsBytesPost({
        bytes: base64File
    }).then((response) => {
        // 3. Define the name of the document which will be visible in the application
        var fileUploadModel = {
            name: "sample.pdf",
            displayName: "Add New Document Version Sample",
            contentType: "application/pdf",
            id: response.data.id
        };
        // 4. Send the new version request
        let documentAddVersionRequest = {
            file: fileUploadModel
        };
        documentsApi.apiDocumentsIdVersionsPost(docId, documentAddVersionRequest).then((response) => {
            console.log(response.status);
        });
    });
});
