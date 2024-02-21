<template>
    <button @click="payment" :disabled="loading" class="user_option btn-auth mt-4">
        پرداخت
        <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
    </button>
</template>

<script setup>

const props = defineProps(['coupon', 'addressId', 'cart'])


const loading = ref(false);

async function payment() {
    if (props.addressId === '' || props.addressId === null) {
        toastr.error('انتخاب آدرس الزامی است')
        return;
    }

    try {
        loading.value = true;

        const data = await $fetch('/api/payment/send', {
            method: 'POST',
            body: {
                cart: props.cart,
                coupon: props.coupon.code,
                address_id: props.addressId
            }
        })

        await navigateTo(data.url, {
            external: true
        })

    } catch (error) {
        toastr.error(Object.values(error.data.data.message).flat().toString())
    } finally {
        loading.value = false;
    }
}
</script>