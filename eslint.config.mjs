import antfu from "@antfu/eslint-config"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  antfu({
    stylistic: { quotes: "double" },

    rules: {
      "no-console": 0,
    },
  }),
)
