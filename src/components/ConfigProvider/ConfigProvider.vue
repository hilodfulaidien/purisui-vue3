<template>
    <slot />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { Theme, defaultLightTheme } from './Theme';
import { configInjectKey } from "../_common/keys"

export interface ConfigProviderProps<T extends Theme = Theme> {
    theme?: T,
}

const props = withDefaults(defineProps<ConfigProviderProps>(), {
    theme: () => defaultLightTheme
})

// ==========================================================

let configInject = {
    theme: props.theme
}

export type ConfigInjectType = typeof configInject

provide(configInjectKey, configInject);

</script>
