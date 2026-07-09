import type { CapacitorConfig } from "@capacitor/cli";

/**
 * This file only configures the Android *wrapper*; it does not replace the PWA. Run `npm run
 * build` first so `webDir` (dist/) actually exists, then see docs/ANDROID_BUILD.md for the full
 * `npx cap add android` → Android Studio → signed APK/AAB walkthrough (requires Android Studio
 * and the Android SDK locally — neither is available in the sandbox this project was authored
 * in, so that part of the pipeline has not been executed, only written and documented).
 */
const config: CapacitorConfig = {
  appId: "ma.ispitsprep.app",
  appName: "ISPITS Prep",
  webDir: "dist",
  android: {
    minWebViewVersion: 60,
    // Edge-to-edge + adaptive icon + Material You dynamic color are configured on the native
    // side once `android/` exists — see docs/ANDROID_BUILD.md step 4.
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined
    }
  },
  server: {
    androidScheme: "https"
  }
};

export default config;
