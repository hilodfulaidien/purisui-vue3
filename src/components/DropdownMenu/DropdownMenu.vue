<template>
    <div :class="rootMergeClass">
        
        <div>
            <slot name="trigger">

            </slot>
        </div>


        <div>
            <slot />
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, provide, inject } from "vue";
import { configInjectKey, menuInjectKey } from "../_common/keys";
import { useFloating } from '@floating-ui/vue';

export interface DropdownMenuProps {
    hiddenIcon?: boolean;
    shape?: 'square' | 'rounded';
    size?: 'small' | 'medium' | "large";
    trigger?: "click" | 'hover' | "context-menu";
}

const props = withDefaults(defineProps<DropdownMenuProps>(), {
    hiddenIcon: false,
    shape: "rounded",
    size: "medium",
})

const reference = ref(null);
const floating = ref(null);
const { floatingStyles } = useFloating(reference, floating);

// ===============================

let configInject = inject(configInjectKey)!;

let rootMergeClass = configInject.theme.dropdownMenuStyle.root({ shape: props.shape, size: props.size });

// =================================

let hasIcon = ref(false);
let hasCheckmark = ref(false);
let hasIndicator = ref(false);

let menuInject = { hasIcon, hasCheckmark, hasIndicator, hiddenIcon: props.hiddenIcon }

export type MenuInjectType = typeof menuInject

provide(menuInjectKey, menuInject)

</script>
