import BadgeStyle from "../Badge/Badge.style";
import ButtonStyle from "../Button/Button.style";
import DropdownMenuStyle from "../DropdownMenu/DropdownMenu.style";
import DropdownMenuItemStyle from "../DropdownMenu/DropdownMenuItem.style";
import DropdownMenuItemCheckboxStyle from "../DropdownMenu/DropdownMenuItemCheckbox.style";
import IconWrapperStyle from "../Icon/IconWrapper.style";


export const defaultLightTheme = {
  buttonStyle: ButtonStyle,
  badgeStyle: BadgeStyle,
  avatarStyle: {},
  iconWrapperStyle: IconWrapperStyle,
  dropdownMenuStyle: DropdownMenuStyle,
  dropdownMenuItemStyle: DropdownMenuItemStyle,
  dropdownMenuItemCheckboxStyle: DropdownMenuItemCheckboxStyle,
};

export type Theme = typeof defaultLightTheme;
