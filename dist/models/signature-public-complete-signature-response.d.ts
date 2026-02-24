/**
 * Response model from completing a public signature (matches C# CompleteSignatureResponse).
 * Not from Swagger spec - added manually for CompletePublicSignature API.
 * @export
 * @interface SignatureCompleteSignatureResponse
 */
import { ValidationResultsModel } from './validation-results-model';
export interface SignaturePublicCompleteSignatureResponse {
    /**
     * Whether the signature completion succeeded.
     * @type {boolean}
     * @memberof SignatureCompleteSignatureResponse
     */
    success?: boolean;
    /**
     * Validation results for the signed document.
     * @type {ValidationResultsModel}
     * @memberof SignatureCompleteSignatureResponse
     */
    validationResults?: ValidationResultsModel | null;
}
