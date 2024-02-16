<template>
    <ClientOnly>
        <div class="d-flex align-items-center">
            <div v-if="!showResendOtp" class="mt-3 me-3" style="direction: ltr;">
                <vue-countdown :time="6 * 1000" v-slot="{ minutes, seconds }" @end="onCountdownEnd"
                    :transform="transformSlotProps">
                    {{ minutes }} : {{ seconds }}
                </vue-countdown>
            </div>

            <button @click="resend" type="button" :disabled="loading" v-else class="btn btn-dark">
                ارسال دوباره
                <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
            </button>
        </div>
    </ClientOnly>
</template>

<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';
const loading = ref(false);
const emit=defineEmits(['resendOtpErrors'])
const showResendOtp = ref(false);



 async function resend(){
    console.log("resend");
    try {
        loading.value = true;
// await
         $fetch('api/auth/resend-otp',{
        method:'POST'
       })

       toastr.info('مجددا کد برای شما ارسال گردید')
       showResendOtp.value = false;
    } catch (error) {
        emit('resendOtpErrors',Object.values(error.data.data.message).flat())
    }finally{
        loading.value = false;
    }
}

function onCountdownEnd() {
    showResendOtp.value = true;
}

function transformSlotProps(props) {
    const formattedProps = {};

    Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
    });

    return formattedProps;
}


</script>