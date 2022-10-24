"use strict";
exports.__esModule = true;
exports.getBase64 = void 0;
var fs_1 = require("fs");
function getBase64(filepath) {
    return (0, fs_1.readFileSync)(filepath, { encoding: 'base64' });
}
exports.getBase64 = getBase64;
