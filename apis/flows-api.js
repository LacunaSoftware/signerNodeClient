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
exports.FlowsApi = exports.FlowsApiFactory = exports.FlowsApiFp = exports.FlowsApiAxiosParamCreator = void 0;
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
 * FlowsApi - axios parameter creator
 * @export
 */
var FlowsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         *
         * @summary List created flows.
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsGet: function (Q, limit, offset, order, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            localVarPath = "/api/document-flows";
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
         * @summary Deletes a flow.
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdDelete: function (id, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentFlowsIdDelete.');
                            }
                            localVarPath = "/api/document-flows/{id}"
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
         *
         * @summary Retrieves flow details
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdGet: function (id, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentFlowsIdGet.');
                            }
                            localVarPath = "/api/document-flows/{id}"
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
         *
         * @summary Updates a flow.
         * @param {string} id
         * @param {DocumentFlowsDocumentFlowData} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdPut: function (id, body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            if (id === null || id === undefined) {
                                throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling apiDocumentFlowsIdPut.');
                            }
                            localVarPath = "/api/document-flows/{id}"
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
         *
         * @summary Creates a flow that can be used to create documents
         * @param {DocumentFlowsDocumentFlowCreateRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsPost: function (body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            localVarPath = "/api/document-flows";
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
exports.FlowsApiAxiosParamCreator = FlowsApiAxiosParamCreator;
/**
 * FlowsApi - functional programming interface
 * @export
 */
var FlowsApiFp = function (configuration) {
    return {
        /**
         *
         * @summary List created flows.
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsGet: function (Q, limit, offset, order, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.FlowsApiAxiosParamCreator)(configuration).apiDocumentFlowsGet(Q, limit, offset, order, options)];
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
                        case 0: return [4 /*yield*/, (0, exports.FlowsApiAxiosParamCreator)(configuration).apiDocumentFlowsIdDelete(id, options)];
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
                        case 0: return [4 /*yield*/, (0, exports.FlowsApiAxiosParamCreator)(configuration).apiDocumentFlowsIdGet(id, options)];
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
         * @summary Updates a flow.
         * @param {string} id
         * @param {DocumentFlowsDocumentFlowData} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdPut: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.FlowsApiAxiosParamCreator)(configuration).apiDocumentFlowsIdPut(id, body, options)];
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
         * @summary Creates a flow that can be used to create documents
         * @param {DocumentFlowsDocumentFlowCreateRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsPost: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.FlowsApiAxiosParamCreator)(configuration).apiDocumentFlowsPost(body, options)];
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
exports.FlowsApiFp = FlowsApiFp;
/**
 * FlowsApi - factory interface
 * @export
 */
var FlowsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         *
         * @summary List created flows.
         * @param {string} [Q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsGet: function (Q, limit, offset, order, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.FlowsApiFp)(configuration).apiDocumentFlowsGet(Q, limit, offset, order, options).then(function (request) { return request(axios, basePath); })];
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
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.FlowsApiFp)(configuration).apiDocumentFlowsIdDelete(id, options).then(function (request) { return request(axios, basePath); })];
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
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.FlowsApiFp)(configuration).apiDocumentFlowsIdGet(id, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @summary Updates a flow.
         * @param {string} id
         * @param {DocumentFlowsDocumentFlowData} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdPut: function (id, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.FlowsApiFp)(configuration).apiDocumentFlowsIdPut(id, body, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @summary Creates a flow that can be used to create documents
         * @param {DocumentFlowsDocumentFlowCreateRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsPost: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.FlowsApiFp)(configuration).apiDocumentFlowsPost(body, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        }
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
     * @param {string} [Q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    FlowsApi.prototype.apiDocumentFlowsGet = function (Q, limit, offset, order, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.FlowsApiFp)(this.configuration).apiDocumentFlowsGet(Q, limit, offset, order, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.FlowsApiFp)(this.configuration).apiDocumentFlowsIdDelete(id, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.FlowsApiFp)(this.configuration).apiDocumentFlowsIdGet(id, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @summary Updates a flow.
     * @param {string} id
     * @param {DocumentFlowsDocumentFlowData} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    FlowsApi.prototype.apiDocumentFlowsIdPut = function (id, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.FlowsApiFp)(this.configuration).apiDocumentFlowsIdPut(id, body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @summary Creates a flow that can be used to create documents
     * @param {DocumentFlowsDocumentFlowCreateRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    FlowsApi.prototype.apiDocumentFlowsPost = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.FlowsApiFp)(this.configuration).apiDocumentFlowsPost(body, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    return FlowsApi;
}(base_1.BaseAPI));
exports.FlowsApi = FlowsApi;
