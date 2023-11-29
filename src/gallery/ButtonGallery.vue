<template>
    <div class="gallery">
        <div class="gallery-section">
            <div class="gallery-section-title">Size</div>
            <div class="gallery-section-row">
                <Button size="small">Button</Button>
                <Button size="small">
                    <template #icon>
                        <Icon icon="lucide:mail" />
                    </template>
                    Button
                </Button>
                <Button size="small" :icon-only="true">
                    <template #icon>
                        <Icon icon="lucide:mail" />
                    </template>
                    Button
                </Button>
            </div>
            <div class="gallery-section-row">
                <Button size="medium">Button</Button>
                <Button size="medium">
                    <template #icon>
                        <Icon icon="lucide:mail" />
                    </template>
                    Button
                </Button>
                <Button size="medium" :icon-only="true">
                    <template #icon>
                        <Icon icon="lucide:mail" />
                    </template>
                    Button
                </Button>
            </div>
            <div class="gallery-section-row">
                <Button size="large">Button</Button>
                <Button size="large">
                    <template #icon>
                        <Icon icon="lucide:mail" />
                    </template>
                    Button
                </Button>
                <Button size="large" :icon-only="true">
                    <template #icon>
                        <Icon icon="lucide:mail" />
                    </template>
                    Button
                </Button>
            </div>
        </div>

        <div class="gallery-section">
            <div class="gallery-section-title">Shape</div>
            <div class="gallery-section-row">
                <Button size="medium" appearance="primary">Primary</Button>
                <Button size="medium" appearance="primary" shape="circular">Primary</Button>
                <Button size="medium" appearance="primary" shape="square">Primary</Button>

            </div>
        </div>

        <div class="gallery-section">
            <div class="gallery-section-title">Appearance</div>
            <div class="gallery-section-row">
                <Button size="medium" appearance="primary" >
                    Primary</Button>
                <Button size="medium" appearance="outline">Outline</Button>
                <Button size="medium" appearance="subtle">Subtle</Button>
                <Button size="medium" appearance="transparent">Transparent</Button>
            </div>
        </div>

        <div class="gallery-section">
            <div class="gallery-section-title">Disabled</div>
            <div class="gallery-section-row">
                <Button size="medium" appearance="primary" disabled>Primary</Button>
                <Button size="medium" appearance="outline" disabled>Outline</Button>
                <Button size="medium" appearance="subtle" disabled>Subtle</Button>
                <Button size="medium" appearance="transparent" disabled>Transparent</Button>
            </div>
        </div>

        <div class="gallery-section">
            <div class="gallery-section-title">Loading</div>
            <div class="gallery-section-row">
                <Button size="medium" appearance="primary" loading>Primary</Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
import Icon from '@/components/Icon/Icon.vue';

</script>

<style>
@import './galleryStyle.css';
</style>