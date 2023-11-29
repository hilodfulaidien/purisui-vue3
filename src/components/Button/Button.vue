<template>
    <button :class="rootClass" :disabled="disabled" @click="props.onClick">

        <IconWrapper v-if="$slots.icon && props.iconPosition == 'before'" :size="props.size" :icon-only="props.iconOnly"
            :icon-position="props.iconPosition">

            <slot v-if="props.loading" name="loading-icon">
                <Icon icon="local-svg:loading" :class="spinClass" />
            </slot>

            <slot v-else name="icon" />
        </IconWrapper>

        <slot v-if="$props.iconOnly == false" />

        <IconWrapper v-if="$slots.icon && props.iconPosition == 'after'" :size="props.size" :icon-only="props.iconOnly"
            :icon-position="props.iconPosition">

            <slot v-if="props.loading" name="loading-icon">
                <Icon icon="local-svg:loading" :class="spinClass" />
            </slot>

            <slot v-else name="icon" />
        </IconWrapper>

    </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import IconWrapper from '@/components/Icon/IconWrapper.vue'
import Icon from '../Icon/Icon.vue';
import { cx, css } from '../../../styled-system/css';
import { configInjectKey } from '../_common/keys';

export interface ButtonProps {
    appearance?: "primary" | "outline" | "subtle" | "transparent";
    size?: "small" | "medium" | "large";
    shape?: "rounded" | "square" | "circular";
    iconOnly?: boolean;
    iconPosition?: "before" | "after";
    loading?: boolean;
    disabled?: boolean;
    onClick?: (e: MouseEvent) => void;
}

const props = withDefaults(defineProps<ButtonProps>(), {
    appearance: 'outline',
    shape: 'rounded',
    size: 'medium',
    disabled: false,
    iconOnly: false,
    iconPosition: "before",
    loading: false,
})

// =====================================================

const configInject = inject(configInjectKey)!;

let rootClass = configInject.theme.buttonStyle.root({
    appearance: props.appearance,
    size: props.size,
    shape: props.shape,
    iconOnly: props.iconOnly,
});

let rootDisabledClass = configInject.theme.buttonStyle.rootDisabled({ appearance: props.appearance });

if (props.disabled) {
    rootClass = cx(rootClass, rootDisabledClass)
}

// default loading animation
const spinClass = css({ animation: '0.5s infinite spin' })

</script>
