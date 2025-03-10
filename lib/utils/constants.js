"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var atomicizerABI_1 = require("./atomicizerABI");
var authenticatedProxyABI_1 = require("./authenticatedProxyABI");
var daoABI_1 = require("./daoABI");
var deployed_1 = require("./deployed");
var exchangeABI_1 = require("./exchangeABI");
var proxyRegistryABI_1 = require("./proxyRegistryABI");
var tokenABI_1 = require("./tokenABI");
exports.constants = {
    NULL_ADDRESS: '0x0000000000000000000000000000000000000000',
    NULL_BLOCK_HASH: '0x0000000000000000000000000000000000000000000000000000000000000000',
    INVALID_JUMP_PATTERN: 'invalid JUMP at',
    OUT_OF_GAS_PATTERN: 'out of gas',
    INVALID_TAKER_FORMAT: 'instance.taker is not of a type(s) string',
    MAX_DIGITS_IN_UNSIGNED_256_INT: 78,
    DEFAULT_BLOCK_POLLING_INTERVAL: 1000,
    DEPLOYED: deployed_1.deployed,
    ATOMICIZER_ABI: atomicizerABI_1.atomicizerABI,
    EXCHANGE_ABI: exchangeABI_1.exchangeABI,
    PROXY_REGISTRY_ABI: proxyRegistryABI_1.proxyRegistryABI,
    DAO_ABI: daoABI_1.daoABI,
    TOKEN_ABI: tokenABI_1.tokenABI,
    AUTHENTICATED_PROXY_ABI: authenticatedProxyABI_1.authenticatedProxyABI,
};
//# sourceMappingURL=constants.js.map