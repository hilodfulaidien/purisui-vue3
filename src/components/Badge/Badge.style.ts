import { cva } from "../../../styled-system/css";

const outWrapper = cva({
  base: {
    display: "flex",
    // 必须设置为 relative，为了给 textWrapper 定位
    position: "relative",
    //height: "fit-content",
    width: "fit-content",

    whiteSpace: "nowrap",
    userSelect: "none",
  },
});

const textWrapper = cva({
  base: {
    // 设置为 relative，相对于父容器定位
    position: "absolute",
    // 让中心点与 4 个顶点重合
    transform: "translate(-50%,-50%)",
    // block 块内水平对齐
    textAlign: "center",
    fontFamily: "base",
    color: "neutralForegroundOnBrand",
    border: "1px solid",
  },
  variants: {
    // 注意必须统一 top 和 left，因为 offset 要用到的 css 属性需要对应
    // 为 margin-top 和 margin-left
    placement: {
      "top-start": {
        top: "0%",
        left: "0%",
      },
      "top-end": {
        top: "0%",
        left: "100%",
      },
      "bottom-start": {
        top: "100%",
        left: "0%",
      },
      "bottom-end": {
        top: "100%",
        left: "100%",
      },
    },
    size: {
      small: {
        height: "4", // 16px
        // 宽度不能比 height 更小，确保为圆形
        minWidth: "4",
        lineHeight: "3.5",
        padding: "token(spacing.0) token(spacing.1)", // 0px 4px

        fontSize: "xs", // 12px
        fontWeight: "normal", // 400
      },
      medium: {
        height: "5", // 20px
        minWidth: "5",
        lineHeight: "4.5",
        padding: "0 token(spacing.1.25)", // 0px 5px

        fontSize: "xs", // 12px
        fontWeight: "semibold", // 500
      },
      large: {
        height: "6", // 24px
        minWidth: "6",
        lineHeight: "5.5",
        padding: "token(spacing.0) token(spacing.1.5)", // 0px 6px

        fontSize: "sm", // 14px
        fontWeight: "semibold", // 600
      },
    },
    shape: {
      square: {
        borderRadius: "none",
      },
      rounded: {
        borderRadius: "md", // 6px
      },
      circular: {
        borderRadius: "circular",
      },
    },
    dot: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      dot: true,
      css: {
        minHeight: "6px",
        minWidth: "6px",
        height: "6px",
        width: "6px",
        padding: "0px",
      },
    },
  ],
  defaultVariants: {
    shape: "circular",
    size: "medium",
    dot: false,
  },
});

export default { outWrapper, textWrapper };
