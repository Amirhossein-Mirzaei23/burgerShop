<template>
    <div class="vh-70">
        <!-- a div to show erorrs---->
        <div v-if="errors.length > 0" class="alert alert-danger">
            <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </div>
    <!---use formkit to mange inut data and vlidation--->
        <FormKit type="form" @submit="profileUserEdit" :actions="false" :incomplate-message="false">
            <div class="row g-4">
                <div class="col col-md-6">
                    <FormKit type="text" name="name" id="profileName" label="نام و نام خانوادگی"
                    lablel-class="form-label"
                    input-class="form-control"
                    validation="required|length:2"
                    :validation-messages="{required:'ورود نام الزامی است',length:'حداقل تعداد حروف نام و نام خانوادگی دو حرف می باشد'}"
                    :value="user.name"
                    />
                </div>
                <div class="col col-md-6">
                    <FormKit type="text" name="email" id="profileemail" label="ایمیل"
                    lablel-class="form-label"
                    input-class="form-control"
                    validation="required|email"
                    :validation-messages="{required:'ورود ایمیل الزامی است',email:'ایمیل معتبر نمی باشد'}"
                    :value="user.email"
                    />
                </div>
                <div class="col col-md-6">
                    <label class="form-label">شماره تلفن</label>
                    <input type="text" disabled class="form-control" :value="user.cellphone">
                    
                </div>
                    <FormKit type="submit" input-class="btn btn-primary mt-4 bg-amber-500 duration-500 transition-all hover:scale-105 hover:bg-amber-400 hover:shadow-2xl hover:shadow-zinc-950" >
                    ویرایش
                    <!--loader component-->
                    <div v-if="loading" class="spinner-border spinner-border-sm ms-2 shado"></div>
                    </FormKit>
                </div>
             </FormKit>

       

    </div>
</template>

<script setup>



const {data:user}= await useFetch(`/api/profile/info`,{
    headers:useRequestHeader(['cookie'])
})

// console.log(user.value);

// define varible to hande loader animation
let loading=ref(false)
// define a variable to store error 
const errors = ref([]);


/// create a function to edit user info
async function profileUserEdit(formData){

    try {
     /// enable loading animation
        loading.value=true
      // send data  to server side
     await $fetch(`/api/profile/info/edit`,{
        method:"POST",
        body:formData,
    })
    /// create a toastr for the user to show successed massage
         toastr.success('ویرایش با موفیقت انجام شد')
        
    } catch (error) {
        /// catch errors and store on the errors variable
         errors.value=Object.values(error.data.data.message).flat()
     
        /// create a toastr for the user to showing error code
         toastr.error(`Erorr Code: ${error.data.statusCode}`)
    }finally{
        /// disable loading animation
        loading.value=false
    }

}
  
    
    

</script>

<style lang="scss" scoped>

</style>