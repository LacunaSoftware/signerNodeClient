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
exports.FoldersApi = exports.FoldersApiFactory = exports.FoldersApiFp = exports.FoldersApiAxiosParamCreator = void 0;
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
 * FoldersApi - axios parameter creator
 * @export
 */
const FoldersApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * The Q parameter allows you to filter by folder name.
         * @summary Retrieves all folders paginating the response
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {boolean} [filterByParent] if true filters by the parentId parameter
         * @param {string} [parentId] Id of the parent folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersGet: (Q, limit, offset, order, filterByParent, parentId, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/folders`;
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
            if (filterByParent !== undefined) {
                localVarQueryParameter['filterByParent'] = filterByParent;
            }
            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
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
         * @summary Deletes a folder.
         * @param {string} id Id of the folder to be deleted
         * @param {FoldersFolderDeleteRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdDeletePost: (id, body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiFoldersIdDeletePost.');
            }
            const localVarPath = `/api/folders/{id}/delete`
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
         * @summary Retrieves the folder's info.
         * @param {string} id Folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdGet: (id, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiFoldersIdGet.');
            }
            const localVarPath = `/api/folders/{id}`
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
         *
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersPost: (body, options = {}) => __awaiter(this, void 0, void 0, function* () {
            const localVarPath = `/api/folders`;
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
exports.FoldersApiAxiosParamCreator = FoldersApiAxiosParamCreator;
/**
 * FoldersApi - functional programming interface
 * @export
 */
const FoldersApiFp = function (configuration) {
    return {
        /**
         * The Q parameter allows you to filter by folder name.
         * @summary Retrieves all folders paginating the response
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {boolean} [filterByParent] if true filters by the parentId parameter
         * @param {string} [parentId] Id of the parent folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersGet(Q, limit, offset, order, filterByParent, parentId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.FoldersApiAxiosParamCreator)(configuration).apiFoldersGet(Q, limit, offset, order, filterByParent, parentId, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         *
         * @summary Deletes a folder.
         * @param {string} id Id of the folder to be deleted
         * @param {FoldersFolderDeleteRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdDeletePost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.FoldersApiAxiosParamCreator)(configuration).apiFoldersIdDeletePost(id, body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         *
         * @summary Retrieves the folder's info.
         * @param {string} id Folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdGet(id, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.FoldersApiAxiosParamCreator)(configuration).apiFoldersIdGet(id, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
        /**
         *
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersPost(body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield (0, exports.FoldersApiAxiosParamCreator)(configuration).apiFoldersPost(body, options);
                return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                    const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                    return axios.request(axiosRequestArgs);
                };
            });
        },
    };
};
exports.FoldersApiFp = FoldersApiFp;
/**
 * FoldersApi - factory interface
 * @export
 */
const FoldersApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * The Q parameter allows you to filter by folder name.
         * @summary Retrieves all folders paginating the response
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {boolean} [filterByParent] if true filters by the parentId parameter
         * @param {string} [parentId] Id of the parent folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersGet(Q, limit, offset, order, filterByParent, parentId, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.FoldersApiFp)(configuration).apiFoldersGet(Q, limit, offset, order, filterByParent, parentId, options).then((request) => request(axios, basePath));
            });
        },
        /**
         *
         * @summary Deletes a folder.
         * @param {string} id Id of the folder to be deleted
         * @param {FoldersFolderDeleteRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdDeletePost(id, body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.FoldersApiFp)(configuration).apiFoldersIdDeletePost(id, body, options).then((request) => request(axios, basePath));
            });
        },
        /**
         *
         * @summary Retrieves the folder's info.
         * @param {string} id Folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdGet(id, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.FoldersApiFp)(configuration).apiFoldersIdGet(id, options).then((request) => request(axios, basePath));
            });
        },
        /**
         *
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersPost(body, options) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, exports.FoldersApiFp)(configuration).apiFoldersPost(body, options).then((request) => request(axios, basePath));
            });
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
class FoldersApi extends base_1.BaseAPI {
    /**
     * The Q parameter allows you to filter by folder name.
     * @summary Retrieves all folders paginating the response
     * @param {string} [Q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order]
     * @param {boolean} [filterByParent] if true filters by the parentId parameter
     * @param {string} [parentId] Id of the parent folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    apiFoldersGet(Q, limit, offset, order, filterByParent, parentId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.FoldersApiFp)(this.configuration).apiFoldersGet(Q, limit, offset, order, filterByParent, parentId, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     *
     * @summary Deletes a folder.
     * @param {string} id Id of the folder to be deleted
     * @param {FoldersFolderDeleteRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    apiFoldersIdDeletePost(id, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.FoldersApiFp)(this.configuration).apiFoldersIdDeletePost(id, body, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     *
     * @summary Retrieves the folder's info.
     * @param {string} id Folder id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    apiFoldersIdGet(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.FoldersApiFp)(this.configuration).apiFoldersIdGet(id, options).then((request) => request(this.axios, this.basePath));
        });
    }
    /**
     *
     * @summary Creates a folder.
     * @param {FoldersFolderCreateRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    apiFoldersPost(body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, exports.FoldersApiFp)(this.configuration).apiFoldersPost(body, options).then((request) => request(this.axios, this.basePath));
        });
    }
}
exports.FoldersApi = FoldersApi;
