let wtSmart;
if (process.env.NODE_ENV === 'development') {
    wtSmart = require('webtrekk-smart-pixel/debug');
}
else {
    wtSmart = require('webtrekk-smart-pixel');
}

/**
 * @type {wtSmart|null}
 */
var pixel_ = null;

/**
 * @returns {Window}
 */
const getWindow_ = function() {
    return window;
};

/**
 * @returns {HTMLDocument}
 */
const getDocument_ = function() {
    return window.document;
};

const emptyObject = {};

/**
 *
 */
const init_ = function() {
    const window_ = getWindow_();
    pixel_ = wtSmart.use(window_, getDocument_());
    window_['wtSmart'] = pixel_;
};

/**
 * @constructor
 */
class WebtrekkSmartPixelReact {
    /**
     * @param {function(wtSmart: wtSmart)} call
     */
    call(call) {
        if (pixel_ === null) {
            init_();
        }

        pixel_.push(call);
    };

    /**
     * @param {object} data
     */
    init(data = emptyObject) {
        this.call(function(pix) {
            pix.init.add(data);
        });
    };

    /**
     * @param {object} data
     */
    advanced(data = emptyObject) {
        this.call(function(pix) {
            pix.advanced.add(data);
        });
    };

    /**
     * @param {string} name
     * @param {object} data
     */
    page(name = '', data = emptyObject) {
        this.call(function(pix) {
            pix.page.data.add(name, data);
        });
    };

    /**
     * @param {object} data
     */
    action(data = emptyObject) {
        this.call(function(pix) {
            pix.action.data.add(data);
        });
    };

    /**
     * @param {object} data
     */
    session(data = emptyObject) {
        this.call(function(pix) {
            pix.session.data.add(data);
        });
    };

    /**
     * @param {object} data
     */
    campaign(data = emptyObject) {
        this.call(function(pix) {
            pix.campaign.data.add(data);
        });
    };

    /**
     * @param {string} id
     * @param {object} data
     * @param {boolean} validation
     */
    customer(id = '', data = emptyObject, validation = false) {
        this.call(function(pix) {
            pix.customer.data.add(id, data, validation);
        });
    };

    /**
     * @param {string} action
     * @param {object} data
     */
    product(action = 'view', data = emptyObject) {
        this.call(function(pix) {
            var method = (action === 'view' || action === 'basket') ? 'set' : 'add';
            pix.product[action].data[method]([data]);
        });
    };

    /**
     * @param {string} action
     * @param {Array} data
     */
    products(action = 'view', data = []) {
        this.call(function(pix) {
            var method = (action === 'view' || action === 'basket') ? 'set' : 'add';
            pix.product[action].data[method](data);
        });
    };

    /**
     * @param {object} data
     */
    order(data = emptyObject) {
        this.call(function(pix) {
            pix.order.data.add(data);
        });
    };

    /**
     * @param {string} extension
     * @param {string} action
     * @param {object} config
     */
    extension(extension = '', action = 'activate', config = emptyObject) {
        if (!extension) {
            return 0;
        }

        this.call(function(pix) {
            pix.extension[extension][action](config);
        });
    };

    /**
     * @param {boolean} keepData
     */
    track(keepData = false) {
        this.call(function(pix) {
            pix.track(keepData);
        });
    };

    /**
     *
     */
    trackPage(keepData = false) {
        this.call(function(pix) {
            pix.trackPage(keepData);
        });
    };

    /**
     *
     */
    trackAction(keepData = false) {
        this.call(function(pix) {
            pix.trackAction(keepData);
        });
    };
}

export default new WebtrekkSmartPixelReact();
