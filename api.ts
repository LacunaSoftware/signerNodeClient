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


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @enum {string}
 */

export const ActionStatus = {
    Created: 'Created',
    Pending: 'Pending',
    Completed: 'Completed',
    Refused: 'Refused'
} as const;

export type ActionStatus = typeof ActionStatus[keyof typeof ActionStatus];


/**
 * 
 * @export
 * @enum {string}
 */

export const AgentTypes = {
    User: 'User',
    Application: 'Application'
} as const;

export type AgentTypes = typeof AgentTypes[keyof typeof AgentTypes];


/**
 * 
 * @export
 * @interface AgentsAgentModel
 */
export interface AgentsAgentModel {
    /**
     * 
     * @type {string}
     * @memberof AgentsAgentModel
     */
    'id'?: string;
    /**
     * 
     * @type {AgentTypes}
     * @memberof AgentsAgentModel
     */
    'type'?: AgentTypes;
    /**
     * 
     * @type {string}
     * @memberof AgentsAgentModel
     */
    'name'?: string | null;
}
/**
 * 
 * @export
 * @interface ApplicationsApplicationDisplayModel
 */
export interface ApplicationsApplicationDisplayModel {
    /**
     * 
     * @type {string}
     * @memberof ApplicationsApplicationDisplayModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationsApplicationDisplayModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationsApplicationDisplayModel
     */
    'organizationName'?: string | null;
}
/**
 * 
 * @export
 * @interface AttachmentsAttachmentModel
 */
export interface AttachmentsAttachmentModel {
    /**
     * 
     * @type {string}
     * @memberof AttachmentsAttachmentModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AttachmentsAttachmentModel
     */
    'name'?: string | null;
    /**
     * The attachment\'s file name.
     * @type {string}
     * @memberof AttachmentsAttachmentModel
     */
    'filename'?: string | null;
    /**
     * The attachment\'s file size in bytes.
     * @type {number}
     * @memberof AttachmentsAttachmentModel
     */
    'fileSize'?: number;
    /**
     * The attachment\'s file mime type.
     * @type {string}
     * @memberof AttachmentsAttachmentModel
     */
    'mimeType'?: string | null;
    /**
     * The date the attachment was created.
     * @type {string}
     * @memberof AttachmentsAttachmentModel
     */
    'creationDate'?: string;
    /**
     * The date of the last update to the attachment.
     * @type {string}
     * @memberof AttachmentsAttachmentModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof AttachmentsAttachmentModel
     */
    'createdBy'?: DocumentsCreatorModel;
    /**
     * 
     * @type {boolean}
     * @memberof AttachmentsAttachmentModel
     */
    'isPrivate'?: boolean;
}
/**
 * 
 * @export
 * @interface AttachmentsAttachmentUploadModel
 */
export interface AttachmentsAttachmentUploadModel {
    /**
     * This is the name the document will display in the application.
     * @type {string}
     * @memberof AttachmentsAttachmentUploadModel
     */
    'displayName': string;
    /**
     * The upload Id as returned by the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a>
     * @type {string}
     * @memberof AttachmentsAttachmentUploadModel
     */
    'id': string;
    /**
     * The file\'s original name.
     * @type {string}
     * @memberof AttachmentsAttachmentUploadModel
     */
    'name': string;
    /**
     * The file\'s mime type. Unless overridden, PDF mime types will be signed as PAdES and all other types as CAdES.
     * @type {string}
     * @memberof AttachmentsAttachmentUploadModel
     */
    'contentType': string;
    /**
     * 
     * @type {boolean}
     * @memberof AttachmentsAttachmentUploadModel
     */
    'isPrivate'?: boolean;
}
/**
 * 
 * @export
 * @interface AttachmentsCreateAttachmentResult
 */
export interface AttachmentsCreateAttachmentResult {
    /**
     * The Id of the uploaded attachment, from the request Lacuna.Signer.Api.UploadModel.Id.
     * @type {string}
     * @memberof AttachmentsCreateAttachmentResult
     */
    'uploadId'?: string | null;
    /**
     * The Id of the newly created attachment.
     * @type {string}
     * @memberof AttachmentsCreateAttachmentResult
     */
    'attachmentId'?: string;
}
/**
 * This enum is used as flags, the order and values matter!
 * @export
 * @enum {string}
 */

export const AuthenticationTypes = {
    Sms: 'SMS',
    AuthenticatorApp: 'AuthenticatorApp',
    Email: 'Email',
    Login: 'Login',
    Application: 'Application',
    Selfie: 'Selfie',
    Datavalid: 'Datavalid',
    Pix: 'Pix',
    AccessCode: 'AccessCode',
    Whatsapp: 'Whatsapp',
    Liveness: 'Liveness',
    IdScan: 'IdScan'
} as const;

export type AuthenticationTypes = typeof AuthenticationTypes[keyof typeof AuthenticationTypes];


/**
 * 
 * @export
 * @interface BatchItemResultModel
 */
export interface BatchItemResultModel {
    /**
     * 
     * @type {string}
     * @memberof BatchItemResultModel
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BatchItemResultModel
     */
    'success'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BatchItemResultModel
     */
    'errorMessage'?: string | null;
}
/**
 * 
 * @export
 * @interface BillingBillingInformationModel
 */
export interface BillingBillingInformationModel {
    /**
     * 
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'phone': string;
    /**
     * 
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'zipCode': string;
    /**
     * 
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'city': string;
    /**
     * 
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'state': string;
    /**
     * 
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'contactName'?: string | null;
    /**
     * 
     * @type {BillingInformationTypes}
     * @memberof BillingBillingInformationModel
     */
    'type'?: BillingInformationTypes;
    /**
     * 
     * @type {BillingIndividualBillingInformationModel}
     * @memberof BillingBillingInformationModel
     */
    'individual'?: BillingIndividualBillingInformationModel;
    /**
     * 
     * @type {BillingCompanyBillingInformationModel}
     * @memberof BillingBillingInformationModel
     */
    'company'?: BillingCompanyBillingInformationModel;
    /**
     * 
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'streetAddress'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'addressNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'additionalAddressInfo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'neighborhood'?: string | null;
    /**
     * International address line 1.  Currently not used
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'address'?: string | null;
    /**
     * International address line 2.  Currently not used
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'address2'?: string | null;
    /**
     * IBGE Code
     * @type {string}
     * @memberof BillingBillingInformationModel
     */
    'cityCode'?: string | null;
}
/**
 * 
 * @export
 * @interface BillingCompanyBillingInformationModel
 */
export interface BillingCompanyBillingInformationModel {
    /**
     * 
     * @type {string}
     * @memberof BillingCompanyBillingInformationModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingCompanyBillingInformationModel
     */
    'identifier'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingCompanyBillingInformationModel
     */
    'stateRegistration'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BillingCompanyBillingInformationModel
     */
    'stateRegistrationExempt'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BillingCompanyBillingInformationModel
     */
    'municipalRegistration'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BillingCompanyBillingInformationModel
     */
    'municipalRegistrationExempt'?: boolean;
}
/**
 * 
 * @export
 * @interface BillingIndividualBillingInformationModel
 */
export interface BillingIndividualBillingInformationModel {
    /**
     * 
     * @type {string}
     * @memberof BillingIndividualBillingInformationModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillingIndividualBillingInformationModel
     */
    'identifier'?: string | null;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const BillingInformationTypes = {
    Individual: 'Individual',
    Company: 'Company'
} as const;

export type BillingInformationTypes = typeof BillingInformationTypes[keyof typeof BillingInformationTypes];


/**
 * 
 * @export
 * @enum {string}
 */

export const CertificateHolderTypes = {
    Individual: 'Individual',
    Company: 'Company'
} as const;

export type CertificateHolderTypes = typeof CertificateHolderTypes[keyof typeof CertificateHolderTypes];


/**
 * 
 * @export
 * @enum {string}
 */

export const CertificateTypes = {
    A1: 'A1',
    A2: 'A2',
    A3: 'A3',
    A4: 'A4',
    S1: 'S1',
    S2: 'S2',
    S3: 'S3',
    S4: 'S4',
    T3: 'T3',
    T4: 'T4'
} as const;

export type CertificateTypes = typeof CertificateTypes[keyof typeof CertificateTypes];


/**
 * 
 * @export
 * @interface CertificatesAttributeCertificateInfoModel
 */
export interface CertificatesAttributeCertificateInfoModel {
    /**
     * 
     * @type {string}
     * @memberof CertificatesAttributeCertificateInfoModel
     */
    'details'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CertificatesAttributeCertificateInfoModel
     */
    'issuer'?: string | null;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const DeleteAction = {
    MoveContent: 'MoveContent',
    DeleteContent: 'DeleteContent'
} as const;

export type DeleteAction = typeof DeleteAction[keyof typeof DeleteAction];


/**
 * 
 * @export
 * @enum {string}
 */

export const DocumentDownloadTypes = {
    Original: 'Original',
    PrinterFriendlyVersion: 'PrinterFriendlyVersion',
    Signatures: 'Signatures',
    OriginalWithMarks: 'OriginalWithMarks',
    SigningTags: 'SigningTags',
    SignatureMarks: 'SignatureMarks',
    SignaturesManifest: 'SignaturesManifest'
} as const;

export type DocumentDownloadTypes = typeof DocumentDownloadTypes[keyof typeof DocumentDownloadTypes];


/**
 * 
 * @export
 * @enum {string}
 */

export const DocumentFilterStatus = {
    PendingOrRefused: 'PendingOrRefused',
    Concluded: 'Concluded',
    CanceledOrExpired: 'CanceledOrExpired',
    Pending: 'Pending',
    Refused: 'Refused',
    Canceled: 'Canceled',
    Expired: 'Expired'
} as const;

export type DocumentFilterStatus = typeof DocumentFilterStatus[keyof typeof DocumentFilterStatus];


/**
 * 
 * @export
 * @interface DocumentFlowsDocumentFlowCreateRequest
 */
export interface DocumentFlowsDocumentFlowCreateRequest {
    /**
     * 
     * @type {string}
     * @memberof DocumentFlowsDocumentFlowCreateRequest
     */
    'name': string;
    /**
     * 
     * @type {Array<FlowActionsFlowActionCreateModel>}
     * @memberof DocumentFlowsDocumentFlowCreateRequest
     */
    'flowActions': Array<FlowActionsFlowActionCreateModel>;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFlowsDocumentFlowCreateRequest
     */
    'areActionsOrdered'?: boolean;
    /**
     * 
     * @type {Array<ObserversObserverCreateModel>}
     * @memberof DocumentFlowsDocumentFlowCreateRequest
     */
    'observers'?: Array<ObserversObserverCreateModel> | null;
}
/**
 * 
 * @export
 * @interface DocumentFlowsDocumentFlowData
 */
export interface DocumentFlowsDocumentFlowData {
    /**
     * 
     * @type {string}
     * @memberof DocumentFlowsDocumentFlowData
     */
    'name': string;
    /**
     * 
     * @type {Array<FlowActionsFlowActionCreateModel>}
     * @memberof DocumentFlowsDocumentFlowData
     */
    'flowActions': Array<FlowActionsFlowActionCreateModel>;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFlowsDocumentFlowData
     */
    'areActionsOrdered'?: boolean;
    /**
     * 
     * @type {Array<ObserversObserverCreateModel>}
     * @memberof DocumentFlowsDocumentFlowData
     */
    'observers'?: Array<ObserversObserverCreateModel> | null;
}
/**
 * 
 * @export
 * @interface DocumentFlowsDocumentFlowDetailsModel
 */
export interface DocumentFlowsDocumentFlowDetailsModel {
    /**
     * 
     * @type {boolean}
     * @memberof DocumentFlowsDocumentFlowDetailsModel
     */
    'areActionsOrdered'?: boolean;
    /**
     * The list of actions (signers and approvers) that will be in the document.
     * @type {Array<FlowActionsFlowActionCreateModel>}
     * @memberof DocumentFlowsDocumentFlowDetailsModel
     */
    'flowActions'?: Array<FlowActionsFlowActionCreateModel> | null;
    /**
     * 
     * @type {Array<ObserversObserverCreateModel>}
     * @memberof DocumentFlowsDocumentFlowDetailsModel
     */
    'observers'?: Array<ObserversObserverCreateModel> | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentFlowsDocumentFlowDetailsModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFlowsDocumentFlowDetailsModel
     */
    'name'?: string | null;
    /**
     * The date the flow was created.
     * @type {string}
     * @memberof DocumentFlowsDocumentFlowDetailsModel
     */
    'creationDate'?: string;
    /**
     * The date of the last update to the flow.
     * @type {string}
     * @memberof DocumentFlowsDocumentFlowDetailsModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof DocumentFlowsDocumentFlowDetailsModel
     */
    'createdBy'?: DocumentsCreatorModel;
}
/**
 * 
 * @export
 * @interface DocumentFlowsDocumentFlowModel
 */
export interface DocumentFlowsDocumentFlowModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentFlowsDocumentFlowModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentFlowsDocumentFlowModel
     */
    'name'?: string | null;
    /**
     * The date the flow was created.
     * @type {string}
     * @memberof DocumentFlowsDocumentFlowModel
     */
    'creationDate'?: string;
    /**
     * The date of the last update to the flow.
     * @type {string}
     * @memberof DocumentFlowsDocumentFlowModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof DocumentFlowsDocumentFlowModel
     */
    'createdBy'?: DocumentsCreatorModel;
}
/**
 * 
 * @export
 * @interface DocumentMarkDocumentMarkPositionModel
 */
export interface DocumentMarkDocumentMarkPositionModel {
    /**
     * X position of the top left point of the mark (in PDF points).
     * @type {number}
     * @memberof DocumentMarkDocumentMarkPositionModel
     */
    'topLeftX'?: number;
    /**
     * Y position of the top left point of the mark (in PDF points).
     * @type {number}
     * @memberof DocumentMarkDocumentMarkPositionModel
     */
    'topLeftY'?: number;
    /**
     * Width of the mark (in PDF points).
     * @type {number}
     * @memberof DocumentMarkDocumentMarkPositionModel
     */
    'width'?: number;
    /**
     * Height of the mark (in PDF points).
     * @type {number}
     * @memberof DocumentMarkDocumentMarkPositionModel
     */
    'height'?: number;
    /**
     * The page number of the mark.
     * @type {number}
     * @memberof DocumentMarkDocumentMarkPositionModel
     */
    'pageNumber'?: number | null;
    /**
     * 
     * @type {DocumentMarkType}
     * @memberof DocumentMarkDocumentMarkPositionModel
     */
    'type'?: DocumentMarkType;
    /**
     * The font size of the mark.  The font size adapts dynamically to fit within the dimensions of the mark rectangle.
     * @type {number}
     * @memberof DocumentMarkDocumentMarkPositionModel
     */
    'fontSize'?: number | null;
}
/**
 * 
 * @export
 * @interface DocumentMarkFlowActionPositionModel
 */
export interface DocumentMarkFlowActionPositionModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentMarkFlowActionPositionModel
     */
    'id'?: string | null;
    /**
     * 
     * @type {FlowActionType}
     * @memberof DocumentMarkFlowActionPositionModel
     */
    'type'?: FlowActionType;
    /**
     * 
     * @type {UsersParticipantUserModel}
     * @memberof DocumentMarkFlowActionPositionModel
     */
    'user'?: UsersParticipantUserModel;
    /**
     * 
     * @type {SignatureInitialsModes}
     * @memberof DocumentMarkFlowActionPositionModel
     */
    'signatureInitialsMode'?: SignatureInitialsModes;
    /**
     * 
     * @type {string}
     * @memberof DocumentMarkFlowActionPositionModel
     */
    'ruleName'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentMarkFlowActionPositionModel
     * @deprecated
     */
    'numberRequiredSignatures'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentMarkFlowActionPositionModel
     */
    'numberRequiredActions'?: number | null;
    /**
     * 
     * @type {Array<DocumentMarkPrePositionedDocumentMarkModel>}
     * @memberof DocumentMarkFlowActionPositionModel
     */
    'prePositionedMarks'?: Array<DocumentMarkPrePositionedDocumentMarkModel> | null;
}
/**
 * 
 * @export
 * @interface DocumentMarkMarksSessionCreateRequest
 */
export interface DocumentMarkMarksSessionCreateRequest {
    /**
     * 
     * @type {Array<UploadModel>}
     * @memberof DocumentMarkMarksSessionCreateRequest
     */
    'files': Array<UploadModel>;
    /**
     * 
     * @type {Array<DocumentMarkFlowActionPositionModel>}
     * @memberof DocumentMarkMarksSessionCreateRequest
     */
    'flowActions': Array<DocumentMarkFlowActionPositionModel>;
    /**
     * If true, groups all files into a single document (the envelope). All files must be in PDF format.
     * @type {boolean}
     * @memberof DocumentMarkMarksSessionCreateRequest
     */
    'isEnvelope'?: boolean;
    /**
     * 
     * @type {SignatureTypes}
     * @memberof DocumentMarkMarksSessionCreateRequest
     */
    'signatureType'?: SignatureTypes;
}
/**
 * 
 * @export
 * @interface DocumentMarkMarksSessionCreateResponse
 */
export interface DocumentMarkMarksSessionCreateResponse {
    /**
     * 
     * @type {string}
     * @memberof DocumentMarkMarksSessionCreateResponse
     */
    'id'?: string;
    /**
     * The URL to embed the session in a iframe to use in your own application.
     * @type {string}
     * @memberof DocumentMarkMarksSessionCreateResponse
     */
    'embedUrl'?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentMarkMarksSessionModel
 */
export interface DocumentMarkMarksSessionModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentMarkMarksSessionModel
     */
    'id'?: string;
    /**
     * 
     * @type {Array<DocumentMarkUploadTicketModel>}
     * @memberof DocumentMarkMarksSessionModel
     */
    'files'?: Array<DocumentMarkUploadTicketModel> | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentMarkMarksSessionModel
     */
    'data'?: any | null;
}
/**
 * Model used to set the position of a document mark before it\'s associated flow action is completed.
 * @export
 * @interface DocumentMarkPrePositionedDocumentMarkModel
 */
