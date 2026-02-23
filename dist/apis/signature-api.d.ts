/**
 * Signature API - Public signature endpoints (StartPublicSignature, CompletePublicSignature).
 * Not from Swagger spec - added manually to match C# client behavior.
 */
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { SignaturePublicStartSignatureRequest, SignaturePublicStartSignatureResponse, SignatureCompleteSignatureRequest, SignatureCompleteSignatureResponse } from '../models';
/**
 * SignatureApi - axios parameter creator
 * @export
 */
export declare const SignatureApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Starts the public signature flow for a document identified by key. Returns the hash to sign and a token for completion.
     * @summary Start public signature
     * @param {string} documentKey Document key (from the document action URL path)
     * @param {SignaturePublicStartSignatureRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDocumentKeyDocumentKeyStartPublicSignaturePost: (documentKey: string, body?: SignaturePublicStartSignatureRequest, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Completes the public signature by submitting the signature bytes for the hash returned by StartPublicSignature.
     * @summary Complete public signature
     * @param {string} documentKey Document key (from the document action URL path)
     * @param {SignatureCompleteSignatureRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDocumentKeyDocumentKeyCompletePublicSignaturePost: (documentKey: string, body?: SignatureCompleteSignatureRequest, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * SignatureApi - functional programming interface
 * @export
 */
export declare const SignatureApiFp: (configuration?: Configuration) => {
    /**
     * @summary Start public signature
     * @param {string} documentKey Document key
     * @param {SignaturePublicStartSignatureRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    startPublicSignature(documentKey: string, body?: SignaturePublicStartSignatureRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SignaturePublicStartSignatureResponse>>>;
    /**
     * @summary Complete public signature
     * @param {string} documentKey Document key
     * @param {SignatureCompleteSignatureRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completePublicSignature(documentKey: string, body?: SignatureCompleteSignatureRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SignatureCompleteSignatureResponse>>>;
};
/**
 * SignatureApi - object-oriented interface
 * @export
 * @class SignatureApi
 * @extends {BaseAPI}
 */
export declare class SignatureApi extends BaseAPI {
    /**
     * Starts the public signature flow. Returns the hash to sign and a token for completion.
     * @summary Start public signature
     * @param {string} documentKey Document key (from the document action URL path)
     * @param {SignaturePublicStartSignatureRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignatureApi
     */
    startPublicSignatureAsync(documentKey: string, body?: SignaturePublicStartSignatureRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<SignaturePublicStartSignatureResponse>>;
    /**
     * Completes the public signature by submitting the signature bytes.
     * @summary Complete public signature
     * @param {string} documentKey Document key (from the document action URL path)
     * @param {SignatureCompleteSignatureRequest} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignatureApi
     */
    completePublicSignatureAsync(documentKey: string, body?: SignatureCompleteSignatureRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<SignatureCompleteSignatureResponse>>;
}
