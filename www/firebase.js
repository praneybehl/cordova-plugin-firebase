var exec = require('cordova/exec');

exports.getInstanceId = function(success, error) {
    exec(success, error, "FirebasePlugin", "getInstanceId", []);
};

exports.onNotificationOpen = function(success, error) {
    exec(success, error, "FirebasePlugin", "onNotificationOpen", []);
};

exports.grantPermission = function(success, error) {
    exec(success, error, "FirebasePlugin", "grantPermission", []);
};

exports.setBadgeNumber = function(number, success, error) {
    exec(success, error, "FirebasePlugin", "setBadgeNumber", [number]);
};

exports.getBadgeNumber = function(success, error) {
    exec(success, error, "FirebasePlugin", "getBadgeNumber", []);
};

exports.subscribe = function(topic, success, error) {
    exec(success, error, "FirebasePlugin", "subscribe", [topic]);
};

exports.unsubscribe = function(topic, success, error) {
    exec(success, error, "FirebasePlugin", "unsubscribe", [topic]);
};

exports.logEvent = function(key, value, success, error) {
    exec(success, error, "FirebasePlugin", "logEvent", [key, value]);
};

exports.activateFetched = function (success, error) {
    exec(success, error, "FirebasePlugin", "activateFetched", []);
};

exports.fetch = function (cacheExpirationSeconds, success, error) {
    var args = [];
    if (typeof cacheExpirationSeconds === 'number') {
        args.push(cacheExpirationSeconds);
    } else {
        error = success;
        success = cacheExpirationSeconds;
    }
    exec(success, error, "FirebasePlugin", "activateFetched", args);
};

exports.getByteArray = function (key, namespace, success, error) {
    var args = [key];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "FirebasePlugin", "getByteArray", args);
};

exports.getValue = function (key, namespace, success, error) {
    var args = [key];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "FirebasePlugin", "getValue", args);
};

exports.getInfo = function (success, error) {
    exec(success, error, "FirebasePlugin", "getInfo", []);
};

exports.setConfigSettings = function (settings, success, error) {
    exec(success, error, "FirebasePlugin", "setConfigSettings", [settings]);
};

exports.setDefaults = function (defaults, namespace, success, error) {
    var args = [defaults];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "FirebasePlugin", "setDefaults", args);
};
