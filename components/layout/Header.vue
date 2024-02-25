<template>
     <!-- header section strats -->
    <header class="header_section">
        <div class="custom-container">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand">
                    <span class="mr-5">
                        fOOd Bar
                    </span>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="custom-collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto animate__animated animate__slower animate__backInUp">
                        <li class="nav-item" :class="{ active: $route.path==='/'}">
                            <nuxt-link to="/"><a class="nav-link animate__animated animate__slower animate__backInUp" href="index.html">صفحه اصلی</a></nuxt-link>
                        </li>
                        <li class="nav-item" >
                            <nuxt-link to="/menu"><a class="nav-link animate__animated animate__delay-2s animate__slower animate__backInUp" href="/menu">منو</a></nuxt-link>
                        </li>
                        <li class="nav-item"  :class="{active: $route.path==='/aboutUs'}">
                           <nuxt-link to="/aboutUs"><a class="nav-link animate__animated animate__delay-3s animate__slower animate__backInUp" href="about.html">درباره ما</a></nuxt-link>
                        </li>
                        <li class="nav-item" :class="{active: $route.path==='/contactUs'}">
                            <nuxt-link to="/contactUs"><a class="nav-link animate__animated animate__delay-4s animate__slower animate__backInUp">تماس باما</a></nuxt-link> 
                        </li>
                    </ul>
                    <div class="user_option">
                        <nuxt-link class="cart_link position-relative"  to="/cart">
                            <i class="bi bi-cart-fill text-white hover:-rotate-12 transition-all duration-1000 ease-in  fs-5 "></i>
                         <client-only>
                            <span class="position-absolute top-0 translate-middle badge rounded-pill">
                                {{ countCartItem }}
                            </span>
                         </client-only>
                        </nuxt-link>
                        <nuxt-link v-if="authUser"  to="/profile" class="hover:scale-95 duration-500 transition-all">
                            <button class="btn-auth">
                             {{ authUser.name }}
                            </button>
                         </nuxt-link>
                     <nuxt-link v-else to="/auth/login">
                        <button href="login.html" class="btn-auth">
                            ورود
                        </button>
                     </nuxt-link>
                   
                    </div>
                </div>
           </nav>
        </div>
    </header>
    <!-- end header section --> 
</template>

<script setup>
import {useCartStore} from '../../store/cart.js'
const cart=useCartStore()
const {authUser}=useAuth()

const countCartItem = computed(()=> cart.count )
</script>

<style  scoped>

</style>