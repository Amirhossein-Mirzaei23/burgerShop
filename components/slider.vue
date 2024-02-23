<template>
    <!-- slider section -->
    <section class="slider_section">
        <div class="bg-box">
            <img src="/image/hero-bg.jpg" alt="">
        </div>
        <div id="customCarousel1" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-lg-6">
                                <div class="detail-box">
                                    <h2 class="mb-3 fw-bold animate__animated animate__pulse animate__slow animate__infinite">
                                      چون رضایت شما مهم است
                                    </h2>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                        از
                                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                        سطرآنچنان که
                                        لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                        بهبود
                                        ابزارهای کاربردی می باشد.
                                    </p>
                                    <div class="btn-box">
                                        <nuxt-link to="/auth/login" class="btn1 animate__animated animate__pulse animate__slow animate__infinite animate__delay-1s">
                                            سفارش
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-lg-6">
                                <div class="detail-box">
                                    <h2 class="mb-3 fw-bold animate__animated animate__pulse animate__slow animate__infinite animate__delay-2s">
                                       کیفیت اولویت اول ماست
                                    </h2>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                        از
                                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                        سطرآنچنان که
                                        لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                        بهبود
                                        ابزارهای کاربردی می باشد.
                                    </p>
                                    <div class="btn-box">
                                        <nuxt-link to="/auth/login" class="btn1 animate__animated animate__pulse animate__slow animate__infinite animate__delay-3s">
                                            سفارش
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-lg-6">
                                <div class="detail-box">
                                    <h2 class="mb-3 fw-bold animate__animated animate__pulse animate__slow animate__infinite">
                                        لورم ایپسوم متن ساختگی
                                    </h2>
                                   <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                        از
                                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                        سطرآنچنان که
                                        لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                        بهبود
                                        ابزارهای کاربردی می باشد.
                                    </p>
                                  <!-----   <p>{{ pText }}</p> --->
                                    <div class="btn-box">
                                       <nuxt-link to="/auth/login" class="btn1 animate__animated animate__pulse animate__slow animate__infinite">
                                            سفارش
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <ol class="carousel-indicators">
                    <li data-bs-target="#customCarousel1" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
                    <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
                </ol>
            </div>
        </div>

    </section>
    <!-- end slider section -->
</template>

<script setup>
const text=`       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                        از
                                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                        سطرآنچنان که
                                        لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                        بهبود
                                        ابزارهای کاربردی می باشد.`
const pText=ref("amir")

/// pText.value= autoWriter.autoWriter(text)


</script>

<style lang="scss" scoped>

</style>