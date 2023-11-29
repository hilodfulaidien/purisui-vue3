<template>
    <div :class="rootMergeClass" @click="props.onClick">
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
import { inject, useSlots } from "vue";
import IconWrapper from "../Icon/IconWrapper.vue";
import { configInjectKey, menuInjectKey } from "../_common/keys";


export interface DropdownMenuItemProps {
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded' | "square";
    onClick?: (e: MouseEvent) => void;
}

const props = withDefaults(defineProps<DropdownMenuItemProps>(), {
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

let rootMergeClass = configInject.theme.dropdownMenuItemStyle.root({
    shape: props.shape,
    size: props.size,
})

const checkmarkClass = configInject.theme.dropdownMenuItemStyle.checkmark({
    size: props.size
});

const contentClass = configInject.theme.dropdownMenuItemStyle.content();

const shortcutClass = configInject.theme.dropdownMenuItemStyle.shortcut();

const indicatorClass = configInject.theme.dropdownMenuItemStyle.indicator({ size: props.size });

</script>