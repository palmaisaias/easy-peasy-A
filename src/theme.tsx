// src/theme.tsx
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

// 1) Define your design tokens under the 'theme' key
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        sky: {
          50: { value: "#f0f8ff" },
          100: { value: "#d1eaff" },
          200: { value: "#a3d5ff" },
          300: { value: "#75c0ff" },
          400: { value: "#47abff" },
          500: { value: "#1a96ff" },
          600: { value: "#1577cc" },
          700: { value: "#105899" },
          800: { value: "#0a3a66" },
          900: { value: "#051d33" },
        },
        vine: {
          50: { value: "#f0fbf0" },
          100: { value: "#dff7dd" },
          200: { value: "#c2ebbf" },
          300: { value: "#a6df9f" },
          400: { value: "#8ad47f" },
          500: { value: "#6ec75f" },
          600: { value: "#5aa04c" },
          700: { value: "#457b3a" },
          800: { value: "#304528" },
          900: { value: "#1a220f" },
        },
        wine: {
          50: { value: "#fff0f3" },
          100: { value: "#ffd6da" },
          200: { value: "#ffadb7" },
          300: { value: "#ff8594" },
          400: { value: "#ff5c71" },
          500: { value: "#ff3350" },
          600: { value: "#cc2740" },
          700: { value: "#991d30" },
          800: { value: "#661220" },
          900: { value: "#330910" },
        },
      },
    },
  },
})

// 2) Merge with Chakra's defaults to get a full SystemContext
const system = createSystem(defaultConfig, config)

// 3) Export for ChakraProvider
export default system