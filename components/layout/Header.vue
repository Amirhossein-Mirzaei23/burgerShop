<template>
     <!-- header section strats -->
    <header class="header_section">
        <div class="container">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="index.html">
                    <span>
                        fOOd Bar
                    </span>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item" :class="{ active: $route.path==='/'}">
                            <nuxt-link to="/"><a class="nav-link" href="index.html">صفحه اصلی</a></nuxt-link>
                        </li>
                        <li class="nav-item" >
                            <nuxt-link to="/menu"><a class="nav-link" href="/menu">منو</a></nuxt-link>
                        </li>
                        <li class="nav-item"  :class="{active: $route.path==='/aboutUs'}">
                           <nuxt-link to="/aboutUs"><a class="nav-link" href="about.html">درباره ما</a></nuxt-link>
                        </li>
                        <li class="nav-item" :class="{active: $route.path==='/contactUs'}">
                            <nuxt-link to="/contactUs"><a class="nav-link" href="contact.html">تماس باما</a></nuxt-link> 
                        </li>
                    </ul>
                    <div class="user_option">
                        <nuxt-link class="cart_link position-relative"  to="/cart">
                            <i class="bi bi-cart-fill text-white fs-5"></i>
                         <client-only>
                            <span class="position-absolute top-0 translate-middle badge rounded-pill">
                                {{ countCartItem }}
                            </span>
                         </client-only>
                        </nuxt-link>
                        <nuxt-link v-if="authUser"  to="/profile">
                            <button href="login.html" class="btn-auth">
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