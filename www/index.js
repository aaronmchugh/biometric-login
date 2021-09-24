
var exec = require('cordova/exec');

var PLUGIN_NAME = 'BiometricLogin';

var BiometricLogin = {
    functionOne: function(arg1, arg2, cb) {
        exec(cb, null, PLUGIN_NAME, 'functionOne' [arg1,arg2]);
    },
    functionTwo: function(arg1, arg2, cb) {
        exec(cb, null, PLUGIN_NAME, 'functionTwo' [arg1,arg2]);
    },
    functionThree: function(arg1, arg2, cb) {
        exec(cb, null, PLUGIN_NAME, 'functionThree' [arg1,arg2]);
    },
};

module.exports = BiometricLogin;
