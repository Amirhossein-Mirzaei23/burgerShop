<template>
  <!---profile layout start-->
  <section class="profile_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-3">
          <ul class="list-group">
            <li class="list-group-item">
              <NuxtLink to="/profile">اطلاعات کاربر</NuxtLink>
            </li>
            <li class="list-group-item">
              <NuxtLink to="/profile/addresses">آدرس ها</NuxtLink>
            </li>
            <li class="list-group-item">
              <NuxtLink to="/profile/orders">سفارشات</NuxtLink>
            </li>
            <li class="list-group-item">
              <NuxtLink to="/profile/transaction">تراکنش ها</NuxtLink>
            </li>
            <li class="list-group-item">
              <button @click="logOut" href="#">خروج</button>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-lg-9">
          <slot />
        </div>
      </div>
    </div>
  </section>
  <!---profile layout end-->
</template>

<script setup>

const { authUser }=useAuth()

async function logOut(){
try {
  await $fetch('/api/auth/logout', {
    method:'POST'
  })

  authUser.value=''
  toastr.warning('از سیستم خارج شدید')

  return navigateTo('/')
} catch (error) {
  console.log(error);
  toastr.error('از سیستم خارج نشدید')
}
}

authUser

</script>

<style lang="scss" scoped></style>
