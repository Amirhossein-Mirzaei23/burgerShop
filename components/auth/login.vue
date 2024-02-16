<template>
    <div class="card-body">
        <div class="form_container">
            <form @submit.prevent="login">
                <div class="mb-3">
                    <label for="cellphone" class="form-label">شماره موبایل</label>
                    <input v-model="cellphone" type="text" class="form-control" id="cellphone">
                </div>
                <button type="submit" class="btn btn-primary btn-auth">
                    ورود
                    <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>


const cellphone = ref(null)

const errors = ref([]);
const loading = ref(false);

async function login() {
    if (cellphone.value == null) {
        toastr.warning(' ورود شماره موبایل الزامی است ')
    return
       
    }

    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(cellphone.value)) {
        toastr.error(' شماره موبایل صحیح نمیباشد')
    return
    }

    try {
        loading.value = true;
        errors.value = [];

        const data = await $fetch('/api/auth/login', {
            method: 'POST',
            body: { cellphone: cellphone.value }
        })

        console.log(data);
        emit('showOtpFormEmit')
        toastr.info('کد ورود برای شما ارسال شده است')
        
    } catch (error) {
        errors.value = Object.values(error.data.data.message).flat();
    } finally {
        loading.value = false;
       
    }

}


const emit=defineEmits(['showOtpFormEmit'])
</script>

<style lang="scss" scoped>

</style>