<template>
    <ClientOnly>
        <section v-if="countCart > 0" class="single_page_section layout_padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <div class="row gy-5">
                            <div class="col-12">
                                <div class="table-responsive">
                                    <table class="table align-middle">
                                        <thead>
                                            <tr>
                                                <th>محصول</th>
                                                <th>نام</th>
                                                <th>قیمت</th>
                                                <th>تعداد</th>
                                                <th>قیمت کل</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in cartItems" :key="index">
                                                <th>
                                                    <img src="/image/preloader.png" width="100" alt="" v-img="item.primary_image">
                                                </th>
                                                <td class="fw-bold">{{ item.name }}</td>
                                                <td>
                                                    <div>
                                                        <span v-if="item.is_sale">
                                                            {{ NumberFormat(item.sale_price) }}
                                                        </span>
                                                        <span v-else>{{ NumberFormat(item.price) }}</span>

                                                        <span class="ms-1">تومان</span>

                                                        <div v-if="item.is_sale" class="text-danger">
                                                            {{ salePercent(item.price, item.sale_price) }}% تخفیف
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="input-counter">
                                                        <span class="plus-btn"
                                                            @click="() => item.qty < item.quantity && cart.increment(item.id)">
                                                            +
                                                        </span>
                                                        <div class="input-number">{{ item.qty }}</div>
                                                        <span class="minus-btn"
                                                            @click="() => item.qty > 1 && cart.decrement(item.id)">
                                                            -
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span v-if="item.is_sale">
                                                        {{ NumberFormat(item.sale_price * item.qty) }}
                                                    </span>
                                                    <span v-else>
                                                        {{ NumberFormat(item.price * item.qty) }}
                                                    </span>
                                                    <span class="ms-1">تومان</span>
                                                </td>
                                                <td>
                                                    <i @click="removeFromCart(item.id)"
                                                    class="bi bi-x text-danger fw-bold fs-4 cursor-pointer"></i>
                                            </td>
                                            </tr>
                                       
                                        </tbody>
                                    </table>
                                </div>
                                <button @click="cart.clear()" class="btn btn-primary mb-4">پاک کردن سبد خرید</button>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-12 col-md-6">

                                <CartCopun :coupon="coupon" />

                            </div>
                                <CartAddress @set-address-id="(id) => addressId = id"  />
                        </div>
                        <div class="row justify-content-center mt-5">
                            <div class="col-12 col-md-6">
                                <div class="card">
                                    <div class="card-body p-4">
                                        <h5 class="card-title fw-bold">مجموع سبد خرید</h5>
                                        <ul class="list-group mt-4">
                                            <li class="list-group-item d-flex justify-content-between">
                                                <div>مجموع قیمت :</div>
                                                <div>
                                                   {{ NumberFormat(totalAmount)}} تومان
                                                </div>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between">
                                                <div>تخفیف :
                                                    <span class="text-danger ms-1">{{ coupon.percent }}%</span>
                                                </div>
                                                <div class="text-danger">
                                                    {{ NumberFormat((totalAmount * coupon.percent) / 100) }}  تومان
                                                </div>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between">
                                                <div>قیمت پرداختی :</div>
                                                <div>
                                                    {{ NumberFormat(totalAmount - ((totalAmount * coupon.percent) / 100)) }} تومان
                                                </div>
                                            </li>
                                        </ul>
                                        <CartPayment :coupon="coupon" :addressId="addressId" :cart="cartItems" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div v-else class="cart-empty">
            <div class="text-center">
                <div>
                    <i class="bi bi-basket-fill" style="fontSize: 80px"></i>
                </div>
                <h4 class="text-bold">سبد خرید شما خالی است</h4>

                <NuxtLink to="/menu" class="btn btn-outline-dark mt-3">
                    مشاهده محصولات
                </NuxtLink>
            </div>
        </div>

        <template #fallback>
            <div class="cart-loadnig">
                <div class="spinner-border spinner-border-sm ms-2 cart-spiner"></div>
            </div>
        </template>
    </ClientOnly>
</template>

<script setup>
import { useCartStore } from "../store/cart"

definePageMeta({
    middleware: 'auth'
})

const cart = useCartStore();
const countCart = computed(() => cart.count)
const cartItems = computed(() => cart.allItems)
const totalAmount = computed(() => cart.totalAmount)
const addressId = ref(null);

const coupon=reactive({
    code:'',
    percent:0
})

function removeFromCart(id) {
    cart.remove(id)
    toastr.warning('محصول مورد نظر از سبد خرید پاک شد')
}
</script>