/* tslint:disable */
/* eslint-disable */
/**
 * Response model from starting a public signature (matches C# StartSignatureResponse).
 * Not from Swagger spec - added manually for StartPublicSignature API.
 * @export
 * @interface SignaturePublicStartSignatureResponse
 */
import { ValidationResultsModel } from './validation-results-model';

export interface SignaturePublicStartSignatureResponse {
    /**
     * Whether the start-signature operation succeeded.
     * @type {boolean}
     * @memberof SignaturePublicStartSignatureResponse
     */
    success?: boolean;
    /**
     * Token to send in CompletePublicSignature request.
     * @type {string}
     * @memberof SignaturePublicStartSignatureResponse
     */
    token?: string | null;
    /**
     * The hash to be signed with the signer's private key, encoded as Base64.
     * @type {string}
     * @memberof SignaturePublicStartSignatureResponse
     */
    toSignHash?: string | null;
    /**
     * Digest algorithm used for the hash (e.g. SHA-256).
     * @type {string}
     * @memberof SignaturePublicStartSignatureResponse
     */
    digestAlgorithm?: string | null;
    /**
     * Validation results for the document/signature setup.
     * @type {ValidationResultsModel}
     * @memberof SignaturePublicStartSignatureResponse
     */
    validationResults?: ValidationResultsModel | null;
}
