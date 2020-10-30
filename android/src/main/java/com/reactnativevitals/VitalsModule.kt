package com.reactnativevitals

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class VitalsModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "Vitals"
    }

    @ReactMethod
    fun reportFullyDrawn() {
      currentActivity?.reportFullyDrawn()
    }
}
