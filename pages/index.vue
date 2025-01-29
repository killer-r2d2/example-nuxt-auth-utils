<template>
  <div class="flex justify-center items-center h-screen">
    <NuxtLink to="/about">About</NuxtLink>
    <Login />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>