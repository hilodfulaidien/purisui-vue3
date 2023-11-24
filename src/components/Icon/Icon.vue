<template>
    <svg :class="iconMergeClass" v-if="isLocal" aria-hidden="true" width="1em" height="1em" :style="iconStyle">
        <use :xlink:href="symbolId" />
    </svg>

    <Icon :class="iconMergeClass" v-else :icon="icon" :style="iconStyle" />
</template>

<script setup lang="ts">
import { CSSProperties, computed, unref } from "vue";
import { Icon } from '@iconify/vue';

export interface IconProps {
    /**
     * 如果以 “local-svg：” 开头，则使用本地 svg，svg 文件需要放在 assets/icons/svgs 下。
     * 其他情况，则尝试从 Iconify 平台上获取图标，请务必确保输入的字符正确。
     */
    icon: string,
    className?: string;
    style?: CSSProperties;
}

const props = withDefaults(defineProps<IconProps>(), {
    className: ""
})

// ===============================================

const isLocal = computed(() => props.icon.startsWith('local-svg:'))

const symbolId = computed(() => {
    return unref(isLocal) ? `#icon-${props.icon.split('local-svg:')[1]}` : props.icon
})

let iconStyle = { ...props.style }

let iconMergeClass = props.className;

</script>
