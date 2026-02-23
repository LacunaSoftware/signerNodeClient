/**
 * Evidences supplied by the client when completing a signature (matches C# SignatureEvidencesFromClientModel).
 * Not from Swagger spec - added manually.
 * @export
 * @interface SignatureEvidencesFromClientModel
 */
import { SignatureGeolocationModel } from './signature-geolocation-model';
import { SignatureSelfieModel } from './signature-selfie-model';
export interface SignatureEvidencesFromClientModel {
    /**
     * Geolocation at time of signing (C# GeolocationModel).
     * @type {SignatureGeolocationModel}
     * @memberof SignatureEvidencesFromClientModel
     */
    geolocation?: SignatureGeolocationModel | null;
    /**
     * Selfie image evidence (C# SelfieModel).
     * @type {SignatureSelfieModel}
     * @memberof SignatureEvidencesFromClientModel
     */
    selfieImage?: SignatureSelfieModel | null;
}
