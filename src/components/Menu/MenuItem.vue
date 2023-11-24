<template>
    <div :class="rootMergeClass" :style="rootStyle">
        <span v-if="hasCheckmark" :class="checkmarkClass">

        </span>

        <IconWrapper v-if="hasIcon && !hiddenIcon" icon-position="before">
            <slot name="icon" />
        </IconWrapper>

        <span :class="contentClass">
            <slot />
        </span>

        <span v-if="$slots.shortcut" :class="shortcutClass">
            <slot name="shortcut"></slot>
        </span>

        <span v-if="hasIndicator" :class="indicatorClass">

        </span>
    </div>
</template>

<script setup lang="ts">
import { CSSProperties, inject, useSlots } from "vue";
import { cx } from '../../../styled-system/css';
import IconWrapper from '@/components/Icon/IconWrapper.vue'
import { configInjectKey, menuInjectKey } from "../_common/keys";


export interface MenuItemProps {
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded' | "square";
    className?: string;
    style?: CSSProperties;
}

const props = withDefaults(defineProps<MenuItemProps>(), {
    disabled: false,
    size: 'medium',
    shape: 'rounded',
})

const { hasIcon, hasCheckmark, hasIndicator, hiddenIcon } = inject(menuInjectKey)!;

const slots = useSlots();

if (!!slots.icon) {
    hasIcon.value = true
}

const configInject = inject(configInjectKey)!;

let rootMergeClass = configInject.theme.menuItemStyle.root({
    shape: props.shape,
    size: props.size,
})

const checkmarkClass = configInject.theme.menuItemStyle.checkmark({
    size: props.size
});

const contentClass = configInject.theme.menuItemStyle.content();

const shortcutClass = configInject.theme.menuItemStyle.shortcut();

const indicatorClass = configInject.theme.menuItemStyle.indicator({ size: props.size });

rootMergeClass = cx(rootMergeClass, props.className)

let rootStyle = { ...props.style }
</script>