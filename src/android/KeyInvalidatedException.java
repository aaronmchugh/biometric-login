package com.example;

class KeyInvalidatedException extends CryptoException {
    KeyInvalidatedException() {
        super(PluginError.BIOMETRIC_NO_SECRET_FOUND);
    }
}
