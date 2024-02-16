<template>
     <!-- login section -->
     <section class="auth_section book_section">
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-4 offset-md-4">
                    <div class="card">
                    <authCheckOtp v-if="showOtpForm"/>
                    <authLogin v-else @show-otp-form-emit=' () => showOtpForm = true'  />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end login section -->
</template>

<script setup>
definePageMeta({
    middleware:'guest'
})
const showOtpForm= ref(false)


</script>
<style lang="scss" scoped>

</style>