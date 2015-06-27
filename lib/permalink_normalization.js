'use strict';

var unorm = require('unorm');
module.exports = function (permalink) {
    var pluginConfig = this.config.permalink_normalization;
    var type = pluginConfig.type;
    var result = undefined;

    // Using the String.prototype.normalize when supported

    switch (type) {
        case 'nfd':
            result = unorm.nfd(permalink);
            break;
        case 'nfkd':
            result = unorm.nfkd(permalink);
            break;
        case 'nfkc':
            result = unorm.nfkc(permalink);
            break;
        case 'nfc':
            result = unorm.nfc(permalink);
            break;
        default:
            result = permalink;
    };

    return result;
};