<template>
    <div :class="outWrapperMergeClass">
        <slot />

        <span v-if="props.text != ''" :class="textWrapperMergeClass" :style="textWrapperStyleComputed">

            <slot name="text">
                {{ textComputed }}
            </slot>

        </span>
    </div>
</template>

<script setup lang="ts">
import { CSSProperties, computed, inject } from "vue";
import { configInjectKey } from "../_common/keys";

export interface BadgeProps {
    appearance?: 'filled' | 'outline';
    shape?: 'rounded' | 'square' | 'circular';
    size?: 'small' | 'medium' | 'large';
    text?: string | number;
    /**
     * Only avalable if text is a number, default is 99.
     */
    maxCount?: number;
    /**
     * default is #d54941 red
     */
    color?: string;
    dot?: boolean;
    placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    offset?: [vAxis: number, hAxis: number];
}

const props = withDefaults(defineProps<BadgeProps>(), {
    appearance: 'filled',
    shape: 'circular',
    size: 'medium',
    dot: false,
    // 默认为红色
    color: '#d54941',
    placement: 'top-end',
    text: "",
    maxCount: 99
})

// =============================================

const configInject = inject(configInjectKey)!;

let outWrapperMergeClass = configInject.theme.badgeStyle.outWrapper();

let textWrapperMergeClass = configInject.theme.badgeStyle.textWrapper({
    placement: props.placement,
    shape: props.shape,
    size: props.size,
    dot: props.dot
});
// =================================================

const offsetComputed = computed(() => {
    if (props.offset) {
        return {
            marginTop: `-${props.offset[0]}px`,
            marginLeft: `${props.offset[1]}px`,
        } as CSSProperties
    }

    return {
        marginTop: `0px`,
        marginLeft: `0px`,
    } as CSSProperties
})

const colorComputed = computed(() => {
    if (props.appearance == "outline") {
        return {
            borderColor: `${props.color}`,
            color: `${props.color}`,
            backgroundColor: `var(--colors-neutral-background)`
        } as CSSProperties
    } else {
        return {
            borderColor: `${props.color}`,
            backgroundColor: `${props.color}`
        } as CSSProperties
    }

})

let textWrapperStyleComputed = computed(() => {
    return {
        ...offsetComputed.value,
        ...colorComputed.value,
    }
})

// ==============================================

const textComputed = computed(() => {
    if (props.dot) {
        return ""
    } else if (typeof props.text === 'number') {
        let count = Number(props.text)
        return count > props.maxCount ? `${props.maxCount}+` : count;
    } else {
        return props.text
    }
})

</script>
