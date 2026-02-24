/* tslint:disable */
/* eslint-disable */
/**
 * Request model for starting a public (key-based) signature flow.
 * Mirrors C# PublicStartSignatureRequest (BaseStartSignatureRequest + ticket).
 * Not from Swagger spec - added manually for StartPublicSignature API.
 * @export
 * @interface SignaturePublicStartSignatureRequest
 */
import { DocumentMarkDocumentMarkPositionModel } from './document-mark-document-mark-position-model';
import { PrescriptionSignerType } from './prescription-signer-type';

export interface SignaturePublicStartSignatureRequest {
    /**
     * The ticket obtained from the document action URL (e.g. query parameter "ticket").
     * @type {string}
     * @memberof SignaturePublicStartSignatureRequest
     */
    ticket?: string | null;
    /**
     * The signer's certificate in DER format, encoded as Base64. Required by the API.
     * @type {string}
     * @memberof SignaturePublicStartSignatureRequest
     */
    certificate?: string | null;
    /**
     * Position of the signature mark on the document.
     * @type {DocumentMarkDocumentMarkPositionModel}
     * @memberof SignaturePublicStartSignatureRequest
     */
    signaturePosition?: DocumentMarkDocumentMarkPositionModel | null;
    /**
     * The user's timezone offset in minutes (difference from UTC). Used for the signature's visual representation.
     * E.g. UTC-3 => -180.
     * @type {number}
     * @memberof SignaturePublicStartSignatureRequest
     */
    userTimeZoneOffset?: number | null;
    /**
     * Prescription signer type for health documents.
     * @type {PrescriptionSignerType}
     * @memberof SignaturePublicStartSignatureRequest
     */
    prescriptionSignerType?: PrescriptionSignerType | null;
}
