import { InjectionKey } from "vue";
import { ConfigInjectType } from "../ConfigProvider/ConfigProvider.vue";
import { MenuInjectType } from "../Menu/Menu.vue";

export const configInjectKey = Symbol() as InjectionKey<ConfigInjectType>;
export const menuInjectKey = Symbol() as InjectionKey<MenuInjectType>