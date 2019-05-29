/**
 * @type {wtSmart|null}
 */
var pixel_ = null;

/**
 * @type {{use: (function(Window, Document): wtSmart)}|null}
 */
var webtrekkSmartPixel_ = null;

/**
 * @returns {Window}
 */
var getWindow_ = function() {
    return window;
};

/**
 * @returns {HTMLDocument}
 */
var getDocument_ = function() {
    return window.document;
};

/**
 *
 */
var init_ = function() {
    pixel_ = webtrekkSmartPixel_.use(getWindow_(), getDocument_());
};


/**
 * @constructor
 */
class WebtrekkSmartPixelReact {
    /**
     * @param {{use: (function(Window, Document): wtSmart)}} webtrekkSmartPixel
     */
    constructor(webtrekkSmartPixel) {
        webtrekkSmartPixel_ = webtrekkSmartPixel;
    };

    /**
     * @param {function(wtSmart: wtSmart)} call
     */
    call(call) {
        if (pixel_ === null) {
            init_();
        }

        pixel_.push(call);
    };
}

module.exports = WebtrekkSmartPixelReact;
