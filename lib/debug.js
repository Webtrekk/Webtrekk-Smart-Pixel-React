/**
 * @type {{use: (function(Window, Document): wtSmart)}}
 */
import * as wtSmart from "webtrekk-smart-pixel/debug";
import WebtrekkSmartPixelReact from "./smart-pixel-react";

/**
 * @type {WebtrekkSmartPixelReact}
 */
export default new WebtrekkSmartPixelReact(wtSmart);
