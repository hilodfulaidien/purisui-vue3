import { cva } from "../../../styled-system/css";

const root = cva({
  base: {
    backgroundColor: "neutralBackground",
    
  },
  variants: {
    shape: {
      rounded: {},
      square: {
        borderRadius: "none",
      },
    },
    size: {
      small: {
        padding: "1", // 4px
        boxShadow: "shadow8",
      },
      medium: {
        padding: "2", // 8px
        boxShadow: "shadow16",
      },
      large:{
        padding: "3", // 12px
        boxShadow: "shadow28",
      }
    },
  },
  compoundVariants: [
    {
      size: "small",
      shape: "rounded",
      css: {
        borderRadius: "sm", // 4px
      },
    },
    {
      size: "medium",
      shape: "rounded",
      css: {
        borderRadius: "md", // 6px
      },
    },
    {
      size: "large",
      shape: "rounded",
      css: {
        borderRadius: "lg", // 8px
      },
    },
  ],
});

export default { root };
