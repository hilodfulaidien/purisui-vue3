<template>
  <div>
    <ConfigProvider>
      <ButtonGallery/>
      <MenuGallery />
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
import ConfigProvider from './components/ConfigProvider/ConfigProvider.vue';
import MenuGallery from './gallery/MenuGallery.vue';
import ButtonGallery from './gallery/ButtonGallery.vue';
//dd
</script>

