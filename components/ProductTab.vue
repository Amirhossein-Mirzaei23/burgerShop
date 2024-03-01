<template>
    <!-- food section -->
    <section class="food_section layout_padding-bottom">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    منو محصولات
                </h2>
            </div>
        <!--- use tabs component --->
            <Tabs nav-class="filters_menu" nav-item-active-class="active" :options="{ disableScrollBehavior: true }">
             
                <Tab class="bg-gray-400 bg-opacity-10 px-5 py-2 rounded-xl" v-for="(tabList,index) in Products.data.tabList" :key="index" :name="tabList">
                   {{ tabList }}
                   <div class="filters_content">
                    <div class="row grid">
                        <div v-for="product in Products.data.tabPanel[index]" :key="product.id" class="col-sm-6 col-lg-4">
                           <ProductCard :product="product" />
                        </div>
                      
                    </div>
                </div>
                </Tab>
            </Tabs>

        </div>
    </section>
    <!-- end food section -->
</template>

<script setup>

//import {tabs, tab} from 'vue-tabs-component';
 
  //import {Tabs,Tab} from 'vue3-tabs-component';
  import {Tabs, Tab} from 'vue3-tabs-component';


/// define api root
const {public:{apiBase}}=useRuntimeConfig();
// get product tabs data from server side
const {data:Products, error}= await useFetch(`${apiBase}/products/products-tabs`)

</script>

<style lang="scss" scoped>

</style>