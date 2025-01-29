export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn } = useUserSession()

  if (to.path === '/about') {
    if (!loggedIn.value) {
      alert('Protected route. Login first')
      return navigateTo('/')
    }
  }
})
