'use strict';

var unorm = require('unorm');
module.exports = function(permalink) {
    let pluginConfig = this.config.permalink_normalization
    let type = pluginConfig.type;
    let result;

    // Using the String.prototype.normalize when supported

    switch(type) {
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
}