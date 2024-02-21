<template>
    <div class="input-group mb-3">
        <input v-model="code" type="text" class="form-control" placeholder="کد تخفیف">
        <button @click="checkCopun" class="input-group-text" id="basic-addon2">اعمال کد
            تخفیف</button>
    </div>
</template>

<script setup>

const props=defineProps(['coupon'])

const code=ref(null)
const loading = ref(false);
async function checkCopun(){
    if (code.value === '' || code.value === null) {
        toastr.error('وارد کردن کد تخفیف الزامی است')
        return;
    }

    try {
        loading.value = true;

        const data = await $fetch('/api/cart/checkCoupon', {
            method: 'POST',
            body: { code: code.value }
        })

        toastr.success('کد تخفیف شما اعمال شد');
        props.coupon.code=code.value
        props.coupon.percent=data.percentage
    } catch (error) {
        toastr.error(Object.values(error.data.data.message).flat().toString())
    } finally {
        loading.value = false;
    }
}
</script>

<style lang="scss" scoped>

</style>