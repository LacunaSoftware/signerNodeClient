"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
exports.__esModule = true;
exports.DocumentsApi = exports.DocumentsApiFactory = exports.DocumentsApiFp = exports.DocumentsApiAxiosParamCreator = void 0;
/* tslint:disable */
/* eslint-disable */
/**
 * Dropsigner (HML)
 * <!--------------------------------------------------------------------------------------------------------------------->    <h2>Authentication</h2>    <p>   In order to call this APIs, you will need an <strong>API key</strong>. Set the API key in the header <span class=\"code\">X-Api-Key</span>:  </p>    <pre>X-Api-Key: your-app|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</pre>    <!--------------------------------------------------------------------------------------------------------------------->  <br />    <h2>HTTP Codes</h2>    <p>   The APIs will return the following HTTP codes:  </p>    <table>   <thead>    <tr>     <th>Code</th>     <th>Description</th>    </tr>   </thead>   <tbody>    <tr>     <td><strong class=\"model-title\">200 (OK)</strong></td>     <td>Request processed successfully. The response is different for each API, please refer to the operation's documentation</td>    </tr>    <tr>     <td><strong class=\"model-title\">400 (Bad Request)</strong></td>     <td>Syntax error. For instance, when a required field was not provided</td>    </tr>    <tr>     <td><strong class=\"model-title\">401 (Unauthorized)</strong></td>     <td>API key not provided or invalid</td>    </tr>    <tr>     <td><strong class=\"model-title\">403 (Forbidden)</strong></td>     <td>API key is valid, but the application has insufficient permissions to complete the requested operation</td>    </tr>    <tr>     <td><strong class=\"model-title\">422 (Unprocessable Entity)</strong></td>     <td>API error. The response is as defined in <a href=\"#model-ErrorModel\">ErrorModel</a></td>    </tr>   </tbody>  </table>    <br />    <h3>Error Codes</h3>    <p>Some of the error codes returned in a 422 response are provided bellow*:</p>    <ul>   <li>CertificateNotFound</li>   <li>DocumentNotFound</li>   <li>FolderNotFound</li>   <li>CpfMismatch</li>   <li>CpfNotExpected</li>   <li>InvalidFlowAction</li>   <li>DocumentInvalidKey</li>  </ul>    <p style=\"font-size: 0.9em\">   *The codes shown above are the main error codes. Nonetheless, this list is not comprehensive. New codes may be added anytime without previous warning.  </p>    <!--------------------------------------------------------------------------------------------------------------------->    <br />    <h2>Webhooks</h2>    <p>   It is recomended to subscribe to Webhook events <strong>instead</strong> of polling APIs. To do so, enable webhooks and register an URL that will receive a POST request   whenever one of the events bellow occur.  </p>  <p>   All requests have the format described in <a href=\"#model-Webhooks.WebhookModel\">Webhooks.WebhookModel</a>.   The data field varies according to the webhook event type:  </p>      <table>   <thead>    <tr>     <th>Event type</th>     <th>Description</th>     <th>Payload</th>    </tr>   </thead>   <tbody>    <tr>     <td><strong class=\"model-title\">DocumentSigned</strong></td>     <td>Triggered when a document is signed.</td>     <td><a href=\"#model-Webhooks.DocumentSignedModel\">Webhooks.DocumentSignedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentApproved</strong></td>     <td>Triggered when a document is approved.</td>     <td><a href=\"#model-Webhooks.DocumentApprovedModel\">Webhooks.DocumentApprovedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentRefused</strong></td>     <td>Triggered when a document is refused.</td>     <td><a href=\"#model-Webhooks.DocumentRefusedModel\">Webhooks.DocumentRefusedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentConcluded</strong></td>     <td>Triggered when the flow of a document is concluded.</td>     <td><a href=\"#model-Webhooks.DocumentConcludedModel\">Webhooks.DocumentConcludedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentCanceled</strong></td>     <td>Triggered when the document is canceled.</td>     <td><a href=\"#model-Webhooks.DocumentCanceledModel\">Webhooks.DocumentCanceledModel</a></td>    </tr>   </tbody>  </table>    <p>   To register your application URL and enable Webhooks, access the integrations section in your <a href=\"/private/organizations\" target=\"_blank\">organization's details page</a>.  </p>
 *
 * OpenAPI spec version: 1.48.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
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
         * @param {DocumentsMoveDocumentBatchRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsBatchFolderPost: function (body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            localVarPath = "/api/documents/batch/folder";
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
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
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsGet: function (isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, Q, limit, offset, order, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            localVarPath = "/api/documents";
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
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
                            if (Q !== undefined) {
                                localVarQueryParameter['Q'] = Q;
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
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.<br /><br />  If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.<br /><br />  After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).<br /><br />  Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.<br />
         * @summary Retrieves an URL to redirect the user to the first pending action of the document.
         * @param {string} id Document Id
         * @param {DocumentsActionUrlRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdActionUrlPost: function (id, body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdActionUrlPost.');
                            }
                            localVarPath = "/api/documents/{id}/action-url"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         * <b>CAUTION: This action cannot be reverted.</b>
         * @summary Cancels the document by providing a reason for the cancellation.
         * @param {string} id
         * @param {DocumentsCancelDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdCancellationPost: function (id, body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdCancellationPost.');
                            }
                            localVarPath = "/api/documents/{id}/cancellation"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
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
        apiDocumentsIdContentB64Get: function (id, type, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdContentB64Get.');
                            }
                            localVarPath = "/api/documents/{id}/content-b64"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            if (type !== undefined) {
                                localVarQueryParameter['type'] = type;
                            }
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
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
        apiDocumentsIdContentGet: function (id, type, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdContentGet.');
                            }
                            localVarPath = "/api/documents/{id}/content"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            if (type !== undefined) {
                                localVarQueryParameter['type'] = type;
                            }
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Deletes a specific document using it's id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdDelete: function (id, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdDelete.');
                            }
                            localVarPath = "/api/documents/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'DELETE' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         * The flow of the document will be restarted.
         * @summary Adds a new version for an envelope.
         * @param {string} id
         * @param {DocumentsEnvelopeAddVersionRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdEnvelopeVersionsPost: function (id, body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdEnvelopeVersionsPost.');
                            }
                            localVarPath = "/api/documents/{id}/envelope/versions"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Updates the document's flow.
         * @param {string} id Id of the document
         * @param {DocumentsDocumentFlowEditRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFlowPost: function (id, body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdFlowPost.');
                            }
                            localVarPath = "/api/documents/{id}/flow"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Moves a document to a folder.
         * @param {string} id
         * @param {DocumentsMoveDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFolderPost: function (id, body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdFolderPost.');
                            }
                            localVarPath = "/api/documents/{id}/folder"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Retrieves the document's details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdGet: function (id, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdGet.');
                            }
                            localVarPath = "/api/documents/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         * The notified emails are the ones that will be notified after the document is concluded.
         * @summary Updates the document's notified emails
         * @param {string} id Id of the document
         * @param {DocumentsDocumentNotifiedEmailsEditRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdNotifiedEmailsPut: function (id, body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdNotifiedEmailsPut.');
                            }
                            localVarPath = "/api/documents/{id}/notified-emails"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'PUT' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         * The document's flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
         * @summary Refuses a document by providing a reason for the refusal.
         * @param {string} id
         * @param {RefusalRefusalRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdRefusalPost: function (id, body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdRefusalPost.');
                            }
                            localVarPath = "/api/documents/{id}/refusal"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document's signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdSignaturesDetailsGet: function (id, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdSignaturesDetailsGet.');
                            }
                            localVarPath = "/api/documents/{id}/signatures-details"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         * The URL does not require authentication and will be available for 1 hour.  <br /><ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
         * @summary Generates a URL (ticket) to download a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentTicketType} [type] The version type to download
         * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdTicketGet: function (id, type, preview, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdTicketGet.');
                            }
                            localVarPath = "/api/documents/{id}/ticket"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            if (type !== undefined) {
                                localVarQueryParameter['type'] = type;
                            }
                            if (preview !== undefined) {
                                localVarQueryParameter['preview'] = preview;
                            }
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         * The flow of the document will be restarted. <br /><br />  If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
         * @summary Adds a new version for the document.
         * @param {string} id
         * @param {DocumentsDocumentAddVersionRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdVersionsPost: function (id, body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdVersionsPost.');
                            }
                            localVarPath = "/api/documents/{id}/versions"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
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
        apiDocumentsKeysKeySignaturesGet: function (key, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key_1, key_2, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'key' is not null or undefined
                            if (key === null || key === undefined) {
                                throw new base_1.RequiredError('key', 'Required parameter key was null or undefined when calling apiDocumentsKeysKeySignaturesGet.');
                            }
                            localVarPath = "/api/documents/keys/{key}/signatures"
                                .replace("{".concat("key", "}"), encodeURIComponent(String(key)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key_1 in localVarQueryParameter) {
                                query.set(key_1, localVarQueryParameter[key_1]);
                            }
                            for (key_2 in options.params) {
                                query.set(key_2, options.params[key_2]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>. <br /><br />  When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.<br /><br />  Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsPost: function (body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            localVarPath = "/api/documents";
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        },
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsValidateSignaturesPost: function (body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            localVarPath = "/api/documents/validate-signatures";
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey("X-Api-Key")];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.params) {
                                query.set(key, options.params[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions
                                }];
                    }
                });
            });
        }
    };
};
exports.DocumentsApiAxiosParamCreator = DocumentsApiAxiosParamCreator;
/**
 * DocumentsApi - functional programming interface
 * @export
 */
