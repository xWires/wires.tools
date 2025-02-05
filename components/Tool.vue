<script setup>
const props = defineProps({
    title: String,
    description: String,
    url: String
})
</script>

<template>
  <NuxtLink :to="url">
    <div class="glowing-border">
      <p class="text-lg">{{ title }}</p>
      <p>{{ description }}</p>
    </div>
  </NuxtLink>
</template>