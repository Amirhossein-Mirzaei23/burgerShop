<template>
    <div class="input-group mb-3">
        <input v-model="code" type="text" class="form-control" placeholder="کد تخفیف">
        <button @click="checkCopun" class="input-group-text" id="basic-addon2">اعمال کد
            تخفیف</button>
    </div>
</template>

<script setup>
/// define coupons from database
const props=defineProps(['coupon'])
// get coupon input value
const code=ref(null)
/// store loader position in variable
const loading = ref(false);
/// check coupon input value with database
async function checkCopun(){

// create a validtion for coupon input 
    if (code.value === '' || code.value === null) {
        toastr.error('وارد کردن کد تخفیف الزامی است')
        return;
    }
// validate code woth dataBase
    try {
         ///enable loader
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
        ///disable loader
        loading.value = false;
    }
}
</script>

<style lang="scss" scoped>

</style>