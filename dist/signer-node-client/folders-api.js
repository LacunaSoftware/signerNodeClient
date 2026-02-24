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
exports.FoldersApi = exports.FoldersApiFactory = exports.FoldersApiFp = exports.FoldersApiAxiosParamCreator = void 0;
/* tslint:disable */
/* eslint-disable */
/**
 * Dropsigner
 * <!--------------------------------------------------------------------------------------------------------------------->  <h2>Authentication</h2>  <p>  In order to call this APIs, you will need an <strong>API key</strong>. Set the API key in the header <span class=\"code\">X-Api-Key</span>: </p>  <pre>X-Api-Key: your-app|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</pre>  <!---------------------------------------------------------------------------------------------------------------------> <br />  <h2>HTTP Codes</h2>  <p>  The APIs will return the following HTTP codes: </p>  <table>  <thead>   <tr>    <th>Code</th>    <th>Description</th>   </tr>  </thead>  <tbody>   <tr>    <td><strong class=\"model-title\">200 (OK)</strong></td>    <td>Request processed successfully. The response is different for each API, please refer to the operation's documentation</td>   </tr>   <tr>    <td><strong class=\"model-title\">400 (Bad Request)</strong></td>    <td>Syntax error. For instance, when a required field was not provided</td>   </tr>   <tr>    <td><strong class=\"model-title\">401 (Unauthorized)</strong></td>    <td>API key not provided or invalid</td>   </tr>   <tr>    <td><strong class=\"model-title\">403 (Forbidden)</strong></td>    <td>API key is valid, but the application has insufficient permissions to complete the requested operation</td>   </tr>   <tr>    <td><strong class=\"model-title\">422 (Unprocessable Entity)</strong></td>    <td>API error. The response is as defined in <a href=\"#model-ErrorModel\">ErrorModel</a></td>   </tr>  </tbody> </table>  <br />  <h3>Error Codes</h3>  <p>Some of the error codes returned in a 422 response are provided bellow*:</p>  <ul>  <li>CertificateNotFound</li>  <li>DocumentNotFound</li>  <li>FolderNotFound</li>  <li>CpfMismatch</li>  <li>CpfNotExpected</li>  <li>InvalidFlowAction</li>  <li>DocumentInvalidKey</li> </ul>  <p style=\"font-size: 0.9em\">  *The codes shown above are the main error codes. Nonetheless, this list is not comprehensive. New codes may be added anytime without previous warning. </p>  <!--------------------------------------------------------------------------------------------------------------------->  <br />  <h2>Webhooks</h2>  <p>  It is recomended to subscribe to Webhook events <strong>instead</strong> of polling APIs. To do so, enable webhooks and register an URL that will receive a POST request  whenever one of the events bellow occur. </p> <p>  All requests have the format described in <a href=\"#model-Webhooks.WebhookModel\">Webhooks.WebhookModel</a>.  The data field varies according to the webhook event type: </p>   <table>  <thead>   <tr>    <th>Event type</th>    <th>Description</th>    <th>Payload</th>   </tr>  </thead>  <tbody>   <tr>    <td><strong class=\"model-title\">DocumentSigned</strong></td>    <td>Triggered when a document is signed.</td>    <td><a href=\"#model-Webhooks.DocumentSignedModel\">Webhooks.DocumentSignedModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentApproved</strong></td>    <td>Triggered when a document is approved.</td>    <td><a href=\"#model-Webhooks.DocumentApprovedModel\">Webhooks.DocumentApprovedModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentRefused</strong></td>    <td>Triggered when a document is refused.</td>    <td><a href=\"#model-Webhooks.DocumentRefusedModel\">Webhooks.DocumentRefusedModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentConcluded</strong></td>    <td>Triggered when the flow of a document is concluded.</td>    <td><a href=\"#model-Webhooks.DocumentConcludedModel\">Webhooks.DocumentConcludedModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentCanceled</strong></td>    <td>Triggered when the document is canceled.</td>    <td><a href=\"#model-Webhooks.DocumentCanceledModel\">Webhooks.DocumentCanceledModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentExpired (v1.33.0)</strong></td>    <td>Triggered when the document is expired.</td>    <td><a href=\"#model-Webhooks.DocumentExpiredModel\">Webhooks.DocumentExpiredModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentsCreated (v1.50.0)</strong></td>    <td>Triggered when one or more documents are created.</td>    <td><a href=\"#model-Webhooks.DocumentsCreatedModel\">Webhooks.DocumentsCreatedModel</a></td>   </tr>   <tr>    <td><strong class=\"model-title\">DocumentsDeleted (v1.78.0)</strong></td>    <td>Triggered when one or more documents are deleted.</td>    <td><a href=\"#model-Webhooks.DocumentsDeletedModel\">Webhooks.DocumentsDeletedModel</a></td>   </tr>  </tbody> </table>  <p>  To register your application URL and enable Webhooks, access the integrations section in your <a href=\"/private/organizations\" target=\"_blank\">organization's details page</a>. </p>
 *
 * OpenAPI spec version: 2.6.0
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
 * FoldersApi - axios parameter creator
 * @export
 */
