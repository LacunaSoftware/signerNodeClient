import { Configuration, DocumentsApi, FileModel, FileUploadModel, UploadApi, UploadApiFactory, UploadApiFp } from "signer-node-client"
import * as fs from 'fs'

var config: Configuration = { // set your configs here!
    apiKey: "API Sample App|43fc0da834e48b4b840fd6e8c37196cf29f919e5daedba0f1a5ec17406c13a99",
    basePath: "https://signer-lac.azurewebsites.net"
}
var uploadApi = new UploadApi(config)
var documentApi = new DocumentsApi(config)

var filepath = "..\\samples\\sample.pdf"
var base64File = getBase64(filepath)

// Do upload via POST
uploadApi.apiUploadsBytesPost({
    bytes:base64File
}).then((response) => {
    console.log(response.data); 
    var uploadModel: FileUploadModel = {
        name: "sample.pdf",
        displayName: "Add New Document Version Sample",
        contentType: "application/pdf",
        id: response.data.id
    }
    documentApi.apiDocumentsIdVersionsPost(response.data.id, {
        file: uploadModel
    }).then((res) =>{
        console.log(res.data);
    })

})

function getBase64(file) {
    var result = fs.readFileSync(file, {encoding: 'base64'});
    return result;
}
