
var exec = require('cordova/exec');

var PLUGIN_NAME = 'BiometricLogin';

var BiometricLogin = {
    // functionOne: function(arg1, arg2, cb) {
    //     exec(cb, null, PLUGIN_NAME, 'functionOne' [arg1,arg2]);
    // },
    // functionTwo: function(arg1, arg2, cb) {
    //     exec(cb, null, PLUGIN_NAME, 'functionTwo' [arg1,arg2]);
    // },
    // functionThree: function(arg1, arg2, cb) {
    //     exec(cb, null, PLUGIN_NAME, 'functionThree' [arg1,arg2]);
    // },
};

// Plugin Errors
BiometricLogin.prototype.BIOMETRIC_UNKNOWN_ERROR = -100;
BiometricLogin.prototype.BIOMETRIC_UNAVAILABLE = -101;
BiometricLogin.prototype.BIOMETRIC_AUTHENTICATION_FAILED = -102;
BiometricLogin.prototype.BIOMETRIC_SDK_NOT_SUPPORTED = -103;
BiometricLogin.prototype.BIOMETRIC_HARDWARE_NOT_SUPPORTED = -104;
BiometricLogin.prototype.BIOMETRIC_PERMISSION_NOT_GRANTED = -105;
BiometricLogin.prototype.BIOMETRIC_NOT_ENROLLED = -106;
BiometricLogin.prototype.BIOMETRIC_INTERNAL_PLUGIN_ERROR = -107;
BiometricLogin.prototype.BIOMETRIC_DISMISSED = -108;
BiometricLogin.prototype.BIOMETRIC_PIN_OR_PATTERN_DISMISSED = -109;
BiometricLogin.prototype.BIOMETRIC_SCREEN_GUARD_UNSECURED = -110;
BiometricLogin.prototype.BIOMETRIC_LOCKED_OUT = -111;
BiometricLogin.prototype.BIOMETRIC_LOCKED_OUT_PERMANENT = -112;
BiometricLogin.prototype.BIOMETRIC_NO_SECRET_FOUND = -113;

// Biometric types
BiometricLogin.prototype.BIOMETRIC_TYPE_FINGERPRINT = "finger";
BiometricLogin.prototype.BIOMETRIC_TYPE_FACE = "face";
BiometricLogin.prototype.BIOMETRIC_TYPE_COMMON = "biometric";

BiometricLogin.prototype.show = function (params, successCallback, errorCallback) {
  exec(
    successCallback,
    errorCallback,
    PLUGIN_NAME,
    "authenticate",
    [params]
  );
};

BiometricLogin.prototype.isAvailable = function (successCallback, errorCallback, optionalParams) {
  exec(
    successCallback,
    errorCallback,
    PLUGIN_NAME,
    "isAvailable",
    [optionalParams]
  );
};

BiometricLogin.prototype.registerBiometricSecret = function (params, successCallback, errorCallback) {
  exec(
      successCallback,
      errorCallback,
      PLUGIN_NAME,
      "registerBiometricSecret",
      [params]
  );
};

BiometricLogin.prototype.loadBiometricSecret = function (params, successCallback, errorCallback) {
  exec(
      successCallback,
      errorCallback,
      PLUGIN_NAME,
      "loadBiometricSecret",
      [params]
  );
};

module.exports = new BiometricLogin();