var FoldersApiAxiosParamCreator = function (configuration) {
    var _this = this;
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
        apiFoldersGet: function (Q_1, limit_1, offset_1, order_1, filterByParent_1, parentId_1) {
            var args_1 = [];
            for (var _i = 6; _i < arguments.length; _i++) {
                args_1[_i - 6] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([Q_1, limit_1, offset_1, order_1, filterByParent_1, parentId_1], args_1, true), void 0, function (Q, limit, offset, order, filterByParent, parentId, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            localVarPath = "/api/folders";
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
         * @param {FoldersFolderDeleteRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdDeletePost: function (id_1, body_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1, body_1], args_1, true), void 0, function (id, body, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiFoldersIdDeletePost.');
                            }
                            localVarPath = "/api/folders/{id}/delete"
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
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Retrieves the folder's info.
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
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiFoldersIdGet.');
                            }
                            localVarPath = "/api/folders/{id}"
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
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         *
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersPost: function (body_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([body_1], args_1, true), void 0, function (body, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            localVarPath = "/api/folders";
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
        apiFoldersGet: function (Q, limit, offset, order, filterByParent, parentId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.FoldersApiAxiosParamCreator)(configuration).apiFoldersGet(Q, limit, offset, order, filterByParent, parentId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
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
         * @summary Deletes a folder.
         * @param {string} id Id of the folder to be deleted
         * @param {FoldersFolderDeleteRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdDeletePost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.FoldersApiAxiosParamCreator)(configuration).apiFoldersIdDeletePost(id, body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
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
         * @summary Retrieves the folder's info.
         * @param {string} id Folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdGet: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.FoldersApiAxiosParamCreator)(configuration).apiFoldersIdGet(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
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
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersPost: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.FoldersApiAxiosParamCreator)(configuration).apiFoldersPost(body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
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
        apiFoldersGet: function (Q, limit, offset, order, filterByParent, parentId, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.FoldersApiFp)(configuration).apiFoldersGet(Q, limit, offset, order, filterByParent, parentId, options).then(function (request) { return request(axios, basePath); })];
                });
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
        apiFoldersIdDeletePost: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.FoldersApiFp)(configuration).apiFoldersIdDeletePost(id, body, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @summary Retrieves the folder's info.
         * @param {string} id Folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdGet: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.FoldersApiFp)(configuration).apiFoldersIdGet(id, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersPost: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.FoldersApiFp)(configuration).apiFoldersPost(body, options).then(function (request) { return request(axios, basePath); })];
                });
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
var FoldersApi = /** @class */ (function (_super) {
    __extends(FoldersApi, _super);
    function FoldersApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    FoldersApi.prototype.apiFoldersGet = function (Q, limit, offset, order, filterByParent, parentId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.FoldersApiFp)(this.configuration).apiFoldersGet(Q, limit, offset, order, filterByParent, parentId, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @summary Deletes a folder.
     * @param {string} id Id of the folder to be deleted
     * @param {FoldersFolderDeleteRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    FoldersApi.prototype.apiFoldersIdDeletePost = function (id, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.FoldersApiFp)(this.configuration).apiFoldersIdDeletePost(id, body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @summary Retrieves the folder's info.
     * @param {string} id Folder id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    FoldersApi.prototype.apiFoldersIdGet = function (id, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.FoldersApiFp)(this.configuration).apiFoldersIdGet(id, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @summary Creates a folder.
     * @param {FoldersFolderCreateRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    FoldersApi.prototype.apiFoldersPost = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.FoldersApiFp)(this.configuration).apiFoldersPost(body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    return FoldersApi;
}(base_1.BaseAPI));
exports.FoldersApi = FoldersApi;
