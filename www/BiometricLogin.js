
var exec = require('cordova/exec');

var PLUGIN_NAME = 'BiometricLogin';

class BiometricLogin {
  constructor() {}
  show(params, successCallback, errorCallback) {
    exec(successCallback, errorCallback, PLUGIN_NAME, "authenticate", [params]);
  }
  isAvailable(successCallback, errorCallback, optionalParams) {
    exec(successCallback, errorCallback, PLUGIN_NAME, "isAvailable", [optionalParams]);
  }
  registerBiometricSecret(params, successCallback, errorCallback) {
    exec(successCallback, errorCallback, PLUGIN_NAME, "registerBiometricSecret", [params]);
  }
  loadBiometricSecret(params, successCallback, errorCallback) {
    exec(successCallback, errorCallback, PLUGIN_NAME, "loadBiometricSecret", [params]);
  }
}

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





module.exports = new BiometricLogin();
