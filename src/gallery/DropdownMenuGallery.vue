<template>
    <div class="gallery">
        <div class="gallery-section">
            <div class="gallery-section-title">Size</div>
            <div class="gallery-section-row">
                <DropdownMenu size="small">
                    <DropdownMenuItem size="small">
                        <template #icon>
                            <Icon icon="lucide:fullscreen" />
                        </template>
                        Full Screen
                    </DropdownMenuItem>

                    <DropdownMenuItem size="small">
                        Zen Mode
                    </DropdownMenuItem>

                    <DropdownMenuItemCheckbox size="small" default-checked>
                        DropdownMenu Bar
                    </DropdownMenuItemCheckbox>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuItem>
                        Full Screen
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        Zen Mode
                    </DropdownMenuItem>

                    <DropdownMenuItemCheckbox>
                        DropdownMenu Bar
                    </DropdownMenuItemCheckbox>
                </DropdownMenu>

                <DropdownMenu size="large">
                    <DropdownMenuItem size="large">
                        Full Screen
                    </DropdownMenuItem>

                    <DropdownMenuItem size="large">
                        Zen Mode
                    </DropdownMenuItem>

                    <DropdownMenuItemCheckbox size="large">
                        Menu Bar
                    </DropdownMenuItemCheckbox>

                </DropdownMenu>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import DropdownMenu from '@/components/DropdownMenu/DropdownMenu.vue';
import DropdownMenuItem from '@/components/DropdownMenu/DropdownMenuItem.vue';
import DropdownMenuItemCheckbox from '@/components/DropdownMenu/DropdownMenuItemCheckbox.vue';
import Icon from '@/components/Icon/Icon.vue';
</script>

<style>
@import './galleryStyle.css';
</style>