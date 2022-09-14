"use strict";
exports.__esModule = true;
var signer_node_client_1 = require("signer-node-client");
// Create a configuration variable to pass to each API object with desired configs
var config = {
    apiKey: "API Sample App|43fc0da834e48b4b840fd6e8c37196cf29f919e5daedba0f1a5ec17406c13a99",
    basePath: "https://signer-lac.azurewebsites.net"
};
// Create an object of the desired API with previously defined configs
var docApi = new signer_node_client_1.DocumentsApi(config);
docApi.apiDocumentsIdGet("0aabafe7-b491-4277-98a2-0b6b91248c15").then(function (response) {
    console.log(response.data);
});
