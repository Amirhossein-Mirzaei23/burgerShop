<template>
    <div class="card-body">
        <div v-if="errors" class="alert alert-danger">
            <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </div>
        <div class="form_container">
            <form @submit.prevent="checkOtp">
                <div class="mb-3">
                    
                    <label for="otpCode" class="form-label">کدورود</label>
                    <input v-model="otp" type="text" class="form-control" id="otpCode">
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <AuthResendOtp @resend-otp-errors="(err) => errors = err"/>
                    <button type="submit" class="btn btn-primary btn-auth">
                        تایید
                        <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
                    </button>
                   
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>


const otp = ref(null)

const errors = ref(null);
const loading = ref(false);
const {authUser}=useAuth()

async function checkOtp() {
    if (otp.value == null) {
        toastr.warning(' ورود کد تایید الزامی است ')
    return
       
    }

    const pattern = /^[0-9]{6}$/;
    if (!pattern.test(otp.value)) {
        toastr.error(' فرمت کد ورودی معتبر نمیباشد')
    return
    }

    try {
        loading.value = true;
        errors.value = null;

        const data = await $fetch('/api/auth/checkOtp', {
            method: 'POST',
            body: { otp: otp.value }
        })

        toastr.success('با موفقیت وارد شدید')
       
        authUser.value=data
    } catch (error) {
        errors.value = Object.values(error.data.data.message).flat();
    } finally {
       // console.log(data);
       // toastr.success('با موفقیت وارد شدید')
        loading.value = false;
    }

}



</script>

<style lang="scss" scoped>

</style>