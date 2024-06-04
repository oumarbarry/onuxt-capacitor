# onuxt-capacitor

## Usage

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/oumarbarry/onuxt-capacitor/generate)

### Clone to local

Use [giget](https://github.com/unjs/giget) to clone to your machine with an empty git history:

```bash
bunx giget@latest gh:oumarbarry/onuxt-capacitor nuxt-app --install --shell
```

## Running on native devices with Live Reload

Either, just open the Ionic VSCode Extension, from your sidebar  -> Settings -> Activate Live Reload. Then, Run -> Android/iOS.

Or, just run the following in the terminal:

```bash
bunx ionic cap run ios --livereload --external # for iOS

bunx ionic cap run android --livereload --external # for Android
```

That's it ! Enjoy Live Reload on your physical device / emulator / simulator.

Note: It's really a standalone capacitor project template. Ionic Vue is not used. We only use the Ionic CLI in order to get better Live Reload support.

## Integrations: UI Library

Feel free to integrate your prefered Vue UI library: Vant UI / Konsta UI / Varlet UI / Quasar UI / Nuxt UI... They pretty much all have a Nuxt module.

But if you prefer Ionic Vue, check out preferably this other template: [onuxt-ionic](https://github.com/oumarbarry/onuxt-ionic)
Choosing Capacitor + Ionic Vue vs Capacitor standalone + Another UI Library each comes with their own pros and cons.

## Docs

- [Nuxt](https://nuxt.com)
- [Capacitor](https://capacitorjs.com/docs)

## Contribution

Feel free to contribute 💻
