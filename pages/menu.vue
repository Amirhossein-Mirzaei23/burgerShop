<template>

    <!-- food section -->
    <section class="food_section layout_padding">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-3">
                    <div>
                        <label class="form-label">جستجو</label>
                        <div class="input-group mb-3">
                            <input v-model="searchValue" type="text" class="form-control" placeholder="نام محصول ..."
                                aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <button @click="currentHandelFilter({search:searchValue})" class="input-group-text" id="basic-addon2">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <hr>
                    <div class="filter-list">
                        <div class="form-label">
                            دسته بندی
                        </div>
                        <ul>
                            <li v-for="(category,index) in categories.data" :key="index" class="my-2 cursor-pointer " 
                            @click="currentHandelFilter({category:category.id})" :class="{'filter-list-active': route.query.category ==category.id}">{{ category.name }}</li>
                      
                        </ul>
                    </div>
                    <hr>
                    <div>
                        <label class="form-label">مرتب سازی</label>
                        <div class="form-check my-2">
                            <input @click="currentHandelFilter({sortBy:'max'})" :checked="route.query.sortBy=='max'" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label cursor-pointer" for="flexRadioDefault1">
                                بیشترین قیمت
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input @click="currentHandelFilter({sortBy:'min'})" :checked="route.query.sortBy=='min'" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                            <label class="form-check-label cursor-pointer" for="flexRadioDefault2">
                                کمترین قیمت
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input @click="currentHandelFilter({sortBy:'bestseller'})" :checked="route.query.sortBy=='bestseller'" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                            <label  class="form-check-label cursor-pointer" for="flexRadioDefault3">
                                پرفروش ترین
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input  @click="currentHandelFilter({sortBy:'sale'})" :checked="route.query.sortBy=='sale'" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                            <label class="form-check-label cursor-pointer" for="flexRadioDefault4">
                                با تخفیف
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-9">
                    <div v-if="pending" class="d-flex justify-content-center align-items-center h-100">
                        <div class="spinner-border"></div>
                    </div>
                    <template v-else>
                        <div v-if="data.data.products.length == 0"
                            class="d-flex justify-content-center align-items-center h-100">
                            <h5>محصولی یافت نشد !</h5>
                        </div>
                 <div v-else>
                    <div  class="row gx-3">
                        <div  v-for="(product,index) in data.data.products" :key="index" class="col-sm-6 col-lg-4">
                            <ProductCard :product="product" />
                        </div>
               
                    </div>
                 
                    <nav class="d-flex justify-content-center mt-5">
                        <ul class="pagination">
                            <li v-for="(link,index) in data.data.meta.links.slice(1,-1)" :key="index" class="page-item" :class="{active:link.active}">
                                <button @click=" currentHandelFilter({page:link.label})" class="page-link">{{ link.label }}</button></li>
                          
                        </ul>
                    </nav>
                 </div>
                    </template>
                </div>
                
            </div>
        </div>
    </section>
    <!-- end food section -->
</template>

<script setup>
const router=useRouter()
const route = useRoute();

const categoryActiv=false
const search=ref()

const {public:{apiBase}}=useRuntimeConfig();
const {data:categories, error}= await useFetch(`${apiBase}/categories`)

const query=ref({})
query.value=route.query
const {data:data ,refresh ,pending}= await useFetch(()=>`${apiBase}/menu`,{
    query:query
})
console.log(data._rawValue.data);

function currentHandelFilter(param){

   query.value= {...param}

router.push({
    path:'/menu',
    query:query.value
})
    refresh()
}

watch(router.query,()=>{
    if (Object.keys(route.query).length==0) {
        console.log("menu");
        query.value={}
        refresh()
    }else{
        console.log("as");
    }
    console.log("watch");
   
})
</script>

<style lang="scss" scoped>

</style>