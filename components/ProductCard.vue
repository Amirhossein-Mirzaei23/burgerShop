<template>
    <div class="box">
        <div>
            <div class="img-box">
                <img src="/image/preloader.png" v-img="props.product.primary_image" alt="">
            </div>
            <div class="detail-box">
                <h5>
                   {{ props.product.name }}
                </h5>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                    گرافیک است.
                </p>
                <div class="options">
                    <h6 v-if="props.product.is_sale">
                        <del>{{ NumberForma(props.product.price) }}</del>
                       فقط:{{ NumberFormat(props.product.sale_price) }}
                        <span>تومان</span>
                    </h6>
                    <h6 v-else>
                        
                        {{NumberFormat(props.product.price)}}
                       
                        <span>تومان</span>
                    </h6>
                    <a href="">
                        <i class="bi bi-cart-fill text-white fs-5"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props=defineProps(['product'])

</script>

<style lang="scss" scoped>

</style>