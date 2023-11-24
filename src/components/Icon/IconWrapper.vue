<template >
    <span :class="iconWrapperMergeClass" :style="iconWrapperStyle">
        <slot />
    </span>
</template>

<script setup lang="ts">
import { CSSProperties, inject } from "vue";
import { cx } from "../../../styled-system/css";
import { configInjectKey } from "../_common/keys";

export interface IconWrapperProps {
    size?: 'small' | 'medium' | 'large',
    iconOnly?: boolean,
    iconPosition?: 'before' | 'after',
    disabled?: boolean,
    className?: string,
    style?: CSSProperties
}

const props = withDefaults(defineProps<IconWrapperProps>(), {
    size: 'medium',
    iconOnly: false,
    disabled: false,
    className: "",
})

// ===============================================

const configInject = inject(configInjectKey)!;

let iconWrapperMergeClass = configInject.theme.iconWrapperStyle.icon({
    size: props.size,
    iconPosition: props.iconPosition,
    iconOnly: props.iconOnly,
});

let iconDisabledClass = configInject.theme.iconWrapperStyle.iconDisabled();

if (props.disabled) {
    iconWrapperMergeClass = cx(iconWrapperMergeClass, iconDisabledClass)
}

iconWrapperMergeClass = cx(iconWrapperMergeClass, props.className);

let iconWrapperStyle = { ...props.style }
</script>