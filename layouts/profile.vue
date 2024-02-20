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
              <NuxtLink to="/profile">سفارشات</NuxtLink>
            </li>
            <li class="list-group-item">
              <NuxtLink to="/profile">تراکنش ها</NuxtLink>
            </li>
            <li class="list-group-item">
              <a href="#">خروج</a>
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

<script setup></script>

<style lang="scss" scoped></style>
