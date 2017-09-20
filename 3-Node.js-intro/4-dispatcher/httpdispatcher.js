/*globals module, require */
/*jshint es5: true */

class HttpDispatcher {

    constructor() {
        this.listener = { get: [ ], post: [ ] };
        this.errorListener = function() { };
    }

    onError(cb) {
        this.errorListener = cb; 
    };

    on(method, url, cb) {
        this.listener[method][url] = cb;
    };

    onGet(url, cb) {
        this.on('get', url, cb);
    };

    onPost(url, cb) {
        this.on('post', url, cb);
    };

    dispatch(req, res) {
        var parsedUrl = require('url').parse(req.url, true);
        var method = req.method.toLowerCase();
        
        if(this.listener[method][parsedUrl.pathname]) {
            this.listener[method][parsedUrl.pathname](req, res)
        }
        else {
            this.errorListener(req, res); 
        }
    };
}

module.exports = new HttpDispatcher();