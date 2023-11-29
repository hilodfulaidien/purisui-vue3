<template >
    <span :class="iconWrapperMergeClass">
        <slot />
    </span>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { cx } from "../../../styled-system/css";
import { configInjectKey } from "../_common/keys";

export interface IconWrapperProps {
    size?: 'small' | 'medium' | 'large',
    iconOnly?: boolean,
    iconPosition?: 'before' | 'after',
    disabled?: boolean,
}

const props = withDefaults(defineProps<IconWrapperProps>(), {
    size: 'medium',
    iconOnly: false,
    disabled: false,
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

</script>