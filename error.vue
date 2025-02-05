<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div>
    <AppHeader />
    <div style="text-align: center">
      <p style="font-size: 35px">{{ error.statusCode }}</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
    <br>
    <AppFooter />
  </div>
</template>