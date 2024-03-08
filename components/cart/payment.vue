<template>
    <button @click="payment" :disabled="loading" class="user_option btn-auth mt-4">
        پرداخت
        <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
    </button>
</template>

<script setup>

const props = defineProps(['coupon', 'addressId', 'cart'])

/// store loader position in variable
const loading = ref(false);
/// check payment postion with database
async function payment() {
/// check address 
    if (props.addressId === '' || props.addressId === null) {
        toastr.error('انتخاب آدرس الزامی است')
        return;
    }
/// check payment postion with database
    try {
 ///enable loader
        loading.value = true;
// send cart ,coupon and address data for payment
        const data = await $fetch('/api/payment/send', {
            method: 'POST',
            body: {
                cart: props.cart,
                coupon: props.coupon.code,
                address_id: props.addressId
            }
        })
//
        await navigateTo(data.url, {
            external: true
        })

    } catch (error) {
// modrate errors
        toastr.error(Object.values(error.data.data.message).flat().toString())
    } finally {
 ///disable loader
        loading.value = false;
    }
}
</script>