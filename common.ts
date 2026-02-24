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


import { Configuration } from "./configuration";
import { RequiredError, RequestArgs } from "./base";
import { AxiosInstance, AxiosResponse } from 'axios';

/**
 *
 * @export
 */
export const DUMMY_BASE_URL = 'https://example.com'

/**
 *
 * @throws {RequiredError}
 * @export
 */
export const assertParamExists = function (functionName: string, paramName: string, paramValue: unknown) {
    if (paramValue === null || paramValue === undefined) {
        throw new RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
    }
}

/**
 *
 * @export
 */
export const setApiKeyToObject = async function (object: any, keyParamName: string, configuration?: Configuration) {
    if (configuration && configuration.apiKey) {
        const localVarApiKeyValue = typeof configuration.apiKey === 'function'
            ? await configuration.apiKey(keyParamName)
            : await configuration.apiKey;
        object[keyParamName] = localVarApiKeyValue;
    }
}

/**
 *
 * @export
 */
export const setBasicAuthToObject = function (object: any, configuration?: Configuration) {
    if (configuration && (configuration.username || configuration.password)) {
        object["auth"] = { username: configuration.username, password: configuration.password };
    }
}

/**
 *
 * @export
 */
export const setBearerAuthToObject = async function (object: any, configuration?: Configuration) {
    if (configuration && configuration.accessToken) {
        const accessToken = typeof configuration.accessToken === 'function'
            ? await configuration.accessToken()
            : await configuration.accessToken;
        object["Authorization"] = "Bearer " + accessToken;
    }
}

/**
 *
 * @export
 */
export const setOAuthToObject = async function (object: any, name: string, scopes: string[], configuration?: Configuration) {
    if (configuration && configuration.accessToken) {
        const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
            ? await configuration.accessToken(name, scopes)
            : await configuration.accessToken;
        object["Authorization"] = "Bearer " + localVarAccessTokenValue;
    }
}

function setFlattenedQueryParams(urlSearchParams: URLSearchParams, parameter: any, key: string = ""): void {
    if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
            (parameter as any[]).forEach(item => setFlattenedQueryParams(urlSearchParams, item, key));
        } 
        else {
            Object.keys(parameter).forEach(currentKey => 
                setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`)
            );
        }
    } 
    else {
        if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, parameter);
        } 
        else {
            urlSearchParams.set(key, parameter);
        }
    }
}

/**
 *
 * @export
 */
export const setSearchParams = function (url: URL, ...objects: any[]) {
    const searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
}

/**
 *
 * @export
 */
export const serializeDataIfNeeded = function (value: any, requestOptions: any, configuration?: Configuration) {
    const nonString = typeof value !== 'string';
    const needsSerialization = nonString && configuration && configuration.isJsonMime
        ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? value : {})
        : (value || "");
}

/**
 *
 * @export
 */
export const toPathString = function (url: URL) {
    return url.pathname + url.search + url.hash
}

/**
 *
 * @export
 */
export const createRequestFunction = function (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: Configuration) {
    return <T = unknown, R = AxiosResponse<T>>(axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = {...axiosArgs.options, url: (configuration?.basePath || basePath) + axiosArgs.url};
        return axios.request<T, R>(axiosRequestArgs);
    };
}
