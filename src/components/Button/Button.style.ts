import { cva } from "../../../styled-system/css";

const root = cva({
  base: {
    boxSizing: "border-box",
    textDecorationLine: "none",
    whiteSpace: "nowrap",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    width: "fit-content",
    margin: 0,
    // overflow: "hidden",

    fontFamily: "base",
    outlineStyle: "none",

    transitionDuration: "durationFaster",
    transitionProperty: "background, border, color",
    transitionTimingFunction: "curveEasyEase",

    "@media screen and (prefers-reduced-motion: reduce)": {
      transitionDuration: "0.01ms",
    },

    "&:focus-visible": {
      outline:
        "token(sizes.strokeWidthThick) solid token(colors.strokeFocusBlack)",
      boxShadow:
        "token(shadows.shadow4), 0 0 0 2px token(colors.strokeFocusBlack)",
      zIndex: "1",
    },
  },
  variants: {
    appearance: {
      primary: {
        backgroundColor: "brandBackground", // colors.brand.600
        border:
          "token(sizes.strokeWidthThin) solid token(colors.transparentStroke)",
        color: "neutralForegroundOnBrand", // colors.white

        "&:hover": {
          backgroundColor: "brandBackgroundHover", // colors.brand.500

          color: "neutralForegroundOnBrand", // colors.white
        },

        "&:hover:active": {
          backgroundColor: "brandBackgroundPressed", // colors.brand.700

          color: "neutralForegroundOnBrand", // colors.white
        },
      },
      // outline/default
      outline: {
        backgroundColor: "neutralBackground", // colors.white
        border:
          "token(sizes.strokeWidthThin) solid token(colors.neutralStroke)", // colors.neutral.300
        color: "neutralForeground", // colors.neutral.700

        "&:hover": {
          backgroundColor: "neutralBackgroundHover", // colors.neutral.100
          borderColor: "neutralStrokeHover", // colors.neutral.400
          color: "neutralForegroundHover", // colors.neutral.800

          cursor: "pointer",
        },
        "&:hover:active": {
          backgroundColor: "neutralBackgroundPressed", // colors.neutral.200
          borderColor: "neutralStrokePressed", // colors.neutral.600
          color: "neutralForegroundPressed", // colors.neutral.800

          outlineStyle: "none",
        },
      },
      // subtle/text
      subtle: {
        backgroundColor: "subtleBackground", // transparent
        borderColor: "transparent",
        color: "neutralForeground", // colors.neutral.700

        "&:hover": {
          backgroundColor: "subtleBackgroundHover", // colors.neutral.100
          borderColor: "transparent",
          color: "neutralForegroundHover", // colors.neutral.800
        },

        "&:hover:active": {
          backgroundColor: "subtleBackgroundPressed", // colors.neutral.100
          borderColor: "transparent",
          color: "neutralForegroundPressed", // colors.neutral.800
        },
      },
      // transparent/link
      transparent: {
        backgroundColor: "transparentBackground", // transparent
        borderColor: "transparent",
        color: "neutralForeground", // colors.neutral.700

        "&:hover": {
          backgroundColor: "transparentBackgroundHover", // transparent
          borderColor: "transparent",
          color: "neutralForegroundBrandHover", // colors.neutral.800
        },

        "&:hover:active": {
          backgroundColor: "transparentBackgroundPressed", // transparent
          borderColor: "transparent",
          color: "neutralForegroundBrandPressed", // colors.neutral.800
        },
      },
    },
    size: {
      small: {
        height: "6", // 24px
        padding: "token(spacing.1) token(spacing.2)", // 4px 8px
        borderRadius: "sm", // 2px

        lineHeight: "3.5", // 14px

        fontSize: "xs", // 12px
        fontWeight: "normal", // 400
      },
      medium: {
        height: "8", // 32px
        padding: "token(spacing.1.5) token(spacing.3)", // 6px 12px
        borderRadius: "md", // 4px

        lineHeight: "4.5", // 18px
        fontSize: "sm", // 14px
        fontWeight: "semibold", // 600
      },
      large: {
        height: "10", // 40px
        padding: "token(spacing.2) token(spacing.4)", // 8px 16px
        borderRadius: "lg", // 6px

        lineHeight: "5", // 20px
        fontSize: "md", // 16px
        fontWeight: "semibold", // 600
      },
    },
    shape: {
      rounded: {
        /* The borderRadius rounded styles are handled 
        in the size variations, small, medium, large */
      },
      square: {
        // 在 compoundVariants 处理，定义在此处无法覆盖 size 中的样式
      },
      circular: {
        // 在 compoundVariants 处理，定义在此处无法覆盖 size 中的样式
      },
    },
    iconOnly: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      shape: "square",
      css: {
        borderRadius: "none",
      },
    },
    {
      shape: "circular",
      css: {
        borderRadius: "circular",
      },
    },
    {
      size: "small",
      iconOnly: true,
      css: {
        // 原本 padding 是左右大，上下小，iconOnly 则全部都是小
        padding: "1",
        // 设置与 height 一致，避免 icon 过大时，宽度被推宽。
        // 因为做动画时，有可能 overflow 隐藏，然后 tanslateX
        width: "6",
      },
    },
    {
      size: "medium",
      iconOnly: true,
      css: {
        padding: "1.5",
        width: "8",
      },
    },
    {
      size: "large",
      iconOnly: true,
      css: {
        padding: "2",
        width: "10",
      },
    },
  ],
});

const rootDisabled = cva({
  base: {
    backgroundColor: "neutralBackgroundDisabled",
    borderColor: "neutralStrokeDisabled",
    color: "neutralForegroundDisabled",

    cursor: "not-allowed",

    "&:hover": {
      backgroundColor: "neutralBackgroundDisabled",
      borderColor: "neutralStrokeDisabled",
      color: "neutralForegroundDisabled",

      cursor: "not-allowed",
    },

    "&:hover:active": {
      backgroundColor: "neutralBackgroundDisabled",
      borderColor: "neutralStrokeDisabled",
      color: "neutralForegroundDisabled",

      cursor: "not-allowed",
    },
  },
  variants: {
    appearance: {
      primary: {
        "&:hover": {},

        "&:hover:active": {},
      },
      outline: {
        "&:hover": {},

        "&:hover:active": {},
      },
      subtle: {
        backgroundColor: "transparentBackground",
        borderColor: "transparent",

        "&:hover": {
          backgroundColor: "transparentBackground",
          borderColor: "transparent",
        },

        "&:hover:active": {
          backgroundColor: "transparentBackground",
          borderColor: "transparent",
        },
      },
      transparent: {
        backgroundColor: "transparentBackground",
        borderColor: "transparent",

        "&:hover": {
          backgroundColor: "transparentBackground",
          borderColor: "transparent",
        },

        "&:hover:active": {
          backgroundColor: "transparentBackground",
          borderColor: "transparent",
        },
      },
    },
  },
  defaultVariants: {
    appearance: "outline",
  },
});

export default { root, rootDisabled };
