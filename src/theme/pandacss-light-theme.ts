import { defineSemanticTokens, defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "16",
      lineHeight: "24",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
});

export const lightTheme = {
  textStyles,
  tokens: {
    colors: {
      teal: {
        "50": { value: "#f0fdfa" },
        "100": { value: "#ccfbf1" },
        "200": { value: "#99f6e4" },
        "300": { value: "#5eead4" },
        "400": { value: "#2dd4bf" },
        "500": { value: "#14b8a6" },
        "600": { value: "#0d9488" },
        "700": { value: "#0f766e" },
        "800": { value: "#115e59" },
        "900": { value: "#134e4a" },
        "950": { value: "#042f2e" },
      },
    },
  },
  semanticTokens: defineSemanticTokens({
    colors: {
      brand: {
        "50": { value: "{colors.teal.50}" },
        "100": { value: "{colors.teal.100}" },
        "200": { value: "{colors.teal.200}" },
        "300": { value: "{colors.teal.300}" },
        "400": { value: "{colors.teal.400}" },
        "500": { value: "{colors.teal.500}" },
        "600": { value: "{colors.teal.600}" },
        "700": { value: "{colors.teal.700}" },
        "800": { value: "{colors.teal.800}" },
        "900": { value: "{colors.teal.900}" },
        "950": { value: "{colors.teal.950}" },
      },

      // Hover(:hover), Pressed(:active), Selected(:checked)
      neutralBackground: { value: "{colors.white}" },
      neutralBackgroundHover: { value: "{colors.neutral.100}" },
      neutralBackgroundPressed: { value: "{colors.neutral.200}" },
      neutralBackgroundSelected: { value: "{colors.neutral.300}" },
      //
      neutralForeground: { value: "{colors.neutral.700}" },
      neutralForegroundHover: { value: "{colors.neutral.800}" },
      neutralForegroundPressed: { value: "{colors.neutral.800}" },
      neutralForegroundSelected: { value: "{colors.neutral.800}" },
      neutralForegroundOnBrand: { value: "{colors.white}" },
      //
      neutralForegroundBrandHover: { value: "{colors.brand.400}" },
      neutralForegroundBrandPressed: { value: "{colors.brand.500}" },
      neutralForegroundBrandSelected: { value: "{colors.brand.400}" },
      //
      neutralForegroundDisabled: { value: "{colors.neutral.400}" },
      neutralBackgroundDisabled: { value: "{colors.neutral.100}" },
      //
      //neutralForegroundLink: {},
      //neutralForegroundLinkHover: {},
      //neutralForegroundLinkPressed: {},
      //neutralForegroundLinkSelected: {},
      //
      neutralShadowAmbient: { value: "rgba(0,0,0,0.12)" },
      neutralShadowKey: { value: "rgba(0,0,0,0.14)" },
      neutralShadowAmbientLighter: { value: "rgba(0,0,0,0.06)" },
      neutralShadowKeyLighter: { value: "rgba(0,0,0,0.07)" },
      neutralShadowAmbientDarker: { value: "rgba(0,0,0,0.20)" },
      neutralShadowKeyDarker: { value: "rgba(0,0,0,0.24)" },
      brandShadowAmbient: { value: "rgba(0,0,0,0.30)" },
      brandShadowKey: { value: "rgba(0,0,0,0.25)" },
      //
      neutralStroke: { value: "{colors.neutral.300}" },
      neutralStrokeHover: { value: "{colors.neutral.400}" },
      neutralStrokePressed: { value: "{colors.neutral.600}" },
      neutralStrokeSelected: { value: "{colors.neutral.500}" },
      //
      neutralStrokeDisabled: { value: "{colors.neutral.200}" },
      //
      brandBackground: { value: "{colors.brand.600}" },
      brandBackgroundHover: { value: "{colors.brand.500}" },
      brandBackgroundPressed: { value: "{colors.brand.700}" },
      brandBackgroundSelected: { value: "{colors.brand.800}" },
      //
      subtleBackground: { value: "transparent" },
      subtleBackgroundHover: { value: "{colors.neutral.100}" },
      subtleBackgroundPressed: { value: "{colors.neutral.300}" },
      subtleBackgroundSelected: { value: "{colors.neutral.200}" },
      //
      transparentBackground: { value: "transparent" },
      transparentBackgroundHover: { value: "transparent" },
      transparentBackgroundPressed: { value: "transparent" },
      transparentBackgroundSelected: { value: "transparent" },
      //
      transparentStroke: { value: "transparent" },
      transparentStrokeInteractive: { value: "transparent" },
      transparentStrokeDisabled: { value: "transparent" },
      //
      strokeFocusWhite: { value: "{colors.white}" },
      strokeFocusBlack: { value: "{colors.black}" },
      // status color
      redBackground: { value: "{colors.red.500}" },
      redForeground: { value: "{colors.red.400}" },
      redBorder: { value: "{color.red.800}" },
      redBorderActive: { value: "{colors.red.500}" },
      //
      greenBackground: { value: "{colors.green.500}" },
      greenForeground: { value: "{colors.green.400}" },
      greenBorder: { value: "{color.green.800}" },
      greenBorderActive: { value: "{colors.green.500}" },
      //
      yellowBackground: { value: "{colors.yellow.500}" },
      yellowForeground: { value: "{colors.yellow.400}" },
      yellowBorder: { value: "{colors.yellow.800}" },
      yellowBorderActive: { value: "{colors.yellow.500}" },
      //
      blueBackground: { value: "{colors.blue.500}" },
      blueForeground: { value: "{colors.blue.400}" },
      blueBorder: { value: "{colors.blue.800}" },
      blueBorderActive: { value: "{colors.blue.500}" },
    },
    // 用于 height, width, 而不是 margin, padding, 那属于间隔 spacing,
    sizes: {
      "0": { value: "0px" },
      px: { value: "1px" },
      "0.5": { value: "0.125rem" }, // 2px
      "1": { value: "0.25rem" }, // 4px
      //"1.25": { value: "0.3125rem" }, // 5px
      "1.5": { value: "0.375rem" }, // 6px
      "2": { value: "0.5rem" }, // 8px
      "2.5": { value: "0.625rem" }, // 10px
      "3": { value: "0.75rem" }, // 12px
      "3.5": { value: "0.875rem" }, // 14px
      "4": { value: "1rem" }, // 16px
      "4.5": { value: "1.125rem" }, // 18px
      "5": { value: "1.25rem" }, // 20px
      "5.5": { value: "1.375rem" }, // 22px
      "6": { value: "1.5rem" }, // 24px
      "7": { value: "1.75rem" }, // 28px
      "8": { value: "2rem" }, // 32px
      "9": { value: "2.25rem" }, // 36px
      "10": { value: "2.5rem" }, // 40px
      "11": { value: "2.75rem" }, // 44px
      "12": { value: "3rem" }, // 48px
      "14": { value: "3.5rem" }, // 56px
      strokeWidthThin: { value: "1px" },
      strokeWidthThick: { value: "2px" },
      strokeWidthThicker: { value: "3px" },
      strokeWidthThickest: { value: "4px" },
    },
    fonts: {
      base: {
        value:
          "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
      },
      monospace: {
        value: "Consolas, 'Courier New', Courier, monospace",
      },
      numeric: {
        value:
          "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
      },
    },
    // 1 单位间隔为 4px，因为 14px 的字体需要这么宽才能看出间隔
    // 实际使用中，padding 常常是 2px 或 4px
    // 16px 开始，间隔之间的增量开始变大，每一级增加 4px，不再是 2px
    // 原因是，button 的字体每增加一级可能只是 2px，但 padding 可能增加 4px。
    // spacing 间隔往往是为内容服务的
    spacing: {
      "0": { value: "0rem" }, // 0px
      "0.5": { value: "0.125rem" }, // 2px
      "1": { value: "0.25rem" }, // 4px
      "1.25": { value: "0.3125rem" }, // 5px
      "1.5": { value: "0.375rem" }, // 6px
      "2": { value: "0.5rem" }, // 8px
      "2.5": { value: "0.625rem" }, // 10px
      "3": { value: "0.75rem" }, // 12px
      "3.5": { value: "0.875rem" }, // 14px
      "4": { value: "1rem" }, // 16px
      "4.5": { value: "1.125rem" }, // 18px
      "5": { value: "1.25rem" }, // 20px
      "5.5": { value: "1.375rem" }, // 22px
      "6": { value: "1.5rem" }, // 24px
      "7": { value: "1.75rem" }, // 28px
      "8": { value: "2rem" }, // 32px
      "9": { value: "2.25rem" }, // 36px
      "10": { value: "2.5rem" }, // 40px
      "11": { value: "2.75rem" }, // 44px
      "12": { value: "3rem" }, // 48px
      "14": { value: "3.5rem" }, // 56px
    },
    // Size-based 是指人类主观断定，多少 px 才叫做 sm，md，lg，xl
    radii: {
      none: { value: "0" },
      xs: { value: "0.125rem" }, // 2px
      sm: { value: "0.25rem" }, // 4px
      md: { value: "0.375rem" }, // 6px
      lg: { value: "0.5rem" }, // 8px
      xl: { value: "0.75rem" }, // 12px
      "2xl": { value: "1rem" }, // 16px
      "3xl": { value: "1.5rem" }, // 24px
      circular: { value: "10000px" },
    },
    fontSizes: {
      // 2xs 的一个用例是，Radio 的 checkedmark 里的圆点
      "3xs": { value: "0.5rem" }, // 8px
      "2xs": { value: "0.625rem" }, // 10px
      xs: { value: "0.75rem" }, // 12px
      sm: { value: "0.875rem" }, // 14px
      md: { value: "1rem" }, // 16px
      lg: { value: "1.125rem" }, // 18px
      xl: { value: "1.25rem" }, // 20px
      "2xl": { value: "1.375rem" }, // 22px
      "3xl": { value: "1.5rem" }, // 24px
    },
    lineHeights: {
      none: { value: "1" }, // 1 font-size
      tight: { value: "1.25" }, // 1.25 font-size
      snug: { value: "1.375" }, // 1.375 font-size
      normal: { value: "1.5" }, // 1.5 font-size
      relaxed: { value: "1.625" }, // 1.625 font-size
      loose: { value: "2" }, // 2 font-size
      "3": { value: "0.75rem" }, // 12px
      "3.5": { value: "0.875rem" }, // 14px
      "4": { value: "1rem" }, // 16px
      "4.5": { value: "1.125rem" }, // 18px
      "5": { value: "1.25rem" }, // 20px
      "5.5": { value: "1.375rem" }, // 22px
      "6": { value: "1.5rem" }, // 24px
      "7": { value: "1.75rem" }, // 28px
      "8": { value: "2rem" }, // 32px
      "9": { value: "2.25rem" }, // 36px
      "10": { value: "2.5rem" }, // 40px
    },
    fontWeights: {
      thin: { value: "100" },
      extralight: { value: "200" },
      light: { value: "300" },
      normal: { value: "400" },
      medium: { value: "500" },
      semibold: { value: "600" },
      bold: { value: "700" },
      extrabold: { value: "800" },
      black: { value: "900" },
    },
    durations: {
      durationUltraFast: { value: "50ms" },
      durationFaster: { value: "100ms" },
      durationFast: { value: "150ms" },
      durationNormal: { value: "200ms" },
      durationSlow: { value: "300ms" },
      durationSlower: { value: "400ms" },
      durationUltraSlow: { value: "500ms" },
    },
    easings: {
      curveAccelerateMax: { value: "cubic-bezier(1,0,1,1)" },
      curveAccelerateMid: { value: "cubic-bezier(0.7,0,1,0.5)" },
      curveAccelerateMin: { value: "cubic-bezier(0.8,0,1,1)" },
      curveDecelerateMax: { value: "cubic-bezier(0,0,0,1)" },
      curveDecelerateMid: { value: "cubic-bezier(0.1,0.9,0.2,1)" },
      curveDecelerateMin: { value: "cubic-bezier(0.33,0,0.1,1)" },
      curveEasyEaseMax: { value: "cubic-bezier(0.8,0,0.1,1)" },
      curveEasyEase: { value: "cubic-bezier(0.33,0,0.67,1)" },
      curveLinear: { value: "cubic-bezier(0,0,1,1)" },
    },
    shadows: {
      shadow2: {
        value:
          "0 0 2px {colors.neutralShadowAmbient}, 0 1px 2px {colors.neutralShadowKey}",
      },
      shadow4: {
        value:
          "0 0 2px {colors.neutralShadowAmbient}, 0 2px 4px {colors.neutralShadowKey}",
      },
      shadow8: {
        value:
          "0 0 2px {colors.neutralShadowAmbient}, 0 4px 8px {colors.neutralShadowKey}",
      },
      shadow16: {
        value:
          "0 0 2px {colors.neutralShadowAmbient}, 0 8px 16px {colors.neutralShadowKey}",
      },
      shadow28: {
        value:
          "0 0 8px {colors.neutralShadowAmbient}, 0 14px 28px {colors.neutralShadowKey}",
      },
      shadow64: {
        value:
          "0 0 8px {colors.neutralShadowAmbient}, 0 32px 64px {colors.neutralShadowKey}",
      },
      shadow2Brand: {
        value:
          "0 0 2px {colors.brandShadowAmbient}, 0 1px 2px {colors.brandShadowKey}",
      },
      shadow4Brand: {
        value:
          "0 0 2px {colors.brandShadowAmbient}, 0 2px 4px {colors.brandShadowKey}",
      },
      shadow8Brand: {
        value:
          "0 0 2px {colors.brandShadowAmbient}, 0 4px 8px {colors.brandShadowKey}",
      },
      shadow16Brand: {
        value:
          "0 0 2px {colors.brandShadowAmbient}, 0 8px 16px {colors.brandShadowKey}",
      },
      shadow28Brand: {
        value:
          "0 0 8px {colors.brandShadowAmbient}, 0 32px 64px {colors.brandShadowKey}",
      },
      shadow64Brand: {
        value:
          "0 0 8px {colors.brandShadowAmbient}, 0 32px 64px {colors.brandShadowKey}",
      },
    },
    animations: {
      spin: { value: "spin 1s linear infinite" },
    },
  }),
  keyframes: {
    spin: {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
    // =========================
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    fadeOut: {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
    // ========================
    slideInUp: {
      from: { transform: "translate3d(0, 10, 0)" },
      to: { transform: "translate3d(0, 0, 0)" },
    },
    slideOutUp: {
      from: { transform: "translate3d(0, 0, 0)" },
      to: { transform: "translate3d(0, 10, 0)" },
    },
    slideInUpLeft: {
      from: { transform: "translate3d(10, 10, 0)" },
      to: { transform: "translate3d(0, 0, 0)" },
    },
    slideOutUpLeft: {
      from: { transform: "translate3d(0, 0, 0)" },
      to: { transform: "translate3d(10, 10, 0)" },
    },
    slideInUpRight: {
      from: { transform: "translate3d(-10, 10, 0)" },
      to: { transform: "translate3d(0, 0, 0)" },
    },
    slideOutUpRight: {
      from: { transform: "translate3d(0, 0, 0)" },
      to: { transform: "translate3d(-10, 10, 0)" },
    },
    // =========================
    slideInDown: {
      from: { transform: "translate3d(0, -10, 0)" },
      to: { transform: "translate3d(0, 0, 0)" },
    },
    slideOutDown: {
      from: { transform: "translate3d(0, 0, 0)" },
      to: { transform: "translate3d(0, -10, 0)" },
    },
    slideInDownleft: {
      from: { transform: "translate3d(10, -10, 0)" },
      to: { transform: "translate3d(0, 0, 0)" },
    },
    slideOutDownleft: {
      from: { transform: "translate3d(0, 0, 0)" },
      to: { transform: "translate3d(10, -10, 0)" },
    },
    slideInDownRight: {
      from: { transform: "translate3d(-10, -10, 0)" },
      to: { transform: "translate3d(0, 0, 0)" },
    },
    slideOutDownRight: {
      from: { transform: "translate3d(0, 0, 0)" },
      to: { transform: "translate3d(-10, -10, 0)" },
    },
    // ==========================================
    slideInLeft: {
      from: { transform: "translate3d(10, 0, 0)" },
      to: { transform: "translate3d(0, 0, 0)" },
    },
    slideOutLeft: {
      from: { transform: "translate3d(0, 0, 0)" },
      to: { transform: "translate3d(10, 0, 0)" },
    },
    slideInRight: {
      from: { transform: "translate3d(-10, 0, 0)" },
      to: { transform: "translate3d(0, 0, 0)" },
    },
    slideOutRight: {
      from: { transform: "translate3d(0, 0, 0)" },
      to: { transform: "translate3d(-10, 0, 0)" },
    },
  },
};
