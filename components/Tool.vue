<script setup>
const props = defineProps({
    title: String,
    description: String,
    url: String
})
</script>

<template>
  <div class="glowing-border transition duration-150 ease-in-out hover:scale-105" style="width: 100%; height: 100%; border-radius: 15px; padding: 10px">
    <NuxtLink :to="url">
      <div>
        <p class="text-lg">{{ title }}</p>
        <p>{{ description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>