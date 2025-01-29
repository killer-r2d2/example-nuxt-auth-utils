<script setup>
const { loggedIn, user, session, fetch: fetchUserSession, clear } = useUserSession()
const password = ref('')
const router = useRouter()

async function login() {
  const response = await $fetch('/api/login', {
    method: 'POST',
    body: {
      password: password.value,
    },
  })
  await fetchUserSession()
  if (response.redirectUrl) {
    router.push(response.redirectUrl)
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div v-if="loggedIn" class="text-center">
        <h1 class="mb-6 text-3xl font-bold text-gray-900">Welcome Admin!</h1>
        <button 
          @click="clear"
          class="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
      
      <form v-else @submit.prevent="login" class="mt-8 space-y-6">
        <div class="space-y-2">
          <h2 class="text-center text-2xl font-bold text-gray-900">Admin Login</h2>
          <div class="rounded-md shadow-sm">
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              required
              class="relative block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
