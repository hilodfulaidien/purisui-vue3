import BadgeStyle from "../Badge/Badge.style";
import ButtonStyle from "../Button/Button.style";
import IconWrapperStyle from "../Icon/IconWrapper.style";
import MenuStyle from "../Menu/Menu.style";
import MenuItemStyle from "../Menu/MenuItem.style";

export const defaultLightTheme = {
  buttonStyle: ButtonStyle,
  badgeStyle: BadgeStyle,
  avatarStyle: {},
  iconWrapperStyle: IconWrapperStyle,
  menuStyle: MenuStyle,
  menuItemStyle: MenuItemStyle,

};

export type Theme = typeof defaultLightTheme;
