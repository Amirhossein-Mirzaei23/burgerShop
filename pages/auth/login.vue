<template>
     <!-- login section -->
     <section class="auth_section book_section">
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-4 offset-md-4">
                    <div class="card">
                    <!-- show check Otp code form if showOtpForm variable is true -->
                    <authCheckOtp v-if="showOtpForm"/>
                     <!-- show login form if showOtpForm variable is false -->
                    <authLogin v-else @show-otp-form-emit=' () => showOtpForm = true'  />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end login section -->
</template>

<script setup>
/// use guset middle were 
definePageMeta({
    middleware:'guest'
})

/// create a varible to manage what form should be appear
const showOtpForm= ref(false)


</script>
<style lang="scss" scoped>

</style>