var DocumentsApiFp = function (configuration) {
    return {
        /**
         *
         * @summary Moves a batch of documents to a folder.
         * @param {DocumentsMoveDocumentBatchRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsBatchFolderPost: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsBatchFolderPost(body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
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
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsGet: function (isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, Q, limit, offset, order, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, Q, limit, offset, order, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.<br /><br />  If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.<br /><br />  After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).<br /><br />  Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.<br />
         * @summary Retrieves an URL to redirect the user to the first pending action of the document.
         * @param {string} id Document Id
         * @param {DocumentsActionUrlRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdActionUrlPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdActionUrlPost(id, body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * <b>CAUTION: This action cannot be reverted.</b>
         * @summary Cancels the document by providing a reason for the cancellation.
         * @param {string} id
         * @param {DocumentsCancelDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdCancellationPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdCancellationPost(id, body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
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
        apiDocumentsIdContentB64Get: function (id, type, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdContentB64Get(id, type, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
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
        apiDocumentsIdContentGet: function (id, type, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdContentGet(id, type, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Deletes a specific document using it's id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdDelete: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdDelete(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * The flow of the document will be restarted.
         * @summary Adds a new version for an envelope.
         * @param {string} id
         * @param {DocumentsEnvelopeAddVersionRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdEnvelopeVersionsPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdEnvelopeVersionsPost(id, body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Updates the document's flow.
         * @param {string} id Id of the document
         * @param {DocumentsDocumentFlowEditRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFlowPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdFlowPost(id, body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Moves a document to a folder.
         * @param {string} id
         * @param {DocumentsMoveDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFolderPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdFolderPost(id, body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Retrieves the document's details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdGet: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdGet(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * The notified emails are the ones that will be notified after the document is concluded.
         * @summary Updates the document's notified emails
         * @param {string} id Id of the document
         * @param {DocumentsDocumentNotifiedEmailsEditRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdNotifiedEmailsPut: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdNotifiedEmailsPut(id, body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * The document's flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
         * @summary Refuses a document by providing a reason for the refusal.
         * @param {string} id
         * @param {RefusalRefusalRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdRefusalPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdRefusalPost(id, body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document's signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdSignaturesDetailsGet: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdSignaturesDetailsGet(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * The URL does not require authentication and will be available for 1 hour.  <br /><ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
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
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdTicketGet(id, type, preview, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * The flow of the document will be restarted. <br /><br />  If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
         * @summary Adds a new version for the document.
         * @param {string} id
         * @param {DocumentsDocumentAddVersionRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdVersionsPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdVersionsPost(id, body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
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
        apiDocumentsKeysKeySignaturesGet: function (key, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsKeysKeySignaturesGet(key, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>. <br /><br />  When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.<br /><br />  Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsPost: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsPost(body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsValidateSignaturesPost: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsValidateSignaturesPost(body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1["default"]; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        }
    };
};
exports.DocumentsApiFp = DocumentsApiFp;
/**
 * DocumentsApi - factory interface
 * @export
 */
var DocumentsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         *
         * @summary Moves a batch of documents to a folder.
         * @param {DocumentsMoveDocumentBatchRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsBatchFolderPost: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsBatchFolderPost(body, options).then(function (request) { return request(axios, basePath); })];
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
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsGet: function (isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, Q, limit, offset, order, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, Q, limit, offset, order, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.<br /><br />  If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.<br /><br />  After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).<br /><br />  Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.<br />
         * @summary Retrieves an URL to redirect the user to the first pending action of the document.
         * @param {string} id Document Id
         * @param {DocumentsActionUrlRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdActionUrlPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdActionUrlPost(id, body, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * <b>CAUTION: This action cannot be reverted.</b>
         * @summary Cancels the document by providing a reason for the cancellation.
         * @param {string} id
         * @param {DocumentsCancelDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdCancellationPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdCancellationPost(id, body, options).then(function (request) { return request(axios, basePath); })];
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
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdContentB64Get(id, type, options).then(function (request) { return request(axios, basePath); })];
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
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdContentGet(id, type, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @summary Deletes a specific document using it's id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdDelete: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdDelete(id, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * The flow of the document will be restarted.
         * @summary Adds a new version for an envelope.
         * @param {string} id
         * @param {DocumentsEnvelopeAddVersionRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdEnvelopeVersionsPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdEnvelopeVersionsPost(id, body, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @summary Updates the document's flow.
         * @param {string} id Id of the document
         * @param {DocumentsDocumentFlowEditRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFlowPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdFlowPost(id, body, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @summary Moves a document to a folder.
         * @param {string} id
         * @param {DocumentsMoveDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFolderPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdFolderPost(id, body, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @summary Retrieves the document's details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdGet: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdGet(id, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * The notified emails are the ones that will be notified after the document is concluded.
         * @summary Updates the document's notified emails
         * @param {string} id Id of the document
         * @param {DocumentsDocumentNotifiedEmailsEditRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdNotifiedEmailsPut: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdNotifiedEmailsPut(id, body, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * The document's flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
         * @summary Refuses a document by providing a reason for the refusal.
         * @param {string} id
         * @param {RefusalRefusalRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdRefusalPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdRefusalPost(id, body, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document's signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdSignaturesDetailsGet: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdSignaturesDetailsGet(id, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * The URL does not require authentication and will be available for 1 hour.  <br /><ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
         * @summary Generates a URL (ticket) to download a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentTicketType} [type] The version type to download
         * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdTicketGet: function (id, type, preview, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdTicketGet(id, type, preview, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * The flow of the document will be restarted. <br /><br />  If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
         * @summary Adds a new version for the document.
         * @param {string} id
         * @param {DocumentsDocumentAddVersionRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdVersionsPost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdVersionsPost(id, body, options).then(function (request) { return request(axios, basePath); })];
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
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsKeysKeySignaturesGet(key, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>. <br /><br />  When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.<br /><br />  Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsPost: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsPost(body, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsValidateSignaturesPost: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.DocumentsApiFp)(configuration).apiDocumentsValidateSignaturesPost(body, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        }
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
     * @param {DocumentsMoveDocumentBatchRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsBatchFolderPost = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsBatchFolderPost(body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
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
     * @param {string} [Q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsGet = function (isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, Q, limit, offset, order, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, Q, limit, offset, order, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.<br /><br />  If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.<br /><br />  After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).<br /><br />  Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.<br />
     * @summary Retrieves an URL to redirect the user to the first pending action of the document.
     * @param {string} id Document Id
     * @param {DocumentsActionUrlRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdActionUrlPost = function (id, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdActionUrlPost(id, body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * <b>CAUTION: This action cannot be reverted.</b>
     * @summary Cancels the document by providing a reason for the cancellation.
     * @param {string} id
     * @param {DocumentsCancelDocumentRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdCancellationPost = function (id, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdCancellationPost(id, body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdContentB64Get(id, type, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdContentGet(id, type, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @summary Deletes a specific document using it's id.
     * @param {string} id Document id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdDelete = function (id, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdDelete(id, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * The flow of the document will be restarted.
     * @summary Adds a new version for an envelope.
     * @param {string} id
     * @param {DocumentsEnvelopeAddVersionRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdEnvelopeVersionsPost = function (id, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdEnvelopeVersionsPost(id, body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @summary Updates the document's flow.
     * @param {string} id Id of the document
     * @param {DocumentsDocumentFlowEditRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdFlowPost = function (id, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdFlowPost(id, body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @summary Moves a document to a folder.
     * @param {string} id
     * @param {DocumentsMoveDocumentRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdFolderPost = function (id, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdFolderPost(id, body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @summary Retrieves the document's details.
     * @param {string} id Document id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdGet = function (id, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdGet(id, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * The notified emails are the ones that will be notified after the document is concluded.
     * @summary Updates the document's notified emails
     * @param {string} id Id of the document
     * @param {DocumentsDocumentNotifiedEmailsEditRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdNotifiedEmailsPut = function (id, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdNotifiedEmailsPut(id, body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * The document's flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
     * @summary Refuses a document by providing a reason for the refusal.
     * @param {string} id
     * @param {RefusalRefusalRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdRefusalPost = function (id, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdRefusalPost(id, body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * This will perform the same validations as verifying the document signatures using the verification code.
     * @summary Retrieves the details of the document's signatures.
     * @param {string} id The Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdSignaturesDetailsGet = function (id, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdSignaturesDetailsGet(id, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * The URL does not require authentication and will be available for 1 hour.  <br /><ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
     * @summary Generates a URL (ticket) to download a specific version type of the document.
     * @param {string} id Document id
     * @param {DocumentTicketType} [type] The version type to download
     * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdTicketGet = function (id, type, preview, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdTicketGet(id, type, preview, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * The flow of the document will be restarted. <br /><br />  If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
     * @summary Adds a new version for the document.
     * @param {string} id
     * @param {DocumentsDocumentAddVersionRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsIdVersionsPost = function (id, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdVersionsPost(id, body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsKeysKeySignaturesGet(key, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>. <br /><br />  When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.<br /><br />  Returns a list of ids of each document created.
     * @summary Creates one or multiple documents.
     * @param {DocumentsCreateDocumentRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsPost = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsPost(body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
     * @summary Validates each signature in the uploaded document
     * @param {SignatureSignaturesInfoRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    DocumentsApi.prototype.apiDocumentsValidateSignaturesPost = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsValidateSignaturesPost(body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    return DocumentsApi;
}(base_1.BaseAPI));
exports.DocumentsApi = DocumentsApi;
