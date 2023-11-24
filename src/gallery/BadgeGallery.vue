<template>
    <div class="gallery">
        <div class="gallery-section">
            <div class="gallery-section-title">Size</div>
            <div class="gallery-section-row">
                <Badge text="9" size="small">
                    <Button size="small" appearance="primary">Primary</Button>
                </Badge>
                <Badge :text="9">
                    <Button appearance="primary">Primary</Button>
                </Badge>
                <Badge :text="9" size="large">
                    <Button size="large" appearance="primary">Primary</Button>
                </Badge>
                <Badge :text="100" size="small">
                    <Button size="small" icon="local-svg:home" :icon-only="true">
                        <template #icon>
                            <Icon icon="lucide:mail" />
                        </template>
                        Button
                    </Button>
                </Badge>
                <Badge :text="100" size="small" dot>
                    <Button size="small" :icon-only="true">
                        <template #icon>
                            <Icon icon="lucide:mail" />
                        </template>
                        Button
                    </Button>
                </Badge>
            </div>
        </div>

        <div class="gallery-section">
            <div class="gallery-section-title">Appearance</div>
            <div class="gallery-section-row">
                <Badge :text="9" appearance="filled">
                    <Button appearance="primary">Primary</Button>
                </Badge>
                <Badge :text="9" appearance="outline">
                    <Button appearance="primary">Primary</Button>
                </Badge>
                <Badge :text="9" appearance="filled"></Badge>
                <Badge :text="96" appearance="outline"></Badge>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Badge from '@/components/Badge/Badge.vue';
import Button from '@/components/Button/Button.vue';
import Icon from '@/components/Icon/Icon.vue';
</script>

<style >
@import './galleryStyle.css';

.t {
    color: hsl(0, 92%, 49%),
}
</style>