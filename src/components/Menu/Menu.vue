<template>
    <div :class="rootMergeClass" :style="rootStyle">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { CSSProperties, ref, provide, inject } from "vue";
import { configInjectKey, menuInjectKey } from "../_common/keys";
import { cx } from "../../../styled-system/css";

export interface MenuProps {
    hiddenIcon?: boolean;
    shape?: 'square' | 'rounded';
    size?: 'small' | 'medium' | "large";
    className?: string;
    style?: CSSProperties;
}

const props = withDefaults(defineProps<MenuProps>(), {
    hiddenIcon: false,
    shape: "rounded",
    size: "medium",
    className: "",
})

let configInject = inject(configInjectKey)!;

let rootMergeClass = configInject.theme.menuStyle.root({ shape: props.shape, size: props.size });

rootMergeClass = cx(rootMergeClass, props.className);

let rootStyle = { ...props.style }

// =================================

let hasIcon = ref(false);
let hasCheckmark = ref(false);
let hasIndicator = ref(false);

let menuInject = { hasIcon, hasCheckmark, hasIndicator, hiddenIcon: props.hiddenIcon }

export type MenuInjectType = typeof menuInject

provide(menuInjectKey, menuInject)

</script>