export interface DocumentMarkPrePositionedDocumentMarkModel {
    /**
     * 
     * @type {DocumentMarkType}
     * @memberof DocumentMarkPrePositionedDocumentMarkModel
     */
    'type'?: DocumentMarkType;
    /**
     * The file to which this mark should be applied.  If null it will be applied to all sent files.
     * @type {string}
     * @memberof DocumentMarkPrePositionedDocumentMarkModel
     */
    'uploadId'?: string | null;
    /**
     * X position of the top left point of the mark (in PDF points).
     * @type {number}
     * @memberof DocumentMarkPrePositionedDocumentMarkModel
     */
    'topLeftX'?: number;
    /**
     * Y position of the top left point of the mark (in PDF points).
     * @type {number}
     * @memberof DocumentMarkPrePositionedDocumentMarkModel
     */
    'topLeftY'?: number;
    /**
     * Width of the mark (in PDF points).
     * @type {number}
     * @memberof DocumentMarkPrePositionedDocumentMarkModel
     */
    'width'?: number;
    /**
     * Height of the mark (in PDF points).
     * @type {number}
     * @memberof DocumentMarkPrePositionedDocumentMarkModel
     */
    'height'?: number;
    /**
     * The page number of the mark.
     * @type {number}
     * @memberof DocumentMarkPrePositionedDocumentMarkModel
     */
    'pageNumber'?: number | null;
    /**
     * The font size of the mark.  The font size adapts dynamically to fit within the dimensions of the mark rectangle.
     * @type {number}
     * @memberof DocumentMarkPrePositionedDocumentMarkModel
     */
    'fontSize'?: number | null;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const DocumentMarkType = {
    SignatureVisualRepresentation: 'SignatureVisualRepresentation',
    SignatureInitials: 'SignatureInitials',
    AuthenticationStamp: 'AuthenticationStamp'
} as const;

export type DocumentMarkType = typeof DocumentMarkType[keyof typeof DocumentMarkType];


/**
 * 
 * @export
 * @interface DocumentMarkUploadTicketModel
 */
export interface DocumentMarkUploadTicketModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentMarkUploadTicketModel
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentMarkUploadTicketModel
     */
    'location'?: string | null;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const DocumentQueryTypes = {
    Name: 'Name',
    Key: 'Key',
    Id: 'Id',
    CreatorName: 'CreatorName',
    Tag: 'Tag'
} as const;

export type DocumentQueryTypes = typeof DocumentQueryTypes[keyof typeof DocumentQueryTypes];


/**
 * 
 * @export
 * @enum {string}
 */

export const DocumentStatus = {
    Pending: 'Pending',
    Refused: 'Refused',
    FlowConcluded: 'FlowConcluded',
    Concluded: 'Concluded',
    Canceled: 'Canceled',
    Expired: 'Expired'
} as const;

export type DocumentStatus = typeof DocumentStatus[keyof typeof DocumentStatus];


/**
 * 
 * @export
 * @enum {string}
 */

export const DocumentTicketType = {
    Original: 'Original',
    PrinterFriendlyVersion: 'PrinterFriendlyVersion',
    Signatures: 'Signatures',
    OriginalWithMarks: 'OriginalWithMarks',
    SigningTags: 'SigningTags',
    SignatureMarks: 'SignatureMarks',
    SignaturesManifest: 'SignaturesManifest'
} as const;

export type DocumentTicketType = typeof DocumentTicketType[keyof typeof DocumentTicketType];


/**
 * 
 * @export
 * @enum {string}
 */

export const DocumentTypes = {
    Deed: 'Deed',
    PowerOfAttorney: 'PowerOfAttorney',
    Prescription: 'Prescription',
    MedicalCertificate: 'MedicalCertificate',
    ExamRequest: 'ExamRequest',
    LabReport: 'LabReport',
    DischargeSummary: 'DischargeSummary',
    ClinicalRecord: 'ClinicalRecord',
    DrugDispensing: 'DrugDispensing',
    Vaccination: 'Vaccination',
    MedicalReport: 'MedicalReport'
} as const;

export type DocumentTypes = typeof DocumentTypes[keyof typeof DocumentTypes];


/**
 * 
 * @export
 * @interface DocumentsActionUrlRequest
 */
export interface DocumentsActionUrlRequest {
    /**
     * The identifier (CPF in Brazil or Cédula de Identidad in Ecuador/Paraguay) of the participant to whom you want to get the ticket.
     * @type {string}
     * @memberof DocumentsActionUrlRequest
     */
    'identifier'?: string | null;
    /**
     * The email of the participant to whom you want to get the ticket.
     * @type {string}
     * @memberof DocumentsActionUrlRequest
     */
    'emailAddress'?: string | null;
    /**
     * If action is an electronic signature and this parameter is set to true, requires e-mail authentication with code in order to complete the signature.
     * @type {boolean}
     * @memberof DocumentsActionUrlRequest
     */
    'requireEmailAuthentication'?: boolean;
    /**
     * The ID of the flow action for which the ticket will be generated. It should only be provided if there are more than one pending action for the participant.
     * @type {string}
     * @memberof DocumentsActionUrlRequest
     */
    'flowActionId'?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentsActionUrlResponse
 */
export interface DocumentsActionUrlResponse {
    /**
     * The URL to redirect the user to the first pending action found.
     * @type {string}
     * @memberof DocumentsActionUrlResponse
     */
    'url'?: string | null;
    /**
     * The URL to embed the action in a iframe to use in your own application.
     * @type {string}
     * @memberof DocumentsActionUrlResponse
     */
    'embedUrl'?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentsCancelDocumentRequest
 */
export interface DocumentsCancelDocumentRequest {
    /**
     * 
     * @type {string}
     * @memberof DocumentsCancelDocumentRequest
     */
    'reason': string;
}
/**
 * 
 * @export
 * @interface DocumentsCreateDocumentRequest
 */
export interface DocumentsCreateDocumentRequest {
    /**
     * The files to submit. Each file will create a document.
     * @type {Array<FileUploadModel>}
     * @memberof DocumentsCreateDocumentRequest
     */
    'files': Array<FileUploadModel>;
    /**
     * The list of actions (signers and approvers) that will be in the document.
     * @type {Array<FlowActionsFlowActionCreateModel>}
     * @memberof DocumentsCreateDocumentRequest
     */
    'flowActions': Array<FlowActionsFlowActionCreateModel>;
    /**
     * The attachments to submit. Each document will have the same attachments.
     * @type {Array<AttachmentsAttachmentUploadModel>}
     * @memberof DocumentsCreateDocumentRequest
     */
    'attachments'?: Array<AttachmentsAttachmentUploadModel> | null;
    /**
     * Optional parameter for XML documents. This namespace will be used by all files in Lacuna.Signer.Api.Documents.CreateDocumentRequest.Files.
     * @type {Array<XmlNamespaceModel>}
     * @memberof DocumentsCreateDocumentRequest
     */
    'xmlNamespaces'?: Array<XmlNamespaceModel> | null;
    /**
     * If true, groups all files into a single document (the envelope). All files must be in PDF format.
     * @type {boolean}
     * @memberof DocumentsCreateDocumentRequest
     */
    'isEnvelope'?: boolean;
    /**
     * The name of the document if the envelope option is enabled (see \"IsEnvelope\" property).
     * @type {string}
     * @memberof DocumentsCreateDocumentRequest
     */
    'envelopeName'?: string | null;
    /**
     * 
     * @type {UploadModel}
     * @memberof DocumentsCreateDocumentRequest
     */
    'participantsDataFile'?: UploadModel;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof DocumentsCreateDocumentRequest
     */
    'templateFieldValues'?: { [key: string]: string; } | null;
    /**
     * The id of the folder in which the document should be placed or null if it should not be placed in any specific folder.
     * @type {string}
     * @memberof DocumentsCreateDocumentRequest
     */
    'folderId'?: string | null;
    /**
     * A description to be added to the document(s). This will be presented to all participants in the document details screen and   in pending action notifications.
     * @type {string}
     * @memberof DocumentsCreateDocumentRequest
     */
    'description'?: string | null;
    /**
     * 
     * @type {Array<ObserversObserverCreateModel>}
     * @memberof DocumentsCreateDocumentRequest
     */
    'observers'?: Array<ObserversObserverCreateModel> | null;
    /**
     * If true the notifications of pending actions won\'t be sent to the participants of the first step.
     * @type {boolean}
     * @memberof DocumentsCreateDocumentRequest
     */
    'disablePendingActionNotifications'?: boolean;
    /**
     * If true, no notifications will be sent to participants of this document.
     * @type {boolean}
     * @memberof DocumentsCreateDocumentRequest
     */
    'disableNotifications'?: boolean;
    /**
     * The name of a new folder to be created and associated to the document. If you do not wish to create a new folder you may set this as null.
     * @type {string}
     * @memberof DocumentsCreateDocumentRequest
     */
    'newFolderName'?: string | null;
    /**
     * If this property is set to true, then the document will be signed using the CAdES format.
     * @type {boolean}
     * @memberof DocumentsCreateDocumentRequest
     */
    'forceCadesSignature'?: boolean;
    /**
     * The emails to notify when the document is concluded.
     * @type {Array<string>}
     * @memberof DocumentsCreateDocumentRequest
     */
    'notifiedEmails'?: Array<string> | null;
    /**
     * 
     * @type {DocumentsDocumentAdditionalInfoData}
     * @memberof DocumentsCreateDocumentRequest
     */
    'additionalInfo'?: DocumentsDocumentAdditionalInfoData;
    /**
     * 
     * @type {Array<DocumentsDocumentTagData>}
     * @memberof DocumentsCreateDocumentRequest
     */
    'tags'?: Array<DocumentsDocumentTagData> | null;
    /**
     * 
     * @type {SignatureTypes}
     * @memberof DocumentsCreateDocumentRequest
     */
    'signatureType'?: SignatureTypes;
    /**
     * 
     * @type {string}
     * @memberof DocumentsCreateDocumentRequest
     */
    'securityContextId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsCreateDocumentRequest
     */
    'templateId'?: string | null;
    /**
     * The expiration date of the document. Any time information will be discarded, as the expiration will be set   to the last time available for the chosen date in the default timezone.
     * @type {string}
     * @memberof DocumentsCreateDocumentRequest
     */
    'expirationDate'?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentsCreateDocumentResult
 */
export interface DocumentsCreateDocumentResult {
    /**
     * The Id of the uploaded file, from the request Lacuna.Signer.Api.UploadModel.Id.
     * @type {string}
     * @memberof DocumentsCreateDocumentResult
     */
    'uploadId'?: string | null;
    /**
     * The Id of the newly created document.
     * @type {string}
     * @memberof DocumentsCreateDocumentResult
     */
    'documentId'?: string;
    /**
     * Result of creating attachments
     * @type {Array<AttachmentsCreateAttachmentResult>}
     * @memberof DocumentsCreateDocumentResult
     */
    'attachments'?: Array<AttachmentsCreateAttachmentResult> | null;
}
/**
 * 
 * @export
 * @interface DocumentsCreatorModel
 */
export interface DocumentsCreatorModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentsCreatorModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentsCreatorModel
     */
    'name'?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentAddVersionRequest
 */
export interface DocumentsDocumentAddVersionRequest {
    /**
     * 
     * @type {FileUploadModel}
     * @memberof DocumentsDocumentAddVersionRequest
     */
    'file'?: FileUploadModel;
    /**
     * If true the notifications of pending actions won\'t be sent to the participants of the first step.
     * @type {boolean}
     * @memberof DocumentsDocumentAddVersionRequest
     */
    'disablePendingActionNotifications'?: boolean;
    /**
     * 
     * @type {DocumentsDocumentAdditionalInfoData}
     * @memberof DocumentsDocumentAddVersionRequest
     */
    'additionalInfo'?: DocumentsDocumentAdditionalInfoData;
    /**
     * 
     * @type {Array<DocumentsPrePositionedMarkModel>}
     * @memberof DocumentsDocumentAddVersionRequest
     */
    'prePositionedMarks'?: Array<DocumentsPrePositionedMarkModel> | null;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentAdditionalInfoData
 */
export interface DocumentsDocumentAdditionalInfoData {
    /**
     * 
     * @type {HealthDocumentsHealthDocumentData}
     * @memberof DocumentsDocumentAdditionalInfoData
     */
    'healthData'?: HealthDocumentsHealthDocumentData;
    /**
     * Form fields to fill when creating the document.
     * @type {{ [key: string]: string; }}
     * @memberof DocumentsDocumentAdditionalInfoData
     */
    'fields'?: { [key: string]: string; } | null;
    /**
     * PDF custom metadata to add when creating the document
     * @type {{ [key: string]: string; }}
     * @memberof DocumentsDocumentAdditionalInfoData
     */
    'metadata'?: { [key: string]: string; } | null;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentContentModel
 */
export interface DocumentsDocumentContentModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentContentModel
     */
    'bytes'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentContentModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentContentModel
     */
    'contentType'?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentFileModel
 */
export interface DocumentsDocumentFileModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentFileModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentFileModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentsDocumentFileModel
     */
    'isSigned'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentsDocumentFileModel
     */
    'isEnvelopePart'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof DocumentsDocumentFileModel
     */
    'envelopeStartPage'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentsDocumentFileModel
     */
    'numberPages'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentFileModel
     */
    'mimeType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentFileModel
     */
    'filename'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentFileModel
     */
    'creationDate'?: string;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentFlowEditRequest
 */
export interface DocumentsDocumentFlowEditRequest {
    /**
     * The actions to be added to the flow.  The FlowActionCreateModel.Step must be greater or equal to the current pending step.
     * @type {Array<FlowActionsFlowActionCreateModel>}
     * @memberof DocumentsDocumentFlowEditRequest
     */
    'addedFlowActions'?: Array<FlowActionsFlowActionCreateModel> | null;
    /**
     * The existing actions to be modified.  Flow actions that have already been completed or are partially completed cannot be edited.
     * @type {Array<FlowActionsFlowActionEditModel>}
     * @memberof DocumentsDocumentFlowEditRequest
     */
    'editedFlowActions'?: Array<FlowActionsFlowActionEditModel> | null;
    /**
     * The Ids of flow actions to be deleted.  Flow actions that have already been completed or are partially completed cannot be deleted.
     * @type {Array<string>}
     * @memberof DocumentsDocumentFlowEditRequest
     */
    'deletedFlowActionIds'?: Array<string> | null;
    /**
     * The observers to be added to the document.
     * @type {Array<ObserversObserverCreateModel>}
     * @memberof DocumentsDocumentFlowEditRequest
     */
    'addedObservers'?: Array<ObserversObserverCreateModel> | null;
    /**
     * The existing observers to be modified.
     * @type {Array<ObserversObserverEditModel>}
     * @memberof DocumentsDocumentFlowEditRequest
     */
    'editedObservers'?: Array<ObserversObserverEditModel> | null;
    /**
     * The Ids of observers to be deleted.
     * @type {Array<string>}
     * @memberof DocumentsDocumentFlowEditRequest
     */
    'deletedObserverIds'?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentListModel
 */
export interface DocumentsDocumentListModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentListModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentListModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentListModel
     */
    'creationDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentListModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {FoldersFolderInfoModel}
     * @memberof DocumentsDocumentListModel
     */
    'folder'?: FoldersFolderInfoModel;
    /**
     * 
     * @type {DocumentTypes}
     * @memberof DocumentsDocumentListModel
     */
    'type'?: DocumentTypes;
    /**
     * 
     * @type {Array<DocumentsDocumentTagModel>}
     * @memberof DocumentsDocumentListModel
     */
    'tags'?: Array<DocumentsDocumentTagModel> | null;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentModel
 */
export interface DocumentsDocumentModel {
    /**
     * MD5 checksum of the document\'s file.
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'checksumMd5'?: string | null;
    /**
     * True if the document is deleted.
     * @type {boolean}
     * @memberof DocumentsDocumentModel
     */
    'isDeleted'?: boolean;
    /**
     * Signers and approvers of the document.
     * @type {Array<FlowActionsFlowActionModel>}
     * @memberof DocumentsDocumentModel
     */
    'flowActions'?: Array<FlowActionsFlowActionModel> | null;
    /**
     * Observers of the document.
     * @type {Array<ObserversObserverModel>}
     * @memberof DocumentsDocumentModel
     */
    'observers'?: Array<ObserversObserverModel> | null;
    /**
     * Document attachments
     * @type {Array<AttachmentsAttachmentModel>}
     * @memberof DocumentsDocumentModel
     */
    'attachments'?: Array<AttachmentsAttachmentModel> | null;
    /**
     * 
     * @type {DocumentsDocumentPermissionsModel}
     * @memberof DocumentsDocumentModel
     */
    'permissions'?: DocumentsDocumentPermissionsModel;
    /**
     * 
     * @type {Array<string>}
     * @memberof DocumentsDocumentModel
     */
    'notifiedEmails'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'key'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentsDocumentModel
     */
    'hideDownloadOptionForPendingDocuments'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'name'?: string | null;
    /**
     * The document\'s file name.
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'filename'?: string | null;
    /**
     * The document\'s file size in bytes.
     * @type {number}
     * @memberof DocumentsDocumentModel
     */
    'fileSize'?: number;
    /**
     * The document\'s file mime type.
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'mimeType'?: string | null;
    /**
     * True if the document was already signed once.
     * @type {boolean}
     * @memberof DocumentsDocumentModel
     */
    'hasSignature'?: boolean;
    /**
     * 
     * @type {DocumentStatus}
     * @memberof DocumentsDocumentModel
     */
    'status'?: DocumentStatus;
    /**
     * [DEPRECATED] True if all actions requested in the document are concluded. Please use Lacuna.Signer.Api.Documents.DocumentInfoModel.Status instead.
     * @type {boolean}
     * @memberof DocumentsDocumentModel
     */
    'isConcluded'?: boolean;
    /**
     * 
     * @type {FoldersFolderInfoModel}
     * @memberof DocumentsDocumentModel
     */
    'folder'?: FoldersFolderInfoModel;
    /**
     * 
     * @type {OrganizationsOrganizationInfoModel}
     * @memberof DocumentsDocumentModel
     */
    'organization'?: OrganizationsOrganizationInfoModel;
    /**
     * The date the document was created.
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'creationDate'?: string;
    /**
     * The date of the last update to the document. This includes the following actions: moving to folder, signing, approving, deleting and editing the flow.
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'updateDate'?: string;
    /**
     * The expiration date of the document in the default timezone.
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'expirationDate'?: string | null;
    /**
     * The expiration date without time: in yyyy-MM-dd format (useful for display purposes).
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'expirationDateWithoutTime'?: string | null;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof DocumentsDocumentModel
     */
    'createdBy'?: DocumentsCreatorModel;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'description'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentsDocumentModel
     */
    'forceCadesSignature'?: boolean;
    /**
     * True if the document source was a scanning process.
     * @type {boolean}
     * @memberof DocumentsDocumentModel
     */
    'isScanned'?: boolean;
    /**
     * True if the document is an envelope (Lacuna.Signer.Api.Documents.CreateDocumentRequest.IsEnvelope).
     * @type {boolean}
     * @memberof DocumentsDocumentModel
     */
    'isEnvelope'?: boolean;
    /**
     * 
     * @type {AgentsAgentModel}
     * @memberof DocumentsDocumentModel
     */
    'statusUpdatedBy'?: AgentsAgentModel;
    /**
     * The reason for the status update (see \"StatusUpdatedBy\" property).
     * @type {string}
     * @memberof DocumentsDocumentModel
     */
    'statusUpdateReason'?: string | null;
    /**
     * 
     * @type {Array<DocumentsDocumentTagModel>}
     * @memberof DocumentsDocumentModel
     */
    'tags'?: Array<DocumentsDocumentTagModel> | null;
    /**
     * 
     * @type {SignatureTypes}
     * @memberof DocumentsDocumentModel
     */
    'signatureType'?: SignatureTypes;
    /**
     * 
     * @type {SecurityContextsSecurityContextSimpleModel}
     * @memberof DocumentsDocumentModel
     */
    'securityContext'?: SecurityContextsSecurityContextSimpleModel;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentNotifiedEmailsEditRequest
 */
export interface DocumentsDocumentNotifiedEmailsEditRequest {
    /**
     * The emails to notify when the document is concluded.
     * @type {Array<string>}
     * @memberof DocumentsDocumentNotifiedEmailsEditRequest
     */
    'emails'?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentPermissionsModel
 */
export interface DocumentsDocumentPermissionsModel {
    /**
     * 
     * @type {boolean}
     * @memberof DocumentsDocumentPermissionsModel
     */
    'move'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentsDocumentPermissionsModel
     */
    'editFlow'?: boolean;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentSignaturesInfoModel
 */
export interface DocumentsDocumentSignaturesInfoModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'filename'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'mimeType'?: string | null;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'createdBy'?: DocumentsCreatorModel;
    /**
     * True if all actions requested in the document are concluded.
     * @type {boolean}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'isConcluded'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'isFile'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'isEnvelope'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'creationDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'updateDate'?: string;
    /**
     * List of who signed the document.  Each element in the list contains a validation result.
     * @type {Array<SignerModel>}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'signers'?: Array<SignerModel> | null;
    /**
     * 
     * @type {DocumentStatus}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'status'?: DocumentStatus;
    /**
     * 
     * @type {DocumentTypes}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'type'?: DocumentTypes;
    /**
     * 
     * @type {SignatureTypes}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'signatureType'?: SignatureTypes;
    /**
     * 
     * @type {SecurityContextsSecurityContextSimpleModel}
     * @memberof DocumentsDocumentSignaturesInfoModel
     */
    'securityContext'?: SecurityContextsSecurityContextSimpleModel;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentTagData
 */
export interface DocumentsDocumentTagData {
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentTagData
     */
    'value': string;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentTagData
     */
    'label'?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentsDocumentTagModel
 */
export interface DocumentsDocumentTagModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentTagModel
     */
    'value': string;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentTagModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentsDocumentTagModel
     */
    'label'?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentsEnvelopeAddVersionRequest
 */
export interface DocumentsEnvelopeAddVersionRequest {
    /**
     * 
     * @type {Array<FileUploadModel>}
     * @memberof DocumentsEnvelopeAddVersionRequest
     */
    'files'?: Array<FileUploadModel> | null;
    /**
     * If true the notifications of pending actions won\'t be sent to the participants of the first step.
     * @type {boolean}
     * @memberof DocumentsEnvelopeAddVersionRequest
     */
    'disablePendingActionNotifications'?: boolean;
    /**
     * 
     * @type {DocumentsDocumentAdditionalInfoData}
     * @memberof DocumentsEnvelopeAddVersionRequest
     */
    'additionalInfo'?: DocumentsDocumentAdditionalInfoData;
    /**
     * 
     * @type {Array<DocumentsPrePositionedMarkModel>}
     * @memberof DocumentsEnvelopeAddVersionRequest
     */
    'prePositionedMarks'?: Array<DocumentsPrePositionedMarkModel> | null;
}
/**
 * 
 * @export
 * @interface DocumentsFlowActionPendingModel
 */
export interface DocumentsFlowActionPendingModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentsFlowActionPendingModel
     */
    'signerId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsFlowActionPendingModel
     */
    'approverId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsFlowActionPendingModel
     */
    'signRuleId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentsFlowActionPendingModel
     */
    'approverRuleId'?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentsMoveDocumentBatchRequest
 */
export interface DocumentsMoveDocumentBatchRequest {
    /**
     * The Ids of the documents that will be moved.
     * @type {Array<string>}
     * @memberof DocumentsMoveDocumentBatchRequest
     */
    'documents'?: Array<string> | null;
    /**
     * The Id of the folder to which the document(s) will be moved.  The folder Id can be null if you want to move the document(s) to no folder or if you want to create a new folder using Lacuna.Signer.Api.Documents.MoveDocumentRequest.NewFolderName.
     * @type {string}
     * @memberof DocumentsMoveDocumentBatchRequest
     */
    'folderId'?: string | null;
    /**
     * The name of the folder to be created and the documents will be moved to. (If Lacuna.Signer.Api.Documents.MoveDocumentRequest.FolderId is null)
     * @type {string}
     * @memberof DocumentsMoveDocumentBatchRequest
     */
    'newFolderName'?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentsMoveDocumentRequest
 */
export interface DocumentsMoveDocumentRequest {
    /**
     * The Id of the folder to which the document(s) will be moved.  The folder Id can be null if you want to move the document(s) to no folder or if you want to create a new folder using Lacuna.Signer.Api.Documents.MoveDocumentRequest.NewFolderName.
     * @type {string}
     * @memberof DocumentsMoveDocumentRequest
     */
    'folderId'?: string | null;
    /**
     * The name of the folder to be created and the documents will be moved to. (If Lacuna.Signer.Api.Documents.MoveDocumentRequest.FolderId is null)
     * @type {string}
     * @memberof DocumentsMoveDocumentRequest
     */
    'newFolderName'?: string | null;
}
/**
 * 
 * @export
 * @interface DocumentsPrePositionedMarkModel
 */
export interface DocumentsPrePositionedMarkModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentsPrePositionedMarkModel
     */
    'flowActionId'?: string;
    /**
     * 
     * @type {Array<DocumentMarkPrePositionedDocumentMarkModel>}
     * @memberof DocumentsPrePositionedMarkModel
     */
    'prePositionedDocumentMarks'?: Array<DocumentMarkPrePositionedDocumentMarkModel> | null;
}
/**
 * 
 * @export
 * @interface ErrorModel
 */
export interface ErrorModel {
    /**
     * 
     * @type {string}
     * @memberof ErrorModel
     */
    'code'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ErrorModel
     */
    'message'?: string | null;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ErrorModel
     */
    'details'?: { [key: string]: string; } | null;
}
/**
 * 
 * @export
 * @interface FileModel
 */
export interface FileModel {
    /**
     * 
     * @type {string}
     * @memberof FileModel
     */
    'contentType': string;
    /**
     * 
     * @type {string}
     * @memberof FileModel
     */
    'location'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FileModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof FileModel
     */
    'name'?: string | null;
}
/**
 * 
 * @export
 * @interface FileUploadModel
 */
export interface FileUploadModel {
    /**
     * This is the name the document will display in the application.
     * @type {string}
     * @memberof FileUploadModel
     */
    'displayName': string;
    /**
     * The upload Id as returned by the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a>
     * @type {string}
     * @memberof FileUploadModel
     */
    'id': string;
    /**
     * The file\'s original name.
     * @type {string}
     * @memberof FileUploadModel
     */
    'name': string;
    /**
     * The file\'s mime type. Unless overridden, PDF mime types will be signed as PAdES and all other types as CAdES.
     * @type {string}
     * @memberof FileUploadModel
     */
    'contentType': string;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const FlowActionType = {
    Signer: 'Signer',
    Approver: 'Approver',
    SignRule: 'SignRule',
    ApproverRule: 'ApproverRule'
} as const;

export type FlowActionType = typeof FlowActionType[keyof typeof FlowActionType];


/**
 * 
 * @export
 * @interface FlowActionsApprovalModel
 */
export interface FlowActionsApprovalModel {
    /**
     * 
     * @type {string}
     * @memberof FlowActionsApprovalModel
     */
    'flowActionId'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsApprovalModel
     */
    'date'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsApprovalModel
     */
    'userId'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsApprovalModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsApprovalModel
     */
    'identifier'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsApprovalModel
     */
    'emailAddress'?: string | null;
}
/**
 * 
 * @export
 * @interface FlowActionsDocumentFlowEditResponse
 */
export interface FlowActionsDocumentFlowEditResponse {
    /**
     * 
     * @type {Array<FlowActionsRectifiedParticipantModel>}
     * @memberof FlowActionsDocumentFlowEditResponse
     */
    'rectifiedParticipants'?: Array<FlowActionsRectifiedParticipantModel> | null;
}
/**
 * 
 * @export
 * @interface FlowActionsFlowActionCreateModel
 */
export interface FlowActionsFlowActionCreateModel {
    /**
     * 
     * @type {UsersParticipantUserModel}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'user'?: UsersParticipantUserModel;
    /**
     * [DEPRECATED] Please use `RuleUsers` instead.
     * @type {Array<UsersParticipantUserModel>}
     * @memberof FlowActionsFlowActionCreateModel
     * @deprecated
     */
    'signRuleUsers'?: Array<UsersParticipantUserModel> | null;
    /**
     * 
     * @type {Array<UsersParticipantUserModel>}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'ruleUsers'?: Array<UsersParticipantUserModel> | null;
    /**
     * 
     * @type {FlowActionType}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'type'?: FlowActionType;
    /**
     * [DEPRECATED] Number of required signatures (if type is SignRule). Please use `NumberRequiredActions` instead.
     * @type {number}
     * @memberof FlowActionsFlowActionCreateModel
     * @deprecated
     */
    'numberRequiredSignatures'?: number | null;
    /**
     * Number of required action complete rule (if type is SignRule or ApproverRule).
     * @type {number}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'numberRequiredActions'?: number | null;
    /**
     * If true and the action is a Rule, allows the document flow to continue while there are enough users that can fulfill the rule.
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'allowRuleFlowToContinueIfRefused'?: boolean | null;
    /**
     * 
     * @type {FlowActionsXadesOptionsModel}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'xadesOptions'?: FlowActionsXadesOptionsModel;
    /**
     * The order in which this action should take place.
     * @type {number}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'step'?: number;
    /**
     * Name of the rule (if type is SignRule or ApproveRule)
     * @type {string}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'ruleName'?: string | null;
    /**
     * Title of the participant
     * @type {string}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'title'?: string | null;
    /**
     * 
     * @type {Array<DocumentMarkPrePositionedDocumentMarkModel>}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'prePositionedMarks'?: Array<DocumentMarkPrePositionedDocumentMarkModel> | null;
    /**
     * Set to true if the electronic signature option should be available. (only if the type of the action is Signer or SignRule)
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'allowElectronicSignature'?: boolean | null;
    /**
     * Requires the user to confirm a code sent to his phone to sign electronically. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requireSmsAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to confirm a code sent to his Whatsapp number to sign electronically. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requireWhatsappAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to enter a one-time password (OTP) to sign electronically. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requireAuthenticatorAppToSignElectronically'?: boolean | null;
    /**
     * Requires the user to take a selfie to sign electronically. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requireSelfieAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to take a selfie to sign electronically. This selfie will be validated by SERPRO\'s Datavalid. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requireDatavalidAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to pay a Pix to sign electronically. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requirePixAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to perform a liveness test to sign electronically. (If AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requireLivenessAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to perform a photo id scan to sign electronically. (If AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requireIdScanAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Disables e-mail authentication to sign electronically. This option can only be used if SMS or Whatsapp authentication was required. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'disableEmailAuthenticationToSignElectronically'?: boolean | null;
    /**
     * 
     * @type {CertificateTypes}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requiredCertificateTypeToSign'?: CertificateTypes;
    /**
     * [DEPRECATED] Requires the user to sign the document with a company certificate (e.g. e-CNPJ). Please use RequiredCertificateHolderTypeToSign instead.
     * @type {boolean}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requireCompanyCertificate'?: boolean | null;
    /**
     * Requires the user to sign the document with a company certificate (e.g. e-CNPJ) that has the provided company identifier.
     * @type {string}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requiredCompanyIdentifier'?: string | null;
    /**
     * 
     * @type {CertificateHolderTypes}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'requiredCertificateHolderTypeToSign'?: CertificateHolderTypes;
    /**
     * 
     * @type {SignatureInitialsModes}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'signatureInitialsMode'?: SignatureInitialsModes;
    /**
     * 
     * @type {NotificationLanguage}
     * @memberof FlowActionsFlowActionCreateModel
     */
    'notificationLanguage'?: NotificationLanguage;
}
/**
 * 
 * @export
 * @interface FlowActionsFlowActionEditModel
 */
export interface FlowActionsFlowActionEditModel {
    /**
     * The Id of the flow action being modified.
     * @type {string}
     * @memberof FlowActionsFlowActionEditModel
     */
    'flowActionId'?: string;
    /**
     * The new email address of the action\'s participant (if the type is Lacuna.Signer.Api.FlowActionType.Signer or Lacuna.Signer.Api.FlowActionType.Approver).
     * @type {string}
     * @memberof FlowActionsFlowActionEditModel
     */
    'participantEmailAddress'?: string | null;
    /**
     * The new mobile phone number of the action\'s participant (if the type is Lacuna.Signer.Api.FlowActionType.Signer).
     * @type {string}
     * @memberof FlowActionsFlowActionEditModel
     */
    'participantPhoneNumber'?: string | null;
    /**
     * [DEPRECATED] The rule users to be edited (if the type is Lacuna.Signer.Api.FlowActionType.SignRule). Please use `RuleUsers` instead.
     * @type {Array<FlowActionsSignRuleUserEditModel>}
     * @memberof FlowActionsFlowActionEditModel
     * @deprecated
     */
    'signRuleUsers'?: Array<FlowActionsSignRuleUserEditModel> | null;
    /**
     * The rule users to be edited (if the type is Lacuna.Signer.Api.FlowActionType.SignRule or Lacuna.Signer.Api.FlowActionType.ApproverRule).
     * @type {Array<FlowActionsSignRuleUserEditModel>}
     * @memberof FlowActionsFlowActionEditModel
     */
    'ruleUsers'?: Array<FlowActionsSignRuleUserEditModel> | null;
    /**
     * The order in which this action should take place.
     * @type {number}
     * @memberof FlowActionsFlowActionEditModel
     */
    'step'?: number;
    /**
     * Name of the rule (if type is SignRule or ApproveRule)
     * @type {string}
     * @memberof FlowActionsFlowActionEditModel
     */
    'ruleName'?: string | null;
    /**
     * Title of the participant
     * @type {string}
     * @memberof FlowActionsFlowActionEditModel
     */
    'title'?: string | null;
    /**
     * 
     * @type {Array<DocumentMarkPrePositionedDocumentMarkModel>}
     * @memberof FlowActionsFlowActionEditModel
     */
    'prePositionedMarks'?: Array<DocumentMarkPrePositionedDocumentMarkModel> | null;
    /**
     * Set to true if the electronic signature option should be available. (only if the type of the action is Signer or SignRule)
     * @type {boolean}
     * @memberof FlowActionsFlowActionEditModel
     */
    'allowElectronicSignature'?: boolean | null;
    /**
     * Requires the user to confirm a code sent to his phone to sign electronically. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requireSmsAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to confirm a code sent to his Whatsapp number to sign electronically. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requireWhatsappAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to enter a one-time password (OTP) to sign electronically. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requireAuthenticatorAppToSignElectronically'?: boolean | null;
    /**
     * Requires the user to take a selfie to sign electronically. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requireSelfieAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to take a selfie to sign electronically. This selfie will be validated by SERPRO\'s Datavalid. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requireDatavalidAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to pay a Pix to sign electronically. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requirePixAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to perform a liveness test to sign electronically. (If AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requireLivenessAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to perform a photo id scan to sign electronically. (If AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requireIdScanAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Disables e-mail authentication to sign electronically. This option can only be used if SMS or Whatsapp authentication was required. (If Lacuna.Signer.Api.FlowActions.BaseFlowActionData.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionEditModel
     */
    'disableEmailAuthenticationToSignElectronically'?: boolean | null;
    /**
     * 
     * @type {CertificateTypes}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requiredCertificateTypeToSign'?: CertificateTypes;
    /**
     * [DEPRECATED] Requires the user to sign the document with a company certificate (e.g. e-CNPJ). Please use RequiredCertificateHolderTypeToSign instead.
     * @type {boolean}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requireCompanyCertificate'?: boolean | null;
    /**
     * Requires the user to sign the document with a company certificate (e.g. e-CNPJ) that has the provided company identifier.
     * @type {string}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requiredCompanyIdentifier'?: string | null;
    /**
     * 
     * @type {CertificateHolderTypes}
     * @memberof FlowActionsFlowActionEditModel
     */
    'requiredCertificateHolderTypeToSign'?: CertificateHolderTypes;
    /**
     * 
     * @type {SignatureInitialsModes}
     * @memberof FlowActionsFlowActionEditModel
     */
    'signatureInitialsMode'?: SignatureInitialsModes;
    /**
     * 
     * @type {NotificationLanguage}
     * @memberof FlowActionsFlowActionEditModel
     */
    'notificationLanguage'?: NotificationLanguage;
}
/**
 * 
 * @export
 * @interface FlowActionsFlowActionModel
 */
export interface FlowActionsFlowActionModel {
    /**
     * 
     * @type {string}
     * @memberof FlowActionsFlowActionModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsFlowActionModel
     */
    'creationDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsFlowActionModel
     */
    'pendingDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsFlowActionModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {UsersParticipantUserModel}
     * @memberof FlowActionsFlowActionModel
     */
    'user'?: UsersParticipantUserModel;
    /**
     * [DEPRECATED] Number of required signatures (if type is SignRule). Please use `NumberRequiredActions\"` instead.
     * @type {number}
     * @memberof FlowActionsFlowActionModel
     * @deprecated
     */
    'numberRequiredSignatures'?: number;
    /**
     * Number of required action complete rule (if type is SignRule or ApproverRule).
     * @type {number}
     * @memberof FlowActionsFlowActionModel
     */
    'numberRequiredActions'?: number;
    /**
     * [DEPRECATED] Users that are allowed to sign if type is SignRule. Please use `RuleUsers` instead.
     * @type {Array<FlowActionsSignRuleUserModel>}
     * @memberof FlowActionsFlowActionModel
     * @deprecated
     */
    'signRuleUsers'?: Array<FlowActionsSignRuleUserModel> | null;
    /**
     * Users that are allowed to sign or approver (if type is SignRule or ApproverRule)
     * @type {Array<FlowActionsRuleUserModel>}
     * @memberof FlowActionsFlowActionModel
     */
    'ruleUsers'?: Array<FlowActionsRuleUserModel> | null;
    /**
     * 
     * @type {Array<DocumentMarkDocumentMarkPositionModel>}
     * @memberof FlowActionsFlowActionModel
     */
    'marks'?: Array<DocumentMarkDocumentMarkPositionModel> | null;
    /**
     * True if the electronic signature option is available for this action (only if the type of the action is Signer or SignRule)
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'allowElectronicSignature'?: boolean;
    /**
     * Requires the user to confirm a code sent to his e-mail to sign electronically. (If Lacuna.Signer.Api.FlowActions.FlowActionModel.AllowElectronicSignature is true)  This requirement is not enforced if the user is logged in or was authenticated by an application (embedded signature mode).
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'requireEmailAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to confirm a code sent to his phone to sign electronically. (If Lacuna.Signer.Api.FlowActions.FlowActionModel.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'requireSmsAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to confirm a code sent to his Whatsapp number to sign electronically. (If Lacuna.Signer.Api.FlowActions.FlowActionModel.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'requireWhatsappAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to enter a one-time password (OTP) to sign electronically. (If Lacuna.Signer.Api.FlowActions.FlowActionModel.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'requireAuthenticatorAppToSignElectronically'?: boolean | null;
    /**
     * Requires the user to take a selfie to sign electronically. (If Lacuna.Signer.Api.FlowActions.FlowActionModel.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'requireSelfieAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to take a selfie to sign electronically. This selfie will be validated by SERPRO\'s Datavalid. (If Lacuna.Signer.Api.FlowActions.FlowActionModel.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'requireDatavalidAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to pay a Pix to sign electronically. The payer\'s CPF must be the same as that of the user who will be signing. (If Lacuna.Signer.Api.FlowActions.FlowActionModel.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'requirePixAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to perform a liveness test to sign electronically.  (If Lacuna.Signer.Api.FlowActions.FlowActionModel.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'requireLivenessAuthenticationToSignElectronically'?: boolean | null;
    /**
     * Requires the user to perform a photo id scan to sign electronically.  (If Lacuna.Signer.Api.FlowActions.FlowActionModel.AllowElectronicSignature is true)
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'requireIdScanAuthenticationToSignElectronically'?: boolean | null;
    /**
     * 
     * @type {CertificateTypes}
     * @memberof FlowActionsFlowActionModel
     */
    'requiredCertificateTypeToSign'?: CertificateTypes;
    /**
     * [DEPRECATED] The user is required to sign the document with a company certificate (e.g. e-CNPJ). Please use Lacuna.Signer.Api.FlowActions.FlowActionModel.RequiredCertificateHolderTypeToSign instead.
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'requireCompanyCertificate'?: boolean | null;
    /**
     * The user is required to sign the document with a company certificate (e.g. e-CNPJ) that has the provided company identifier.
     * @type {string}
     * @memberof FlowActionsFlowActionModel
     */
    'requiredCompanyIdentifier'?: string | null;
    /**
     * 
     * @type {CertificateHolderTypes}
     * @memberof FlowActionsFlowActionModel
     */
    'requiredCertificateHolderTypeToSign'?: CertificateHolderTypes;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsFlowActionModel
     */
    'refusalReason'?: string | null;
    /**
     * 
     * @type {SignatureInitialsModes}
     * @memberof FlowActionsFlowActionModel
     */
    'signatureInitialsMode'?: SignatureInitialsModes;
    /**
     * 
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'isElectronic'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof FlowActionsFlowActionModel
     */
    'allowRuleFlowToContinueIfRefused'?: boolean;
    /**
     * 
     * @type {NotificationLanguage}
     * @memberof FlowActionsFlowActionModel
     */
    'notificationLanguage'?: NotificationLanguage;
    /**
     * 
     * @type {FlowActionType}
     * @memberof FlowActionsFlowActionModel
     */
    'type'?: FlowActionType;
    /**
     * 
     * @type {ActionStatus}
     * @memberof FlowActionsFlowActionModel
     */
    'status'?: ActionStatus;
    /**
     * 
     * @type {number}
     * @memberof FlowActionsFlowActionModel
     */
    'step'?: number;
    /**
     * Name of the rule if type is SignRule or ApproverRule
     * @type {string}
     * @memberof FlowActionsFlowActionModel
     */
    'ruleName'?: string | null;
    /**
     * Title of the participant
     * @type {string}
     * @memberof FlowActionsFlowActionModel
     */
    'title'?: string | null;
}
/**
 * Contains the ids of the pending actions if there are any.
 * @export
 * @interface FlowActionsPendingActionModel
 */
export interface FlowActionsPendingActionModel {
    /**
     * 
     * @type {string}
     * @memberof FlowActionsPendingActionModel
     */
    'signerId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsPendingActionModel
     */
    'signRuleId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsPendingActionModel
     */
    'approverId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsPendingActionModel
     */
    'approverRuleId'?: string | null;
}
/**
 * 
 * @export
 * @interface FlowActionsRectifiedParticipantModel
 */
export interface FlowActionsRectifiedParticipantModel {
    /**
     * 
     * @type {string}
     * @memberof FlowActionsRectifiedParticipantModel
     */
    'userId'?: string;
    /**
     * 
     * @type {UsersParticipantUserModel}
     * @memberof FlowActionsRectifiedParticipantModel
     */
    'requested'?: UsersParticipantUserModel;
    /**
     * 
     * @type {UsersParticipantUserModel}
     * @memberof FlowActionsRectifiedParticipantModel
     */
    'rectified'?: UsersParticipantUserModel;
}
/**
 * 
 * @export
 * @interface FlowActionsRuleUserModel
 */
export interface FlowActionsRuleUserModel {
    /**
     * 
     * @type {string}
     * @memberof FlowActionsRuleUserModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsRuleUserModel
     */
    'name'?: string | null;
    /**
     * The user identifier (CPF in Brazil or Cédula de Identidad in Ecuador/Paraguay).
     * @type {string}
     * @memberof FlowActionsRuleUserModel
     */
    'identifier'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsRuleUserModel
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsRuleUserModel
     */
    'phone'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsRuleUserModel
     */
    'completeActionDate'?: string | null;
    /**
     * Defined only if it is a signature rule
     * @type {boolean}
     * @memberof FlowActionsRuleUserModel
     */
    'isElectronic'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsRuleUserModel
     */
    'refusalDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FlowActionsRuleUserModel
     */
    'hasRefused'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsRuleUserModel
     */
    'refusalReason'?: string | null;
}
/**
 * 
 * @export
 * @interface FlowActionsSignRuleUserEditModel
 */
export interface FlowActionsSignRuleUserEditModel {
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignRuleUserEditModel
     */
    'userId'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignRuleUserEditModel
     */
    'emailAddress'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignRuleUserEditModel
     */
    'phoneNumber'?: string | null;
}
/**
 * 
 * @export
 * @interface FlowActionsSignRuleUserModel
 */
export interface FlowActionsSignRuleUserModel {
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignRuleUserModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignRuleUserModel
     */
    'name'?: string | null;
    /**
     * The user identifier (CPF in Brazil or Cédula de Identidad in Ecuador/Paraguay).
     * @type {string}
     * @memberof FlowActionsSignRuleUserModel
     */
    'identifier'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignRuleUserModel
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignRuleUserModel
     */
    'phone'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignRuleUserModel
     */
    'signatureDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FlowActionsSignRuleUserModel
     */
    'isElectronic'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignRuleUserModel
     */
    'refusalDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FlowActionsSignRuleUserModel
     */
    'hasRefused'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignRuleUserModel
     */
    'refusalReason'?: string | null;
}
/**
 * 
 * @export
 * @interface FlowActionsSignatureModel
 */
export interface FlowActionsSignatureModel {
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignatureModel
     */
    'flowActionId'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignatureModel
     */
    'date'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignatureModel
     */
    'userId'?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignatureModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignatureModel
     */
    'identifier'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlowActionsSignatureModel
     */
    'emailAddress'?: string | null;
}
/**
 * 
 * @export
 * @interface FlowActionsXadesOptionsModel
 */
export interface FlowActionsXadesOptionsModel {
    /**
     * 
     * @type {XadesSignatureTypes}
     * @memberof FlowActionsXadesOptionsModel
     */
    'signatureType'?: XadesSignatureTypes;
    /**
     * 
     * @type {XadesElementIdentifierTypes}
     * @memberof FlowActionsXadesOptionsModel
     */
    'elementToSignIdentifierType'?: XadesElementIdentifierTypes;
    /**
     * A string used to identify the element that should be signed.  If the Lacuna.Signer.Api.FlowActions.XadesOptionsModel.ElementToSignIdentifierType is Lacuna.Signer.Api.XadesElementIdentifierTypes.Id, this string is the Id of the element to be signed.  If the Lacuna.Signer.Api.FlowActions.XadesOptionsModel.ElementToSignIdentifierType is Lacuna.Signer.Api.XadesElementIdentifierTypes.XPath, this string is the XPath to the element to be signed.
     * @type {string}
     * @memberof FlowActionsXadesOptionsModel
     */
    'elementToSignIdentifier'?: string | null;
    /**
     * 
     * @type {XadesInsertionOptions}
     * @memberof FlowActionsXadesOptionsModel
     */
    'insertionOption'?: XadesInsertionOptions;
    /**
     * By default the XPath transformation is applied in all XAdES signatures. You can set a flow action to not apply the transformation by setting this option to true.  WARNING: If you disable the XPath transformation the signatures might be considered invalid in some validators if the same XML element is signed multiple times.
     * @type {boolean}
     * @memberof FlowActionsXadesOptionsModel
     */
    'disableXPathTransformation'?: boolean;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const FolderType = {
    Normal: 'Normal',
    WithoutFolder: 'WithoutFolder'
} as const;

export type FolderType = typeof FolderType[keyof typeof FolderType];


/**
 * 
 * @export
 * @interface FoldersFolderCreateRequest
 */
export interface FoldersFolderCreateRequest {
    /**
     * 
     * @type {string}
     * @memberof FoldersFolderCreateRequest
     */
    'name': string;
    /**
     * Id of the parent folder. Set as null to create the folder as root.
     * @type {string}
     * @memberof FoldersFolderCreateRequest
     */
    'parentId'?: string | null;
}
/**
 * 
 * @export
 * @interface FoldersFolderDeleteRequest
 */
export interface FoldersFolderDeleteRequest {
    /**
     * 
     * @type {DeleteAction}
     * @memberof FoldersFolderDeleteRequest
     */
    'deleteAction'?: DeleteAction;
    /**
     * The folder to which the documents will be moved (if Lacuna.Signer.Api.Folders.FolderDeleteRequest.DeleteAction is Lacuna.Signer.Api.DeleteAction.MoveContent).  This value can be null if you want to keep the documents with no folder.
     * @type {string}
     * @memberof FoldersFolderDeleteRequest
     */
    'destinationFolderId'?: string | null;
}
/**
 * 
 * @export
 * @interface FoldersFolderInfoModel
 */
export interface FoldersFolderInfoModel {
    /**
     * 
     * @type {string}
     * @memberof FoldersFolderInfoModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof FoldersFolderInfoModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FoldersFolderInfoModel
     */
    'parentId'?: string | null;
}
/**
 * 
 * @export
 * @interface FoldersFolderOrganizationModel
 */
export interface FoldersFolderOrganizationModel {
    /**
     * 
     * @type {OrganizationsOrganizationInfoModel}
     * @memberof FoldersFolderOrganizationModel
     */
    'organization'?: OrganizationsOrganizationInfoModel;
    /**
     * 
     * @type {string}
     * @memberof FoldersFolderOrganizationModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof FoldersFolderOrganizationModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FoldersFolderOrganizationModel
     */
    'parentId'?: string | null;
}
/**
 * This option is only valid for the following document types: Prescription, MedicalCertificate, ExamRequest, LabReport, DischargeSummary, ClinicalRecord, DrugDispensing, Vaccination and MedicalReport
 * @export
 * @interface HealthDocumentsHealthDocumentData
 */
export interface HealthDocumentsHealthDocumentData {
    /**
     * 
     * @type {HealthDocumentsHealthProfessionalModel}
     * @memberof HealthDocumentsHealthDocumentData
     */
    'professional': HealthDocumentsHealthProfessionalModel;
    /**
     * Additional strutctured information for health documents. Can be used to display medication information.
     * @type {Array<HealthDocumentsHealthItemModel>}
     * @memberof HealthDocumentsHealthDocumentData
     */
    'items'?: Array<HealthDocumentsHealthItemModel> | null;
}
/**
 * 
 * @export
 * @interface HealthDocumentsHealthItemModel
 */
export interface HealthDocumentsHealthItemModel {
    /**
     * 
     * @type {string}
     * @memberof HealthDocumentsHealthItemModel
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof HealthDocumentsHealthItemModel
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HealthDocumentsHealthItemModel
     */
    'description2'?: string | null;
}
/**
 * 
 * @export
 * @interface HealthDocumentsHealthProfessionalModel
 */
export interface HealthDocumentsHealthProfessionalModel {
    /**
     * The professional ID number (e.g CRM)
     * @type {string}
     * @memberof HealthDocumentsHealthProfessionalModel
     */
    'id': string;
    /**
     * The professional ID region (a.k.a UF)
     * @type {string}
     * @memberof HealthDocumentsHealthProfessionalModel
     */
    'region': string;
}
/**
 * 
 * @export
 * @interface InvoicesInvoiceTotalModel
 */
export interface InvoicesInvoiceTotalModel {
    /**
     * 
     * @type {TransactionTypes}
     * @memberof InvoicesInvoiceTotalModel
     */
    'transactionType'?: TransactionTypes;
    /**
     * 
     * @type {TransactionsTransactionPriceModel}
     * @memberof InvoicesInvoiceTotalModel
     */
    'price'?: TransactionsTransactionPriceModel;
    /**
     * 
     * @type {number}
     * @memberof InvoicesInvoiceTotalModel
     */
    'total'?: number;
    /**
     * 
     * @type {number}
     * @memberof InvoicesInvoiceTotalModel
     */
    'totalInTrialPeriod'?: number;
    /**
     * 
     * @type {number}
     * @memberof InvoicesInvoiceTotalModel
     */
    'value'?: number;
}
/**
 * 
 * @export
 * @interface InvoicesUpdateInvoicePaymentStatusRequest
 */
export interface InvoicesUpdateInvoicePaymentStatusRequest {
    /**
     * 
     * @type {boolean}
     * @memberof InvoicesUpdateInvoicePaymentStatusRequest
     */
    'isPaid'?: boolean;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const NotarizationStatus = {
    Pending: 'Pending',
    Notarized: 'Notarized',
    Rejected: 'Rejected'
} as const;

export type NotarizationStatus = typeof NotarizationStatus[keyof typeof NotarizationStatus];


/**
 * <p>Members:</p><ul>  <li><b>Test</b>: Notary configuration that doesn\'t require a specific PKI</li>  </ul>  
 * @export
 * @enum {string}
 */

export const NotaryTypes = {
    Test: 'Test',
    Cnb: 'CNB',
    Cori: 'CORI',
    Onr: 'ONR'
} as const;

export type NotaryTypes = typeof NotaryTypes[keyof typeof NotaryTypes];


/**
 * 
 * @export
 * @enum {string}
 */

export const NotificationLanguage = {
    Pt: 'Pt',
    Es: 'Es',
    En: 'En'
} as const;

export type NotificationLanguage = typeof NotificationLanguage[keyof typeof NotificationLanguage];


/**
 * 
 * @export
 * @interface NotificationsCreateFlowActionReminderRequest
 */
export interface NotificationsCreateFlowActionReminderRequest {
    /**
     * 
     * @type {string}
     * @memberof NotificationsCreateFlowActionReminderRequest
     */
    'documentId': string;
    /**
     * 
     * @type {string}
     * @memberof NotificationsCreateFlowActionReminderRequest
     */
    'flowActionId': string;
}
/**
 * 
 * @export
 * @interface NotificationsEmailListNotificationRequest
 */
export interface NotificationsEmailListNotificationRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof NotificationsEmailListNotificationRequest
     */
    'emails': Array<string>;
}
/**
 * 
 * @export
 * @interface ObserversObserverCreateModel
 */
export interface ObserversObserverCreateModel {
    /**
     * 
     * @type {UsersParticipantUserModel}
     * @memberof ObserversObserverCreateModel
     */
    'user': UsersParticipantUserModel;
    /**
     * 
     * @type {NotificationLanguage}
     * @memberof ObserversObserverCreateModel
     */
    'notificationLanguage'?: NotificationLanguage;
}
/**
 * 
 * @export
 * @interface ObserversObserverEditModel
 */
export interface ObserversObserverEditModel {
    /**
     * Id of the observer being modified.
     * @type {string}
     * @memberof ObserversObserverEditModel
     */
    'observerId'?: string;
    /**
     * The new email of the observer.
     * @type {string}
     * @memberof ObserversObserverEditModel
     */
    'emailAddress'?: string | null;
    /**
     * 
     * @type {NotificationLanguage}
     * @memberof ObserversObserverEditModel
     */
    'notificationLanguage'?: NotificationLanguage;
}
/**
 * 
 * @export
 * @interface ObserversObserverModel
 */
export interface ObserversObserverModel {
    /**
     * 
     * @type {string}
     * @memberof ObserversObserverModel
     */
    'id'?: string;
    /**
     * 
     * @type {UsersParticipantUserModel}
     * @memberof ObserversObserverModel
     */
    'user'?: UsersParticipantUserModel;
    /**
     * 
     * @type {NotificationLanguage}
     * @memberof ObserversObserverModel
     */
    'notificationLanguage'?: NotificationLanguage;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const OrganizationType = {
    Normal: 'Normal',
    Personal: 'Personal',
    SharedWithMe: 'SharedWithMe'
} as const;

export type OrganizationType = typeof OrganizationType[keyof typeof OrganizationType];


/**
 * 
 * @export
 * @interface OrganizationsAccessProfileModel
 */
export interface OrganizationsAccessProfileModel {
    /**
     * 
     * @type {boolean}
     * @memberof OrganizationsAccessProfileModel
     */
    'administrator'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrganizationsAccessProfileModel
     */
    'manager'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrganizationsAccessProfileModel
     */
    'operator'?: boolean;
}
/**
 * 
 * @export
 * @interface OrganizationsOrganizationInfoModel
 */
export interface OrganizationsOrganizationInfoModel {
    /**
     * 
     * @type {string}
     * @memberof OrganizationsOrganizationInfoModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationsOrganizationInfoModel
     */
    'name'?: string | null;
    /**
     * The organization identifier (CNPJ)
     * @type {string}
     * @memberof OrganizationsOrganizationInfoModel
     */
    'identifier'?: string | null;
    /**
     * 
     * @type {OrganizationsOrganizationOwnerInfoModel}
     * @memberof OrganizationsOrganizationInfoModel
     */
    'owner'?: OrganizationsOrganizationOwnerInfoModel;
}
/**
 * 
 * @export
 * @interface OrganizationsOrganizationOwnerInfoModel
 */
export interface OrganizationsOrganizationOwnerInfoModel {
    /**
     * 
     * @type {string}
     * @memberof OrganizationsOrganizationOwnerInfoModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationsOrganizationOwnerInfoModel
     */
    'name'?: string | null;
}
/**
 * 
 * @export
 * @interface OrganizationsOrganizationUserModel
 */
export interface OrganizationsOrganizationUserModel {
    /**
     * 
     * @type {string}
     * @memberof OrganizationsOrganizationUserModel
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrganizationsOrganizationUserModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrganizationsOrganizationUserModel
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrganizationsOrganizationUserModel
     */
    'identifier'?: string | null;
    /**
     * 
     * @type {OrganizationsAccessProfileModel}
     * @memberof OrganizationsOrganizationUserModel
     */
    'accessProfile'?: OrganizationsAccessProfileModel;
}
/**
 * 
 * @export
 * @interface OrganizationsOrganizationUserPostRequest
 */
export interface OrganizationsOrganizationUserPostRequest {
    /**
     * 
     * @type {OrganizationsAccessProfileModel}
     * @memberof OrganizationsOrganizationUserPostRequest
     */
    'accessProfile'?: OrganizationsAccessProfileModel;
    /**
     * 
     * @type {string}
     * @memberof OrganizationsOrganizationUserPostRequest
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrganizationsOrganizationUserPostRequest
     */
    'name'?: string | null;
    /**
     * The user identifier (CPF in Brazil and Cédula de Identidad in Ecuador/Paraguay).
     * @type {string}
     * @memberof OrganizationsOrganizationUserPostRequest
     */
    'identifier'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrganizationsOrganizationUserPostRequest
     */
    'email'?: string | null;
    /**
     * The user\'s mobile phone number. It will be set only if the user does not exist, i.e. it will not override  existing user\'s phones.  Must use iternational format, example: +55 11 91234-5678
     * @type {string}
     * @memberof OrganizationsOrganizationUserPostRequest
     */
    'phone'?: string | null;
}
/**
 * 
 * @export
 * @interface PaginatedSearchResponseDocumentFlowsDocumentFlowModel
 */
export interface PaginatedSearchResponseDocumentFlowsDocumentFlowModel {
    /**
     * 
     * @type {Array<DocumentFlowsDocumentFlowModel>}
     * @memberof PaginatedSearchResponseDocumentFlowsDocumentFlowModel
     */
    'items'?: Array<DocumentFlowsDocumentFlowModel> | null;
    /**
     * 
     * @type {number}
     * @memberof PaginatedSearchResponseDocumentFlowsDocumentFlowModel
     */
    'totalCount'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSearchResponseDocumentFlowsDocumentFlowModel
     */
    'nextCursor'?: string | null;
}
/**
 * 
 * @export
 * @interface PaginatedSearchResponseDocumentsDocumentListModel
 */
export interface PaginatedSearchResponseDocumentsDocumentListModel {
    /**
     * 
     * @type {Array<DocumentsDocumentListModel>}
     * @memberof PaginatedSearchResponseDocumentsDocumentListModel
     */
    'items'?: Array<DocumentsDocumentListModel> | null;
    /**
     * 
     * @type {number}
     * @memberof PaginatedSearchResponseDocumentsDocumentListModel
     */
    'totalCount'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSearchResponseDocumentsDocumentListModel
     */
    'nextCursor'?: string | null;
}
/**
 * 
 * @export
 * @interface PaginatedSearchResponseFoldersFolderInfoModel
 */
export interface PaginatedSearchResponseFoldersFolderInfoModel {
    /**
     * 
     * @type {Array<FoldersFolderInfoModel>}
     * @memberof PaginatedSearchResponseFoldersFolderInfoModel
     */
    'items'?: Array<FoldersFolderInfoModel> | null;
    /**
     * 
     * @type {number}
     * @memberof PaginatedSearchResponseFoldersFolderInfoModel
     */
    'totalCount'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSearchResponseFoldersFolderInfoModel
     */
    'nextCursor'?: string | null;
}
/**
 * 
 * @export
 * @interface PaginatedSearchResponseOrganizationsOrganizationUserModel
 */
export interface PaginatedSearchResponseOrganizationsOrganizationUserModel {
    /**
     * 
     * @type {Array<OrganizationsOrganizationUserModel>}
     * @memberof PaginatedSearchResponseOrganizationsOrganizationUserModel
     */
    'items'?: Array<OrganizationsOrganizationUserModel> | null;
    /**
     * 
     * @type {number}
     * @memberof PaginatedSearchResponseOrganizationsOrganizationUserModel
     */
    'totalCount'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSearchResponseOrganizationsOrganizationUserModel
     */
    'nextCursor'?: string | null;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const PaginationOrders = {
    Asc: 'Asc',
    Desc: 'Desc'
} as const;

export type PaginationOrders = typeof PaginationOrders[keyof typeof PaginationOrders];


/**
 * 
 * @export
 * @enum {string}
 */

export const ParticipantQueryTypes = {
    Name: 'Name',
    Identifier: 'Identifier',
    Email: 'Email',
    Phone: 'Phone'
} as const;

export type ParticipantQueryTypes = typeof ParticipantQueryTypes[keyof typeof ParticipantQueryTypes];


/**
 * 
 * @export
 * @enum {string}
 */

export const Probability = {
    VeryLow: 'VeryLow',
    Low: 'Low',
    High: 'High',
    VeryHigh: 'VeryHigh'
} as const;

export type Probability = typeof Probability[keyof typeof Probability];


/**
 * 
 * @export
 * @interface RefusalRefusalModel
 */
export interface RefusalRefusalModel {
    /**
     * 
     * @type {string}
     * @memberof RefusalRefusalModel
     */
    'flowActionId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RefusalRefusalModel
     */
    'reason'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RefusalRefusalModel
     */
    'date'?: string;
    /**
     * 
     * @type {string}
     * @memberof RefusalRefusalModel
     */
    'userId'?: string;
    /**
     * 
     * @type {string}
     * @memberof RefusalRefusalModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RefusalRefusalModel
     */
    'identifier'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RefusalRefusalModel
     */
    'emailAddress'?: string | null;
}
/**
 * 
 * @export
 * @interface RefusalRefusalRequest
 */
export interface RefusalRefusalRequest {
    /**
     * 
     * @type {string}
     * @memberof RefusalRefusalRequest
     */
    'reason': string;
}
/**
 * 
 * @export
 * @interface SecurityContextsAuthenticationTypesModel
 */
export interface SecurityContextsAuthenticationTypesModel {
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsAuthenticationTypesModel
     */
    'sms'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsAuthenticationTypesModel
     */
    'whatsapp'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsAuthenticationTypesModel
     */
    'otp'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsAuthenticationTypesModel
     */
    'selfie'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsAuthenticationTypesModel
     */
    'datavalid'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsAuthenticationTypesModel
     */
    'pix'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsAuthenticationTypesModel
     */
    'email'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsAuthenticationTypesModel
     */
    'liveness'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsAuthenticationTypesModel
     */
    'idScan'?: boolean;
}
/**
 * 
 * @export
 * @interface SecurityContextsSecurityContextSimpleModel
 */
export interface SecurityContextsSecurityContextSimpleModel {
    /**
     * 
     * @type {string}
     * @memberof SecurityContextsSecurityContextSimpleModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityContextsSecurityContextSimpleModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SecurityContextsSecurityContextSimpleModel
     */
    'englishName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SecurityContextsSecurityContextSimpleModel
     */
    'portugueseName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SecurityContextsSecurityContextSimpleModel
     */
    'spanishName'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsSecurityContextSimpleModel
     */
    'allowDigitalSignature'?: boolean;
    /**
     * 
     * @type {SecurityContextsAuthenticationTypesModel}
     * @memberof SecurityContextsSecurityContextSimpleModel
     */
    'allowedElectronicTypes'?: SecurityContextsAuthenticationTypesModel;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsSecurityContextSimpleModel
     */
    'requireLivenessOnSelfieAuthentication'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityContextsSecurityContextSimpleModel
     */
    'requireLivenessOnDatavalidAuthentication'?: boolean;
}
/**
 * 
 * @export
 * @interface SignatureDatavalidSelfieValidationResponse
 */
export interface SignatureDatavalidSelfieValidationResponse {
    /**
     * 
     * @type {boolean}
     * @memberof SignatureDatavalidSelfieValidationResponse
     */
    'available'?: boolean;
    /**
     * 
     * @type {Probability}
     * @memberof SignatureDatavalidSelfieValidationResponse
     */
    'probability'?: Probability;
    /**
     * 
     * @type {number}
     * @memberof SignatureDatavalidSelfieValidationResponse
     */
    'similarity'?: number | null;
}
/**
 * 
 * @export
 * @interface SignatureEvidencesModel
 */
export interface SignatureEvidencesModel {
    /**
     * 
     * @type {string}
     * @memberof SignatureEvidencesModel
     */
    'ipAddress'?: string | null;
    /**
     * A list containing the the authentication types used when signing the document.
     * @type {Array<AuthenticationTypes>}
     * @memberof SignatureEvidencesModel
     */
    'authenticationTypes'?: Array<AuthenticationTypes> | null;
    /**
     * If the user was logged-in when he signed the document this is the verified email of his account.  If Lacuna.Signer.Api.Signature.EvidencesModel.AuthenticationTypes doesn\'t contains Lacuna.Signer.Api.AuthenticationTypes.Login this will be null.
     * @type {string}
     * @memberof SignatureEvidencesModel
     */
    'accountVerifiedEmail'?: string | null;
    /**
     * The email to which the notification to sign the document was sent.  If Lacuna.Signer.Api.Signature.EvidencesModel.AuthenticationTypes doesn\'t contains Lacuna.Signer.Api.AuthenticationTypes.Email this will be null.
     * @type {string}
     * @memberof SignatureEvidencesModel
     */
    'authenticatedEmail'?: string | null;
    /**
     * The last four digits of the phone number to which the SMS confirmation code was sent.  If Lacuna.Signer.Api.Signature.EvidencesModel.AuthenticationTypes doesn\'t contains Lacuna.Signer.Api.AuthenticationTypes.SMS this will be null.
     * @type {string}
     * @memberof SignatureEvidencesModel
     */
    'authenticatedPhoneNumberLastDigits'?: string | null;
    /**
     * 
     * @type {ApplicationsApplicationDisplayModel}
     * @memberof SignatureEvidencesModel
     */
    'authenticatedApplication'?: ApplicationsApplicationDisplayModel;
    /**
     * 
     * @type {SignatureSelfieModel}
     * @memberof SignatureEvidencesModel
     */
    'authenticatedSelfie'?: SignatureSelfieModel;
    /**
     * 
     * @type {SignaturePixAuthenticationModel}
     * @memberof SignatureEvidencesModel
     */
    'authenticatedPix'?: SignaturePixAuthenticationModel;
    /**
     * 
     * @type {SignatureLiveness3dAuthenticationModel}
     * @memberof SignatureEvidencesModel
     */
    'livenessData'?: SignatureLiveness3dAuthenticationModel;
    /**
     * 
     * @type {SignatureGeolocationModel}
     * @memberof SignatureEvidencesModel
     */
    'geolocation'?: SignatureGeolocationModel;
    /**
     * 
     * @type {string}
     * @memberof SignatureEvidencesModel
     */
    'timestamp'?: string;
    /**
     * SHA-256 Hash (Base64 encoded) of the evidences JSON file
     * @type {string}
     * @memberof SignatureEvidencesModel
     */
    'evidencesSha256'?: string | null;
    /**
     * The phone number to which the SMS confirmation code was sent.  If Lacuna.Signer.Api.Signature.EvidencesModel.AuthenticationTypes doesn\'t contains Lacuna.Signer.Api.AuthenticationTypes.SMS this will be null.
     * @type {string}
     * @memberof SignatureEvidencesModel
     */
    'authenticatedPhoneNumber'?: string | null;
    /**
     * The evidences JSON file in bytes.
     * @type {string}
     * @memberof SignatureEvidencesModel
     */
    'file'?: string | null;
    /**
     * Ticket to download the evidences JSON file.
     * @type {string}
     * @memberof SignatureEvidencesModel
     */
    'fileTicket'?: string | null;
}
/**
 * 
 * @export
 * @interface SignatureGeolocationModel
 */
export interface SignatureGeolocationModel {
    /**
     * 
     * @type {number}
     * @memberof SignatureGeolocationModel
     */
    'latitude'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SignatureGeolocationModel
     */
    'longitude'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SignatureGeolocationModel
     */
    'accuracy'?: number | null;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const SignatureInitialsModes = {
    None: 'None',
    Optional: 'Optional',
    Required: 'Required'
} as const;

export type SignatureInitialsModes = typeof SignatureInitialsModes[keyof typeof SignatureInitialsModes];


/**
 * 
 * @export
 * @interface SignatureLiveness3dAuthenticationModel
 */
export interface SignatureLiveness3dAuthenticationModel {
    /**
     * 
     * @type {string}
     * @memberof SignatureLiveness3dAuthenticationModel
     */
    'sessionId'?: string | null;
}
/**
 * 
 * @export
 * @interface SignaturePixAuthenticationModel
 */
export interface SignaturePixAuthenticationModel {
    /**
     * 
     * @type {string}
     * @memberof SignaturePixAuthenticationModel
     */
    'endToEndId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SignaturePixAuthenticationModel
     */
    'pixKey'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SignaturePixAuthenticationModel
     */
    'paymentDate'?: string;
}
/**
 * 
 * @export
 * @interface SignatureSelfieModel
 */
export interface SignatureSelfieModel {
    /**
     * 
     * @type {string}
     * @memberof SignatureSelfieModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SignatureSelfieModel
     */
    'contentB64'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SignatureSelfieModel
     */
    'mimeType'?: string | null;
    /**
     * 
     * @type {SignatureDatavalidSelfieValidationResponse}
     * @memberof SignatureSelfieModel
     */
    'validationResponse'?: SignatureDatavalidSelfieValidationResponse;
}
/**
 * 
 * @export
 * @interface SignatureSignaturesInfoRequest
 */
export interface SignatureSignaturesInfoRequest {
    /**
     * Id of the uploaded file.
     * @type {string}
     * @memberof SignatureSignaturesInfoRequest
     */
    'fileId': string;
    /**
     * 
     * @type {string}
     * @memberof SignatureSignaturesInfoRequest
     */
    'mimeType': string;
    /**
     * 
     * @type {SignatureTypes}
     * @memberof SignatureSignaturesInfoRequest
     */
    'signatureType'?: SignatureTypes;
    /**
     * 
     * @type {string}
     * @memberof SignatureSignaturesInfoRequest
     */
    'securityContextId'?: string | null;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const SignatureTypes = {
    None: 'None',
    Simple: 'Simple',
    Advanced: 'Advanced',
    Qualified: 'Qualified'
} as const;

export type SignatureTypes = typeof SignatureTypes[keyof typeof SignatureTypes];


/**
 * 
 * @export
 * @interface SignerModel
 */
export interface SignerModel {
    /**
     * 
     * @type {string}
     * @memberof SignerModel
     */
    'subjectName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SignerModel
     */
    'emailAddress'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SignerModel
     */
    'issuerName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SignerModel
     */
    'identifier'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SignerModel
     */
    'companyName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SignerModel
     */
    'companyIdentifier'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SignerModel
     */
    'isElectronic'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SignerModel
     */
    'isTimestamp'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SignerModel
     */
    'signingTime'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SignerModel
     */
    'certificateThumbprint'?: string | null;
    /**
     * 
     * @type {SignatureEvidencesModel}
     * @memberof SignerModel
     */
    'evidences'?: SignatureEvidencesModel;
    /**
     * 
     * @type {Array<CertificatesAttributeCertificateInfoModel>}
     * @memberof SignerModel
     */
    'attributeCertificates'?: Array<CertificatesAttributeCertificateInfoModel> | null;
    /**
     * 
     * @type {ValidationResultsModel}
     * @memberof SignerModel
     */
    'validationResults'?: ValidationResultsModel;
    /**
     * 
     * @type {string}
     * @memberof SignerModel
     */
    'validityStart'?: string;
    /**
     * 
     * @type {string}
     * @memberof SignerModel
     */
    'validityEnd'?: string;
    /**
     * 
     * @type {Array<TimestampModel>}
     * @memberof SignerModel
     */
    'signatureTimestamps'?: Array<TimestampModel> | null;
    /**
     * 
     * @type {Array<TimestampModel>}
     * @memberof SignerModel
     */
    'archiveTimestamps'?: Array<TimestampModel> | null;
}
/**
 * 
 * @export
 * @interface TicketModel
 */
export interface TicketModel {
    /**
     * 
     * @type {string}
     * @memberof TicketModel
     */
    'location'?: string | null;
}
/**
 * 
 * @export
 * @interface TimestampModel
 */
export interface TimestampModel {
    /**
     * 
     * @type {string}
     * @memberof TimestampModel
     */
    'displayName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimestampModel
     */
    'genTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimestampModel
     */
    'validityStart'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimestampModel
     */
    'validityEnd'?: string;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const TransactionPricingTypes = {
    NoCharge: 'NoCharge',
    Simple: 'Simple',
    Range: 'Range'
} as const;

export type TransactionPricingTypes = typeof TransactionPricingTypes[keyof typeof TransactionPricingTypes];


/**
 * 
 * @export
 * @enum {string}
 */

export const TransactionTypes = {
    Document: 'Document',
    Signature: 'Signature',
    ElectronicSignature: 'ElectronicSignature',
    Approval: 'Approval',
    Notarization: 'Notarization',
    Timestamper: 'Timestamper',
    Sms: 'Sms',
    Whatsapp: 'Whatsapp',
    Datavalid: 'Datavalid',
    PixAuthentication: 'PixAuthentication',
    Envelope: 'Envelope',
    Liveness: 'Liveness',
    IdScan: 'IdScan',
    IdScanSelfie: 'IdScanSelfie'
} as const;

export type TransactionTypes = typeof TransactionTypes[keyof typeof TransactionTypes];


/**
 * 
 * @export
 * @interface TransactionsPriceRangeModel
 */
export interface TransactionsPriceRangeModel {
    /**
     * 
     * @type {number}
     * @memberof TransactionsPriceRangeModel
     */
    'price': number;
    /**
     * The upper limit of the price range.  If the limit is null, this is the price when the number of transactions exceed the limit of all the other ranges.
     * @type {number}
     * @memberof TransactionsPriceRangeModel
     */
    'limit'?: number | null;
}
/**
 * 
 * @export
 * @interface TransactionsTransactionPriceModel
 */
export interface TransactionsTransactionPriceModel {
    /**
     * 
     * @type {TransactionTypes}
     * @memberof TransactionsTransactionPriceModel
     */
    'transactionType': TransactionTypes;
    /**
     * 
     * @type {TransactionPricingTypes}
     * @memberof TransactionsTransactionPriceModel
     */
    'pricingType': TransactionPricingTypes;
    /**
     * Price of the transaction type (if Lacuna.Signer.Api.Transactions.TransactionPriceModel.PricingType is Lacuna.Signer.Api.TransactionPricingTypes.Simple)
     * @type {number}
     * @memberof TransactionsTransactionPriceModel
     */
    'price'?: number | null;
    /**
     * Price ranges of transaction type (if Lacuna.Signer.Api.Transactions.TransactionPriceModel.PricingType is Lacuna.Signer.Api.TransactionPricingTypes.Range)
     * @type {Array<TransactionsPriceRangeModel>}
     * @memberof TransactionsTransactionPriceModel
     */
    'priceRanges'?: Array<TransactionsPriceRangeModel> | null;
    /**
     * 
     * @type {number}
     * @memberof TransactionsTransactionPriceModel
     */
    'limit'?: number | null;
}
/**
 * 
 * @export
 * @interface UploadModel
 */
export interface UploadModel {
    /**
     * The upload Id as returned by the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a>
     * @type {string}
     * @memberof UploadModel
     */
    'id': string;
    /**
     * The file\'s original name.
     * @type {string}
     * @memberof UploadModel
     */
    'name': string;
    /**
     * The file\'s mime type. Unless overridden, PDF mime types will be signed as PAdES and all other types as CAdES.
     * @type {string}
     * @memberof UploadModel
     */
    'contentType': string;
}
/**
 * 
 * @export
 * @interface UploadsUploadBytesModel
 */
export interface UploadsUploadBytesModel {
    /**
     * The ID of the uploaded file so it can be used to create documents.
     * @type {string}
     * @memberof UploadsUploadBytesModel
     */
    'id'?: string | null;
    /**
     * The size in bytes of the received file.
     * @type {number}
     * @memberof UploadsUploadBytesModel
     */
    'size'?: number;
    /**
     * The MD5 digest (hash) of the received file. Can be used for integrity checks.
     * @type {string}
     * @memberof UploadsUploadBytesModel
     */
    'digest'?: string | null;
}
/**
 * 
 * @export
 * @interface UploadsUploadBytesRequest
 */
export interface UploadsUploadBytesRequest {
    /**
     * The file bytes encoded in Base 64 format.
     * @type {string}
     * @memberof UploadsUploadBytesRequest
     */
    'bytes': string;
}
/**
 * 
 * @export
 * @interface UsersParticipantUserModel
 */
export interface UsersParticipantUserModel {
    /**
     * 
     * @type {string}
     * @memberof UsersParticipantUserModel
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UsersParticipantUserModel
     */
    'name'?: string | null;
    /**
     * The user identifier (CPF in Brazil and Cédula de Identidad in Ecuador/Paraguay).
     * @type {string}
     * @memberof UsersParticipantUserModel
     */
    'identifier'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UsersParticipantUserModel
     */
    'email'?: string | null;
    /**
     * The user\'s mobile phone number. It will be set only if the user does not exist, i.e. it will not override  existing user\'s phones.  Must use iternational format, example: +55 11 91234-5678
     * @type {string}
     * @memberof UsersParticipantUserModel
     */
    'phone'?: string | null;
}
/**
 * 
 * @export
 * @interface ValidationItemModel
 */
export interface ValidationItemModel {
    /**
     * 
     * @type {string}
     * @memberof ValidationItemModel
     */
    'type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ValidationItemModel
     */
    'message'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ValidationItemModel
     */
    'detail'?: string | null;
    /**
     * 
     * @type {ValidationResultsModel}
     * @memberof ValidationItemModel
     */
    'innerValidationResults'?: ValidationResultsModel;
}
/**
 * 
 * @export
 * @interface ValidationResultsModel
 */
export interface ValidationResultsModel {
    /**
     * 
     * @type {Array<ValidationItemModel>}
     * @memberof ValidationResultsModel
     */
    'passedChecks'?: Array<ValidationItemModel> | null;
    /**
     * 
     * @type {Array<ValidationItemModel>}
     * @memberof ValidationResultsModel
     */
    'errors'?: Array<ValidationItemModel> | null;
    /**
     * 
     * @type {Array<ValidationItemModel>}
     * @memberof ValidationResultsModel
     */
    'warnings'?: Array<ValidationItemModel> | null;
    /**
     * 
     * @type {Array<ValidationItemModel>}
     * @memberof ValidationResultsModel
     */
    'indeterminateItens'?: Array<ValidationItemModel> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ValidationResultsModel
     */
    'isValid'?: boolean;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const WebhookTypes = {
    DocumentConcluded: 'DocumentConcluded',
    InvoiceClosed: 'InvoiceClosed',
    DocumentRefused: 'DocumentRefused',
    DocumentApproved: 'DocumentApproved',
    DocumentSigned: 'DocumentSigned',
    DocumentCanceled: 'DocumentCanceled',
    DocumentExpired: 'DocumentExpired',
    DocumentsCreated: 'DocumentsCreated',
    DocumentDeleted: 'DocumentDeleted'
} as const;

export type WebhookTypes = typeof WebhookTypes[keyof typeof WebhookTypes];


/**
 * 
 * @export
 * @interface WebhooksDocumentApprovedModel
 */
export interface WebhooksDocumentApprovedModel {
    /**
     * 
     * @type {FlowActionsApprovalModel}
     * @memberof WebhooksDocumentApprovedModel
     */
    'approval'?: FlowActionsApprovalModel;
    /**
     * The document\'s id
     * @type {string}
     * @memberof WebhooksDocumentApprovedModel
     */
    'id'?: string;
    /**
     * The document\'s name
     * @type {string}
     * @memberof WebhooksDocumentApprovedModel
     */
    'name'?: string | null;
    /**
     * The date the document was created.
     * @type {string}
     * @memberof WebhooksDocumentApprovedModel
     */
    'creationDate'?: string;
    /**
     * The date of the last update to the document.
     * @type {string}
     * @memberof WebhooksDocumentApprovedModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {FoldersFolderInfoModel}
     * @memberof WebhooksDocumentApprovedModel
     */
    'folder'?: FoldersFolderInfoModel;
    /**
     * 
     * @type {OrganizationsOrganizationInfoModel}
     * @memberof WebhooksDocumentApprovedModel
     */
    'organization'?: OrganizationsOrganizationInfoModel;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof WebhooksDocumentApprovedModel
     */
    'createdBy'?: DocumentsCreatorModel;
}
/**
 * 
 * @export
 * @interface WebhooksDocumentCanceledModel
 */
export interface WebhooksDocumentCanceledModel {
    /**
     * 
     * @type {AgentsAgentModel}
     * @memberof WebhooksDocumentCanceledModel
     */
    'canceledBy'?: AgentsAgentModel;
    /**
     * 
     * @type {string}
     * @memberof WebhooksDocumentCanceledModel
     */
    'reason'?: string | null;
    /**
     * The document\'s id
     * @type {string}
     * @memberof WebhooksDocumentCanceledModel
     */
    'id'?: string;
    /**
     * The document\'s name
     * @type {string}
     * @memberof WebhooksDocumentCanceledModel
     */
    'name'?: string | null;
    /**
     * The date the document was created.
     * @type {string}
     * @memberof WebhooksDocumentCanceledModel
     */
    'creationDate'?: string;
    /**
     * The date of the last update to the document.
     * @type {string}
     * @memberof WebhooksDocumentCanceledModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {FoldersFolderInfoModel}
     * @memberof WebhooksDocumentCanceledModel
     */
    'folder'?: FoldersFolderInfoModel;
    /**
     * 
     * @type {OrganizationsOrganizationInfoModel}
     * @memberof WebhooksDocumentCanceledModel
     */
    'organization'?: OrganizationsOrganizationInfoModel;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof WebhooksDocumentCanceledModel
     */
    'createdBy'?: DocumentsCreatorModel;
}
/**
 * 
 * @export
 * @interface WebhooksDocumentConcludedModel
 */
export interface WebhooksDocumentConcludedModel {
    /**
     * The document\'s id
     * @type {string}
     * @memberof WebhooksDocumentConcludedModel
     */
    'id'?: string;
    /**
     * The document\'s name
     * @type {string}
     * @memberof WebhooksDocumentConcludedModel
     */
    'name'?: string | null;
    /**
     * The date the document was created.
     * @type {string}
     * @memberof WebhooksDocumentConcludedModel
     */
    'creationDate'?: string;
    /**
     * The date of the last update to the document.
     * @type {string}
     * @memberof WebhooksDocumentConcludedModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {FoldersFolderInfoModel}
     * @memberof WebhooksDocumentConcludedModel
     */
    'folder'?: FoldersFolderInfoModel;
    /**
     * 
     * @type {OrganizationsOrganizationInfoModel}
     * @memberof WebhooksDocumentConcludedModel
     */
    'organization'?: OrganizationsOrganizationInfoModel;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof WebhooksDocumentConcludedModel
     */
    'createdBy'?: DocumentsCreatorModel;
}
/**
 * 
 * @export
 * @interface WebhooksDocumentExpiredModel
 */
export interface WebhooksDocumentExpiredModel {
    /**
     * The expiration date of the document in the default timezone.
     * @type {string}
     * @memberof WebhooksDocumentExpiredModel
     */
    'expirationDate'?: string;
    /**
     * The expiration date without time: in yyyy-MM-dd format (useful for display purposes).
     * @type {string}
     * @memberof WebhooksDocumentExpiredModel
     */
    'expirationDateWithoutTime'?: string | null;
    /**
     * The document\'s id
     * @type {string}
     * @memberof WebhooksDocumentExpiredModel
     */
    'id'?: string;
    /**
     * The document\'s name
     * @type {string}
     * @memberof WebhooksDocumentExpiredModel
     */
    'name'?: string | null;
    /**
     * The date the document was created.
     * @type {string}
     * @memberof WebhooksDocumentExpiredModel
     */
    'creationDate'?: string;
    /**
     * The date of the last update to the document.
     * @type {string}
     * @memberof WebhooksDocumentExpiredModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {FoldersFolderInfoModel}
     * @memberof WebhooksDocumentExpiredModel
     */
    'folder'?: FoldersFolderInfoModel;
    /**
     * 
     * @type {OrganizationsOrganizationInfoModel}
     * @memberof WebhooksDocumentExpiredModel
     */
    'organization'?: OrganizationsOrganizationInfoModel;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof WebhooksDocumentExpiredModel
     */
    'createdBy'?: DocumentsCreatorModel;
}
/**
 * 
 * @export
 * @interface WebhooksDocumentInformationModel
 */
export interface WebhooksDocumentInformationModel {
    /**
     * The document\'s id
     * @type {string}
     * @memberof WebhooksDocumentInformationModel
     */
    'id'?: string;
    /**
     * The document\'s name
     * @type {string}
     * @memberof WebhooksDocumentInformationModel
     */
    'name'?: string | null;
    /**
     * The date the document was created.
     * @type {string}
     * @memberof WebhooksDocumentInformationModel
     */
    'creationDate'?: string;
    /**
     * The date of the last update to the document.
     * @type {string}
     * @memberof WebhooksDocumentInformationModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {FoldersFolderInfoModel}
     * @memberof WebhooksDocumentInformationModel
     */
    'folder'?: FoldersFolderInfoModel;
    /**
     * 
     * @type {OrganizationsOrganizationInfoModel}
     * @memberof WebhooksDocumentInformationModel
     */
    'organization'?: OrganizationsOrganizationInfoModel;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof WebhooksDocumentInformationModel
     */
    'createdBy'?: DocumentsCreatorModel;
}
/**
 * 
 * @export
 * @interface WebhooksDocumentRefusedModel
 */
export interface WebhooksDocumentRefusedModel {
    /**
     * 
     * @type {RefusalRefusalModel}
     * @memberof WebhooksDocumentRefusedModel
     */
    'refusal'?: RefusalRefusalModel;
    /**
     * The document\'s id
     * @type {string}
     * @memberof WebhooksDocumentRefusedModel
     */
    'id'?: string;
    /**
     * The document\'s name
     * @type {string}
     * @memberof WebhooksDocumentRefusedModel
     */
    'name'?: string | null;
    /**
     * The date the document was created.
     * @type {string}
     * @memberof WebhooksDocumentRefusedModel
     */
    'creationDate'?: string;
    /**
     * The date of the last update to the document.
     * @type {string}
     * @memberof WebhooksDocumentRefusedModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {FoldersFolderInfoModel}
     * @memberof WebhooksDocumentRefusedModel
     */
    'folder'?: FoldersFolderInfoModel;
    /**
     * 
     * @type {OrganizationsOrganizationInfoModel}
     * @memberof WebhooksDocumentRefusedModel
     */
    'organization'?: OrganizationsOrganizationInfoModel;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof WebhooksDocumentRefusedModel
     */
    'createdBy'?: DocumentsCreatorModel;
}
/**
 * 
 * @export
 * @interface WebhooksDocumentSignedModel
 */
export interface WebhooksDocumentSignedModel {
    /**
     * 
     * @type {FlowActionsSignatureModel}
     * @memberof WebhooksDocumentSignedModel
     */
    'signature'?: FlowActionsSignatureModel;
    /**
     * The document\'s id
     * @type {string}
     * @memberof WebhooksDocumentSignedModel
     */
    'id'?: string;
    /**
     * The document\'s name
     * @type {string}
     * @memberof WebhooksDocumentSignedModel
     */
    'name'?: string | null;
    /**
     * The date the document was created.
     * @type {string}
     * @memberof WebhooksDocumentSignedModel
     */
    'creationDate'?: string;
    /**
     * The date of the last update to the document.
     * @type {string}
     * @memberof WebhooksDocumentSignedModel
     */
    'updateDate'?: string;
    /**
     * 
     * @type {FoldersFolderInfoModel}
     * @memberof WebhooksDocumentSignedModel
     */
    'folder'?: FoldersFolderInfoModel;
    /**
     * 
     * @type {OrganizationsOrganizationInfoModel}
     * @memberof WebhooksDocumentSignedModel
     */
    'organization'?: OrganizationsOrganizationInfoModel;
    /**
     * 
     * @type {DocumentsCreatorModel}
     * @memberof WebhooksDocumentSignedModel
     */
    'createdBy'?: DocumentsCreatorModel;
}
/**
 * 
 * @export
 * @interface WebhooksDocumentsCreatedModel
 */
export interface WebhooksDocumentsCreatedModel {
    /**
     * 
     * @type {Array<WebhooksDocumentInformationModel>}
     * @memberof WebhooksDocumentsCreatedModel
     */
    'documents'?: Array<WebhooksDocumentInformationModel> | null;
}
/**
 * <p>Members:</p><ul>  <li><b>DeletedByOrganization</b>: Documents were deleted as part of an organization wide deletion process. The DocumentDeletedModel.Documents list is limited to 100 documents.</li>  <li><b>DeletedByFolder</b>: Documents were deleted due to the deletion of a folder that contained them. The DocumentDeletedModel.Documents list is limited to 100 documents.</li>  <li><b>DeletedByUserOrApplication</b>: Documents were deleted by a user or application.</li>  </ul>  
 * @export
 * @enum {string}
 */

export const WebhooksDocumentsDeletedAction = {
    DeletedByOrganization: 'DeletedByOrganization',
    DeletedByFolder: 'DeletedByFolder',
    DeletedByUserOrApplication: 'DeletedByUserOrApplication'
} as const;

export type WebhooksDocumentsDeletedAction = typeof WebhooksDocumentsDeletedAction[keyof typeof WebhooksDocumentsDeletedAction];


/**
 * 
 * @export
 * @interface WebhooksDocumentsDeletedModel
 */
export interface WebhooksDocumentsDeletedModel {
    /**
     * 
     * @type {WebhooksDocumentsDeletedAction}
     * @memberof WebhooksDocumentsDeletedModel
     */
    'action'?: WebhooksDocumentsDeletedAction;
    /**
     * The list of deleted document details.  When Action is DocumentDeletedAction.DeletedByOrganization or   DocumentDeletedAction.DeletedByFolder, this list is limited to 100 documents.
     * @type {Array<WebhooksDocumentInformationModel>}
     * @memberof WebhooksDocumentsDeletedModel
     */
    'documents'?: Array<WebhooksDocumentInformationModel> | null;
}
/**
 * 
 * @export
 * @interface WebhooksInvoiceClosedModel
 */
export interface WebhooksInvoiceClosedModel {
    /**
     * 
     * @type {number}
     * @memberof WebhooksInvoiceClosedModel
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksInvoiceClosedModel
     */
    'month'?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksInvoiceClosedModel
     */
    'year'?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksInvoiceClosedModel
     */
    'value'?: number;
    /**
     * 
     * @type {Array<InvoicesInvoiceTotalModel>}
     * @memberof WebhooksInvoiceClosedModel
     */
    'invoiceTotals'?: Array<InvoicesInvoiceTotalModel> | null;
    /**
     * 
     * @type {OrganizationsOrganizationInfoModel}
     * @memberof WebhooksInvoiceClosedModel
     */
    'organization'?: OrganizationsOrganizationInfoModel;
    /**
     * 
     * @type {BillingBillingInformationModel}
     * @memberof WebhooksInvoiceClosedModel
     */
    'billingInformation'?: BillingBillingInformationModel;
}
/**
 * 
 * @export
 * @interface WebhooksWebhookModel
 */
export interface WebhooksWebhookModel {
    /**
     * 
     * @type {WebhookTypes}
     * @memberof WebhooksWebhookModel
     */
    'type'?: WebhookTypes;
    /**
     * The type-specific data of this webhook event. Check the documentation to see the corresponding model for an event type.
     * @type {any}
     * @memberof WebhooksWebhookModel
     */
    'data'?: any | null;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const XadesElementIdentifierTypes = {
    Id: 'Id',
    XPath: 'XPath'
} as const;

export type XadesElementIdentifierTypes = typeof XadesElementIdentifierTypes[keyof typeof XadesElementIdentifierTypes];


/**
 * 
 * @export
 * @enum {string}
 */

export const XadesInsertionOptions = {
    AppendChild: 'AppendChild',
    PrependChild: 'PrependChild',
    AppendSibling: 'AppendSibling',
    PrependSibling: 'PrependSibling'
} as const;

export type XadesInsertionOptions = typeof XadesInsertionOptions[keyof typeof XadesInsertionOptions];


/**
 * 
 * @export
 * @enum {string}
 */

export const XadesSignatureTypes = {
    FullXml: 'FullXml',
    XmlElement: 'XmlElement',
    FullXmlAdRc: 'FullXmlAdRc'
} as const;

export type XadesSignatureTypes = typeof XadesSignatureTypes[keyof typeof XadesSignatureTypes];


/**
 * 
 * @export
 * @interface XmlNamespaceModel
 */
export interface XmlNamespaceModel {
    /**
     * 
     * @type {string}
     * @memberof XmlNamespaceModel
     */
    'prefix': string;
    /**
     * 
     * @type {string}
     * @memberof XmlNamespaceModel
     */
    'uri': string;
}

/**
 * DocumentsApi - axios parameter creator
 * @export
 */
export const DocumentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Moves a batch of documents to a folder.
         * @param {DocumentsMoveDocumentBatchRequest} [documentsMoveDocumentBatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsBatchFolderPost: async (documentsMoveDocumentBatchRequest?: DocumentsMoveDocumentBatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/documents/batch/folder`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentsMoveDocumentBatchRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * You may filter the documents by folder and document type.
         * @summary Retrieves the documents of the organization paginating the response.
         * @param {boolean} [isConcluded] (DEPRECATED) Please use \&quot;Status\&quot; parameter instead. Set to true to list concluded documents, false to list pending documents.
         * @param {DocumentFilterStatus} [status] Filters by document status. Will override the \&quot;IsConcluded\&quot; property.
         * @param {string} [folderId] 
         * @param {FolderType} [folderType] 
         * @param {DocumentTypes} [documentType] 
         * @param {boolean} [filterByDocumentType] True if the documents should be filtered by type, use documentType to specify the document type.  If you want to filter only documents without a type, set this parameter to true and the documentType to null.
         * @param {boolean} [filterByPendingSignature] True if documents should be filtered only for those that have FlowAction of the type Signer or SignRule
         * @param {DocumentQueryTypes} [queryType] 
         * @param {string} [participantQ] Query to filter by participant
         * @param {ParticipantQueryTypes} [participantQueryType] 
         * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.  To search by tag value only, do not use the \&quot;|\&quot;.
         * @param {boolean} [isDeleted] Returns deleted documents that had the specified document status when deleted.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsGet: async (isConcluded?: boolean, status?: DocumentFilterStatus, folderId?: string, folderType?: FolderType, documentType?: DocumentTypes, filterByDocumentType?: boolean, filterByPendingSignature?: boolean, queryType?: DocumentQueryTypes, participantQ?: string, participantQueryType?: ParticipantQueryTypes, tags?: string, isDeleted?: boolean, q?: string, limit?: number, offset?: number, order?: PaginationOrders, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/documents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)

            if (isConcluded !== undefined) {
                localVarQueryParameter['IsConcluded'] = isConcluded;
            }

            if (status !== undefined) {
                localVarQueryParameter['Status'] = status;
            }

            if (folderId !== undefined) {
                localVarQueryParameter['FolderId'] = folderId;
            }

            if (folderType !== undefined) {
                localVarQueryParameter['FolderType'] = folderType;
            }

            if (documentType !== undefined) {
                localVarQueryParameter['DocumentType'] = documentType;
            }

            if (filterByDocumentType !== undefined) {
                localVarQueryParameter['FilterByDocumentType'] = filterByDocumentType;
            }

            if (filterByPendingSignature !== undefined) {
                localVarQueryParameter['FilterByPendingSignature'] = filterByPendingSignature;
            }

            if (queryType !== undefined) {
                localVarQueryParameter['QueryType'] = queryType;
            }

            if (participantQ !== undefined) {
                localVarQueryParameter['ParticipantQ'] = participantQ;
            }

            if (participantQueryType !== undefined) {
                localVarQueryParameter['ParticipantQueryType'] = participantQueryType;
            }

            if (tags !== undefined) {
                localVarQueryParameter['Tags'] = tags;
            }

            if (isDeleted !== undefined) {
                localVarQueryParameter['IsDeleted'] = isDeleted;
            }

            if (q !== undefined) {
                localVarQueryParameter['Q'] = q;
            }

            if (limit !== undefined) {
                localVarQueryParameter['Limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['Offset'] = offset;
            }

            if (order !== undefined) {
                localVarQueryParameter['Order'] = order;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.      If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.      After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).      Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.  
         * @summary Retrieves an URL to redirect the user to the first pending action of the document.
         * @param {string} id Document Id
         * @param {DocumentsActionUrlRequest} [documentsActionUrlRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdActionUrlPost: async (id: string, documentsActionUrlRequest?: DocumentsActionUrlRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdActionUrlPost', 'id', id)
            const localVarPath = `/api/documents/{id}/action-url`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentsActionUrlRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * <b>CAUTION: This action cannot be reverted.</b>
         * @summary Cancels the document by providing a reason for the cancellation.
         * @param {string} id 
         * @param {DocumentsCancelDocumentRequest} [documentsCancelDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdCancellationPost: async (id: string, documentsCancelDocumentRequest?: DocumentsCancelDocumentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdCancellationPost', 'id', id)
            const localVarPath = `/api/documents/{id}/cancellation`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentsCancelDocumentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Downloads a specific version type of the document encoding the bytes in Base 64 format.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentB64Get: async (id: string, type?: DocumentDownloadTypes, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdContentB64Get', 'id', id)
            const localVarPath = `/api/documents/{id}/content-b64`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Downloads a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentGet: async (id: string, type?: DocumentDownloadTypes, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdContentGet', 'id', id)
            const localVarPath = `/api/documents/{id}/content`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes a specific document using it\'s id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdDelete', 'id', id)
            const localVarPath = `/api/documents/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The flow of the document will be restarted.
         * @summary Adds a new version for an envelope.
         * @param {string} id 
         * @param {DocumentsEnvelopeAddVersionRequest} [documentsEnvelopeAddVersionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdEnvelopeVersionsPost: async (id: string, documentsEnvelopeAddVersionRequest?: DocumentsEnvelopeAddVersionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdEnvelopeVersionsPost', 'id', id)
            const localVarPath = `/api/documents/{id}/envelope/versions`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentsEnvelopeAddVersionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates the document\'s flow.
         * @param {string} id Id of the document
         * @param {DocumentsDocumentFlowEditRequest} [documentsDocumentFlowEditRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFlowPost: async (id: string, documentsDocumentFlowEditRequest?: DocumentsDocumentFlowEditRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdFlowPost', 'id', id)
            const localVarPath = `/api/documents/{id}/flow`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentsDocumentFlowEditRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Moves a document to a folder.
         * @param {string} id 
         * @param {DocumentsMoveDocumentRequest} [documentsMoveDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFolderPost: async (id: string, documentsMoveDocumentRequest?: DocumentsMoveDocumentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdFolderPost', 'id', id)
            const localVarPath = `/api/documents/{id}/folder`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentsMoveDocumentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves the document\'s details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdGet', 'id', id)
            const localVarPath = `/api/documents/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The notified emails are the ones that will be notified after the document is concluded.
         * @summary Updates the document\'s notified emails
         * @param {string} id Id of the document
         * @param {DocumentsDocumentNotifiedEmailsEditRequest} [documentsDocumentNotifiedEmailsEditRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdNotifiedEmailsPut: async (id: string, documentsDocumentNotifiedEmailsEditRequest?: DocumentsDocumentNotifiedEmailsEditRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdNotifiedEmailsPut', 'id', id)
            const localVarPath = `/api/documents/{id}/notified-emails`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentsDocumentNotifiedEmailsEditRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The document\'s flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
         * @summary Refuses a document by providing a reason for the refusal.
         * @param {string} id 
         * @param {RefusalRefusalRequest} [refusalRefusalRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdRefusalPost: async (id: string, refusalRefusalRequest?: RefusalRefusalRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdRefusalPost', 'id', id)
            const localVarPath = `/api/documents/{id}/refusal`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(refusalRefusalRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document\'s signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdSignaturesDetailsGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdSignaturesDetailsGet', 'id', id)
            const localVarPath = `/api/documents/{id}/signatures-details`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The URL does not require authentication and will be available for 1 hour.    <ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
         * @summary Generates a URL (ticket) to download a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentTicketType} [type] The version type to download
         * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdTicketGet: async (id: string, type?: DocumentTicketType, preview?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdTicketGet', 'id', id)
            const localVarPath = `/api/documents/{id}/ticket`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (preview !== undefined) {
                localVarQueryParameter['preview'] = preview;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The flow of the document will be restarted.       If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
         * @summary Adds a new version for the document.
         * @param {string} id 
         * @param {DocumentsDocumentAddVersionRequest} [documentsDocumentAddVersionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdVersionsPost: async (id: string, documentsDocumentAddVersionRequest?: DocumentsDocumentAddVersionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentsIdVersionsPost', 'id', id)
            const localVarPath = `/api/documents/{id}/versions`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentsDocumentAddVersionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Validates each signature in a document using the verification code
         * @param {string} key The verification code presented in the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsKeysKeySignaturesGet: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('apiDocumentsKeysKeySignaturesGet', 'key', key)
            const localVarPath = `/api/documents/keys/{key}/signatures`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.       When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.      Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsPost: async (documentsCreateDocumentRequest?: DocumentsCreateDocumentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/documents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentsCreateDocumentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [signatureSignaturesInfoRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsValidateSignaturesPost: async (signatureSignaturesInfoRequest?: SignatureSignaturesInfoRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/documents/validate-signatures`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signatureSignaturesInfoRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DocumentsApi - functional programming interface
 * @export
 */
export const DocumentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DocumentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Moves a batch of documents to a folder.
         * @param {DocumentsMoveDocumentBatchRequest} [documentsMoveDocumentBatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsBatchFolderPost(documentsMoveDocumentBatchRequest?: DocumentsMoveDocumentBatchRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BatchItemResultModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsBatchFolderPost(documentsMoveDocumentBatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * You may filter the documents by folder and document type.
         * @summary Retrieves the documents of the organization paginating the response.
         * @param {boolean} [isConcluded] (DEPRECATED) Please use \&quot;Status\&quot; parameter instead. Set to true to list concluded documents, false to list pending documents.
         * @param {DocumentFilterStatus} [status] Filters by document status. Will override the \&quot;IsConcluded\&quot; property.
         * @param {string} [folderId] 
         * @param {FolderType} [folderType] 
         * @param {DocumentTypes} [documentType] 
         * @param {boolean} [filterByDocumentType] True if the documents should be filtered by type, use documentType to specify the document type.  If you want to filter only documents without a type, set this parameter to true and the documentType to null.
         * @param {boolean} [filterByPendingSignature] True if documents should be filtered only for those that have FlowAction of the type Signer or SignRule
         * @param {DocumentQueryTypes} [queryType] 
         * @param {string} [participantQ] Query to filter by participant
         * @param {ParticipantQueryTypes} [participantQueryType] 
         * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.  To search by tag value only, do not use the \&quot;|\&quot;.
         * @param {boolean} [isDeleted] Returns deleted documents that had the specified document status when deleted.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsGet(isConcluded?: boolean, status?: DocumentFilterStatus, folderId?: string, folderType?: FolderType, documentType?: DocumentTypes, filterByDocumentType?: boolean, filterByPendingSignature?: boolean, queryType?: DocumentQueryTypes, participantQ?: string, participantQueryType?: ParticipantQueryTypes, tags?: string, isDeleted?: boolean, q?: string, limit?: number, offset?: number, order?: PaginationOrders, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedSearchResponseDocumentsDocumentListModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, isDeleted, q, limit, offset, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.      If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.      After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).      Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.  
         * @summary Retrieves an URL to redirect the user to the first pending action of the document.
         * @param {string} id Document Id
         * @param {DocumentsActionUrlRequest} [documentsActionUrlRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdActionUrlPost(id: string, documentsActionUrlRequest?: DocumentsActionUrlRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentsActionUrlResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdActionUrlPost(id, documentsActionUrlRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * <b>CAUTION: This action cannot be reverted.</b>
         * @summary Cancels the document by providing a reason for the cancellation.
         * @param {string} id 
         * @param {DocumentsCancelDocumentRequest} [documentsCancelDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdCancellationPost(id: string, documentsCancelDocumentRequest?: DocumentsCancelDocumentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdCancellationPost(id, documentsCancelDocumentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Downloads a specific version type of the document encoding the bytes in Base 64 format.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdContentB64Get(id: string, type?: DocumentDownloadTypes, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentsDocumentContentModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdContentB64Get(id, type, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Downloads a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdContentGet(id: string, type?: DocumentDownloadTypes, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdContentGet(id, type, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Deletes a specific document using it\'s id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The flow of the document will be restarted.
         * @summary Adds a new version for an envelope.
         * @param {string} id 
         * @param {DocumentsEnvelopeAddVersionRequest} [documentsEnvelopeAddVersionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdEnvelopeVersionsPost(id: string, documentsEnvelopeAddVersionRequest?: DocumentsEnvelopeAddVersionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdEnvelopeVersionsPost(id, documentsEnvelopeAddVersionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates the document\'s flow.
         * @param {string} id Id of the document
         * @param {DocumentsDocumentFlowEditRequest} [documentsDocumentFlowEditRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdFlowPost(id: string, documentsDocumentFlowEditRequest?: DocumentsDocumentFlowEditRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FlowActionsDocumentFlowEditResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdFlowPost(id, documentsDocumentFlowEditRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Moves a document to a folder.
         * @param {string} id 
         * @param {DocumentsMoveDocumentRequest} [documentsMoveDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdFolderPost(id: string, documentsMoveDocumentRequest?: DocumentsMoveDocumentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdFolderPost(id, documentsMoveDocumentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieves the document\'s details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentsDocumentModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The notified emails are the ones that will be notified after the document is concluded.
         * @summary Updates the document\'s notified emails
         * @param {string} id Id of the document
         * @param {DocumentsDocumentNotifiedEmailsEditRequest} [documentsDocumentNotifiedEmailsEditRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdNotifiedEmailsPut(id: string, documentsDocumentNotifiedEmailsEditRequest?: DocumentsDocumentNotifiedEmailsEditRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdNotifiedEmailsPut(id, documentsDocumentNotifiedEmailsEditRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The document\'s flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
         * @summary Refuses a document by providing a reason for the refusal.
         * @param {string} id 
         * @param {RefusalRefusalRequest} [refusalRefusalRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdRefusalPost(id: string, refusalRefusalRequest?: RefusalRefusalRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdRefusalPost(id, refusalRefusalRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document\'s signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdSignaturesDetailsGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentsDocumentSignaturesInfoModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdSignaturesDetailsGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The URL does not require authentication and will be available for 1 hour.    <ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
         * @summary Generates a URL (ticket) to download a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentTicketType} [type] The version type to download
         * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdTicketGet(id: string, type?: DocumentTicketType, preview?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TicketModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdTicketGet(id, type, preview, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The flow of the document will be restarted.       If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
         * @summary Adds a new version for the document.
         * @param {string} id 
         * @param {DocumentsDocumentAddVersionRequest} [documentsDocumentAddVersionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsIdVersionsPost(id: string, documentsDocumentAddVersionRequest?: DocumentsDocumentAddVersionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsIdVersionsPost(id, documentsDocumentAddVersionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Validates each signature in a document using the verification code
         * @param {string} key The verification code presented in the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsKeysKeySignaturesGet(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentsDocumentSignaturesInfoModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsKeysKeySignaturesGet(key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.       When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.      Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsPost(documentsCreateDocumentRequest?: DocumentsCreateDocumentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DocumentsCreateDocumentResult>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsPost(documentsCreateDocumentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [signatureSignaturesInfoRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentsValidateSignaturesPost(signatureSignaturesInfoRequest?: SignatureSignaturesInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SignerModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentsValidateSignaturesPost(signatureSignaturesInfoRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DocumentsApi - factory interface
 * @export
 */
export const DocumentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DocumentsApiFp(configuration)
    return {
        /**
         * 
         * @summary Moves a batch of documents to a folder.
         * @param {DocumentsMoveDocumentBatchRequest} [documentsMoveDocumentBatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsBatchFolderPost(documentsMoveDocumentBatchRequest?: DocumentsMoveDocumentBatchRequest, options?: any): AxiosPromise<Array<BatchItemResultModel>> {
            return localVarFp.apiDocumentsBatchFolderPost(documentsMoveDocumentBatchRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * You may filter the documents by folder and document type.
         * @summary Retrieves the documents of the organization paginating the response.
         * @param {boolean} [isConcluded] (DEPRECATED) Please use \&quot;Status\&quot; parameter instead. Set to true to list concluded documents, false to list pending documents.
         * @param {DocumentFilterStatus} [status] Filters by document status. Will override the \&quot;IsConcluded\&quot; property.
         * @param {string} [folderId] 
         * @param {FolderType} [folderType] 
         * @param {DocumentTypes} [documentType] 
         * @param {boolean} [filterByDocumentType] True if the documents should be filtered by type, use documentType to specify the document type.  If you want to filter only documents without a type, set this parameter to true and the documentType to null.
         * @param {boolean} [filterByPendingSignature] True if documents should be filtered only for those that have FlowAction of the type Signer or SignRule
         * @param {DocumentQueryTypes} [queryType] 
         * @param {string} [participantQ] Query to filter by participant
         * @param {ParticipantQueryTypes} [participantQueryType] 
         * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.  To search by tag value only, do not use the \&quot;|\&quot;.
         * @param {boolean} [isDeleted] Returns deleted documents that had the specified document status when deleted.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsGet(isConcluded?: boolean, status?: DocumentFilterStatus, folderId?: string, folderType?: FolderType, documentType?: DocumentTypes, filterByDocumentType?: boolean, filterByPendingSignature?: boolean, queryType?: DocumentQueryTypes, participantQ?: string, participantQueryType?: ParticipantQueryTypes, tags?: string, isDeleted?: boolean, q?: string, limit?: number, offset?: number, order?: PaginationOrders, options?: any): AxiosPromise<PaginatedSearchResponseDocumentsDocumentListModel> {
            return localVarFp.apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, isDeleted, q, limit, offset, order, options).then((request) => request(axios, basePath));
        },
        /**
         * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.      If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.      After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).      Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.  
         * @summary Retrieves an URL to redirect the user to the first pending action of the document.
         * @param {string} id Document Id
         * @param {DocumentsActionUrlRequest} [documentsActionUrlRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdActionUrlPost(id: string, documentsActionUrlRequest?: DocumentsActionUrlRequest, options?: any): AxiosPromise<DocumentsActionUrlResponse> {
            return localVarFp.apiDocumentsIdActionUrlPost(id, documentsActionUrlRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * <b>CAUTION: This action cannot be reverted.</b>
         * @summary Cancels the document by providing a reason for the cancellation.
         * @param {string} id 
         * @param {DocumentsCancelDocumentRequest} [documentsCancelDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdCancellationPost(id: string, documentsCancelDocumentRequest?: DocumentsCancelDocumentRequest, options?: any): AxiosPromise<void> {
            return localVarFp.apiDocumentsIdCancellationPost(id, documentsCancelDocumentRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Downloads a specific version type of the document encoding the bytes in Base 64 format.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentB64Get(id: string, type?: DocumentDownloadTypes, options?: any): AxiosPromise<DocumentsDocumentContentModel> {
            return localVarFp.apiDocumentsIdContentB64Get(id, type, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Downloads a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentDownloadTypes} [type] The version type to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdContentGet(id: string, type?: DocumentDownloadTypes, options?: any): AxiosPromise<void> {
            return localVarFp.apiDocumentsIdContentGet(id, type, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes a specific document using it\'s id.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdDelete(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiDocumentsIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * The flow of the document will be restarted.
         * @summary Adds a new version for an envelope.
         * @param {string} id 
         * @param {DocumentsEnvelopeAddVersionRequest} [documentsEnvelopeAddVersionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdEnvelopeVersionsPost(id: string, documentsEnvelopeAddVersionRequest?: DocumentsEnvelopeAddVersionRequest, options?: any): AxiosPromise<void> {
            return localVarFp.apiDocumentsIdEnvelopeVersionsPost(id, documentsEnvelopeAddVersionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates the document\'s flow.
         * @param {string} id Id of the document
         * @param {DocumentsDocumentFlowEditRequest} [documentsDocumentFlowEditRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFlowPost(id: string, documentsDocumentFlowEditRequest?: DocumentsDocumentFlowEditRequest, options?: any): AxiosPromise<FlowActionsDocumentFlowEditResponse> {
            return localVarFp.apiDocumentsIdFlowPost(id, documentsDocumentFlowEditRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Moves a document to a folder.
         * @param {string} id 
         * @param {DocumentsMoveDocumentRequest} [documentsMoveDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdFolderPost(id: string, documentsMoveDocumentRequest?: DocumentsMoveDocumentRequest, options?: any): AxiosPromise<void> {
            return localVarFp.apiDocumentsIdFolderPost(id, documentsMoveDocumentRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieves the document\'s details.
         * @param {string} id Document id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdGet(id: string, options?: any): AxiosPromise<DocumentsDocumentModel> {
            return localVarFp.apiDocumentsIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * The notified emails are the ones that will be notified after the document is concluded.
         * @summary Updates the document\'s notified emails
         * @param {string} id Id of the document
         * @param {DocumentsDocumentNotifiedEmailsEditRequest} [documentsDocumentNotifiedEmailsEditRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdNotifiedEmailsPut(id: string, documentsDocumentNotifiedEmailsEditRequest?: DocumentsDocumentNotifiedEmailsEditRequest, options?: any): AxiosPromise<void> {
            return localVarFp.apiDocumentsIdNotifiedEmailsPut(id, documentsDocumentNotifiedEmailsEditRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * The document\'s flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
         * @summary Refuses a document by providing a reason for the refusal.
         * @param {string} id 
         * @param {RefusalRefusalRequest} [refusalRefusalRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdRefusalPost(id: string, refusalRefusalRequest?: RefusalRefusalRequest, options?: any): AxiosPromise<void> {
            return localVarFp.apiDocumentsIdRefusalPost(id, refusalRefusalRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * This will perform the same validations as verifying the document signatures using the verification code.
         * @summary Retrieves the details of the document\'s signatures.
         * @param {string} id The Id of the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdSignaturesDetailsGet(id: string, options?: any): AxiosPromise<DocumentsDocumentSignaturesInfoModel> {
            return localVarFp.apiDocumentsIdSignaturesDetailsGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * The URL does not require authentication and will be available for 1 hour.    <ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
         * @summary Generates a URL (ticket) to download a specific version type of the document.
         * @param {string} id Document id
         * @param {DocumentTicketType} [type] The version type to download
         * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdTicketGet(id: string, type?: DocumentTicketType, preview?: boolean, options?: any): AxiosPromise<TicketModel> {
            return localVarFp.apiDocumentsIdTicketGet(id, type, preview, options).then((request) => request(axios, basePath));
        },
        /**
         * The flow of the document will be restarted.       If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
         * @summary Adds a new version for the document.
         * @param {string} id 
         * @param {DocumentsDocumentAddVersionRequest} [documentsDocumentAddVersionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsIdVersionsPost(id: string, documentsDocumentAddVersionRequest?: DocumentsDocumentAddVersionRequest, options?: any): AxiosPromise<void> {
            return localVarFp.apiDocumentsIdVersionsPost(id, documentsDocumentAddVersionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Validates each signature in a document using the verification code
         * @param {string} key The verification code presented in the document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsKeysKeySignaturesGet(key: string, options?: any): AxiosPromise<DocumentsDocumentSignaturesInfoModel> {
            return localVarFp.apiDocumentsKeysKeySignaturesGet(key, options).then((request) => request(axios, basePath));
        },
        /**
         * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.       When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.      Returns a list of ids of each document created.
         * @summary Creates one or multiple documents.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsPost(documentsCreateDocumentRequest?: DocumentsCreateDocumentRequest, options?: any): AxiosPromise<Array<DocumentsCreateDocumentResult>> {
            return localVarFp.apiDocumentsPost(documentsCreateDocumentRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
         * @summary Validates each signature in the uploaded document
         * @param {SignatureSignaturesInfoRequest} [signatureSignaturesInfoRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentsValidateSignaturesPost(signatureSignaturesInfoRequest?: SignatureSignaturesInfoRequest, options?: any): AxiosPromise<Array<SignerModel>> {
            return localVarFp.apiDocumentsValidateSignaturesPost(signatureSignaturesInfoRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DocumentsApi - object-oriented interface
 * @export
 * @class DocumentsApi
 * @extends {BaseAPI}
 */
export class DocumentsApi extends BaseAPI {
    /**
     * 
     * @summary Moves a batch of documents to a folder.
     * @param {DocumentsMoveDocumentBatchRequest} [documentsMoveDocumentBatchRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsBatchFolderPost(documentsMoveDocumentBatchRequest?: DocumentsMoveDocumentBatchRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsBatchFolderPost(documentsMoveDocumentBatchRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * You may filter the documents by folder and document type.
     * @summary Retrieves the documents of the organization paginating the response.
     * @param {boolean} [isConcluded] (DEPRECATED) Please use \&quot;Status\&quot; parameter instead. Set to true to list concluded documents, false to list pending documents.
     * @param {DocumentFilterStatus} [status] Filters by document status. Will override the \&quot;IsConcluded\&quot; property.
     * @param {string} [folderId] 
     * @param {FolderType} [folderType] 
     * @param {DocumentTypes} [documentType] 
     * @param {boolean} [filterByDocumentType] True if the documents should be filtered by type, use documentType to specify the document type.  If you want to filter only documents without a type, set this parameter to true and the documentType to null.
     * @param {boolean} [filterByPendingSignature] True if documents should be filtered only for those that have FlowAction of the type Signer or SignRule
     * @param {DocumentQueryTypes} [queryType] 
     * @param {string} [participantQ] Query to filter by participant
     * @param {ParticipantQueryTypes} [participantQueryType] 
     * @param {string} [tags] Label/value pairs are separated by \&quot;|\&quot; (optional) and Tags separated by \&quot;,\&quot;. Only the first 10 pairs will be considered.  To search by tag value only, do not use the \&quot;|\&quot;.
     * @param {boolean} [isDeleted] Returns deleted documents that had the specified document status when deleted.
     * @param {string} [q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsGet(isConcluded?: boolean, status?: DocumentFilterStatus, folderId?: string, folderType?: FolderType, documentType?: DocumentTypes, filterByDocumentType?: boolean, filterByPendingSignature?: boolean, queryType?: DocumentQueryTypes, participantQ?: string, participantQueryType?: ParticipantQueryTypes, tags?: string, isDeleted?: boolean, q?: string, limit?: number, offset?: number, order?: PaginationOrders, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsGet(isConcluded, status, folderId, folderType, documentType, filterByDocumentType, filterByPendingSignature, queryType, participantQ, participantQueryType, tags, isDeleted, q, limit, offset, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API will return an URL that allows an user to sign or approve the document without having to wait to receive an email notification.      If the document has multiple pending actions, this API will return the URL of the first pending action for the matched user.      After the action has been completed, you may call this API again to retrieve the URL for the next action (if any).      Please note that using the URL returned will be recorded in the evidences of the action as an Application Authentication.  
     * @summary Retrieves an URL to redirect the user to the first pending action of the document.
     * @param {string} id Document Id
     * @param {DocumentsActionUrlRequest} [documentsActionUrlRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdActionUrlPost(id: string, documentsActionUrlRequest?: DocumentsActionUrlRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdActionUrlPost(id, documentsActionUrlRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <b>CAUTION: This action cannot be reverted.</b>
     * @summary Cancels the document by providing a reason for the cancellation.
     * @param {string} id 
     * @param {DocumentsCancelDocumentRequest} [documentsCancelDocumentRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdCancellationPost(id: string, documentsCancelDocumentRequest?: DocumentsCancelDocumentRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdCancellationPost(id, documentsCancelDocumentRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Downloads a specific version type of the document encoding the bytes in Base 64 format.
     * @param {string} id Document id
     * @param {DocumentDownloadTypes} [type] The version type to download
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdContentB64Get(id: string, type?: DocumentDownloadTypes, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdContentB64Get(id, type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Downloads a specific version type of the document.
     * @param {string} id Document id
     * @param {DocumentDownloadTypes} [type] The version type to download
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdContentGet(id: string, type?: DocumentDownloadTypes, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdContentGet(id, type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes a specific document using it\'s id.
     * @param {string} id Document id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdDelete(id: string, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The flow of the document will be restarted.
     * @summary Adds a new version for an envelope.
     * @param {string} id 
     * @param {DocumentsEnvelopeAddVersionRequest} [documentsEnvelopeAddVersionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdEnvelopeVersionsPost(id: string, documentsEnvelopeAddVersionRequest?: DocumentsEnvelopeAddVersionRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdEnvelopeVersionsPost(id, documentsEnvelopeAddVersionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates the document\'s flow.
     * @param {string} id Id of the document
     * @param {DocumentsDocumentFlowEditRequest} [documentsDocumentFlowEditRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdFlowPost(id: string, documentsDocumentFlowEditRequest?: DocumentsDocumentFlowEditRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdFlowPost(id, documentsDocumentFlowEditRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Moves a document to a folder.
     * @param {string} id 
     * @param {DocumentsMoveDocumentRequest} [documentsMoveDocumentRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdFolderPost(id: string, documentsMoveDocumentRequest?: DocumentsMoveDocumentRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdFolderPost(id, documentsMoveDocumentRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieves the document\'s details.
     * @param {string} id Document id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdGet(id: string, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The notified emails are the ones that will be notified after the document is concluded.
     * @summary Updates the document\'s notified emails
     * @param {string} id Id of the document
     * @param {DocumentsDocumentNotifiedEmailsEditRequest} [documentsDocumentNotifiedEmailsEditRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdNotifiedEmailsPut(id: string, documentsDocumentNotifiedEmailsEditRequest?: DocumentsDocumentNotifiedEmailsEditRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdNotifiedEmailsPut(id, documentsDocumentNotifiedEmailsEditRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The document\'s flow will pause and can only be resumed by adding a new version of the document (see <a href=\"#operations-Documents-post_api_documents__id__versions\">Add Version API</a>).
     * @summary Refuses a document by providing a reason for the refusal.
     * @param {string} id 
     * @param {RefusalRefusalRequest} [refusalRefusalRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdRefusalPost(id: string, refusalRefusalRequest?: RefusalRefusalRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdRefusalPost(id, refusalRefusalRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This will perform the same validations as verifying the document signatures using the verification code.
     * @summary Retrieves the details of the document\'s signatures.
     * @param {string} id The Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdSignaturesDetailsGet(id: string, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdSignaturesDetailsGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The URL does not require authentication and will be available for 1 hour.    <ul><li><b>Original</b>: the original file provided when the document was created.</li><li><b>OriginalWithMarks</b>: the original file with all marks added (for example when an user approves the document and includes its signature image).</li><li><b>PrinterFriendlyVersion</b>: if the original document is PDF, the version with marks and a appended signature manifest, otherwise a PDF file with the signature manifest.</li><li><b>Signatures</b>: if the original document is PDF, the signed PDF file, otherwise the .p7s file.</li></ul>
     * @summary Generates a URL (ticket) to download a specific version type of the document.
     * @param {string} id Document id
     * @param {DocumentTicketType} [type] The version type to download
     * @param {boolean} [preview] If true, when downloading the document, the response will not include the name of the file (useful when embedding the document inside a web page for previewing)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdTicketGet(id: string, type?: DocumentTicketType, preview?: boolean, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdTicketGet(id, type, preview, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The flow of the document will be restarted.       If the document was created as an envelope, please use the <a href=\"#operations-Documents-post_api_documents__id__envelope_versions\">Add Envelope Version API</a>
     * @summary Adds a new version for the document.
     * @param {string} id 
     * @param {DocumentsDocumentAddVersionRequest} [documentsDocumentAddVersionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsIdVersionsPost(id: string, documentsDocumentAddVersionRequest?: DocumentsDocumentAddVersionRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsIdVersionsPost(id, documentsDocumentAddVersionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Validates each signature in a document using the verification code
     * @param {string} key The verification code presented in the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsKeysKeySignaturesGet(key: string, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsKeysKeySignaturesGet(key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Before calling this API you need to upload the file(s) using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.       When creating a big batch of documents, it is recommended to send multiple requests instead of one big request. For instance, if you want to create 100 documents,   send 10 requests of 10 documents. In this case it is recommended to use the disablePendingActionNotifications option and, when all requests are finished, use the   <a href=\"#operations-Notifications-post_api_users_notify_pending\">users/notify-pending API</a> to notify participants.      Returns a list of ids of each document created.
     * @summary Creates one or multiple documents.
     * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsPost(documentsCreateDocumentRequest?: DocumentsCreateDocumentRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsPost(documentsCreateDocumentRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Before calling this API you need to upload the file using the <a href=\"#operations-Upload-post_api_uploads\">Upload API</a> or the <a href=\"#operations-Upload-post_api_uploads_bytes\">Upload Bytes API</a>.
     * @summary Validates each signature in the uploaded document
     * @param {SignatureSignaturesInfoRequest} [signatureSignaturesInfoRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public apiDocumentsValidateSignaturesPost(signatureSignaturesInfoRequest?: SignatureSignaturesInfoRequest, options?: AxiosRequestConfig) {
        return DocumentsApiFp(this.configuration).apiDocumentsValidateSignaturesPost(signatureSignaturesInfoRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FlowsApi - axios parameter creator
 * @export
 */
export const FlowsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary List created flows.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsGet: async (q?: string, limit?: number, offset?: number, order?: PaginationOrders, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/document-flows`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)

            if (q !== undefined) {
                localVarQueryParameter['Q'] = q;
            }

            if (limit !== undefined) {
                localVarQueryParameter['Limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['Offset'] = offset;
            }

            if (order !== undefined) {
                localVarQueryParameter['Order'] = order;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes a flow.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentFlowsIdDelete', 'id', id)
            const localVarPath = `/api/document-flows/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves flow details
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentFlowsIdGet', 'id', id)
            const localVarPath = `/api/document-flows/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates a flow.
         * @param {string} id 
         * @param {DocumentFlowsDocumentFlowData} [documentFlowsDocumentFlowData] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdPut: async (id: string, documentFlowsDocumentFlowData?: DocumentFlowsDocumentFlowData, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiDocumentFlowsIdPut', 'id', id)
            const localVarPath = `/api/document-flows/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentFlowsDocumentFlowData, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates a flow that can be used to create documents
         * @param {DocumentFlowsDocumentFlowCreateRequest} [documentFlowsDocumentFlowCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsPost: async (documentFlowsDocumentFlowCreateRequest?: DocumentFlowsDocumentFlowCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/document-flows`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentFlowsDocumentFlowCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FlowsApi - functional programming interface
 * @export
 */
export const FlowsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FlowsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary List created flows.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentFlowsGet(q?: string, limit?: number, offset?: number, order?: PaginationOrders, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedSearchResponseDocumentFlowsDocumentFlowModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentFlowsGet(q, limit, offset, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Deletes a flow.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentFlowsIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentFlowsIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieves flow details
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentFlowsIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentFlowsDocumentFlowDetailsModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentFlowsIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates a flow.
         * @param {string} id 
         * @param {DocumentFlowsDocumentFlowData} [documentFlowsDocumentFlowData] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentFlowsIdPut(id: string, documentFlowsDocumentFlowData?: DocumentFlowsDocumentFlowData, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentFlowsIdPut(id, documentFlowsDocumentFlowData, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Creates a flow that can be used to create documents
         * @param {DocumentFlowsDocumentFlowCreateRequest} [documentFlowsDocumentFlowCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentFlowsPost(documentFlowsDocumentFlowCreateRequest?: DocumentFlowsDocumentFlowCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentFlowsDocumentFlowModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiDocumentFlowsPost(documentFlowsDocumentFlowCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FlowsApi - factory interface
 * @export
 */
export const FlowsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FlowsApiFp(configuration)
    return {
        /**
         * 
         * @summary List created flows.
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsGet(q?: string, limit?: number, offset?: number, order?: PaginationOrders, options?: any): AxiosPromise<PaginatedSearchResponseDocumentFlowsDocumentFlowModel> {
            return localVarFp.apiDocumentFlowsGet(q, limit, offset, order, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes a flow.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdDelete(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiDocumentFlowsIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieves flow details
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdGet(id: string, options?: any): AxiosPromise<DocumentFlowsDocumentFlowDetailsModel> {
            return localVarFp.apiDocumentFlowsIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates a flow.
         * @param {string} id 
         * @param {DocumentFlowsDocumentFlowData} [documentFlowsDocumentFlowData] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsIdPut(id: string, documentFlowsDocumentFlowData?: DocumentFlowsDocumentFlowData, options?: any): AxiosPromise<void> {
            return localVarFp.apiDocumentFlowsIdPut(id, documentFlowsDocumentFlowData, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates a flow that can be used to create documents
         * @param {DocumentFlowsDocumentFlowCreateRequest} [documentFlowsDocumentFlowCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentFlowsPost(documentFlowsDocumentFlowCreateRequest?: DocumentFlowsDocumentFlowCreateRequest, options?: any): AxiosPromise<DocumentFlowsDocumentFlowModel> {
            return localVarFp.apiDocumentFlowsPost(documentFlowsDocumentFlowCreateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FlowsApi - object-oriented interface
 * @export
 * @class FlowsApi
 * @extends {BaseAPI}
 */
export class FlowsApi extends BaseAPI {
    /**
     * 
     * @summary List created flows.
     * @param {string} [q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    public apiDocumentFlowsGet(q?: string, limit?: number, offset?: number, order?: PaginationOrders, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).apiDocumentFlowsGet(q, limit, offset, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes a flow.
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    public apiDocumentFlowsIdDelete(id: string, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).apiDocumentFlowsIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieves flow details
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    public apiDocumentFlowsIdGet(id: string, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).apiDocumentFlowsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates a flow.
     * @param {string} id 
     * @param {DocumentFlowsDocumentFlowData} [documentFlowsDocumentFlowData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    public apiDocumentFlowsIdPut(id: string, documentFlowsDocumentFlowData?: DocumentFlowsDocumentFlowData, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).apiDocumentFlowsIdPut(id, documentFlowsDocumentFlowData, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates a flow that can be used to create documents
     * @param {DocumentFlowsDocumentFlowCreateRequest} [documentFlowsDocumentFlowCreateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowsApi
     */
    public apiDocumentFlowsPost(documentFlowsDocumentFlowCreateRequest?: DocumentFlowsDocumentFlowCreateRequest, options?: AxiosRequestConfig) {
        return FlowsApiFp(this.configuration).apiDocumentFlowsPost(documentFlowsDocumentFlowCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FoldersApi - axios parameter creator
 * @export
 */
export const FoldersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The Q parameter allows you to filter by folder name.
         * @summary Retrieves all folders paginating the response
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {boolean} [filterByParent] if true filters by the parentId parameter
         * @param {string} [parentId] Id of the parent folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersGet: async (q?: string, limit?: number, offset?: number, order?: PaginationOrders, filterByParent?: boolean, parentId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/folders`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)

            if (q !== undefined) {
                localVarQueryParameter['Q'] = q;
            }

            if (limit !== undefined) {
                localVarQueryParameter['Limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['Offset'] = offset;
            }

            if (order !== undefined) {
                localVarQueryParameter['Order'] = order;
            }

            if (filterByParent !== undefined) {
                localVarQueryParameter['filterByParent'] = filterByParent;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes a folder.
         * @param {string} id Id of the folder to be deleted
         * @param {FoldersFolderDeleteRequest} [foldersFolderDeleteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdDeletePost: async (id: string, foldersFolderDeleteRequest?: FoldersFolderDeleteRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiFoldersIdDeletePost', 'id', id)
            const localVarPath = `/api/folders/{id}/delete`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(foldersFolderDeleteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves the folder\'s info.
         * @param {string} id Folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiFoldersIdGet', 'id', id)
            const localVarPath = `/api/folders/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [foldersFolderCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersPost: async (foldersFolderCreateRequest?: FoldersFolderCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/folders`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(foldersFolderCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FoldersApi - functional programming interface
 * @export
 */
export const FoldersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FoldersApiAxiosParamCreator(configuration)
    return {
        /**
         * The Q parameter allows you to filter by folder name.
         * @summary Retrieves all folders paginating the response
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {boolean} [filterByParent] if true filters by the parentId parameter
         * @param {string} [parentId] Id of the parent folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFoldersGet(q?: string, limit?: number, offset?: number, order?: PaginationOrders, filterByParent?: boolean, parentId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedSearchResponseFoldersFolderInfoModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFoldersGet(q, limit, offset, order, filterByParent, parentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Deletes a folder.
         * @param {string} id Id of the folder to be deleted
         * @param {FoldersFolderDeleteRequest} [foldersFolderDeleteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFoldersIdDeletePost(id: string, foldersFolderDeleteRequest?: FoldersFolderDeleteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFoldersIdDeletePost(id, foldersFolderDeleteRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieves the folder\'s info.
         * @param {string} id Folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFoldersIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FoldersFolderOrganizationModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFoldersIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [foldersFolderCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFoldersPost(foldersFolderCreateRequest?: FoldersFolderCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FoldersFolderInfoModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFoldersPost(foldersFolderCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FoldersApi - factory interface
 * @export
 */
export const FoldersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FoldersApiFp(configuration)
    return {
        /**
         * The Q parameter allows you to filter by folder name.
         * @summary Retrieves all folders paginating the response
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {boolean} [filterByParent] if true filters by the parentId parameter
         * @param {string} [parentId] Id of the parent folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersGet(q?: string, limit?: number, offset?: number, order?: PaginationOrders, filterByParent?: boolean, parentId?: string, options?: any): AxiosPromise<PaginatedSearchResponseFoldersFolderInfoModel> {
            return localVarFp.apiFoldersGet(q, limit, offset, order, filterByParent, parentId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes a folder.
         * @param {string} id Id of the folder to be deleted
         * @param {FoldersFolderDeleteRequest} [foldersFolderDeleteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdDeletePost(id: string, foldersFolderDeleteRequest?: FoldersFolderDeleteRequest, options?: any): AxiosPromise<void> {
            return localVarFp.apiFoldersIdDeletePost(id, foldersFolderDeleteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieves the folder\'s info.
         * @param {string} id Folder id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersIdGet(id: string, options?: any): AxiosPromise<FoldersFolderOrganizationModel> {
            return localVarFp.apiFoldersIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates a folder.
         * @param {FoldersFolderCreateRequest} [foldersFolderCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFoldersPost(foldersFolderCreateRequest?: FoldersFolderCreateRequest, options?: any): AxiosPromise<FoldersFolderInfoModel> {
            return localVarFp.apiFoldersPost(foldersFolderCreateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FoldersApi - object-oriented interface
 * @export
 * @class FoldersApi
 * @extends {BaseAPI}
 */
export class FoldersApi extends BaseAPI {
    /**
     * The Q parameter allows you to filter by folder name.
     * @summary Retrieves all folders paginating the response
     * @param {string} [q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order] 
     * @param {boolean} [filterByParent] if true filters by the parentId parameter
     * @param {string} [parentId] Id of the parent folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public apiFoldersGet(q?: string, limit?: number, offset?: number, order?: PaginationOrders, filterByParent?: boolean, parentId?: string, options?: AxiosRequestConfig) {
        return FoldersApiFp(this.configuration).apiFoldersGet(q, limit, offset, order, filterByParent, parentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes a folder.
     * @param {string} id Id of the folder to be deleted
     * @param {FoldersFolderDeleteRequest} [foldersFolderDeleteRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public apiFoldersIdDeletePost(id: string, foldersFolderDeleteRequest?: FoldersFolderDeleteRequest, options?: AxiosRequestConfig) {
        return FoldersApiFp(this.configuration).apiFoldersIdDeletePost(id, foldersFolderDeleteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieves the folder\'s info.
     * @param {string} id Folder id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public apiFoldersIdGet(id: string, options?: AxiosRequestConfig) {
        return FoldersApiFp(this.configuration).apiFoldersIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates a folder.
     * @param {FoldersFolderCreateRequest} [foldersFolderCreateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoldersApi
     */
    public apiFoldersPost(foldersFolderCreateRequest?: FoldersFolderCreateRequest, options?: AxiosRequestConfig) {
        return FoldersApiFp(this.configuration).apiFoldersPost(foldersFolderCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * MarksSessionsApi - axios parameter creator
 * @export
 */
export const MarksSessionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session from a Document create request.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsDocumentsPost: async (documentsCreateDocumentRequest?: DocumentsCreateDocumentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/marks-sessions/documents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentsCreateDocumentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
            assertParamExists('apiMarksSessionsIdGet', 'id', id)
            const localVarPath = `/api/marks-sessions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session by requiring only the necessary data.
         * @param {DocumentMarkMarksSessionCreateRequest} [documentMarkMarksSessionCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsPost: async (documentMarkMarksSessionCreateRequest?: DocumentMarkMarksSessionCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/marks-sessions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentMarkMarksSessionCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
    const localVarAxiosParamCreator = MarksSessionsApiAxiosParamCreator(configuration)
    return {
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session from a Document create request.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMarksSessionsDocumentsPost(documentsCreateDocumentRequest?: DocumentsCreateDocumentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentMarkMarksSessionCreateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiMarksSessionsDocumentsPost(documentsCreateDocumentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieves session information.
         * @param {string} id The session ID obtained when the session was created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMarksSessionsIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentMarkMarksSessionModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiMarksSessionsIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session by requiring only the necessary data.
         * @param {DocumentMarkMarksSessionCreateRequest} [documentMarkMarksSessionCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMarksSessionsPost(documentMarkMarksSessionCreateRequest?: DocumentMarkMarksSessionCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentMarkMarksSessionCreateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiMarksSessionsPost(documentMarkMarksSessionCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MarksSessionsApi - factory interface
 * @export
 */
export const MarksSessionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MarksSessionsApiFp(configuration)
    return {
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session from a Document create request.
         * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsDocumentsPost(documentsCreateDocumentRequest?: DocumentsCreateDocumentRequest, options?: any): AxiosPromise<DocumentMarkMarksSessionCreateResponse> {
            return localVarFp.apiMarksSessionsDocumentsPost(documentsCreateDocumentRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieves session information.
         * @param {string} id The session ID obtained when the session was created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsIdGet(id: string, options?: any): AxiosPromise<DocumentMarkMarksSessionModel> {
            return localVarFp.apiMarksSessionsIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
         * @summary Creates a mark positioning session by requiring only the necessary data.
         * @param {DocumentMarkMarksSessionCreateRequest} [documentMarkMarksSessionCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMarksSessionsPost(documentMarkMarksSessionCreateRequest?: DocumentMarkMarksSessionCreateRequest, options?: any): AxiosPromise<DocumentMarkMarksSessionCreateResponse> {
            return localVarFp.apiMarksSessionsPost(documentMarkMarksSessionCreateRequest, options).then((request) => request(axios, basePath));
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
     * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
     * @summary Creates a mark positioning session from a Document create request.
     * @param {DocumentsCreateDocumentRequest} [documentsCreateDocumentRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarksSessionsApi
     */
    public apiMarksSessionsDocumentsPost(documentsCreateDocumentRequest?: DocumentsCreateDocumentRequest, options?: AxiosRequestConfig) {
        return MarksSessionsApiFp(this.configuration).apiMarksSessionsDocumentsPost(documentsCreateDocumentRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieves session information.
     * @param {string} id The session ID obtained when the session was created
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarksSessionsApi
     */
    public apiMarksSessionsIdGet(id: string, options?: AxiosRequestConfig) {
        return MarksSessionsApiFp(this.configuration).apiMarksSessionsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The purpose of the positioning session is to allow users to visually position signer marks.  The result of the session is the same request provided while creating it but with the flowAction\'s prePositioned marks attribute  filled according to the positions selected for each action.      Result will be available by iFrame event when embedding the positioning session or by retrieving the session information via the GET API.
     * @summary Creates a mark positioning session by requiring only the necessary data.
     * @param {DocumentMarkMarksSessionCreateRequest} [documentMarkMarksSessionCreateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarksSessionsApi
     */
    public apiMarksSessionsPost(documentMarkMarksSessionCreateRequest?: DocumentMarkMarksSessionCreateRequest, options?: AxiosRequestConfig) {
        return MarksSessionsApiFp(this.configuration).apiMarksSessionsPost(documentMarkMarksSessionCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * NotificationsApi - axios parameter creator
 * @export
 */
export const NotificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Sends a reminder email to the user of a flow action. (if the action is pending)
         * @param {NotificationsCreateFlowActionReminderRequest} [notificationsCreateFlowActionReminderRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiNotificationsFlowActionReminderPost: async (notificationsCreateFlowActionReminderRequest?: NotificationsCreateFlowActionReminderRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/notifications/flow-action-reminder`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(notificationsCreateFlowActionReminderRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Sends a reminder email to the e-mails provided on request. Should be used after creating a batch of documents.
         * @param {NotificationsEmailListNotificationRequest} [notificationsEmailListNotificationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersNotifyPendingPost: async (notificationsEmailListNotificationRequest?: NotificationsEmailListNotificationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users/notify-pending`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(notificationsEmailListNotificationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NotificationsApi - functional programming interface
 * @export
 */
export const NotificationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NotificationsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Sends a reminder email to the user of a flow action. (if the action is pending)
         * @param {NotificationsCreateFlowActionReminderRequest} [notificationsCreateFlowActionReminderRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiNotificationsFlowActionReminderPost(notificationsCreateFlowActionReminderRequest?: NotificationsCreateFlowActionReminderRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiNotificationsFlowActionReminderPost(notificationsCreateFlowActionReminderRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sends a reminder email to the e-mails provided on request. Should be used after creating a batch of documents.
         * @param {NotificationsEmailListNotificationRequest} [notificationsEmailListNotificationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUsersNotifyPendingPost(notificationsEmailListNotificationRequest?: NotificationsEmailListNotificationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUsersNotifyPendingPost(notificationsEmailListNotificationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NotificationsApi - factory interface
 * @export
 */
export const NotificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NotificationsApiFp(configuration)
    return {
        /**
         * 
         * @summary Sends a reminder email to the user of a flow action. (if the action is pending)
         * @param {NotificationsCreateFlowActionReminderRequest} [notificationsCreateFlowActionReminderRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiNotificationsFlowActionReminderPost(notificationsCreateFlowActionReminderRequest?: NotificationsCreateFlowActionReminderRequest, options?: any): AxiosPromise<void> {
            return localVarFp.apiNotificationsFlowActionReminderPost(notificationsCreateFlowActionReminderRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sends a reminder email to the e-mails provided on request. Should be used after creating a batch of documents.
         * @param {NotificationsEmailListNotificationRequest} [notificationsEmailListNotificationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersNotifyPendingPost(notificationsEmailListNotificationRequest?: NotificationsEmailListNotificationRequest, options?: any): AxiosPromise<void> {
            return localVarFp.apiUsersNotifyPendingPost(notificationsEmailListNotificationRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NotificationsApi - object-oriented interface
 * @export
 * @class NotificationsApi
 * @extends {BaseAPI}
 */
export class NotificationsApi extends BaseAPI {
    /**
     * 
     * @summary Sends a reminder email to the user of a flow action. (if the action is pending)
     * @param {NotificationsCreateFlowActionReminderRequest} [notificationsCreateFlowActionReminderRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public apiNotificationsFlowActionReminderPost(notificationsCreateFlowActionReminderRequest?: NotificationsCreateFlowActionReminderRequest, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).apiNotificationsFlowActionReminderPost(notificationsCreateFlowActionReminderRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sends a reminder email to the e-mails provided on request. Should be used after creating a batch of documents.
     * @param {NotificationsEmailListNotificationRequest} [notificationsEmailListNotificationRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public apiUsersNotifyPendingPost(notificationsEmailListNotificationRequest?: NotificationsEmailListNotificationRequest, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).apiUsersNotifyPendingPost(notificationsEmailListNotificationRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * OrganizationsApi - axios parameter creator
 * @export
 */
export const OrganizationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary List organization users
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersGet: async (q?: string, limit?: number, offset?: number, order?: PaginationOrders, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/organizations/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)

            if (q !== undefined) {
                localVarQueryParameter['Q'] = q;
            }

            if (limit !== undefined) {
                localVarQueryParameter['Limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['Offset'] = offset;
            }

            if (order !== undefined) {
                localVarQueryParameter['Order'] = order;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Adds a user to the organization
         * @param {OrganizationsOrganizationUserPostRequest} [organizationsOrganizationUserPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersPost: async (organizationsOrganizationUserPostRequest?: OrganizationsOrganizationUserPostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/organizations/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(organizationsOrganizationUserPostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes a user from organization
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersUserIdDelete: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('apiOrganizationsUsersUserIdDelete', 'userId', userId)
            const localVarPath = `/api/organizations/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrganizationsApi - functional programming interface
 * @export
 */
export const OrganizationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrganizationsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary List organization users
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiOrganizationsUsersGet(q?: string, limit?: number, offset?: number, order?: PaginationOrders, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedSearchResponseOrganizationsOrganizationUserModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiOrganizationsUsersGet(q, limit, offset, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Adds a user to the organization
         * @param {OrganizationsOrganizationUserPostRequest} [organizationsOrganizationUserPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiOrganizationsUsersPost(organizationsOrganizationUserPostRequest?: OrganizationsOrganizationUserPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrganizationsOrganizationUserModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiOrganizationsUsersPost(organizationsOrganizationUserPostRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Deletes a user from organization
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiOrganizationsUsersUserIdDelete(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiOrganizationsUsersUserIdDelete(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrganizationsApi - factory interface
 * @export
 */
export const OrganizationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizationsApiFp(configuration)
    return {
        /**
         * 
         * @summary List organization users
         * @param {string} [q] Query to filter items.
         * @param {number} [limit] Number of items to return.
         * @param {number} [offset] The offset of the searched page (starting with 0).
         * @param {PaginationOrders} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersGet(q?: string, limit?: number, offset?: number, order?: PaginationOrders, options?: any): AxiosPromise<PaginatedSearchResponseOrganizationsOrganizationUserModel> {
            return localVarFp.apiOrganizationsUsersGet(q, limit, offset, order, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Adds a user to the organization
         * @param {OrganizationsOrganizationUserPostRequest} [organizationsOrganizationUserPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersPost(organizationsOrganizationUserPostRequest?: OrganizationsOrganizationUserPostRequest, options?: any): AxiosPromise<OrganizationsOrganizationUserModel> {
            return localVarFp.apiOrganizationsUsersPost(organizationsOrganizationUserPostRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes a user from organization
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiOrganizationsUsersUserIdDelete(userId: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiOrganizationsUsersUserIdDelete(userId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrganizationsApi - object-oriented interface
 * @export
 * @class OrganizationsApi
 * @extends {BaseAPI}
 */
export class OrganizationsApi extends BaseAPI {
    /**
     * 
     * @summary List organization users
     * @param {string} [q] Query to filter items.
     * @param {number} [limit] Number of items to return.
     * @param {number} [offset] The offset of the searched page (starting with 0).
     * @param {PaginationOrders} [order] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public apiOrganizationsUsersGet(q?: string, limit?: number, offset?: number, order?: PaginationOrders, options?: AxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).apiOrganizationsUsersGet(q, limit, offset, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Adds a user to the organization
     * @param {OrganizationsOrganizationUserPostRequest} [organizationsOrganizationUserPostRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public apiOrganizationsUsersPost(organizationsOrganizationUserPostRequest?: OrganizationsOrganizationUserPostRequest, options?: AxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).apiOrganizationsUsersPost(organizationsOrganizationUserPostRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes a user from organization
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public apiOrganizationsUsersUserIdDelete(userId: string, options?: AxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).apiOrganizationsUsersUserIdDelete(userId, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UploadApi - axios parameter creator
 * @export
 */
export const UploadApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
         * @param {UploadsUploadBytesRequest} [uploadsUploadBytesRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsBytesPost: async (uploadsUploadBytesRequest?: UploadsUploadBytesRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/uploads/bytes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(uploadsUploadBytesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
         * @summary Uploads a file by sending a multipart/form-data request
         * @param {any} [file] File to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsPost: async (file?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/uploads`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication ApiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)


            if (file !== undefined) { 
                localVarFormParams.append('file', new Blob([JSON.stringify(file)], { type: "application/json", }));
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UploadApi - functional programming interface
 * @export
 */
export const UploadApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UploadApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
         * @param {UploadsUploadBytesRequest} [uploadsUploadBytesRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUploadsBytesPost(uploadsUploadBytesRequest?: UploadsUploadBytesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UploadsUploadBytesModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUploadsBytesPost(uploadsUploadBytesRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
         * @summary Uploads a file by sending a multipart/form-data request
         * @param {any} [file] File to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUploadsPost(file?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUploadsPost(file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UploadApi - factory interface
 * @export
 */
export const UploadApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UploadApiFp(configuration)
    return {
        /**
         * 
         * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
         * @param {UploadsUploadBytesRequest} [uploadsUploadBytesRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsBytesPost(uploadsUploadBytesRequest?: UploadsUploadBytesRequest, options?: any): AxiosPromise<UploadsUploadBytesModel> {
            return localVarFp.apiUploadsBytesPost(uploadsUploadBytesRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
         * @summary Uploads a file by sending a multipart/form-data request
         * @param {any} [file] File to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsPost(file?: any, options?: any): AxiosPromise<FileModel> {
            return localVarFp.apiUploadsPost(file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UploadApi - object-oriented interface
 * @export
 * @class UploadApi
 * @extends {BaseAPI}
 */
export class UploadApi extends BaseAPI {
    /**
     * 
     * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
     * @param {UploadsUploadBytesRequest} [uploadsUploadBytesRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadApi
     */
    public apiUploadsBytesPost(uploadsUploadBytesRequest?: UploadsUploadBytesRequest, options?: AxiosRequestConfig) {
        return UploadApiFp(this.configuration).apiUploadsBytesPost(uploadsUploadBytesRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
     * @summary Uploads a file by sending a multipart/form-data request
     * @param {any} [file] File to upload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadApi
     */
    public apiUploadsPost(file?: any, options?: AxiosRequestConfig) {
        return UploadApiFp(this.configuration).apiUploadsPost(file, options).then((request) => request(this.axios, this.basePath));
    }
}



export * from './apis/signature-api';
