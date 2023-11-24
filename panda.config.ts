import { defineConfig } from "@pandacss/dev"
import { lightTheme } from './src/theme/pandacss-light-theme'

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx,vue}", "./pages/**/*.{js,jsx,ts,tsx,vue}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: lightTheme
    },

    // The output directory for your css system
    outdir: "styled-system",
    
    
})