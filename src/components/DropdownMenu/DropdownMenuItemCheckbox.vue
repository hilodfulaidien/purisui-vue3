<template>
    <div :class="rootMergeClass" @click="handleClick">
        <span :class="checkmarkClass">
            <slot name="checkmark-icon" v-if="checked">
                <Icon icon="mingcute:check-fill" />
            </slot>
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
import { inject, ref, useSlots } from "vue";
import { configInjectKey, menuInjectKey } from "../_common/keys";
import IconWrapper from '../Icon/IconWrapper.vue';
import Icon from "../Icon/Icon.vue";

export interface DropdownMenuItemCheckboxPorps {
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded' | "square";
    checked?: boolean;
    onChange?: (newCheckedValue: boolean, e: MouseEvent) => void;
    // 非受控下，用于一次性初始化，一般用在填写表单
    // 受控情况下，根据 setting 文件来设置
    defaultChecked?: boolean;
}

const props = withDefaults(defineProps<DropdownMenuItemCheckboxPorps>(), {
    disabled: false,
    size: 'medium',
    shape: 'rounded',
    defaultChecked: false,
})

// ================================

const unControlledChecked = ref(props.defaultChecked);
const controlledChecked = ref(props.checked);
const checked = controlledChecked !== undefined ? unControlledChecked : controlledChecked;

function handleClick(e: MouseEvent) {
    checked.value = !checked.value;
    props.onChange?.(checked.value, e);
}

// ==============================

const { hasIcon, hasCheckmark, hasIndicator, hiddenIcon } = inject(menuInjectKey)!;

hasCheckmark.value = true;

const slots = useSlots();

if (!!slots.icon) {
    hasIcon.value = true
}

// ================================

const configInject = inject(configInjectKey)!;

let rootMergeClass = configInject.theme.dropdownMenuItemCheckboxStyle.root({
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
