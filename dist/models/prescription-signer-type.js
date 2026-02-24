"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionSignerType = void 0;
/* tslint:disable */
/* eslint-disable */
/**
 * Prescription signer type (health documents). Matches C# PrescriptionSignerType. Not from Swagger spec - added manually.
 * @export
 * @enum {string}
 */
var PrescriptionSignerType;
(function (PrescriptionSignerType) {
    PrescriptionSignerType["None"] = "None";
    PrescriptionSignerType["Doctor"] = "Doctor";
    PrescriptionSignerType["Pharmacist"] = "Pharmacist";
})(PrescriptionSignerType || (exports.PrescriptionSignerType = PrescriptionSignerType = {}));
