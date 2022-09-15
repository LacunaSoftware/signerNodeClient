import { Configuration, DocumentsApi, UploadApi, UploadApiFactory, UploadApiFp } from "signer-node-client"
import * as fs from 'fs'

var config: Configuration = { // set your configs here!
    apiKey: "API Sample App|43fc0da834e48b4b840fd6e8c37196cf29f919e5daedba0f1a5ec17406c13a99",
    basePath: "https://signer-lac.azurewebsites.net"
}
var uploadApi = new UploadApi(config)

var filepath = "..\\samples\\sample.pdf"
var base64File = getBase64(filepath)

var file: any = new FormData(null);
file.append("name","sample.pdf")
file.append("file", base64File)
file.append("contentType","application/pdf")

uploadApi.apiUploadsPostForm(file).then((res) => {
    console.log(res.data);
})


// Do upload via POST
// uploadApi.apiUploadsBytesPost({
//     bytes:base64File
// }).then((response) => {
//     console.log(response.data); 
// })

function getBase64(file) {
    var result = fs.readFileSync(file, {encoding: 'base64'});
    return result;
}
