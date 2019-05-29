/**
 * @type {{use: (function(Window, Document): wtSmart)}}
 */
const webtrekkSmartPixel = require("webtrekk-smart-pixel");
const WebtrekkSmartPixelReact = require("./lib/smart-pixel-react");

/**
 * @type {WebtrekkSmartPixelReact}
 */
module.exports = new WebtrekkSmartPixelReact(webtrekkSmartPixel);
