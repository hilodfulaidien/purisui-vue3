<template>
    <div class="gallery">
        <div class="gallery-section">
            <div class="gallery-section-title">Size</div>
            <div class="gallery-section-row">
                <Menu size="large">
                    <MenuItem size="large">
                    <template #icon>
                        <Icon icon="carbon:dashboard" />
                    </template>
                    Dashboard
                    </MenuItem>

                    <MenuItem size="large">
                    <template #icon>
                        <Icon icon="lucide:book-open-text" />
                    </template>
                    Tuitorial
                    </MenuItem>
                </Menu>

                <Menu>
                    <MenuItem>
                    <template #icon>
                        <Icon icon="carbon:dashboard" />
                    </template>
                    Dashboard
                    </MenuItem>

                    <MenuItem>
                    <template #icon>
                        <Icon icon="lucide:book-open-text" />
                    </template>
                    Tuitorial
                    </MenuItem>
                </Menu>

                <Menu size="small">
                    <MenuItem size="small">
                    <template #icon>
                        <Icon icon="carbon:dashboard" />
                    </template>
                    Dashboard
                    </MenuItem>

                    <MenuItem size="small">
                    <template #icon>
                        <Icon icon="lucide:book-open-text" />
                    </template>
                    Tuitorial
                    </MenuItem>
                </Menu>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon/Icon.vue';
import Menu from '@/components/Menu/Menu.vue';
import MenuItem from '@/components/Menu/MenuItem.vue';

</script>

<style>
@import './galleryStyle.css';
</style>