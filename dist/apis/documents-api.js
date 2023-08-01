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
exports.DocumentsApi = exports.DocumentsApiFactory = exports.DocumentsApiFp = exports.DocumentsApiAxiosParamCreator = void 0;
/* tslint:disable */
/* eslint-disable */
/**
 * Dropsigner
 * <!--------------------------------------------------------------------------------------------------------------------->    <h2>Authentication</h2>    <p>   In order to call this APIs, you will need an <strong>API key</strong>. Set the API key in the header <span class=\"code\">X-Api-Key</span>:  </p>    <pre>X-Api-Key: your-app|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</pre>    <!--------------------------------------------------------------------------------------------------------------------->  <br />    <h2>HTTP Codes</h2>    <p>   The APIs will return the following HTTP codes:  </p>    <table>   <thead>    <tr>     <th>Code</th>     <th>Description</th>    </tr>   </thead>   <tbody>    <tr>     <td><strong class=\"model-title\">200 (OK)</strong></td>     <td>Request processed successfully. The response is different for each API, please refer to the operation's documentation</td>    </tr>    <tr>     <td><strong class=\"model-title\">400 (Bad Request)</strong></td>     <td>Syntax error. For instance, when a required field was not provided</td>    </tr>    <tr>     <td><strong class=\"model-title\">401 (Unauthorized)</strong></td>     <td>API key not provided or invalid</td>    </tr>    <tr>     <td><strong class=\"model-title\">403 (Forbidden)</strong></td>     <td>API key is valid, but the application has insufficient permissions to complete the requested operation</td>    </tr>    <tr>     <td><strong class=\"model-title\">422 (Unprocessable Entity)</strong></td>     <td>API error. The response is as defined in <a href=\"#model-ErrorModel\">ErrorModel</a></td>    </tr>   </tbody>  </table>    <br />    <h3>Error Codes</h3>    <p>Some of the error codes returned in a 422 response are provided bellow*:</p>    <ul>   <li>CertificateNotFound</li>   <li>DocumentNotFound</li>   <li>FolderNotFound</li>   <li>CpfMismatch</li>   <li>CpfNotExpected</li>   <li>InvalidFlowAction</li>   <li>DocumentInvalidKey</li>  </ul>    <p style=\"font-size: 0.9em\">   *The codes shown above are the main error codes. Nonetheless, this list is not comprehensive. New codes may be added anytime without previous warning.  </p>    <!--------------------------------------------------------------------------------------------------------------------->    <br />    <h2>Webhooks</h2>    <p>   It is recomended to subscribe to Webhook events <strong>instead</strong> of polling APIs. To do so, enable webhooks and register an URL that will receive a POST request   whenever one of the events bellow occur.  </p>  <p>   All requests have the format described in <a href=\"#model-Webhooks.WebhookModel\">Webhooks.WebhookModel</a>.   The data field varies according to the webhook event type:  </p>      <table>   <thead>    <tr>     <th>Event type</th>     <th>Description</th>     <th>Payload</th>    </tr>   </thead>   <tbody>    <tr>     <td><strong class=\"model-title\">DocumentSigned</strong></td>     <td>Triggered when a document is signed.</td>     <td><a href=\"#model-Webhooks.DocumentSignedModel\">Webhooks.DocumentSignedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentApproved</strong></td>     <td>Triggered when a document is approved.</td>     <td><a href=\"#model-Webhooks.DocumentApprovedModel\">Webhooks.DocumentApprovedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentRefused</strong></td>     <td>Triggered when a document is refused.</td>     <td><a href=\"#model-Webhooks.DocumentRefusedModel\">Webhooks.DocumentRefusedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentConcluded</strong></td>     <td>Triggered when the flow of a document is concluded.</td>     <td><a href=\"#model-Webhooks.DocumentConcludedModel\">Webhooks.DocumentConcludedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentCanceled</strong></td>     <td>Triggered when the document is canceled.</td>     <td><a href=\"#model-Webhooks.DocumentCanceledModel\">Webhooks.DocumentCanceledModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentsCreated (v1.50.0)</strong></td>     <td>Triggered when one or more documents are created.</td>     <td><a href=\"#model-Webhooks.DocumentsCreatedModel\">Webhooks.DocumentsCreatedModel</a></td>    </tr>   </tbody>  </table>    <p>   To register your application URL and enable Webhooks, access the integrations section in your <a href=\"/private/organizations\" target=\"_blank\">organization's details page</a>.  </p>
 *
 * OpenAPI spec version: 1.55.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * DocumentsApi - axios parameter creator
 * @export
 */
const DocumentsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Moves a batch of documents to a folder.
         * @param {DocumentsMoveDocumentBatchRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsBatchFolderPost: (body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/documents/batch/folder`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
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
         * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.&lt;br /&gt;To search by tag value only, do not use the \&quot;|\&quot;.
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsGet: (isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, Q, limit, offset, order, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/documents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
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
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.<br /><br />  If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.<br /><br />  After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).<br /><br />  Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.<br />
         * @summary Retrieves an URL to redirect the user to the first pending action of the document.
         * @param {string} id Document Id
         * @param {DocumentsActionUrlRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdActionUrlPost: (id, body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdActionUrlPost.');
            }
            const localVarPath = `/api/documents/{id}/action-url`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         * <b>CAUTION: This action cannot be reverted.</b>
         * @summary Cancels the document by providing a reason for the cancellation.
         * @param {string} id
         * @param {DocumentsCancelDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdCancellationPost: (id, body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdCancellationPost.');
            }
            const localVarPath = `/api/documents/{id}/cancellation`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Downloads a specific version type of the document encoding the bytes in Base 64 format.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentB64Get: (id, type, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdContentB64Get.');
            }
            const localVarPath = `/api/documents/{id}/content-b64`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Downloads a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentGet: (id, type, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdContentGet.');
            }
            const localVarPath = `/api/documents/{id}/content`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Deletes a specific document using it's id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdDelete: (id, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdDelete.');
            }
            const localVarPath = `/api/documents/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         * The flow of the document will be restarted.
         * @summary Adds a new version for an envelope.
         * @param {string} id
         * @param {DocumentsEnvelopeAddVersionRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdEnvelopeVersionsPost: (id, body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdEnvelopeVersionsPost.');
            }
            const localVarPath = `/api/documents/{id}/envelope/versions`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Updates the document's flow.
         * @param {string} id Id of the document
         * @param {DocumentsDocumentFlowEditRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFlowPost: (id, body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdFlowPost.');
            }
            const localVarPath = `/api/documents/{id}/flow`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Moves a document to a folder.
         * @param {string} id
         * @param {DocumentsMoveDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFolderPost: (id, body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdFolderPost.');
            }
            const localVarPath = `/api/documents/{id}/folder`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Retrieves the document's details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdGet: (id, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdGet.');
            }
            const localVarPath = `/api/documents/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         * The notified emails are the ones that will be notified after the document is concluded.
         * @summary Updates the document's notified emails
         * @param {string} id Id of the document
         * @param {DocumentsDocumentNotifiedEmailsEditRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdNotifiedEmailsPut: (id, body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdNotifiedEmailsPut.');
            }
            const localVarPath = `/api/documents/{id}/notified-emails`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         * The document's flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
         * @summary Refuses a document by providing a reason for the refusal.
         * @param {string} id
         * @param {RefusalRefusalRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdRefusalPost: (id, body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdRefusalPost.');
            }
            const localVarPath = `/api/documents/{id}/refusal`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document's signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdSignaturesDetailsGet: (id, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdSignaturesDetailsGet.');
            }
            const localVarPath = `/api/documents/{id}/signatures-details`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         * The URL does not require authentication and will be available for 1 hour.  <br /><ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
         * @summary Generates a URL (ticket) to download a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentTicketType} [type] The version type to download
         * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdTicketGet: (id, type, preview, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdTicketGet.');
            }
            const localVarPath = `/api/documents/{id}/ticket`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (preview !== undefined) {
                localVarQueryParameter['preview'] = preview;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         * The flow of the document will be restarted. <br /><br />  If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
         * @summary Adds a new version for the document.
         * @param {string} id
         * @param {DocumentsDocumentAddVersionRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdVersionsPost: (id, body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentsIdVersionsPost.');
            }
            const localVarPath = `/api/documents/{id}/versions`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Validates each signature in a document using the verification code
         * @param {string} key The verification code presented in the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsKeysKeySignaturesGet: (key, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new base_1.RequiredError('key', 'Required parameter key was null or undefined when calling apiDocumentsKeysKeySignaturesGet.');
            }
            const localVarPath = `/api/documents/keys/{key}/signatures`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>. <br /><br />  When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.<br /><br />  Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsPost: (body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/documents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsValidateSignaturesPost: (body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/documents/validate-signatures`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? yield configuration.apiKey("X-Api-Key")
                    : yield configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.DocumentsApiAxiosParamCreator = DocumentsApiAxiosParamCreator;
/**
 * DocumentsApi - functional programming interface
 * @export
 */
const DocumentsApiFp = function (configuration) {
    return {
        /**
         *
         * @summary Moves a batch of documents to a folder.
         * @param {DocumentsMoveDocumentBatchRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsBatchFolderPost(body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsBatchFolderPost(body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
         * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.&lt;br /&gt;To search by tag value only, do not use the \&quot;|\&quot;.
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, Q, limit, offset, order, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, Q, limit, offset, order, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
        apiDocumentsIdActionUrlPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdActionUrlPost(id, body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
        apiDocumentsIdCancellationPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdCancellationPost(id, body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
        apiDocumentsIdContentB64Get(id, type, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdContentB64Get(id, type, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
        apiDocumentsIdContentGet(id, type, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdContentGet(id, type, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         *
         * @summary Deletes a specific document using it's id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdDelete(id, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdDelete(id, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
        apiDocumentsIdEnvelopeVersionsPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdEnvelopeVersionsPost(id, body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
        apiDocumentsIdFlowPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdFlowPost(id, body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
        apiDocumentsIdFolderPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdFolderPost(id, body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         *
         * @summary Retrieves the document's details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdGet(id, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdGet(id, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
        apiDocumentsIdNotifiedEmailsPut(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdNotifiedEmailsPut(id, body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
        apiDocumentsIdRefusalPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdRefusalPost(id, body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document's signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdSignaturesDetailsGet(id, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdSignaturesDetailsGet(id, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
        apiDocumentsIdTicketGet(id, type, preview, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdTicketGet(id, type, preview, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
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
        apiDocumentsIdVersionsPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsIdVersionsPost(id, body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         *
         * @summary Validates each signature in a document using the verification code
         * @param {string} key The verification code presented in the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsKeysKeySignaturesGet(key, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsKeysKeySignaturesGet(key, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>. <br /><br />  When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.<br /><br />  Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsPost(body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsPost(body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsValidateSignaturesPost(body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.DocumentsApiAxiosParamCreator)(configuration).apiDocumentsValidateSignaturesPost(body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
exports.DocumentsApiFp = DocumentsApiFp;
/**
 * DocumentsApi - factory interface
 * @export
 */
const DocumentsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         *
         * @summary Moves a batch of documents to a folder.
         * @param {DocumentsMoveDocumentBatchRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsBatchFolderPost(body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsBatchFolderPost(body, options).then((request) => request(axios, basePath));
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
         * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.&lt;br /&gt;To search by tag value only, do not use the \&quot;|\&quot;.
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, Q, limit, offset, order, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, Q, limit, offset, order, options).then((request) => request(axios, basePath));
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
        apiDocumentsIdActionUrlPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdActionUrlPost(id, body, options).then((request) => request(axios, basePath));
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
        apiDocumentsIdCancellationPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdCancellationPost(id, body, options).then((request) => request(axios, basePath));
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
        apiDocumentsIdContentB64Get(id, type, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdContentB64Get(id, type, options).then((request) => request(axios, basePath));
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
        apiDocumentsIdContentGet(id, type, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdContentGet(id, type, options).then((request) => request(axios, basePath));
            });
        },
        /**
         *
         * @summary Deletes a specific document using it's id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdDelete(id, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdDelete(id, options).then((request) => request(axios, basePath));
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
        apiDocumentsIdEnvelopeVersionsPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdEnvelopeVersionsPost(id, body, options).then((request) => request(axios, basePath));
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
        apiDocumentsIdFlowPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdFlowPost(id, body, options).then((request) => request(axios, basePath));
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
        apiDocumentsIdFolderPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdFolderPost(id, body, options).then((request) => request(axios, basePath));
            });
        },
        /**
         *
         * @summary Retrieves the document's details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdGet(id, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdGet(id, options).then((request) => request(axios, basePath));
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
        apiDocumentsIdNotifiedEmailsPut(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdNotifiedEmailsPut(id, body, options).then((request) => request(axios, basePath));
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
        apiDocumentsIdRefusalPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdRefusalPost(id, body, options).then((request) => request(axios, basePath));
            });
        },
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document's signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdSignaturesDetailsGet(id, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdSignaturesDetailsGet(id, options).then((request) => request(axios, basePath));
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
        apiDocumentsIdTicketGet(id, type, preview, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdTicketGet(id, type, preview, options).then((request) => request(axios, basePath));
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
        apiDocumentsIdVersionsPost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsIdVersionsPost(id, body, options).then((request) => request(axios, basePath));
            });
        },
        /**
         *
         * @summary Validates each signature in a document using the verification code
         * @param {string} key The verification code presented in the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsKeysKeySignaturesGet(key, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsKeysKeySignaturesGet(key, options).then((request) => request(axios, basePath));
            });
        },
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>. <br /><br />  When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.<br /><br />  Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsPost(body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsPost(body, options).then((request) => request(axios, basePath));
            });
        },
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsValidateSignaturesPost(body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.DocumentsApiFp)(configuration).apiDocumentsValidateSignaturesPost(body, options).then((request) => request(axios, basePath));
            });
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
class DocumentsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Moves a batch of documents to a folder.
     * @param {DocumentsMoveDocumentBatchRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsBatchFolderPost(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsBatchFolderPost(body, options).then((request) => request(this.axios, this.basePath));
        });
    }
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
     * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.&lt;br /&gt;To search by tag value only, do not use the \&quot;|\&quot;.
     * @param {string} [Q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, Q, limit, offset, order, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, Q, limit, offset, order, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.<br /><br />  If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.<br /><br />  After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).<br /><br />  Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.<br />
     * @summary Retrieves an URL to redirect the user to the first pending action of the document.
     * @param {string} id Document Id
     * @param {DocumentsActionUrlRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdActionUrlPost(id, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdActionUrlPost(id, body, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     * <b>CAUTION: This action cannot be reverted.</b>
     * @summary Cancels the document by providing a reason for the cancellation.
     * @param {string} id
     * @param {DocumentsCancelDocumentRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdCancellationPost(id, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdCancellationPost(id, body, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     *
     * @summary Downloads a specific version type of the document encoding the bytes in Base 64 format.
     * @param {string} id Document id
     * @param {DocumentDownloadTypes} [type] The version type to download
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdContentB64Get(id, type, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdContentB64Get(id, type, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     *
     * @summary Downloads a specific version type of the document.
     * @param {string} id Document id
     * @param {DocumentDownloadTypes} [type] The version type to download
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdContentGet(id, type, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdContentGet(id, type, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     *
     * @summary Deletes a specific document using it's id.
     * @param {string} id Document id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdDelete(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdDelete(id, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     * The flow of the document will be restarted.
     * @summary Adds a new version for an envelope.
     * @param {string} id
     * @param {DocumentsEnvelopeAddVersionRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdEnvelopeVersionsPost(id, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdEnvelopeVersionsPost(id, body, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     *
     * @summary Updates the document's flow.
     * @param {string} id Id of the document
     * @param {DocumentsDocumentFlowEditRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdFlowPost(id, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdFlowPost(id, body, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     *
     * @summary Moves a document to a folder.
     * @param {string} id
     * @param {DocumentsMoveDocumentRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdFolderPost(id, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdFolderPost(id, body, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     *
     * @summary Retrieves the document's details.
     * @param {string} id Document id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdGet(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdGet(id, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     * The notified emails are the ones that will be notified after the document is concluded.
     * @summary Updates the document's notified emails
     * @param {string} id Id of the document
     * @param {DocumentsDocumentNotifiedEmailsEditRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdNotifiedEmailsPut(id, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdNotifiedEmailsPut(id, body, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     * The document's flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
     * @summary Refuses a document by providing a reason for the refusal.
     * @param {string} id
     * @param {RefusalRefusalRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdRefusalPost(id, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdRefusalPost(id, body, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     * This will perform the same validations as verifying the document signatures using the verification code.
     * @summary Retrieves the details of the document's signatures.
     * @param {string} id The Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdSignaturesDetailsGet(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdSignaturesDetailsGet(id, options).then((request) => request(this.axios, this.basePath));
        });
    }
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
    apiDocumentsIdTicketGet(id, type, preview, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdTicketGet(id, type, preview, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     * The flow of the document will be restarted. <br /><br />  If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
     * @summary Adds a new version for the document.
     * @param {string} id
     * @param {DocumentsDocumentAddVersionRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsIdVersionsPost(id, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsIdVersionsPost(id, body, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     *
     * @summary Validates each signature in a document using the verification code
     * @param {string} key The verification code presented in the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsKeysKeySignaturesGet(key, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsKeysKeySignaturesGet(key, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>. <br /><br />  When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.<br /><br />  Returns a list of ids of each document created.
     * @summary Creates one or multiple documents.
     * @param {DocumentsCreateDocumentRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsPost(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsPost(body, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
     * @summary Validates each signature in the uploaded document
     * @param {SignatureSignaturesInfoRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    apiDocumentsValidateSignaturesPost(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.DocumentsApiFp)(this.configuration).apiDocumentsValidateSignaturesPost(body, options).then((request) => request(this.axios, this.basePath));
        });
    }
}
exports.DocumentsApi = DocumentsApi;
