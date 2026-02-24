"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Dropsigner
 * <!--------------------------------------------------------------------------------------------------------------------->  <h2>Authentication</h2>  <p>  In order to call this APIs, you will need an <strong>API key</strong>. Set the API key in the header <span class=\"code\">X-Api-Key</span>: </p>  <pre>X-Api-Key: your-app|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</pre>  <!---------------------------------------------------------------------------------------------------------------------> <br />  <h2>HTTP Codes</h2>  <p>  The APIs will return the following HTTP codes: </p>  <table>  <thead>   <tr>    <th>Code</th>    <th>Description</th>   </tr>  </thead>  <tbody>   <tr>    <td><strong class=\"model-title\">200 (OK)</strong></td>    <td>Request processed successfully. The response is different for each API, please refer to the operation\'s documentation</td>   </tr>   <tr>    <td><strong class=\"model-title\">400 (Bad Request)</strong></td>    <td>Syntax error. For instance, when a required field was not provided</td>   </tr>   <tr>    <td><strong class=\"model-title\">401 (Unauthorized)</strong></td>    <td>API key not provided or invalid</td>   </tr>   <tr>    <td><strong class=\"model-title\">403 (Forbidden)</strong></td>    <td>API key is valid, but the application has insufficient permissions to complete the requested operation</td>   </tr>   <tr>    <td><strong class=\"model-title\">422 (Unprocessable Entity)</strong></td>    <td>API error. The response is as defined in <a href=\"#model-ErrorModel\">ErrorModel</a></td>   </tr>  </tbody> </table>  <br />  <h3>Error Codes</h3>  <p>Some of the error codes returned in a 422 response are provided bellow*:</p>  <ul>  <li>CertificateNotFound</li>  <li>DocumentNotFound</li>  <li>FolderNotFound</li>  <li>CpfMismatch</li>  <li>CpfNotExpected</li>  <li>InvalidFlowAction</li>  <li>DocumentInvalidKey</li> </ul>  <p style=\"font-size: 0.9em\">  *The codes shown above are the main error codes. Nonetheless, this list is not comprehensive. New codes may be added anytime without previous warning. </p>  <!--------------------------------------------------------------------------------------------------------------------->  <br />  <h2>Webhooks</h2>  <p>  It is recomended to subscribe to Webhook events <strong>instead</strong> of polling APIs. To do so, enable webhooks and register an URL that will receive a POST request  whenever one of the events bellow occur. </p> <p>  All requests have the format described in <a href=\"#model-Webhooks.WebhookModel\">Webhooks.WebhookModel</a>.  The data field varies according to the webhook event type: </p>   <table>  <thead>   <tr>    <th>Event type</th>    <th>Description</th>    <th>Payload</th>   </tr>  </thead>  <tbody>   <tr>    <td><strong class=\"model-title\">DocumentSigned</strong></td>    <td>Triggered when a document is signed.</td>    <td><a href=\"#model-Webhooks.DocumentSignedModel\">Webhooks.DocumentSignedModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentApproved</strong></td>    <td>Triggered when a document is approved.</td>    <td><a href=\"#model-Webhooks.DocumentApprovedModel\">Webhooks.DocumentApprovedModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentRefused</strong></td>    <td>Triggered when a document is refused.</td>    <td><a href=\"#model-Webhooks.DocumentRefusedModel\">Webhooks.DocumentRefusedModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentConcluded</strong></td>    <td>Triggered when the flow of a document is concluded.</td>    <td><a href=\"#model-Webhooks.DocumentConcludedModel\">Webhooks.DocumentConcludedModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentCanceled</strong></td>    <td>Triggered when the document is canceled.</td>    <td><a href=\"#model-Webhooks.DocumentCanceledModel\">Webhooks.DocumentCanceledModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentExpired (v1.33.0)</strong></td>    <td>Triggered when the document is expired.</td>    <td><a href=\"#model-Webhooks.DocumentExpiredModel\">Webhooks.DocumentExpiredModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentsCreated (v1.50.0)</strong></td>    <td>Triggered when one or more documents are created.</td>    <td><a href=\"#model-Webhooks.DocumentsCreatedModel\">Webhooks.DocumentsCreatedModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentsDeleted (v1.78.0)</strong></td>    <td>Triggered when one or more documents are deleted.</td>    <td><a href=\"#model-Webhooks.DocumentsDeletedModel\">Webhooks.DocumentsDeletedModel</a></td>   </tr>  </tbody> </table>  <p>  To register your application URL and enable Webhooks, access the integrations section in your <a href=\"/private/organizations\" target=\"_blank\">organization\'s details page</a>. </p>
 *
 * The version of the OpenAPI document: 2.6.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsApiFp = exports.NotificationsApiAxiosParamCreator = exports.MarksSessionsApi = exports.MarksSessionsApiFactory = exports.MarksSessionsApiFp = exports.MarksSessionsApiAxiosParamCreator = exports.FoldersApi = exports.FoldersApiFactory = exports.FoldersApiFp = exports.FoldersApiAxiosParamCreator = exports.FlowsApi = exports.FlowsApiFactory = exports.FlowsApiFp = exports.FlowsApiAxiosParamCreator = exports.DocumentsApi = exports.DocumentsApiFactory = exports.DocumentsApiFp = exports.DocumentsApiAxiosParamCreator = exports.XadesSignatureTypes = exports.XadesInsertionOptions = exports.XadesElementIdentifierTypes = exports.WebhooksDocumentsDeletedAction = exports.WebhookTypes = exports.TransactionTypes = exports.TransactionPricingTypes = exports.SignatureTypes = exports.SignatureInitialsModes = exports.Probability = exports.ParticipantQueryTypes = exports.PaginationOrders = exports.OrganizationType = exports.NotificationLanguage = exports.NotaryTypes = exports.NotarizationStatus = exports.FolderType = exports.FlowActionType = exports.DocumentTypes = exports.DocumentTicketType = exports.DocumentStatus = exports.DocumentQueryTypes = exports.DocumentMarkType = exports.DocumentFilterStatus = exports.DocumentDownloadTypes = exports.DeleteAction = exports.CertificateTypes = exports.CertificateHolderTypes = exports.BillingInformationTypes = exports.AuthenticationTypes = exports.AgentTypes = exports.ActionStatus = void 0;
exports.UploadApi = exports.UploadApiFactory = exports.UploadApiFp = exports.UploadApiAxiosParamCreator = exports.OrganizationsApi = exports.OrganizationsApiFactory = exports.OrganizationsApiFp = exports.OrganizationsApiAxiosParamCreator = exports.NotificationsApi = exports.NotificationsApiFactory = void 0;
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var common_1 = require("./common");
// @ts-ignore
var base_1 = require("./base");
/**
 *
 * @export
 * @enum {string}
 */
