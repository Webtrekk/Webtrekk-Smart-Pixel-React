import webtrekkSmartPixelReact from "./debug";

/**
 * @constructor
 */
var ApplicationTracking = function() {
    this.init = function() {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.init.set({
                trackId: '123451234512345',
                trackDomain: 'data.wt-eu02.net'
            });
        });
    };

    this.page = function(name, data) {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.page.data.set(name, data);
        });
    };

    this.action = function(data) {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.action.data.set(data);
        });
    };

    this.track = function() {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.track();
        });
    };

    this.trackPage = function() {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.trackPage();
        });
    };

    this.trackAction = function() {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.trackAction();
        });
    };
};

export default new ApplicationTracking();
