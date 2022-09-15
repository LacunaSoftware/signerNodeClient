"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signer_node_client_1 = require("signer-node-client");
const fs = require("fs");
var config = {
    apiKey: "API Sample App|43fc0da834e48b4b840fd6e8c37196cf29f919e5daedba0f1a5ec17406c13a99",
    basePath: "https://signer-lac.azurewebsites.net"
};
var uploadApi = new signer_node_client_1.UploadApi(config);
var documentApi = new signer_node_client_1.DocumentsApi(config);
var filepath = "..\\samples\\sample.pdf";
var base64File = getBase64(filepath);
// Do upload via POST
uploadApi.apiUploadsBytesPost({
    bytes: base64File
}).then((response) => {
    console.log(response.data);
    var uploadModel = {
        name: "sample.pdf",
        displayName: "Add New Document Version Sample",
        contentType: "application/pdf",
        id: response.data.id
    };
    documentApi.apiDocumentsIdVersionsPost(response.data.id, {
        file: uploadModel
    }).then((res) => {
        console.log(res.data);
    });
});
function getBase64(file) {
    var result = fs.readFileSync(file, { encoding: 'base64' });
    return result;
}