exports.ActionStatus = {
    Created: 'Created',
    Pending: 'Pending',
    Completed: 'Completed',
    Refused: 'Refused'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.AgentTypes = {
    User: 'User',
    Application: 'Application'
};
/**
 * This enum is used as flags, the order and values matter!
 * @export
 * @enum {string}
 */
exports.AuthenticationTypes = {
    Sms: 'SMS',
    AuthenticatorApp: 'AuthenticatorApp',
    Email: 'Email',
    Login: 'Login',
    Application: 'Application',
    Selfie: 'Selfie',
    Datavalid: 'Datavalid',
    Pix: 'Pix',
    AccessCode: 'AccessCode',
    Whatsapp: 'Whatsapp',
    Liveness: 'Liveness',
    IdScan: 'IdScan'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.BillingInformationTypes = {
    Individual: 'Individual',
    Company: 'Company'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.CertificateHolderTypes = {
    Individual: 'Individual',
    Company: 'Company'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.CertificateTypes = {
    A1: 'A1',
    A2: 'A2',
    A3: 'A3',
    A4: 'A4',
    S1: 'S1',
    S2: 'S2',
    S3: 'S3',
    S4: 'S4',
    T3: 'T3',
    T4: 'T4'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.DeleteAction = {
    MoveContent: 'MoveContent',
    DeleteContent: 'DeleteContent'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.DocumentDownloadTypes = {
    Original: 'Original',
    PrinterFriendlyVersion: 'PrinterFriendlyVersion',
    Signatures: 'Signatures',
    OriginalWithMarks: 'OriginalWithMarks',
    SigningTags: 'SigningTags',
    SignatureMarks: 'SignatureMarks',
    SignaturesManifest: 'SignaturesManifest'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.DocumentFilterStatus = {
    PendingOrRefused: 'PendingOrRefused',
    Concluded: 'Concluded',
    CanceledOrExpired: 'CanceledOrExpired',
    Pending: 'Pending',
    Refused: 'Refused',
    Canceled: 'Canceled',
    Expired: 'Expired'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.DocumentMarkType = {
    SignatureVisualRepresentation: 'SignatureVisualRepresentation',
    SignatureInitials: 'SignatureInitials',
    AuthenticationStamp: 'AuthenticationStamp'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.DocumentQueryTypes = {
    Name: 'Name',
    Key: 'Key',
    Id: 'Id',
    CreatorName: 'CreatorName',
    Tag: 'Tag'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.DocumentStatus = {
    Pending: 'Pending',
    Refused: 'Refused',
    FlowConcluded: 'FlowConcluded',
    Concluded: 'Concluded',
    Canceled: 'Canceled',
    Expired: 'Expired'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.DocumentTicketType = {
    Original: 'Original',
    PrinterFriendlyVersion: 'PrinterFriendlyVersion',
    Signatures: 'Signatures',
    OriginalWithMarks: 'OriginalWithMarks',
    SigningTags: 'SigningTags',
    SignatureMarks: 'SignatureMarks',
    SignaturesManifest: 'SignaturesManifest'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.DocumentTypes = {
    Deed: 'Deed',
    PowerOfAttorney: 'PowerOfAttorney',
    Prescription: 'Prescription',
    MedicalCertificate: 'MedicalCertificate',
    ExamRequest: 'ExamRequest',
    LabReport: 'LabReport',
    DischargeSummary: 'DischargeSummary',
    ClinicalRecord: 'ClinicalRecord',
    DrugDispensing: 'DrugDispensing',
    Vaccination: 'Vaccination',
    MedicalReport: 'MedicalReport'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.FlowActionType = {
    Signer: 'Signer',
    Approver: 'Approver',
    SignRule: 'SignRule',
    ApproverRule: 'ApproverRule'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.FolderType = {
    Normal: 'Normal',
    WithoutFolder: 'WithoutFolder'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.NotarizationStatus = {
    Pending: 'Pending',
    Notarized: 'Notarized',
    Rejected: 'Rejected'
};
/**
 * <p>Members:</p><ul>  <li><b>Test</b>: Notary configuration that doesn\'t require a specific PKI</li>  </ul>
 * @export
 * @enum {string}
 */
exports.NotaryTypes = {
    Test: 'Test',
    Cnb: 'CNB',
    Cori: 'CORI',
    Onr: 'ONR'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.NotificationLanguage = {
    Pt: 'Pt',
    Es: 'Es',
    En: 'En'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.OrganizationType = {
    Normal: 'Normal',
    Personal: 'Personal',
    SharedWithMe: 'SharedWithMe'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.PaginationOrders = {
    Asc: 'Asc',
    Desc: 'Desc'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.ParticipantQueryTypes = {
    Name: 'Name',
    Identifier: 'Identifier',
    Email: 'Email',
    Phone: 'Phone'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.Probability = {
    VeryLow: 'VeryLow',
    Low: 'Low',
    High: 'High',
    VeryHigh: 'VeryHigh'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.SignatureInitialsModes = {
    None: 'None',
    Optional: 'Optional',
    Required: 'Required'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.SignatureTypes = {
    None: 'None',
    Simple: 'Simple',
    Advanced: 'Advanced',
    Qualified: 'Qualified'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.TransactionPricingTypes = {
    NoCharge: 'NoCharge',
    Simple: 'Simple',
    Range: 'Range'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.TransactionTypes = {
    Document: 'Document',
    Signature: 'Signature',
    ElectronicSignature: 'ElectronicSignature',
    Approval: 'Approval',
    Notarization: 'Notarization',
    Timestamper: 'Timestamper',
    Sms: 'Sms',
    Whatsapp: 'Whatsapp',
    Datavalid: 'Datavalid',
    PixAuthentication: 'PixAuthentication',
    Envelope: 'Envelope',
    Liveness: 'Liveness',
    IdScan: 'IdScan',
    IdScanSelfie: 'IdScanSelfie'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.WebhookTypes = {
    DocumentConcluded: 'DocumentConcluded',
    InvoiceClosed: 'InvoiceClosed',
    DocumentRefused: 'DocumentRefused',
    DocumentApproved: 'DocumentApproved',
    DocumentSigned: 'DocumentSigned',
    DocumentCanceled: 'DocumentCanceled',
    DocumentExpired: 'DocumentExpired',
    DocumentsCreated: 'DocumentsCreated',
    DocumentDeleted: 'DocumentDeleted'
};
/**
 * <p>Members:</p><ul>  <li><b>DeletedByOrganization</b>: Documents were deleted as part of an organization wide deletion process. The DocumentDeletedModel.Documents list is limited to 100 documents.</li>  <li><b>DeletedByFolder</b>: Documents were deleted due to the deletion of a folder that contained them. The DocumentDeletedModel.Documents list is limited to 100 documents.</li>  <li><b>DeletedByUserOrApplication</b>: Documents were deleted by a user or application.</li>  </ul>
 * @export
 * @enum {string}
 */
exports.WebhooksDocumentsDeletedAction = {
    DeletedByOrganization: 'DeletedByOrganization',
    DeletedByFolder: 'DeletedByFolder',
    DeletedByUserOrApplication: 'DeletedByUserOrApplication'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.XadesElementIdentifierTypes = {
    Id: 'Id',
    XPath: 'XPath'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.XadesInsertionOptions = {
    AppendChild: 'AppendChild',
    PrependChild: 'PrependChild',
    AppendSibling: 'AppendSibling',
    PrependSibling: 'PrependSibling'
};
/**
 *
 * @export
 * @enum {string}
 */
exports.XadesSignatureTypes = {
    FullXml: 'FullXml',
    XmlElement: 'XmlElement',
    FullXmlAdRc: 'FullXmlAdRc'
};
/**
 * DocumentsApi - axios parameter creator
 * @export
 */
var DocumentsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         *
         * @summary Moves a batch of documents to a folder.
         * @param {DocumentsMoveDocumentBatchRequest} [documentsMoveDocumentBatchRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsBatchFolderPost: function (documentsMoveDocumentBatchRequest_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([documentsMoveDocumentBatchRequest_1], args_1, true), void 0, function (documentsMoveDocumentBatchRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/documents/batch/folder";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentsMoveDocumentBatchRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * You may filter the documents by folder and document type.
         * @summary Retrieves the documents of the organization paginating the response.
         * @param {boolean} [isConcluded] (DEPRECATED) Please use \&quot;Status\&quot; parameter instead. Set to true to list concluded documents, false to list pending documents.
         * @param {DocumentFilterStatus} [status] Filters by document status. Will override the \&quot;IsConcluded\&quot; property.
         * @param {string} [folderId]
         * @param {FolderType} [folderType]
         * @param {DocumentTypes} [documentType]
         * @param {boolean} [filterByDocumentType] True if the documents should be filtered by type, use documentType to specify the document type.  If you want to filter only documents without a type, set this parameter to true and the documentType to null.
         * @param {boolean} [filterByPendingSignature] True if documents should be filtered only for those that have FlowAction of the type Signer or SignRule
         * @param {DocumentQueryTypes} [queryType]
         * @param {string} [participantQ] Query to filter by participant
         * @param {ParticipantQueryTypes} [participantQueryType]
         * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.  To search by tag value only, do not use the \&quot;|\&quot;.
         * @param {boolean} [isDeleted] Returns deleted documents that had the specified document status when deleted.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsGet: function (isConcluded_1, status_1, folderId_1, folderType_1, documentType_1, filterByDocumentType_1, filterByPendingSignature_1, queryType_1, participantQ_1, participantQueryType_1, tags_1, isDeleted_1, q_1, limit_1, offset_1, order_1) {
            var args_1 = [];
            for (var _i = 16; _i < arguments.length; _i++) {
                args_1[_i - 16] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([isConcluded_1, status_1, folderId_1, folderType_1, documentType_1, filterByDocumentType_1, filterByPendingSignature_1, queryType_1, participantQ_1, participantQueryType_1, tags_1, isDeleted_1, q_1, limit_1, offset_1, order_1], args_1, true), void 0, function (isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, isDeleted, q, limit, offset, order, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/documents";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            if (isConcluded !== undefined) {
                                localVarQueryParameter['IsConcluded'] = isConcluded;
                            }
                            if (status !== undefined) {
                                localVarQueryParameter['Status'] = status;
                            }
                            if (folderId !== undefined) {
                                localVarQueryParameter['FolderId'] = folderId;
                            }
                            if (folderType !== undefined) {
                                localVarQueryParameter['FolderType'] = folderType;
                            }
                            if (documentType !== undefined) {
                                localVarQueryParameter['DocumentType'] = documentType;
                            }
                            if (filterByDocumentType !== undefined) {
                                localVarQueryParameter['FilterByDocumentType'] = filterByDocumentType;
                            }
                            if (filterByPendingSignature !== undefined) {
                                localVarQueryParameter['FilterByPendingSignature'] = filterByPendingSignature;
                            }
                            if (queryType !== undefined) {
                                localVarQueryParameter['QueryType'] = queryType;
                            }
                            if (participantQ !== undefined) {
                                localVarQueryParameter['ParticipantQ'] = participantQ;
                            }
                            if (participantQueryType !== undefined) {
                                localVarQueryParameter['ParticipantQueryType'] = participantQueryType;
                            }
                            if (tags !== undefined) {
                                localVarQueryParameter['Tags'] = tags;
                            }
                            if (isDeleted !== undefined) {
                                localVarQueryParameter['IsDeleted'] = isDeleted;
                            }
                            if (q !== undefined) {
                                localVarQueryParameter['Q'] = q;
                            }
                            if (limit !== undefined) {
                                localVarQueryParameter['Limit'] = limit;
                            }
                            if (offset !== undefined) {
                                localVarQueryParameter['Offset'] = offset;
                            }
                            if (order !== undefined) {
                                localVarQueryParameter['Order'] = order;
                            }
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.      If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.      After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).      Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.
         * @summary Retrieves an URL to redirect the user to the first pending action of the document.
         * @param {string} id Document Id
         * @param {DocumentsActionUrlRequest} [documentsActionUrlRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdActionUrlPost: function (id_1, documentsActionUrlRequest_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, documentsActionUrlRequest_1], args_1, true), void 0, function (id, documentsActionUrlRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdActionUrlPost', 'id', id);
                            localVarPath = "/api/documents/{id}/action-url"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentsActionUrlRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * <b>CAUTION: This action cannot be reverted.</b>
         * @summary Cancels the document by providing a reason for the cancellation.
         * @param {string} id
         * @param {DocumentsCancelDocumentRequest} [documentsCancelDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdCancellationPost: function (id_1, documentsCancelDocumentRequest_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, documentsCancelDocumentRequest_1], args_1, true), void 0, function (id, documentsCancelDocumentRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdCancellationPost', 'id', id);
                            localVarPath = "/api/documents/{id}/cancellation"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentsCancelDocumentRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Downloads a specific version type of the document encoding the bytes in Base 64 format.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentB64Get: function (id_1, type_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, type_1], args_1, true), void 0, function (id, type, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdContentB64Get', 'id', id);
                            localVarPath = "/api/documents/{id}/content-b64"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            if (type !== undefined) {
                                localVarQueryParameter['type'] = type;
                            }
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Downloads a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentGet: function (id_1, type_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, type_1], args_1, true), void 0, function (id, type, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdContentGet', 'id', id);
                            localVarPath = "/api/documents/{id}/content"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            if (type !== undefined) {
                                localVarQueryParameter['type'] = type;
                            }
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Deletes a specific document using it\'s id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdDelete: function (id_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1], args_1, true), void 0, function (id, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdDelete', 'id', id);
                            localVarPath = "/api/documents/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'DELETE' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * The flow of the document will be restarted.
         * @summary Adds a new version for an envelope.
         * @param {string} id
         * @param {DocumentsEnvelopeAddVersionRequest} [documentsEnvelopeAddVersionRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdEnvelopeVersionsPost: function (id_1, documentsEnvelopeAddVersionRequest_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, documentsEnvelopeAddVersionRequest_1], args_1, true), void 0, function (id, documentsEnvelopeAddVersionRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdEnvelopeVersionsPost', 'id', id);
                            localVarPath = "/api/documents/{id}/envelope/versions"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentsEnvelopeAddVersionRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Updates the document\'s flow.
         * @param {string} id Id of the document
         * @param {DocumentsDocumentFlowEditRequest} [documentsDocumentFlowEditRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFlowPost: function (id_1, documentsDocumentFlowEditRequest_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, documentsDocumentFlowEditRequest_1], args_1, true), void 0, function (id, documentsDocumentFlowEditRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdFlowPost', 'id', id);
                            localVarPath = "/api/documents/{id}/flow"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentsDocumentFlowEditRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Moves a document to a folder.
         * @param {string} id
         * @param {DocumentsMoveDocumentRequest} [documentsMoveDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFolderPost: function (id_1, documentsMoveDocumentRequest_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, documentsMoveDocumentRequest_1], args_1, true), void 0, function (id, documentsMoveDocumentRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdFolderPost', 'id', id);
                            localVarPath = "/api/documents/{id}/folder"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentsMoveDocumentRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Retrieves the document\'s details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdGet: function (id_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1], args_1, true), void 0, function (id, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdGet', 'id', id);
                            localVarPath = "/api/documents/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * The notified emails are the ones that will be notified after the document is concluded.
         * @summary Updates the document\'s notified emails
         * @param {string} id Id of the document
         * @param {DocumentsDocumentNotifiedEmailsEditRequest} [documentsDocumentNotifiedEmailsEditRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdNotifiedEmailsPut: function (id_1, documentsDocumentNotifiedEmailsEditRequest_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, documentsDocumentNotifiedEmailsEditRequest_1], args_1, true), void 0, function (id, documentsDocumentNotifiedEmailsEditRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdNotifiedEmailsPut', 'id', id);
                            localVarPath = "/api/documents/{id}/notified-emails"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'PUT' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentsDocumentNotifiedEmailsEditRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * The document\'s flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
         * @summary Refuses a document by providing a reason for the refusal.
         * @param {string} id
         * @param {RefusalRefusalRequest} [refusalRefusalRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdRefusalPost: function (id_1, refusalRefusalRequest_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, refusalRefusalRequest_1], args_1, true), void 0, function (id, refusalRefusalRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdRefusalPost', 'id', id);
                            localVarPath = "/api/documents/{id}/refusal"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(refusalRefusalRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document\'s signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdSignaturesDetailsGet: function (id_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1], args_1, true), void 0, function (id, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdSignaturesDetailsGet', 'id', id);
                            localVarPath = "/api/documents/{id}/signatures-details"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * The URL does not require authentication and will be available for 1 hour.    <ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
         * @summary Generates a URL (ticket) to download a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentTicketType} [type] The version type to download
         * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdTicketGet: function (id_1, type_1, preview_1) {
            var args_1 = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args_1[_i - 3] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, type_1, preview_1], args_1, true), void 0, function (id, type, preview, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdTicketGet', 'id', id);
                            localVarPath = "/api/documents/{id}/ticket"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            if (type !== undefined) {
                                localVarQueryParameter['type'] = type;
                            }
                            if (preview !== undefined) {
                                localVarQueryParameter['preview'] = preview;
                            }
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * The flow of the document will be restarted.       If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
         * @summary Adds a new version for the document.
         * @param {string} id
         * @param {DocumentsDocumentAddVersionRequest} [documentsDocumentAddVersionRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdVersionsPost: function (id_1, documentsDocumentAddVersionRequest_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, documentsDocumentAddVersionRequest_1], args_1, true), void 0, function (id, documentsDocumentAddVersionRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsIdVersionsPost', 'id', id);
                            localVarPath = "/api/documents/{id}/versions"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentsDocumentAddVersionRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Validates each signature in a document using the verification code
         * @param {string} key The verification code presented in the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsKeysKeySignaturesGet: function (key_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([key_1], args_1, true), void 0, function (key, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'key' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentsKeysKeySignaturesGet', 'key', key);
                            localVarPath = "/api/documents/keys/{key}/signatures"
                                .replace("{".concat("key", "}"), encodeURIComponent(String(key)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.       When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.      Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsPost: function (documentsCreateDocumentRequest_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([documentsCreateDocumentRequest_1], args_1, true), void 0, function (documentsCreateDocumentRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/documents";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentsCreateDocumentRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [signatureSignaturesInfoRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsValidateSignaturesPost: function (signatureSignaturesInfoRequest_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([signatureSignaturesInfoRequest_1], args_1, true), void 0, function (signatureSignaturesInfoRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/documents/validate-signatures";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(signatureSignaturesInfoRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
exports.DocumentsApiAxiosParamCreator = DocumentsApiAxiosParamCreator;
/**
 * DocumentsApi - functional programming interface
 * @export
 */
var DocumentsApiFp = function (configuration) {
    var localVarAxiosParamCreator = (0, exports.DocumentsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Moves a batch of documents to a folder.
         * @param {DocumentsMoveDocumentBatchRequest} [documentsMoveDocumentBatchRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsBatchFolderPost: function (documentsMoveDocumentBatchRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsBatchFolderPost(documentsMoveDocumentBatchRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * You may filter the documents by folder and document type.
         * @summary Retrieves the documents of the organization paginating the response.
         * @param {boolean} [isConcluded] (DEPRECATED) Please use \&quot;Status\&quot; parameter instead. Set to true to list concluded documents, false to list pending documents.
         * @param {DocumentFilterStatus} [status] Filters by document status. Will override the \&quot;IsConcluded\&quot; property.
         * @param {string} [folderId]
         * @param {FolderType} [folderType]
         * @param {DocumentTypes} [documentType]
         * @param {boolean} [filterByDocumentType] True if the documents should be filtered by type, use documentType to specify the document type.  If you want to filter only documents without a type, set this parameter to true and the documentType to null.
         * @param {boolean} [filterByPendingSignature] True if documents should be filtered only for those that have FlowAction of the type Signer or SignRule
         * @param {DocumentQueryTypes} [queryType]
         * @param {string} [participantQ] Query to filter by participant
         * @param {ParticipantQueryTypes} [participantQueryType]
         * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.  To search by tag value only, do not use the \&quot;|\&quot;.
         * @param {boolean} [isDeleted] Returns deleted documents that had the specified document status when deleted.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsGet: function (isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, isDeleted, q, limit, offset, order, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, isDeleted, q, limit, offset, order, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.      If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.      After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).      Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.
         * @summary Retrieves an URL to redirect the user to the first pending action of the document.
         * @param {string} id Document Id
         * @param {DocumentsActionUrlRequest} [documentsActionUrlRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdActionUrlPost: function (id, documentsActionUrlRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdActionUrlPost(id, documentsActionUrlRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * <b>CAUTION: This action cannot be reverted.</b>
         * @summary Cancels the document by providing a reason for the cancellation.
         * @param {string} id
         * @param {DocumentsCancelDocumentRequest} [documentsCancelDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdCancellationPost: function (id, documentsCancelDocumentRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdCancellationPost(id, documentsCancelDocumentRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Downloads a specific version type of the document encoding the bytes in Base 64 format.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentB64Get: function (id, type, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdContentB64Get(id, type, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Downloads a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentGet: function (id, type, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdContentGet(id, type, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Deletes a specific document using it\'s id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdDelete: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdDelete(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * The flow of the document will be restarted.
         * @summary Adds a new version for an envelope.
         * @param {string} id
         * @param {DocumentsEnvelopeAddVersionRequest} [documentsEnvelopeAddVersionRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdEnvelopeVersionsPost: function (id, documentsEnvelopeAddVersionRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdEnvelopeVersionsPost(id, documentsEnvelopeAddVersionRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Updates the document\'s flow.
         * @param {string} id Id of the document
         * @param {DocumentsDocumentFlowEditRequest} [documentsDocumentFlowEditRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFlowPost: function (id, documentsDocumentFlowEditRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdFlowPost(id, documentsDocumentFlowEditRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Moves a document to a folder.
         * @param {string} id
         * @param {DocumentsMoveDocumentRequest} [documentsMoveDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFolderPost: function (id, documentsMoveDocumentRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdFolderPost(id, documentsMoveDocumentRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Retrieves the document\'s details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdGet: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdGet(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * The notified emails are the ones that will be notified after the document is concluded.
         * @summary Updates the document\'s notified emails
         * @param {string} id Id of the document
         * @param {DocumentsDocumentNotifiedEmailsEditRequest} [documentsDocumentNotifiedEmailsEditRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdNotifiedEmailsPut: function (id, documentsDocumentNotifiedEmailsEditRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdNotifiedEmailsPut(id, documentsDocumentNotifiedEmailsEditRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * The document\'s flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
         * @summary Refuses a document by providing a reason for the refusal.
         * @param {string} id
         * @param {RefusalRefusalRequest} [refusalRefusalRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdRefusalPost: function (id, refusalRefusalRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdRefusalPost(id, refusalRefusalRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document\'s signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdSignaturesDetailsGet: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdSignaturesDetailsGet(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * The URL does not require authentication and will be available for 1 hour.    <ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
         * @summary Generates a URL (ticket) to download a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentTicketType} [type] The version type to download
         * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdTicketGet: function (id, type, preview, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdTicketGet(id, type, preview, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * The flow of the document will be restarted.       If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
         * @summary Adds a new version for the document.
         * @param {string} id
         * @param {DocumentsDocumentAddVersionRequest} [documentsDocumentAddVersionRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdVersionsPost: function (id, documentsDocumentAddVersionRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsIdVersionsPost(id, documentsDocumentAddVersionRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Validates each signature in a document using the verification code
         * @param {string} key The verification code presented in the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsKeysKeySignaturesGet: function (key, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsKeysKeySignaturesGet(key, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.       When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.      Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsPost: function (documentsCreateDocumentRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsPost(documentsCreateDocumentRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [signatureSignaturesInfoRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsValidateSignaturesPost: function (signatureSignaturesInfoRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentsValidateSignaturesPost(signatureSignaturesInfoRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
    };
};
exports.DocumentsApiFp = DocumentsApiFp;
/**
 * DocumentsApi - factory interface
 * @export
 */
var DocumentsApiFactory = function (configuration, basePath, axios) {
    var localVarFp = (0, exports.DocumentsApiFp)(configuration);
    return {
        /**
         *
         * @summary Moves a batch of documents to a folder.
         * @param {DocumentsMoveDocumentBatchRequest} [documentsMoveDocumentBatchRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsBatchFolderPost: function (documentsMoveDocumentBatchRequest, options) {
            return localVarFp.apiDocumentsBatchFolderPost(documentsMoveDocumentBatchRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * You may filter the documents by folder and document type.
         * @summary Retrieves the documents of the organization paginating the response.
         * @param {boolean} [isConcluded] (DEPRECATED) Please use \&quot;Status\&quot; parameter instead. Set to true to list concluded documents, false to list pending documents.
         * @param {DocumentFilterStatus} [status] Filters by document status. Will override the \&quot;IsConcluded\&quot; property.
         * @param {string} [folderId]
         * @param {FolderType} [folderType]
         * @param {DocumentTypes} [documentType]
         * @param {boolean} [filterByDocumentType] True if the documents should be filtered by type, use documentType to specify the document type.  If you want to filter only documents without a type, set this parameter to true and the documentType to null.
         * @param {boolean} [filterByPendingSignature] True if documents should be filtered only for those that have FlowAction of the type Signer or SignRule
         * @param {DocumentQueryTypes} [queryType]
         * @param {string} [participantQ] Query to filter by participant
         * @param {ParticipantQueryTypes} [participantQueryType]
         * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.  To search by tag value only, do not use the \&quot;|\&quot;.
         * @param {boolean} [isDeleted] Returns deleted documents that had the specified document status when deleted.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsGet: function (isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, isDeleted, q, limit, offset, order, options) {
            return localVarFp.apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, isDeleted, q, limit, offset, order, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.      If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.      After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).      Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.
         * @summary Retrieves an URL to redirect the user to the first pending action of the document.
         * @param {string} id Document Id
         * @param {DocumentsActionUrlRequest} [documentsActionUrlRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdActionUrlPost: function (id, documentsActionUrlRequest, options) {
            return localVarFp.apiDocumentsIdActionUrlPost(id, documentsActionUrlRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * <b>CAUTION: This action cannot be reverted.</b>
         * @summary Cancels the document by providing a reason for the cancellation.
         * @param {string} id
         * @param {DocumentsCancelDocumentRequest} [documentsCancelDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdCancellationPost: function (id, documentsCancelDocumentRequest, options) {
            return localVarFp.apiDocumentsIdCancellationPost(id, documentsCancelDocumentRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Downloads a specific version type of the document encoding the bytes in Base 64 format.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentB64Get: function (id, type, options) {
            return localVarFp.apiDocumentsIdContentB64Get(id, type, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Downloads a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentGet: function (id, type, options) {
            return localVarFp.apiDocumentsIdContentGet(id, type, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Deletes a specific document using it\'s id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdDelete: function (id, options) {
            return localVarFp.apiDocumentsIdDelete(id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * The flow of the document will be restarted.
         * @summary Adds a new version for an envelope.
         * @param {string} id
         * @param {DocumentsEnvelopeAddVersionRequest} [documentsEnvelopeAddVersionRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdEnvelopeVersionsPost: function (id, documentsEnvelopeAddVersionRequest, options) {
            return localVarFp.apiDocumentsIdEnvelopeVersionsPost(id, documentsEnvelopeAddVersionRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Updates the document\'s flow.
         * @param {string} id Id of the document
         * @param {DocumentsDocumentFlowEditRequest} [documentsDocumentFlowEditRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFlowPost: function (id, documentsDocumentFlowEditRequest, options) {
            return localVarFp.apiDocumentsIdFlowPost(id, documentsDocumentFlowEditRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Moves a document to a folder.
         * @param {string} id
         * @param {DocumentsMoveDocumentRequest} [documentsMoveDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFolderPost: function (id, documentsMoveDocumentRequest, options) {
            return localVarFp.apiDocumentsIdFolderPost(id, documentsMoveDocumentRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Retrieves the document\'s details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdGet: function (id, options) {
            return localVarFp.apiDocumentsIdGet(id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * The notified emails are the ones that will be notified after the document is concluded.
         * @summary Updates the document\'s notified emails
         * @param {string} id Id of the document
         * @param {DocumentsDocumentNotifiedEmailsEditRequest} [documentsDocumentNotifiedEmailsEditRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdNotifiedEmailsPut: function (id, documentsDocumentNotifiedEmailsEditRequest, options) {
            return localVarFp.apiDocumentsIdNotifiedEmailsPut(id, documentsDocumentNotifiedEmailsEditRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * The document\'s flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
         * @summary Refuses a document by providing a reason for the refusal.
         * @param {string} id
         * @param {RefusalRefusalRequest} [refusalRefusalRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdRefusalPost: function (id, refusalRefusalRequest, options) {
            return localVarFp.apiDocumentsIdRefusalPost(id, refusalRefusalRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document\'s signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdSignaturesDetailsGet: function (id, options) {
            return localVarFp.apiDocumentsIdSignaturesDetailsGet(id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * The URL does not require authentication and will be available for 1 hour.    <ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
         * @summary Generates a URL (ticket) to download a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentTicketType} [type] The version type to download
         * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdTicketGet: function (id, type, preview, options) {
            return localVarFp.apiDocumentsIdTicketGet(id, type, preview, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * The flow of the document will be restarted.       If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
         * @summary Adds a new version for the document.
         * @param {string} id
         * @param {DocumentsDocumentAddVersionRequest} [documentsDocumentAddVersionRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdVersionsPost: function (id, documentsDocumentAddVersionRequest, options) {
            return localVarFp.apiDocumentsIdVersionsPost(id, documentsDocumentAddVersionRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Validates each signature in a document using the verification code
         * @param {string} key The verification code presented in the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsKeysKeySignaturesGet: function (key, options) {
            return localVarFp.apiDocumentsKeysKeySignaturesGet(key, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.       When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.      Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsPost: function (documentsCreateDocumentRequest, options) {
            return localVarFp.apiDocumentsPost(documentsCreateDocumentRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [signatureSignaturesInfoRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsValidateSignaturesPost: function (signatureSignaturesInfoRequest, options) {
            return localVarFp.apiDocumentsValidateSignaturesPost(signatureSignaturesInfoRequest, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
exports.DocumentsApiFactory = DocumentsApiFactory;
/**
 * DocumentsApi - object-oriented interface
 * @export
 * @class DocumentsApi
 * @extends {BaseAPI}
 */
var DocumentsApi = /** @class */ (function (_super) {
    __extends(DocumentsApi, _super);
    function DocumentsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @summary Moves a batch of documents to a folder.
     * @param {DocumentsMoveDocumentBatchRequest} [documentsMoveDocumentBatchRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsBatchFolderPost = function (documentsMoveDocumentBatchRequest, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsBatchFolderPost(documentsMoveDocumentBatchRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * You may filter the documents by folder and document type.
     * @summary Retrieves the documents of the organization paginating the response.
     * @param {boolean} [isConcluded] (DEPRECATED) Please use \&quot;Status\&quot; parameter instead. Set to true to list concluded documents, false to list pending documents.
     * @param {DocumentFilterStatus} [status] Filters by document status. Will override the \&quot;IsConcluded\&quot; property.
     * @param {string} [folderId]
     * @param {FolderType} [folderType]
     * @param {DocumentTypes} [documentType]
     * @param {boolean} [filterByDocumentType] True if the documents should be filtered by type, use documentType to specify the document type.  If you want to filter only documents without a type, set this parameter to true and the documentType to null.
     * @param {boolean} [filterByPendingSignature] True if documents should be filtered only for those that have FlowAction of the type Signer or SignRule
     * @param {DocumentQueryTypes} [queryType]
     * @param {string} [participantQ] Query to filter by participant
     * @param {ParticipantQueryTypes} [participantQueryType]
     * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.  To search by tag value only, do not use the \&quot;|\&quot;.
     * @param {boolean} [isDeleted] Returns deleted documents that had the specified document status when deleted.
     * @param {string} [q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsGet = function (isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, isDeleted, q, limit, offset, order, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, isDeleted, q, limit, offset, order, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.      If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.      After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).      Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.
     * @summary Retrieves an URL to redirect the user to the first pending action of the document.
     * @param {string} id Document Id
     * @param {DocumentsActionUrlRequest} [documentsActionUrlRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdActionUrlPost = function (id, documentsActionUrlRequest, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdActionUrlPost(id, documentsActionUrlRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * <b>CAUTION: This action cannot be reverted.</b>
     * @summary Cancels the document by providing a reason for the cancellation.
     * @param {string} id
     * @param {DocumentsCancelDocumentRequest} [documentsCancelDocumentRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdCancellationPost = function (id, documentsCancelDocumentRequest, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdCancellationPost(id, documentsCancelDocumentRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Downloads a specific version type of the document encoding the bytes in Base 64 format.
     * @param {string} id Document id
     * @param {DocumentDownloadTypes} [type] The version type to download
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdContentB64Get = function (id, type, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdContentB64Get(id, type, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Downloads a specific version type of the document.
     * @param {string} id Document id
     * @param {DocumentDownloadTypes} [type] The version type to download
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdContentGet = function (id, type, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdContentGet(id, type, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Deletes a specific document using it\'s id.
     * @param {string} id Document id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdDelete = function (id, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdDelete(id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * The flow of the document will be restarted.
     * @summary Adds a new version for an envelope.
     * @param {string} id
     * @param {DocumentsEnvelopeAddVersionRequest} [documentsEnvelopeAddVersionRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdEnvelopeVersionsPost = function (id, documentsEnvelopeAddVersionRequest, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdEnvelopeVersionsPost(id, documentsEnvelopeAddVersionRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Updates the document\'s flow.
     * @param {string} id Id of the document
     * @param {DocumentsDocumentFlowEditRequest} [documentsDocumentFlowEditRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdFlowPost = function (id, documentsDocumentFlowEditRequest, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdFlowPost(id, documentsDocumentFlowEditRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Moves a document to a folder.
     * @param {string} id
     * @param {DocumentsMoveDocumentRequest} [documentsMoveDocumentRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdFolderPost = function (id, documentsMoveDocumentRequest, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdFolderPost(id, documentsMoveDocumentRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Retrieves the document\'s details.
     * @param {string} id Document id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdGet = function (id, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdGet(id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * The notified emails are the ones that will be notified after the document is concluded.
     * @summary Updates the document\'s notified emails
     * @param {string} id Id of the document
     * @param {DocumentsDocumentNotifiedEmailsEditRequest} [documentsDocumentNotifiedEmailsEditRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdNotifiedEmailsPut = function (id, documentsDocumentNotifiedEmailsEditRequest, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdNotifiedEmailsPut(id, documentsDocumentNotifiedEmailsEditRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * The document\'s flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
     * @summary Refuses a document by providing a reason for the refusal.
     * @param {string} id
     * @param {RefusalRefusalRequest} [refusalRefusalRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdRefusalPost = function (id, refusalRefusalRequest, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdRefusalPost(id, refusalRefusalRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * This will perform the same validations as verifying the document signatures using the verification code.
     * @summary Retrieves the details of the document\'s signatures.
     * @param {string} id The Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdSignaturesDetailsGet = function (id, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdSignaturesDetailsGet(id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * The URL does not require authentication and will be available for 1 hour.    <ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
     * @summary Generates a URL (ticket) to download a specific version type of the document.
     * @param {string} id Document id
     * @param {DocumentTicketType} [type] The version type to download
     * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdTicketGet = function (id, type, preview, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdTicketGet(id, type, preview, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * The flow of the document will be restarted.       If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
     * @summary Adds a new version for the document.
     * @param {string} id
     * @param {DocumentsDocumentAddVersionRequest} [documentsDocumentAddVersionRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdVersionsPost = function (id, documentsDocumentAddVersionRequest, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdVersionsPost(id, documentsDocumentAddVersionRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Validates each signature in a document using the verification code
     * @param {string} key The verification code presented in the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsKeysKeySignaturesGet = function (key, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsKeysKeySignaturesGet(key, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.       When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.      Returns a list of ids of each document created.
     * @summary Creates one or multiple documents.
     * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsPost = function (documentsCreateDocumentRequest, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsPost(documentsCreateDocumentRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
     * @summary Validates each signature in the uploaded document
     * @param {SignatureSignaturesInfoRequest} [signatureSignaturesInfoRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsValidateSignaturesPost = function (signatureSignaturesInfoRequest, options) {
        var _this = this;
        return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsValidateSignaturesPost(signatureSignaturesInfoRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return DocumentsApi;
}(base_1.BaseAPI));
exports.DocumentsApi = DocumentsApi;
/**
 * FlowsApi - axios parameter creator
 * @export
 */
var FlowsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         *
         * @summary List created flows.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsGet: function (q_1, limit_1, offset_1, order_1) {
            var args_1 = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                args_1[_i - 4] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([q_1, limit_1, offset_1, order_1], args_1, true), void 0, function (q, limit, offset, order, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/document-flows";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            if (q !== undefined) {
                                localVarQueryParameter['Q'] = q;
                            }
                            if (limit !== undefined) {
                                localVarQueryParameter['Limit'] = limit;
                            }
                            if (offset !== undefined) {
                                localVarQueryParameter['Offset'] = offset;
                            }
                            if (order !== undefined) {
                                localVarQueryParameter['Order'] = order;
                            }
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Deletes a flow.
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdDelete: function (id_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1], args_1, true), void 0, function (id, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentFlowsIdDelete', 'id', id);
                            localVarPath = "/api/document-flows/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'DELETE' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Retrieves flow details
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdGet: function (id_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1], args_1, true), void 0, function (id, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentFlowsIdGet', 'id', id);
                            localVarPath = "/api/document-flows/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Updates a flow.
         * @param {string} id
         * @param {DocumentFlowsDocumentFlowData} [documentFlowsDocumentFlowData]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdPut: function (id_1, documentFlowsDocumentFlowData_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, documentFlowsDocumentFlowData_1], args_1, true), void 0, function (id, documentFlowsDocumentFlowData, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiDocumentFlowsIdPut', 'id', id);
                            localVarPath = "/api/document-flows/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'PUT' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentFlowsDocumentFlowData, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Creates a flow that can be used to create documents
         * @param {DocumentFlowsDocumentFlowCreateRequest} [documentFlowsDocumentFlowCreateRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsPost: function (documentFlowsDocumentFlowCreateRequest_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([documentFlowsDocumentFlowCreateRequest_1], args_1, true), void 0, function (documentFlowsDocumentFlowCreateRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/document-flows";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentFlowsDocumentFlowCreateRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
exports.FlowsApiAxiosParamCreator = FlowsApiAxiosParamCreator;
/**
 * FlowsApi - functional programming interface
 * @export
 */
var FlowsApiFp = function (configuration) {
    var localVarAxiosParamCreator = (0, exports.FlowsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary List created flows.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsGet: function (q, limit, offset, order, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentFlowsGet(q, limit, offset, order, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Deletes a flow.
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdDelete: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentFlowsIdDelete(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Retrieves flow details
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdGet: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentFlowsIdGet(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Updates a flow.
         * @param {string} id
         * @param {DocumentFlowsDocumentFlowData} [documentFlowsDocumentFlowData]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdPut: function (id, documentFlowsDocumentFlowData, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentFlowsIdPut(id, documentFlowsDocumentFlowData, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Creates a flow that can be used to create documents
         * @param {DocumentFlowsDocumentFlowCreateRequest} [documentFlowsDocumentFlowCreateRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsPost: function (documentFlowsDocumentFlowCreateRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiDocumentFlowsPost(documentFlowsDocumentFlowCreateRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
    };
};
exports.FlowsApiFp = FlowsApiFp;
/**
 * FlowsApi - factory interface
 * @export
 */
var FlowsApiFactory = function (configuration, basePath, axios) {
    var localVarFp = (0, exports.FlowsApiFp)(configuration);
    return {
        /**
         *
         * @summary List created flows.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsGet: function (q, limit, offset, order, options) {
            return localVarFp.apiDocumentFlowsGet(q, limit, offset, order, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Deletes a flow.
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdDelete: function (id, options) {
            return localVarFp.apiDocumentFlowsIdDelete(id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Retrieves flow details
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdGet: function (id, options) {
            return localVarFp.apiDocumentFlowsIdGet(id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Updates a flow.
         * @param {string} id
         * @param {DocumentFlowsDocumentFlowData} [documentFlowsDocumentFlowData]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdPut: function (id, documentFlowsDocumentFlowData, options) {
            return localVarFp.apiDocumentFlowsIdPut(id, documentFlowsDocumentFlowData, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Creates a flow that can be used to create documents
         * @param {DocumentFlowsDocumentFlowCreateRequest} [documentFlowsDocumentFlowCreateRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsPost: function (documentFlowsDocumentFlowCreateRequest, options) {
            return localVarFp.apiDocumentFlowsPost(documentFlowsDocumentFlowCreateRequest, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
exports.FlowsApiFactory = FlowsApiFactory;
/**
 * FlowsApi - object-oriented interface
 * @export
 * @class FlowsApi
 * @extends {BaseAPI}
 */
var FlowsApi = /** @class */ (function (_super) {
    __extends(FlowsApi, _super);
    function FlowsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @summary List created flows.
     * @param {string} [q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    FlowsApi.prototype.apiDocumentFlowsGet = function (q, limit, offset, order, options) {
        var _this = this;
        return (0, exports.FlowsApiFp)(this.configuration).apiDocumentFlowsGet(q, limit, offset, order, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Deletes a flow.
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    FlowsApi.prototype.apiDocumentFlowsIdDelete = function (id, options) {
        var _this = this;
        return (0, exports.FlowsApiFp)(this.configuration).apiDocumentFlowsIdDelete(id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Retrieves flow details
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    FlowsApi.prototype.apiDocumentFlowsIdGet = function (id, options) {
        var _this = this;
        return (0, exports.FlowsApiFp)(this.configuration).apiDocumentFlowsIdGet(id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Updates a flow.
     * @param {string} id
     * @param {DocumentFlowsDocumentFlowData} [documentFlowsDocumentFlowData]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    FlowsApi.prototype.apiDocumentFlowsIdPut = function (id, documentFlowsDocumentFlowData, options) {
        var _this = this;
        return (0, exports.FlowsApiFp)(this.configuration).apiDocumentFlowsIdPut(id, documentFlowsDocumentFlowData, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Creates a flow that can be used to create documents
     * @param {DocumentFlowsDocumentFlowCreateRequest} [documentFlowsDocumentFlowCreateRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    FlowsApi.prototype.apiDocumentFlowsPost = function (documentFlowsDocumentFlowCreateRequest, options) {
        var _this = this;
        return (0, exports.FlowsApiFp)(this.configuration).apiDocumentFlowsPost(documentFlowsDocumentFlowCreateRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return FlowsApi;
}(base_1.BaseAPI));
exports.FlowsApi = FlowsApi;
/**
 * FoldersApi - axios parameter creator
 * @export
 */
var FoldersApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * The Q parameter allows you to filter by folder name.
         * @summary Retrieves all folders paginating the response
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {boolean} [filterByParent] if true filters by the parentId parameter
         * @param {string} [parentId] Id of the parent folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersGet: function (q_1, limit_1, offset_1, order_1, filterByParent_1, parentId_1) {
            var args_1 = [];
            for (var _i = 6; _i < arguments.length; _i++) {
                args_1[_i - 6] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([q_1, limit_1, offset_1, order_1, filterByParent_1, parentId_1], args_1, true), void 0, function (q, limit, offset, order, filterByParent, parentId, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/folders";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            if (q !== undefined) {
                                localVarQueryParameter['Q'] = q;
                            }
                            if (limit !== undefined) {
                                localVarQueryParameter['Limit'] = limit;
                            }
                            if (offset !== undefined) {
                                localVarQueryParameter['Offset'] = offset;
                            }
                            if (order !== undefined) {
                                localVarQueryParameter['Order'] = order;
                            }
                            if (filterByParent !== undefined) {
                                localVarQueryParameter['filterByParent'] = filterByParent;
                            }
                            if (parentId !== undefined) {
                                localVarQueryParameter['parentId'] = parentId;
                            }
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Deletes a folder.
         * @param {string} id Id of the folder to be deleted
         * @param {FoldersFolderDeleteRequest} [foldersFolderDeleteRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdDeletePost: function (id_1, foldersFolderDeleteRequest_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, foldersFolderDeleteRequest_1], args_1, true), void 0, function (id, foldersFolderDeleteRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiFoldersIdDeletePost', 'id', id);
                            localVarPath = "/api/folders/{id}/delete"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(foldersFolderDeleteRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Retrieves the folder\'s info.
         * @param {string} id Folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdGet: function (id_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1], args_1, true), void 0, function (id, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiFoldersIdGet', 'id', id);
                            localVarPath = "/api/folders/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [foldersFolderCreateRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersPost: function (foldersFolderCreateRequest_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([foldersFolderCreateRequest_1], args_1, true), void 0, function (foldersFolderCreateRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/folders";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(foldersFolderCreateRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
exports.FoldersApiAxiosParamCreator = FoldersApiAxiosParamCreator;
/**
 * FoldersApi - functional programming interface
 * @export
 */
var FoldersApiFp = function (configuration) {
    var localVarAxiosParamCreator = (0, exports.FoldersApiAxiosParamCreator)(configuration);
    return {
        /**
         * The Q parameter allows you to filter by folder name.
         * @summary Retrieves all folders paginating the response
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {boolean} [filterByParent] if true filters by the parentId parameter
         * @param {string} [parentId] Id of the parent folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersGet: function (q, limit, offset, order, filterByParent, parentId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiFoldersGet(q, limit, offset, order, filterByParent, parentId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Deletes a folder.
         * @param {string} id Id of the folder to be deleted
         * @param {FoldersFolderDeleteRequest} [foldersFolderDeleteRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdDeletePost: function (id, foldersFolderDeleteRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiFoldersIdDeletePost(id, foldersFolderDeleteRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Retrieves the folder\'s info.
         * @param {string} id Folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdGet: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiFoldersIdGet(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [foldersFolderCreateRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersPost: function (foldersFolderCreateRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiFoldersPost(foldersFolderCreateRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
    };
};
exports.FoldersApiFp = FoldersApiFp;
/**
 * FoldersApi - factory interface
 * @export
 */
var FoldersApiFactory = function (configuration, basePath, axios) {
    var localVarFp = (0, exports.FoldersApiFp)(configuration);
    return {
        /**
         * The Q parameter allows you to filter by folder name.
         * @summary Retrieves all folders paginating the response
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {boolean} [filterByParent] if true filters by the parentId parameter
         * @param {string} [parentId] Id of the parent folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersGet: function (q, limit, offset, order, filterByParent, parentId, options) {
            return localVarFp.apiFoldersGet(q, limit, offset, order, filterByParent, parentId, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Deletes a folder.
         * @param {string} id Id of the folder to be deleted
         * @param {FoldersFolderDeleteRequest} [foldersFolderDeleteRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdDeletePost: function (id, foldersFolderDeleteRequest, options) {
            return localVarFp.apiFoldersIdDeletePost(id, foldersFolderDeleteRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Retrieves the folder\'s info.
         * @param {string} id Folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdGet: function (id, options) {
            return localVarFp.apiFoldersIdGet(id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [foldersFolderCreateRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersPost: function (foldersFolderCreateRequest, options) {
            return localVarFp.apiFoldersPost(foldersFolderCreateRequest, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
exports.FoldersApiFactory = FoldersApiFactory;
/**
 * FoldersApi - object-oriented interface
 * @export
 * @class FoldersApi
 * @extends {BaseAPI}
 */
var FoldersApi = /** @class */ (function (_super) {
    __extends(FoldersApi, _super);
    function FoldersApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The Q parameter allows you to filter by folder name.
     * @summary Retrieves all folders paginating the response
     * @param {string} [q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order]
     * @param {boolean} [filterByParent] if true filters by the parentId parameter
     * @param {string} [parentId] Id of the parent folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    FoldersApi.prototype.apiFoldersGet = function (q, limit, offset, order, filterByParent, parentId, options) {
        var _this = this;
        return (0, exports.FoldersApiFp)(this.configuration).apiFoldersGet(q, limit, offset, order, filterByParent, parentId, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Deletes a folder.
     * @param {string} id Id of the folder to be deleted
     * @param {FoldersFolderDeleteRequest} [foldersFolderDeleteRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    FoldersApi.prototype.apiFoldersIdDeletePost = function (id, foldersFolderDeleteRequest, options) {
        var _this = this;
        return (0, exports.FoldersApiFp)(this.configuration).apiFoldersIdDeletePost(id, foldersFolderDeleteRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Retrieves the folder\'s info.
     * @param {string} id Folder id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    FoldersApi.prototype.apiFoldersIdGet = function (id, options) {
        var _this = this;
        return (0, exports.FoldersApiFp)(this.configuration).apiFoldersIdGet(id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Creates a folder.
     * @param {FoldersFolderCreateRequest} [foldersFolderCreateRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    FoldersApi.prototype.apiFoldersPost = function (foldersFolderCreateRequest, options) {
        var _this = this;
        return (0, exports.FoldersApiFp)(this.configuration).apiFoldersPost(foldersFolderCreateRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return FoldersApi;
}(base_1.BaseAPI));
exports.FoldersApi = FoldersApi;
/**
 * MarksSessionsApi - axios parameter creator
 * @export
 */
var MarksSessionsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session from a Document create request.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsDocumentsPost: function (documentsCreateDocumentRequest_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([documentsCreateDocumentRequest_1], args_1, true), void 0, function (documentsCreateDocumentRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/marks-sessions/documents";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentsCreateDocumentRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Retrieves session information.
         * @param {string} id The session ID obtained when the session was created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsIdGet: function (id_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1], args_1, true), void 0, function (id, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('apiMarksSessionsIdGet', 'id', id);
                            localVarPath = "/api/marks-sessions/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session by requiring only the necessary data.
         * @param {DocumentMarkMarksSessionCreateRequest} [documentMarkMarksSessionCreateRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsPost: function (documentMarkMarksSessionCreateRequest_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([documentMarkMarksSessionCreateRequest_1], args_1, true), void 0, function (documentMarkMarksSessionCreateRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/marks-sessions";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(documentMarkMarksSessionCreateRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
exports.MarksSessionsApiAxiosParamCreator = MarksSessionsApiAxiosParamCreator;
/**
 * MarksSessionsApi - functional programming interface
 * @export
 */
var MarksSessionsApiFp = function (configuration) {
    var localVarAxiosParamCreator = (0, exports.MarksSessionsApiAxiosParamCreator)(configuration);
    return {
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session from a Document create request.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsDocumentsPost: function (documentsCreateDocumentRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiMarksSessionsDocumentsPost(documentsCreateDocumentRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Retrieves session information.
         * @param {string} id The session ID obtained when the session was created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsIdGet: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiMarksSessionsIdGet(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session by requiring only the necessary data.
         * @param {DocumentMarkMarksSessionCreateRequest} [documentMarkMarksSessionCreateRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsPost: function (documentMarkMarksSessionCreateRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiMarksSessionsPost(documentMarkMarksSessionCreateRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
    };
};
exports.MarksSessionsApiFp = MarksSessionsApiFp;
/**
 * MarksSessionsApi - factory interface
 * @export
 */
var MarksSessionsApiFactory = function (configuration, basePath, axios) {
    var localVarFp = (0, exports.MarksSessionsApiFp)(configuration);
    return {
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session from a Document create request.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsDocumentsPost: function (documentsCreateDocumentRequest, options) {
            return localVarFp.apiMarksSessionsDocumentsPost(documentsCreateDocumentRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Retrieves session information.
         * @param {string} id The session ID obtained when the session was created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsIdGet: function (id, options) {
            return localVarFp.apiMarksSessionsIdGet(id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session by requiring only the necessary data.
         * @param {DocumentMarkMarksSessionCreateRequest} [documentMarkMarksSessionCreateRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsPost: function (documentMarkMarksSessionCreateRequest, options) {
            return localVarFp.apiMarksSessionsPost(documentMarkMarksSessionCreateRequest, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
exports.MarksSessionsApiFactory = MarksSessionsApiFactory;
/**
 * MarksSessionsApi - object-oriented interface
 * @export
 * @class MarksSessionsApi
 * @extends {BaseAPI}
 */
var MarksSessionsApi = /** @class */ (function (_super) {
    __extends(MarksSessionsApi, _super);
    function MarksSessionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
     * @summary Creates a mark positioning session from a Document create request.
     * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarksSessionsApi
     */
    MarksSessionsApi.prototype.apiMarksSessionsDocumentsPost = function (documentsCreateDocumentRequest, options) {
        var _this = this;
        return (0, exports.MarksSessionsApiFp)(this.configuration).apiMarksSessionsDocumentsPost(documentsCreateDocumentRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Retrieves session information.
     * @param {string} id The session ID obtained when the session was created
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarksSessionsApi
     */
    MarksSessionsApi.prototype.apiMarksSessionsIdGet = function (id, options) {
        var _this = this;
        return (0, exports.MarksSessionsApiFp)(this.configuration).apiMarksSessionsIdGet(id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
     * @summary Creates a mark positioning session by requiring only the necessary data.
     * @param {DocumentMarkMarksSessionCreateRequest} [documentMarkMarksSessionCreateRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarksSessionsApi
     */
    MarksSessionsApi.prototype.apiMarksSessionsPost = function (documentMarkMarksSessionCreateRequest, options) {
        var _this = this;
        return (0, exports.MarksSessionsApiFp)(this.configuration).apiMarksSessionsPost(documentMarkMarksSessionCreateRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return MarksSessionsApi;
}(base_1.BaseAPI));
exports.MarksSessionsApi = MarksSessionsApi;
/**
 * NotificationsApi - axios parameter creator
 * @export
 */
var NotificationsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         *
         * @summary Sends a reminder email to the user of a flow action. (if the action is pending)
         * @param {NotificationsCreateFlowActionReminderRequest} [notificationsCreateFlowActionReminderRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiNotificationsFlowActionReminderPost: function (notificationsCreateFlowActionReminderRequest_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([notificationsCreateFlowActionReminderRequest_1], args_1, true), void 0, function (notificationsCreateFlowActionReminderRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/notifications/flow-action-reminder";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(notificationsCreateFlowActionReminderRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Sends a reminder email to the e-mails provided on request. Should be used after creating a batch of documents.
         * @param {NotificationsEmailListNotificationRequest} [notificationsEmailListNotificationRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersNotifyPendingPost: function (notificationsEmailListNotificationRequest_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([notificationsEmailListNotificationRequest_1], args_1, true), void 0, function (notificationsEmailListNotificationRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/users/notify-pending";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(notificationsEmailListNotificationRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
exports.NotificationsApiAxiosParamCreator = NotificationsApiAxiosParamCreator;
/**
 * NotificationsApi - functional programming interface
 * @export
 */
var NotificationsApiFp = function (configuration) {
    var localVarAxiosParamCreator = (0, exports.NotificationsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Sends a reminder email to the user of a flow action. (if the action is pending)
         * @param {NotificationsCreateFlowActionReminderRequest} [notificationsCreateFlowActionReminderRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiNotificationsFlowActionReminderPost: function (notificationsCreateFlowActionReminderRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiNotificationsFlowActionReminderPost(notificationsCreateFlowActionReminderRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Sends a reminder email to the e-mails provided on request. Should be used after creating a batch of documents.
         * @param {NotificationsEmailListNotificationRequest} [notificationsEmailListNotificationRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersNotifyPendingPost: function (notificationsEmailListNotificationRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiUsersNotifyPendingPost(notificationsEmailListNotificationRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
    };
};
exports.NotificationsApiFp = NotificationsApiFp;
/**
 * NotificationsApi - factory interface
 * @export
 */
var NotificationsApiFactory = function (configuration, basePath, axios) {
    var localVarFp = (0, exports.NotificationsApiFp)(configuration);
    return {
        /**
         *
         * @summary Sends a reminder email to the user of a flow action. (if the action is pending)
         * @param {NotificationsCreateFlowActionReminderRequest} [notificationsCreateFlowActionReminderRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiNotificationsFlowActionReminderPost: function (notificationsCreateFlowActionReminderRequest, options) {
            return localVarFp.apiNotificationsFlowActionReminderPost(notificationsCreateFlowActionReminderRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Sends a reminder email to the e-mails provided on request. Should be used after creating a batch of documents.
         * @param {NotificationsEmailListNotificationRequest} [notificationsEmailListNotificationRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersNotifyPendingPost: function (notificationsEmailListNotificationRequest, options) {
            return localVarFp.apiUsersNotifyPendingPost(notificationsEmailListNotificationRequest, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
exports.NotificationsApiFactory = NotificationsApiFactory;
/**
 * NotificationsApi - object-oriented interface
 * @export
 * @class NotificationsApi
 * @extends {BaseAPI}
 */
var NotificationsApi = /** @class */ (function (_super) {
    __extends(NotificationsApi, _super);
    function NotificationsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @summary Sends a reminder email to the user of a flow action. (if the action is pending)
     * @param {NotificationsCreateFlowActionReminderRequest} [notificationsCreateFlowActionReminderRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    NotificationsApi.prototype.apiNotificationsFlowActionReminderPost = function (notificationsCreateFlowActionReminderRequest, options) {
        var _this = this;
        return (0, exports.NotificationsApiFp)(this.configuration).apiNotificationsFlowActionReminderPost(notificationsCreateFlowActionReminderRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Sends a reminder email to the e-mails provided on request. Should be used after creating a batch of documents.
     * @param {NotificationsEmailListNotificationRequest} [notificationsEmailListNotificationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    NotificationsApi.prototype.apiUsersNotifyPendingPost = function (notificationsEmailListNotificationRequest, options) {
        var _this = this;
        return (0, exports.NotificationsApiFp)(this.configuration).apiUsersNotifyPendingPost(notificationsEmailListNotificationRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return NotificationsApi;
}(base_1.BaseAPI));
exports.NotificationsApi = NotificationsApi;
/**
 * OrganizationsApi - axios parameter creator
 * @export
 */
var OrganizationsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         *
         * @summary List organization users
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersGet: function (q_1, limit_1, offset_1, order_1) {
            var args_1 = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                args_1[_i - 4] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([q_1, limit_1, offset_1, order_1], args_1, true), void 0, function (q, limit, offset, order, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/organizations/users";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            if (q !== undefined) {
                                localVarQueryParameter['Q'] = q;
                            }
                            if (limit !== undefined) {
                                localVarQueryParameter['Limit'] = limit;
                            }
                            if (offset !== undefined) {
                                localVarQueryParameter['Offset'] = offset;
                            }
                            if (order !== undefined) {
                                localVarQueryParameter['Order'] = order;
                            }
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Adds a user to the organization
         * @param {OrganizationsOrganizationUserPostRequest} [organizationsOrganizationUserPostRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersPost: function (organizationsOrganizationUserPostRequest_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([organizationsOrganizationUserPostRequest_1], args_1, true), void 0, function (organizationsOrganizationUserPostRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/organizations/users";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(organizationsOrganizationUserPostRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Deletes a user from organization
         * @param {string} userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersUserIdDelete: function (userId_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([userId_1], args_1, true), void 0, function (userId, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            (0, common_1.assertParamExists)('apiOrganizationsUsersUserIdDelete', 'userId', userId);
                            localVarPath = "/api/organizations/users/{userId}"
                                .replace("{".concat("userId", "}"), encodeURIComponent(String(userId)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'DELETE' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
exports.OrganizationsApiAxiosParamCreator = OrganizationsApiAxiosParamCreator;
/**
 * OrganizationsApi - functional programming interface
 * @export
 */
var OrganizationsApiFp = function (configuration) {
    var localVarAxiosParamCreator = (0, exports.OrganizationsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary List organization users
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersGet: function (q, limit, offset, order, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiOrganizationsUsersGet(q, limit, offset, order, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Adds a user to the organization
         * @param {OrganizationsOrganizationUserPostRequest} [organizationsOrganizationUserPostRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersPost: function (organizationsOrganizationUserPostRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiOrganizationsUsersPost(organizationsOrganizationUserPostRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         *
         * @summary Deletes a user from organization
         * @param {string} userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersUserIdDelete: function (userId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiOrganizationsUsersUserIdDelete(userId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
    };
};
exports.OrganizationsApiFp = OrganizationsApiFp;
/**
 * OrganizationsApi - factory interface
 * @export
 */
var OrganizationsApiFactory = function (configuration, basePath, axios) {
    var localVarFp = (0, exports.OrganizationsApiFp)(configuration);
    return {
        /**
         *
         * @summary List organization users
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersGet: function (q, limit, offset, order, options) {
            return localVarFp.apiOrganizationsUsersGet(q, limit, offset, order, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Adds a user to the organization
         * @param {OrganizationsOrganizationUserPostRequest} [organizationsOrganizationUserPostRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersPost: function (organizationsOrganizationUserPostRequest, options) {
            return localVarFp.apiOrganizationsUsersPost(organizationsOrganizationUserPostRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         *
         * @summary Deletes a user from organization
         * @param {string} userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersUserIdDelete: function (userId, options) {
            return localVarFp.apiOrganizationsUsersUserIdDelete(userId, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
exports.OrganizationsApiFactory = OrganizationsApiFactory;
/**
 * OrganizationsApi - object-oriented interface
 * @export
 * @class OrganizationsApi
 * @extends {BaseAPI}
 */
var OrganizationsApi = /** @class */ (function (_super) {
    __extends(OrganizationsApi, _super);
    function OrganizationsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @summary List organization users
     * @param {string} [q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    OrganizationsApi.prototype.apiOrganizationsUsersGet = function (q, limit, offset, order, options) {
        var _this = this;
        return (0, exports.OrganizationsApiFp)(this.configuration).apiOrganizationsUsersGet(q, limit, offset, order, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Adds a user to the organization
     * @param {OrganizationsOrganizationUserPostRequest} [organizationsOrganizationUserPostRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    OrganizationsApi.prototype.apiOrganizationsUsersPost = function (organizationsOrganizationUserPostRequest, options) {
        var _this = this;
        return (0, exports.OrganizationsApiFp)(this.configuration).apiOrganizationsUsersPost(organizationsOrganizationUserPostRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     *
     * @summary Deletes a user from organization
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    OrganizationsApi.prototype.apiOrganizationsUsersUserIdDelete = function (userId, options) {
        var _this = this;
        return (0, exports.OrganizationsApiFp)(this.configuration).apiOrganizationsUsersUserIdDelete(userId, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return OrganizationsApi;
}(base_1.BaseAPI));
exports.OrganizationsApi = OrganizationsApi;
/**
 * UploadApi - axios parameter creator
 * @export
 */
var UploadApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         *
         * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
         * @param {UploadsUploadBytesRequest} [uploadsUploadBytesRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsBytesPost: function (uploadsUploadBytesRequest_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([uploadsUploadBytesRequest_1], args_1, true), void 0, function (uploadsUploadBytesRequest, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/uploads/bytes";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(uploadsUploadBytesRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
         * @summary Uploads a file by sending a multipart/form-data request
         * @param {any} [file] File to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsPost: function (file_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([file_1], args_1, true), void 0, function (file, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarFormParams, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/api/uploads";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
                            // authentication ApiKey required
                            return [4 /*yield*/, (0, common_1.setApiKeyToObject)(localVarHeaderParameter, "X-Api-Key", configuration)];
                        case 1:
                            // authentication ApiKey required
                            _a.sent();
                            if (file !== undefined) {
                                localVarFormParams.append('file', new Blob([JSON.stringify(file)], { type: "application/json", }));
                            }
                            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = localVarFormParams;
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
exports.UploadApiAxiosParamCreator = UploadApiAxiosParamCreator;
/**
 * UploadApi - functional programming interface
 * @export
 */
var UploadApiFp = function (configuration) {
    var localVarAxiosParamCreator = (0, exports.UploadApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
         * @param {UploadsUploadBytesRequest} [uploadsUploadBytesRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsBytesPost: function (uploadsUploadBytesRequest, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiUploadsBytesPost(uploadsUploadBytesRequest, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
         * @summary Uploads a file by sending a multipart/form-data request
         * @param {any} [file] File to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsPost: function (file, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.apiUploadsPost(file, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
    };
};
exports.UploadApiFp = UploadApiFp;
/**
 * UploadApi - factory interface
 * @export
 */
var UploadApiFactory = function (configuration, basePath, axios) {
    var localVarFp = (0, exports.UploadApiFp)(configuration);
    return {
        /**
         *
         * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
         * @param {UploadsUploadBytesRequest} [uploadsUploadBytesRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsBytesPost: function (uploadsUploadBytesRequest, options) {
            return localVarFp.apiUploadsBytesPost(uploadsUploadBytesRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
         * @summary Uploads a file by sending a multipart/form-data request
         * @param {any} [file] File to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsPost: function (file, options) {
            return localVarFp.apiUploadsPost(file, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
exports.UploadApiFactory = UploadApiFactory;
/**
 * UploadApi - object-oriented interface
 * @export
 * @class UploadApi
 * @extends {BaseAPI}
 */
var UploadApi = /** @class */ (function (_super) {
    __extends(UploadApi, _super);
    function UploadApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
     * @param {UploadsUploadBytesRequest} [uploadsUploadBytesRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadApi
     */
    UploadApi.prototype.apiUploadsBytesPost = function (uploadsUploadBytesRequest, options) {
        var _this = this;
        return (0, exports.UploadApiFp)(this.configuration).apiUploadsBytesPost(uploadsUploadBytesRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
     * @summary Uploads a file by sending a multipart/form-data request
     * @param {any} [file] File to upload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadApi
     */
    UploadApi.prototype.apiUploadsPost = function (file, options) {
        var _this = this;
        return (0, exports.UploadApiFp)(this.configuration).apiUploadsPost(file, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return UploadApi;
}(base_1.BaseAPI));
exports.UploadApi = UploadApi;
__exportStar(require("./apis/signature-api"), exports);
