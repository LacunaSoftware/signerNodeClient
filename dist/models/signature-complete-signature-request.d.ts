/**
 * Request model for completing a public signature (matches C# CompleteSignatureRequest).
 * Not from Swagger spec - added manually for CompletePublicSignature API.
 * @export
 * @interface SignatureCompleteSignatureRequest
 */
import { SignatureEvidencesFromClientModel } from './signature-evidences-from-client-model';
export interface SignatureCompleteSignatureRequest {
    /**
     * The signature bytes (e.g. RSA PKCS#1 signature of the hash), encoded as Base64. Required.
     * @type {string}
     * @memberof SignatureCompleteSignatureRequest
     */
    signature?: string | null;
    /**
     * The token returned by StartPublicSignature. Required.
     * @type {string}
     * @memberof SignatureCompleteSignatureRequest
     */
    token?: string | null;
    /**
     * Optional evidences supplied by the client (e.g. geolocation, IP, timestamp).
     * @type {SignatureEvidencesFromClientModel}
     * @memberof SignatureCompleteSignatureRequest
     */
    evidences?: SignatureEvidencesFromClientModel | null;
    /**
     * If true, participants of the document will not be notified.
     * @type {boolean}
     * @memberof SignatureCompleteSignatureRequest
     */
    disableNotifications?: boolean;
}
