import { Configuration, DocumentsApi, FileModel, FileUploadModel, UploadApi, UploadApiFactory, UploadApiFp, DocumentsDocumentAddVersionRequest, DocumentsDocumentFileModel } from "signer-node-client"
import * as fs from 'fs'
import {config, CreateDocument, getBase64} from './scenario'

const uploadApi = new UploadApi(config)
const documentsApi = new DocumentsApi(config)


let document = CreateDocument().then((res) =>{
    // 1. Retrieve document id
    let docId = res.documentId
    
    // 2. The file's bytes must be read by the application and uploaded
    const filepath = "..\\samples\\sample.pdf"
    const fileName = "sample.pdf"
    const base64File = getBase64(filepath)
    
    uploadApi.apiUploadsBytesPost({
        bytes: base64File
    }).then((response) => {
        // 3. Define the name of the document which will be visible in the application
        var fileUploadModel: FileUploadModel = {
            name: "sample.pdf",
            displayName: "Add New Document Version Sample",
            contentType: "application/pdf",
            id: response.data.id
        }
         // 4. Send the new version request
        let documentAddVersionRequest: DocumentsDocumentAddVersionRequest = {
            file: fileUploadModel
        }

        documentsApi.apiDocumentsIdVersionsPost(docId, documentAddVersionRequest).then((response) => {
            console.log(response.status);
        })

    })

    
});

