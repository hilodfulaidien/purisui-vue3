import { cva } from "../../../styled-system/css";

const root = cva({
  base: {
    borderRadius: "borderRadiusMedium",
    position: "relative",
    color: "neutralForeground",
    backgroundColor: "neutralBackground",

    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",

    cursor: "pointer",

    "&:hover": {
      backgroundColor: "neutralBackgroundHover",
      color: "neutralForegroundBrandHover",
    },

    "&:active": {
      backgroundColor: "neutralBackgroundPressed",
      color: "neutralForegroundBrandPressed",
    },

    userSelect: "none",
  },
  variants: {
    size: {
      small: {
        height: "6", // 24px
        padding: "0 token(spacing.1)", // 0px 4px

        borderRadius: "sm", // 2px

        fontSize: "xs",
        fontWeight: "normal", // 400
      },
      medium: {
        height: "8", // 32px
        padding: "0 token(spacing.1.5)", // 0px 6px

        borderRadius: "sm", // 4px

        fontSize: "sm",
        fontWeight: "medium", // 500
      },
      large: {
        height: "10", // 40px
        padding: "0 token(spacing.2)", // 0px 8px

        borderRadius: "md", // 6px

        fontSize: "md",
        fontWeight: "semibold", // 600
      },
    },
    shape: {
      rounded: {
        /* The borderRadius rounded styles are handled 
        in the size variations, small, medium, large */
      },
      square: {
        borderRadius: "none",
      },
    },
  },
});

const checkmark = cva({
  base: {
    lineHeight: "none",
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center",
  },
  variants: {
    size: {
      small: {
        // 由于需要撑开空白位置，需要指定宽高,，而不像 icon 那样随 fontSize 变大变小
        // 大小应该是参照 button 最外层大小，24px, 32px, 40px
        // 而不是参照 fontSize 大小, 12px, 14px, 16px
        // 因此不能复用 IconWrapper
        width: "3.5", // 14px
        height: "3.5", // 14px
        marginRight: "1.5", // 6px
      },
      medium: {
        width: "4", // 16px
        height: "4", // 16px
        marginRight: "2", // 8px
      },
      large: {
        width: "4.5", // 18px
        height: "4.5", // 18px
        marginRight: "2", // 8px
      },
    },
  },
});

const content = cva({
  base: {
    backgroundColor: "transparent",

    // 将 “快捷键文本” 推到右边, auto 有外撑效果，但不作用于父容器
    // 因此可以将字少较短 item 长度，补齐到最长的那一项
    marginRight: "auto",
  },
});

const shortcut = cva({
  base: {
    backgroundColor: "transparent",

    // 中间加空白间隔， “快捷键文本” 和 “内容文本” 之间不会太靠近
    marginLeft: "6", // 24px
  },
});

const indicator = checkmark;

const rootDisabled = cva({
  base: {
    color: "neutralForegroundDisabled",

    "&:hover": {
      color: "neutralForegroundDisabled",
      backgroundColor: "neutralBackground",
      cursor: "not-allowed",
    },

    "&:focus-visible": {
      color: "neutralForegroundDisabled",
    },
  },
});

export default { root, checkmark, content, shortcut, indicator, rootDisabled };
