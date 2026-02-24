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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { DocumentMarkMarksSessionCreateRequest } from '../models';
import { DocumentMarkMarksSessionCreateResponse } from '../models';
import { DocumentMarkMarksSessionModel } from '../models';
import { DocumentsCreateDocumentRequest } from '../models';
import { ErrorModel } from '../models';
/**
 * MarksSessionsApi - axios parameter creator
 * @export
 */
export const MarksSessionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction's prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session from a Document create request.
         * @param {DocumentsCreateDocumentRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsDocumentsPost: async (body?: DocumentsCreateDocumentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/marks-sessions/documents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Api-Key")
                    : await configuration.apiKey;
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
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves session information.
         * @param {string} id The session ID obtained when the session was created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiMarksSessionsIdGet.');
            }
            const localVarPath = `/api/marks-sessions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Api-Key")
                    : await configuration.apiKey;
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
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction's prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session by requiring only the necessary data.
         * @param {DocumentMarkMarksSessionCreateRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsPost: async (body?: DocumentMarkMarksSessionCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/marks-sessions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Api-Key")
                    : await configuration.apiKey;
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
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MarksSessionsApi - functional programming interface
 * @export
 */
export const MarksSessionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction's prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session from a Document create request.
         * @param {DocumentsCreateDocumentRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMarksSessionsDocumentsPost(body?: DocumentsCreateDocumentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DocumentMarkMarksSessionCreateResponse>>> {
            const localVarAxiosArgs = await MarksSessionsApiAxiosParamCreator(configuration).apiMarksSessionsDocumentsPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Retrieves session information.
         * @param {string} id The session ID obtained when the session was created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMarksSessionsIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DocumentMarkMarksSessionModel>>> {
            const localVarAxiosArgs = await MarksSessionsApiAxiosParamCreator(configuration).apiMarksSessionsIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction's prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session by requiring only the necessary data.
         * @param {DocumentMarkMarksSessionCreateRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMarksSessionsPost(body?: DocumentMarkMarksSessionCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DocumentMarkMarksSessionCreateResponse>>> {
            const localVarAxiosArgs = await MarksSessionsApiAxiosParamCreator(configuration).apiMarksSessionsPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MarksSessionsApi - factory interface
 * @export
 */
export const MarksSessionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction's prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session from a Document create request.
         * @param {DocumentsCreateDocumentRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMarksSessionsDocumentsPost(body?: DocumentsCreateDocumentRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<DocumentMarkMarksSessionCreateResponse>> {
            return MarksSessionsApiFp(configuration).apiMarksSessionsDocumentsPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieves session information.
         * @param {string} id The session ID obtained when the session was created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMarksSessionsIdGet(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<DocumentMarkMarksSessionModel>> {
            return MarksSessionsApiFp(configuration).apiMarksSessionsIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction's prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session by requiring only the necessary data.
         * @param {DocumentMarkMarksSessionCreateRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMarksSessionsPost(body?: DocumentMarkMarksSessionCreateRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<DocumentMarkMarksSessionCreateResponse>> {
            return MarksSessionsApiFp(configuration).apiMarksSessionsPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MarksSessionsApi - object-oriented interface
 * @export
 * @class MarksSessionsApi
 * @extends {BaseAPI}
 */
export class MarksSessionsApi extends BaseAPI {
    /**
     * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction's prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
     * @summary Creates a mark positioning session from a Document create request.
     * @param {DocumentsCreateDocumentRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarksSessionsApi
     */
    public async apiMarksSessionsDocumentsPost(body?: DocumentsCreateDocumentRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<DocumentMarkMarksSessionCreateResponse>> {
        return MarksSessionsApiFp(this.configuration).apiMarksSessionsDocumentsPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Retrieves session information.
     * @param {string} id The session ID obtained when the session was created
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarksSessionsApi
     */
    public async apiMarksSessionsIdGet(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<DocumentMarkMarksSessionModel>> {
        return MarksSessionsApiFp(this.configuration).apiMarksSessionsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction's prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
     * @summary Creates a mark positioning session by requiring only the necessary data.
     * @param {DocumentMarkMarksSessionCreateRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarksSessionsApi
     */
    public async apiMarksSessionsPost(body?: DocumentMarkMarksSessionCreateRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<DocumentMarkMarksSessionCreateResponse>> {
        return MarksSessionsApiFp(this.configuration).apiMarksSessionsPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
