<script setup lang="ts">
useSeoMeta({
  title: 'TangledWires Tools',
  description: 'Helpful tools for developers',
  ogTitle: 'TangledWires Tools',
  ogDescription: 'Helpful tools for developers',
  ogImage: 'https://wires.tools/xwires.png',
  ogUrl: 'https://wires.tools/',
  twitterTitle: 'TangledWires Tools',
  twitterDescription: 'Helpful tools for developers',
  twitterImage: 'https://wires.tools/xwires.png',
  twitterCard: 'summary',
});
</script>

<template>
  <div style="padding: 25px">
    <AppHeader style="margin-bottom: 20px" />
    <slot />
    <br>
    <AppFooter />
  </div>
</template>