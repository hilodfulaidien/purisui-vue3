import { cva } from "../../../styled-system/css";

const icon = cva({
  base: {
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center",
  },
  variants: {
    size: {
      small: {
        fontSize: "sm", // 14px
        minHeight: "3.5", // 14px
        minWidth: "3.5", // 14px
      },
      medium: {
        fontSize: "lg", // 18px
        minHeight: "4.5", // 18px
        minWidth: "4.5", // 18px
      },
      large: {
        fontSize: "xl", // 20px
        minHeight: "5", // 20px
        minWidth: "5", // 20px
      },
    },
    iconPosition: {
      before: {},
      after: {},
    },
    iconOnly: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      iconPosition: "before",
      size: "small",
      css: {
        marginRight: "1",
      },
    },
    {
      iconPosition: "before",
      size: "medium",
      css: {
        marginRight: "1.5",
      },
    },
    {
      iconPosition: "before",
      size: "large",
      css: {
        marginRight: "2",
      },
    },
    {
      iconPosition: "after",
      size: "small",
      css: {
        marginLeft: "1",
      },
    },
    {
      iconPosition: "after",
      size: "medium",
      css: {
        marginLeft: "1.5",
      },
    },
    {
      iconPosition: "after",
      size: "large",
      css: {
        marginLeft: "2",
      },
    },
    {
      iconOnly: true,
      css: {
        marginRight: "0px",
        marginLeft: "0px",
      },
    },
  ],
  defaultVariants: {
    size: "medium",
  },
});

const iconDisabled = cva({
  base: {
    filter: "grayscale(100%)",
  },
});

export default { icon, iconDisabled };
