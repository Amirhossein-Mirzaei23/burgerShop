<template>
    <div class="box">
        <div>
            <div class="img-box">
                <img src="/image/preloader.png" v-img="props.product.primary_image" alt="">
            </div>
            <div class="detail-box">
                <NuxtLink :to="`/product/${props.product.slug}`">
                    <h5>{{ props.product.name }}</h5>
                </NuxtLink>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                    گرافیک است.
                </p>
                <div class="options">
                    <h6 v-if="props.product.is_sale">
                        <del>{{ NumberFormat(props.product.price) }}</del>
                       فقط:{{ NumberFormat(props.product.sale_price) }}
                        <span>تومان</span>
                    </h6>
                    <h6 v-else>
                        
                        {{NumberFormat(props.product.price)}}
                       
                        <span>تومان</span>
                    </h6>
                    <button class="hover:scale-105 duration-500" @click="addToCart(props.product)" href="">
                        <i class="bi bi-cart-fill hover:-rotate-12 hover:text-slate-700 transition-all duration-1000 fs-5"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useCartStore} from '.././store/cart.js'

 const cart=useCartStore()

const props=defineProps(['product'])

function addToCart(product){

    cart.remove(product.id)

cart.addToCart(product, 1)
}
</script>

