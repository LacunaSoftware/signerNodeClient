"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBase64 = getBase64;
var fs_1 = require("fs");
function getBase64(filepath) {
    return (0, fs_1.readFileSync)(filepath, { encoding: 'base64' });
}
