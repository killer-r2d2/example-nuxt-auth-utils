<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <h1>About</h1>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>
