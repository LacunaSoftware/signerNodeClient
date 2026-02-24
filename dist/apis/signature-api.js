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
exports.SignatureApi = exports.SignatureApiFp = exports.SignatureApiAxiosParamCreator = void 0;
/* tslint:disable */
/* eslint-disable */
/**
 * Signature API - Public signature endpoints (StartPublicSignature, CompletePublicSignature).
 * Not from Swagger spec - added manually to match C# client behavior.
 */
var axios_1 = require("axios");
// @ts-ignore
var base_1 = require("../base");
/**
 * SignatureApi - axios parameter creator
 * @export
 */
var SignatureApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Starts the public signature flow for a document identified by key. Returns the hash to sign and a token for completion.
         * @summary Start public signature
         * @param {string} documentKey Document key (from the document action URL path)
         * @param {SignaturePublicStartSignatureRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentKeyDocumentKeyStartPublicSignaturePost: function (documentKey_1, body_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([documentKey_1, body_1], args_1, true), void 0, function (documentKey, body, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (documentKey === null || documentKey === undefined) {
                                throw new base_1.RequiredError('documentKey', 'Required parameter documentKey was null or undefined when calling apiDocumentKeyDocumentKeyStartPublicSignaturePost.');
                            }
                            localVarPath = "/api/documents/keys/{documentKey}/signature/certificate".replace("{".concat('documentKey', "}"), encodeURIComponent(String(documentKey)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey('X-Api-Key')];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter['X-Api-Key'] = localVarApiKeyValue;
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
                            localVarUrlObj.search = new URLSearchParams(query).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = typeof body !== 'string' || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization
                                ? JSON.stringify(body !== undefined ? body : {})
                                : (body || '');
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Completes the public signature by submitting the signature bytes for the hash returned by StartPublicSignature.
         * @summary Complete public signature
         * @param {string} documentKey Document key (from the document action URL path)
         * @param {SignaturePublicCompleteSignatureRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentKeyDocumentKeyCompletePublicSignaturePost: function (documentKey_1, body_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([documentKey_1, body_1], args_1, true), void 0, function (documentKey, body, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarApiKeyValue, _a, query, key, key, headersFromBaseOptions, needsSerialization;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (documentKey === null || documentKey === undefined) {
                                throw new base_1.RequiredError('documentKey', 'Required parameter documentKey was null or undefined when calling apiDocumentKeyDocumentKeyCompletePublicSignaturePost.');
                            }
                            localVarPath = "/api/documents/keys/{documentKey}/signature".replace("{".concat('documentKey', "}"), encodeURIComponent(String(documentKey)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                            if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.apiKey('X-Api-Key')];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.apiKey];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarApiKeyValue = _a;
                            localVarHeaderParameter['X-Api-Key'] = localVarApiKeyValue;
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
                            localVarUrlObj.search = new URLSearchParams(query).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = typeof body !== 'string' || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                            localVarRequestOptions.data = needsSerialization
                                ? JSON.stringify(body !== undefined ? body : {})
                                : (body || '');
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
exports.SignatureApiAxiosParamCreator = SignatureApiAxiosParamCreator;
/**
 * SignatureApi - functional programming interface
 * @export
 */
var SignatureApiFp = function (configuration) {
    return {
        /**
         * @summary Start public signature
         * @param {string} documentKey Document key
         * @param {SignaturePublicStartSignatureRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startPublicSignature: function (documentKey, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.SignatureApiAxiosParamCreator)(configuration).apiDocumentKeyDocumentKeyStartPublicSignaturePost(documentKey, body, options)];
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
         * @summary Complete public signature
         * @param {string} documentKey Document key
         * @param {SignaturePublicCompleteSignatureRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completePublicSignature: function (documentKey, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.SignatureApiAxiosParamCreator)(configuration).apiDocumentKeyDocumentKeyCompletePublicSignaturePost(documentKey, body, options)];
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
exports.SignatureApiFp = SignatureApiFp;
/**
 * SignatureApi - object-oriented interface
 * @export
 * @class SignatureApi
 * @extends {BaseAPI}
 */
var SignatureApi = /** @class */ (function (_super) {
    __extends(SignatureApi, _super);
    function SignatureApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Starts the public signature flow. Returns the hash to sign and a token for completion.
     * @summary Start public signature
     * @param {string} documentKey Document key (from the document action URL path)
     * @param {SignaturePublicStartSignatureRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignatureApi
     */
    SignatureApi.prototype.startPublicSignatureAsync = function (documentKey, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.SignatureApiFp)(this.configuration)
                        .startPublicSignature(documentKey, body, options)
                        .then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * Completes the public signature by submitting the signature bytes.
     * @summary Complete public signature
     * @param {string} documentKey Document key (from the document action URL path)
     * @param {SignaturePublicCompleteSignatureRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignatureApi
     */
    SignatureApi.prototype.completePublicSignatureAsync = function (documentKey, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.SignatureApiFp)(this.configuration)
                        .completePublicSignature(documentKey, body, options)
                        .then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    return SignatureApi;
}(base_1.BaseAPI));
exports.SignatureApi = SignatureApi;
