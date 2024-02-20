<template>
    <div class="vh-70">
        <!-- a div to show erorrs--->
        <div v-if="errors > 0" class="alert alert-danger">
            <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </div>
            
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
                    <FormKit type="submit" input-class="btn btn-primary mt-4">
                    ویرایش
                    <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
                    </FormKit>
                </div>
             </FormKit>

       

    </div>
</template>

<script setup>



   const {data:user}= await useFetch(`/api/profile/info`,{
   // headers:useRequestHeader(['cookie'])
})

console.log(user.value);


let loading=ref(false)
let erorrs=ref(null)
async function profileUserEdit(formData){



    try {
        loading.value=true
       
     await $fetch(`/api/profile/edit`,{
        method:"POST",
        body:formData,
    })

         toastr.success('ویرایش با موفیقت انجام شد')
        
    } catch (error) {
         erorrs.value=Object.values(error.data.data.message).flat()
     
         toastr.error(`Erorr Message: ${error.data.statusMessage}`)
         toastr.error(`Erorr Code: ${error.data.statusCode}`)
    }finally{
        loading.value=false
    }

}
  
    
    

</script>

<style lang="scss" scoped>

</style>