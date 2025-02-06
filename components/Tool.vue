<script setup>
const props = defineProps({
    title: String,
    description: String,
    url: String
})
</script>

<template>
  <div class="glowing-border-green transition duration-150 ease-in-out hover:scale-105" style="border-radius: 15px; padding: 10px; background-color: black">
    <NuxtLink :to="url">
      <div>
        <p class="text-lg">{{ title }}</p>
        <p>{{ description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>