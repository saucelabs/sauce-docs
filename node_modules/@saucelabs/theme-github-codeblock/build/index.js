"use strict";
/**
 * Copyright (c) Sauce Labs, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = () => ({
    name: 'docusaurus-theme-github-codeblock',
    getThemePath() {
        return path_1.default.resolve(__dirname, './theme');
    }
});
//# sourceMappingURL=index.js.map