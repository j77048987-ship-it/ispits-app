# Building the Android app

## What's ready right now vs. what one command generates

Everything Capacitor's CLI *reads* to generate the native project is already in this repo and
complete: `capacitor.config.ts` (app id, name, web dir, Android-specific options), the Capacitor
dependencies in `package.json` (`@capacitor/core`, `@capacitor/android`, `@capacitor/cli`,
`@capacitor/haptics`, `@capacitor/app`), and the icon set in `public/icons/`.

What's **not** included is the generated `android/` folder itself (Gradle project, Java/Kotlin
glue code, gradle-wrapper binary, etc.). That's a deliberate choice, not a gap: `npx cap add
android` needs npm registry + Gradle distribution network access to run, which this sandbox
doesn't have (confirmed by testing it directly, not assumed). Hand-writing that folder's contents
instead of running the real command would mean guessing at gradle-wrapper's binary jar and
version-specific template files — something far more likely to silently produce a broken project
than to save you time. Running the one command below, with the config already sitting here ready
for it, is both faster and more reliable than anything fabricated in advance would be.

None of the rest of this has been run in the sandbox this project was written in either (no
Android SDK, no network for Gradle/npm). The version numbers and Play Console requirements below
were checked against current documentation at the time of writing — double-check anything
version-specific if you read this much later, since these details do shift over time.

## Prerequisites

- Node.js 20.19+ (Capacitor 8 requires this)
- Android Studio **Otter (2025.2.1)** or newer, with Android Gradle Plugin 8.13.0+
- A Google Play Developer account if you intend to publish (one-time **$25** registration fee;
  new personal accounts must also run a **closed test with 12–20 testers for 14 continuous days**
  before Google grants production access — plan for that lead time)

## 1. Install dependencies and build the web app

```bash
npm install
npm run build        # outputs to dist/, which capacitor.config.ts points webDir at
```

## 2. Add the Android platform

```bash
npx cap add android
npx cap sync android
```

This generates the `android/` folder (intentionally .gitignored — it's derived from
`capacitor.config.ts` plus the platform template, not hand-authored).

## 3. Open in Android Studio and configure native details

```bash
npx cap open android
```

In Android Studio:
- Replace the default launcher icon with `public/icons/icon-512.png` / `icon-512-maskable.png`
  (Image Asset Studio → Adaptive Icon) — see docs/ROADMAP.md, the current one is a placeholder.
- Add a splash screen via `@capacitor/splash-screen` if you want one beyond the OS default.
- Set `minSdkVersion` to at least **26 (Android 8.0)** per the "Android 8 and up" requirement —
  Capacitor 8's default template already targets a modern `compileSdkVersion`; only
  `minSdkVersion` needs lowering if the template default is higher than 26.
- Wire up `@capacitor/app`'s `backButton` event to intercept hardware back-navigation during an
  active practice/simulation session (confirm-before-leaving), per docs/ROADMAP.md.

## 4. Build a signed release

1. Build → Generate Signed Bundle/APK → choose **Android App Bundle (.aab)** (Play requires AAB
   for new apps).
2. Create/select a keystore. **Back it up somewhere safe outside this project** — losing it means
   losing the ability to update the app under the same listing.
3. Build the release variant.

## 5. Re-syncing after web changes

Every time `src/` changes:

```bash
npm run build
npx cap sync android
```

## 6. Publishing checklist (Play Console)

- App icon (512×512), feature graphic, phone screenshots (at least 2)
- Short + full description (the app already supports AR/FR/EN — consider a listing per language)
- Privacy policy URL (required even for a fully-offline app, since Settings can send data to a
  user-provided third-party AI API key if they opt in — disclose that in the policy)
- Complete the Data Safety form: be accurate about the optional AI-explain feature transmitting
  the current question's text to the user's chosen AI provider (only when they've opted in and
  supplied their own key) and about the local-only storage of progress/settings otherwise
- Content rating questionnaire
- Closed testing track with the required tester count/duration before requesting production access
