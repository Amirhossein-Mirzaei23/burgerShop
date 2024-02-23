export default defineNuxtRouteMiddleware(()=>{
const {authUser}=useAuth()
// const loginToken = getCookie(event, 'login_token');
  if (!authUser.value) {
      return navigateTo('/auth/login')
  } 
})