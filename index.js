/**
 * @type {{use: (function(Window, Document): wtSmart)}}
 */
const webtrekkSmartPixel = require("webtrekk-smart-pixel");
import WebtrekkSmartPixelReact from "./lib/smart-pixel-react";

/**
 * @type {WebtrekkSmartPixelReact}
 */
export default new WebtrekkSmartPixelReact(webtrekkSmartPixel);
