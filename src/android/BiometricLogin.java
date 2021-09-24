import android.content.pm.PackageManager;
import android.Manifest;
import android.os.Build;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PermissionHelper;
import org.apache.cordova.PluginResult;
import org.apache.cordova.LOG;
import org.json.JSONArray;
import org.json.JSONException;
import android.util.Log;

import javax.security.auth.callback.Callback;

public class BiometricLogin extends CordovaPlugin {
    private static final String TAG = "BiometricLogin";

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);

        Log.d(TAG, "Initializing BiometricLogin");
    }

    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if (action.equals("functionOne")) {
            System.out.println(args);
        } else if (action.equals("functionTwo")) {
            System.out.println(args);
        } else if (action.equals("functionTwo")) {
            System.out.println(args);
        }
        return true;
    }

}