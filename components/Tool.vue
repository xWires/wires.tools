<script setup>
const props = defineProps({
    title: String,
    description: String,
    url: String
})
</script>

<template>
  <NuxtLink :to="url">
    <div class="glowing-border" style="width: 100%; height: 100%;">
      <p class="text-lg">{{ title }}</p>
      <p>{{ description }}</p>
    </div>
  </NuxtLink>
</template>