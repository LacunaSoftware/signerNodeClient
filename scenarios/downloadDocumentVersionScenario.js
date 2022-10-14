"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const signer_node_client_1 = require("signer-node-client");
const scenario_1 = require("./scenario");
const fs = require("fs");
const documentsApi = new signer_node_client_1.DocumentsApi(scenario_1.config);
(0, scenario_1.CreateDocument)().then((res) => __awaiter(void 0, void 0, void 0, function* () {
    // 1. Get a document Id
    const docId = res.documentId;
    //2. You can get a ticket to a specific version of the document. The ticket is a temporary URL that allows you to download that version.
    const ticketDownload = (yield documentsApi.apiDocumentsIdTicketGet(docId, signer_node_client_1.DocumentTicketType.Original)).data;
    // 3. Get the document by passing it's Id and the Ticket type
    // Be sure to select the exact DocumentTicketType to download the type of document you want.
    // Check the available types by inspecting DocumentTicketType's ENUM.
    const documentVersion = (yield documentsApi.apiDocumentsIdContentGet(docId, signer_node_client_1.DocumentDownloadTypes.Original)).data;
    saveFileStream(documentVersion);
    // 4. You can also get the bytes directly instead of a Stream for a specific version type of the document
    const documentVersionBytes = (yield documentsApi.apiDocumentsIdContentB64Get(docId, signer_node_client_1.DocumentDownloadTypes.Original)).data;
}));
function saveFileStream(stream) {
    fs.writeFileSync("../samples/sample-copy.pdf", stream, {
        encoding: "utf8",
        flag: "w",
    });
}
