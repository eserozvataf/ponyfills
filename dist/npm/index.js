"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var arrayFrom_1 = tslib_1.__importStar(require("./arrayFrom"));
exports.arrayFrom = arrayFrom_1.default;
exports.arrayFromPolyfill = arrayFrom_1.arrayFromPolyfill;
var objectAssign_1 = tslib_1.__importStar(require("./objectAssign"));
exports.objectAssign = objectAssign_1.default;
exports.objectAssignPolyfill = objectAssign_1.objectAssignPolyfill;
var objectEntries_1 = tslib_1.__importStar(require("./objectEntries"));
exports.objectEntries = objectEntries_1.default;
exports.objectEntriesPolyfill = objectEntries_1.objectEntriesPolyfill;
var objectValues_1 = tslib_1.__importStar(require("./objectValues"));
exports.objectValues = objectValues_1.default;
exports.objectValuesPolyfill = objectValues_1.objectValuesPolyfill;
var reflectOwnKeys_1 = tslib_1.__importStar(require("./reflectOwnKeys"));
exports.reflectOwnKeys = reflectOwnKeys_1.default;
exports.reflectOwnKeysPolyfill = reflectOwnKeys_1.reflectOwnKeysPolyfill;
var library = {
    arrayFrom: arrayFrom_1.default,
    arrayFromPolyfill: arrayFrom_1.arrayFromPolyfill,
    objectAssign: objectAssign_1.default,
    objectAssignPolyfill: objectAssign_1.objectAssignPolyfill,
    objectEntries: objectEntries_1.default,
    objectEntriesPolyfill: objectEntries_1.objectEntriesPolyfill,
    objectValues: objectValues_1.default,
    objectValuesPolyfill: objectValues_1.objectValuesPolyfill,
    reflectOwnKeys: reflectOwnKeys_1.default,
    reflectOwnKeysPolyfill: reflectOwnKeys_1.reflectOwnKeysPolyfill,
};
exports.default = library;
//# sourceMappingURL=index.js.map