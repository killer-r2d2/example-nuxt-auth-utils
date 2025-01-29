export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from)
  if (to.path === '/about') {
    const { loggedIn } = useUserSession()
    if (!loggedIn) {
      return navigateTo('/')
    }
  }
})
