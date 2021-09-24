public class BiometricLogin extends CordvoaPlugin {
    private static final String TAG = "BiometricLogin";

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);

        Log.d(TAG, "Initializing BiometricLogin");
    }

    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if (action.equals("functionOne")) {
            Log.d(TAG, arg1, arg2);
        } else if (action.equals("functionTwo")) {
            Log.d(TAG, arg1, arg2);
        } else if (action.equals("functionTwo")) {
            Log.d(TAG, arg1, arg2);
        }
        return true;
    }

}