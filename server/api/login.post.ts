export default defineEventHandler(async (event) => {
  const { password } = await readBody(event)
  
  if (password === 'admin') {
    await setUserSession(event, {
      user: {
        role: 'admin',
      },
    })
    return {
      success: true,
    }
  }
  throw createError({
    statusCode: 401,
    statusMessage: 'Invalid password',
  })
})
