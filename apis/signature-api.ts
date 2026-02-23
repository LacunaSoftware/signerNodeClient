/* tslint:disable */
/* eslint-disable */
/**
 * Signature API - Public signature endpoints (StartPublicSignature, CompletePublicSignature).
 * Not from Swagger spec - added manually to match C# client behavior.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// @ts-ignore
import { BASE_PATH, RequestArgs, BaseAPI, RequiredError } from '../base';
import {
    SignaturePublicStartSignatureRequest,
    SignaturePublicStartSignatureResponse,
    SignatureCompleteSignatureRequest,
    SignatureCompleteSignatureResponse,
} from '../models';

/**
 * SignatureApi - axios parameter creator
 * @export
 */
export const SignatureApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Starts the public signature flow for a document identified by key. Returns the hash to sign and a token for completion.
         * @summary Start public signature
         * @param {string} documentKey Document key (from the document action URL path)
         * @param {SignaturePublicStartSignatureRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentKeyDocumentKeyStartPublicSignaturePost: async (
            documentKey: string,
            body?: SignaturePublicStartSignatureRequest,
            options: AxiosRequestConfig = {}
        ): Promise<RequestArgs> => {
            if (documentKey === null || documentKey === undefined) {
                throw new RequiredError(
                    'documentKey',
                    'Required parameter documentKey was null or undefined when calling apiDocumentKeyDocumentKeyStartPublicSignaturePost.'
                );
            }
            const localVarPath = `/api/documents/keys/{documentKey}/signature/certificate`.replace(
                `{${'documentKey'}}`,
                encodeURIComponent(String(documentKey))
            );
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue =
                    typeof configuration.apiKey === 'function'
                        ? await configuration.apiKey('X-Api-Key')
                        : await configuration.apiKey;
                localVarHeaderParameter['X-Api-Key'] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = new URLSearchParams(query).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            const needsSerialization =
                typeof body !== 'string' || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization
                ? JSON.stringify(body !== undefined ? body : {})
                : (body || '');

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Completes the public signature by submitting the signature bytes for the hash returned by StartPublicSignature.
         * @summary Complete public signature
         * @param {string} documentKey Document key (from the document action URL path)
         * @param {SignatureCompleteSignatureRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentKeyDocumentKeyCompletePublicSignaturePost: async (
            documentKey: string,
            body?: SignatureCompleteSignatureRequest,
            options: AxiosRequestConfig = {}
        ): Promise<RequestArgs> => {
            if (documentKey === null || documentKey === undefined) {
                throw new RequiredError(
                    'documentKey',
                    'Required parameter documentKey was null or undefined when calling apiDocumentKeyDocumentKeyCompletePublicSignaturePost.'
                );
            }
            const localVarPath = `/api/documents/keys/{documentKey}/signature`.replace(
                `{${'documentKey'}}`,
                encodeURIComponent(String(documentKey))
            );
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue =
                    typeof configuration.apiKey === 'function'
                        ? await configuration.apiKey('X-Api-Key')
                        : await configuration.apiKey;
                localVarHeaderParameter['X-Api-Key'] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = new URLSearchParams(query).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            const needsSerialization =
                typeof body !== 'string' || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization
                ? JSON.stringify(body !== undefined ? body : {})
                : (body || '');

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    };
};

/**
 * SignatureApi - functional programming interface
 * @export
 */
export const SignatureApiFp = function (configuration?: Configuration) {
    return {
        /**
         * @summary Start public signature
         * @param {string} documentKey Document key
         * @param {SignaturePublicStartSignatureRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startPublicSignature(
            documentKey: string,
            body?: SignaturePublicStartSignatureRequest,
            options?: AxiosRequestConfig
        ): Promise<
            (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SignaturePublicStartSignatureResponse>>
        > {
            const localVarAxiosArgs = await SignatureApiAxiosParamCreator(
                configuration
            ).apiDocumentKeyDocumentKeyStartPublicSignaturePost(documentKey, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs: AxiosRequestConfig = {
                    ...localVarAxiosArgs.options,
                    url: basePath + localVarAxiosArgs.url,
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * @summary Complete public signature
         * @param {string} documentKey Document key
         * @param {SignatureCompleteSignatureRequest} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async completePublicSignature(
            documentKey: string,
            body?: SignatureCompleteSignatureRequest,
            options?: AxiosRequestConfig
        ): Promise<
            (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SignatureCompleteSignatureResponse>>
        > {
            const localVarAxiosArgs = await SignatureApiAxiosParamCreator(
                configuration
            ).apiDocumentKeyDocumentKeyCompletePublicSignaturePost(documentKey, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs: AxiosRequestConfig = {
                    ...localVarAxiosArgs.options,
                    url: basePath + localVarAxiosArgs.url,
                };
                return axios.request(axiosRequestArgs);
            };
        },
    };
};

/**
 * SignatureApi - object-oriented interface
 * @export
 * @class SignatureApi
 * @extends {BaseAPI}
 */
export class SignatureApi extends BaseAPI {
    /**
     * Starts the public signature flow. Returns the hash to sign and a token for completion.
     * @summary Start public signature
     * @param {string} documentKey Document key (from the document action URL path)
     * @param {SignaturePublicStartSignatureRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignatureApi
     */
    public async startPublicSignatureAsync(
        documentKey: string,
        body?: SignaturePublicStartSignatureRequest,
        options?: AxiosRequestConfig
    ): Promise<AxiosResponse<SignaturePublicStartSignatureResponse>> {
        return SignatureApiFp(this.configuration)
            .startPublicSignature(documentKey, body, options)
            .then((request) => request(this.axios, this.basePath));
    }

    /**
     * Completes the public signature by submitting the signature bytes.
     * @summary Complete public signature
     * @param {string} documentKey Document key (from the document action URL path)
     * @param {SignatureCompleteSignatureRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignatureApi
     */
    public async completePublicSignatureAsync(
        documentKey: string,
        body?: SignatureCompleteSignatureRequest,
        options?: AxiosRequestConfig
    ): Promise<AxiosResponse<SignatureCompleteSignatureResponse>> {
        return SignatureApiFp(this.configuration)
            .completePublicSignature(documentKey, body, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
