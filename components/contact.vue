<template>
 <!-- contact section -->
 <section class="book_section layout_padding">
    <div class="container">
        <div class="heading_container">
            <h2>
                تماس با ما
            </h2>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form_container">
                    <form @submit.prevent="submit">
                        <div>
                            <input  @blur="blurAnimation"  @focus="focusAnimation" v-model="formData.name" type="text" class="form-control " placeholder="نام و نام خانوادگی" />
                        </div>
                        <div>
                            <input  @blur="blurAnimation"  @focus="focusAnimation" v-model="formData.email" type="email" class="form-control text-right" placeholder="ایمیل" />
                        </div>
                        <div>
                            <input  @blur="blurAnimation"  @focus="focusAnimation" v-model="formData.subject" type="text" class="form-control" placeholder="موضوع پیام" />
                        </div>
                        <div>
                            <textarea @blur="blurAnimation"  @focus="focusAnimation" v-model="formData.text" rows="10" style="height: 100px" class="form-control"
                                placeholder="متن پیام"></textarea>
                        </div>
                        <div class="btn_box">
                            <button type="submit">
                                ارسال پیام
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-6">
                <div class="map_container ">
                    <div id="map" style="height: 345px;"></div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- end contact section -->
</template>

<script setup>


// use leaflet for creating a map box
const {$leaflet}=useNuxtApp();

// store input data as reactive varibles
const formData=reactive({
    name:'',
    email:'',
    subject:'',
    text:""
});

/// dfine api root
const {public:{apiBase}}=useRuntimeConfig();

// submit form function
async function submit(){
try {
    // send form input value to the server side
    const data= await $fetch(`${apiBase}/contact-us`,{
        method:'POST',
        body:formData
    })
} catch (error) {
    ////cath error of CRUD process
    const errs=Object.values(error.data.message)
    errs.forEach(err=>{
        // create a toastr for showin err to the user
        toastr.error(err)
    })
}
}

////map script
onMounted(()=>{
    let map = $leaflet.map('map').setView([35.700105, 51.400394], 14);
        let tiles = $leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(map);
        let marker = $leaflet.marker([35.700105, 51.400394],{
            icon:$leaflet.icon({
                popupAnchor:[12,6],
                iconUrl:'image/map/marker-icon.png',
                shadowUrl:'image/map/marker-shadow.png'})
            }).addTo(map)
            .bindPopup('<b>Hello world!</b><br />I am a popup').openPopup();
        })

////////// animations functions
///
let target=null

let id=ref([])
/// create a function to handel focus animtion of all inputs
function focusAnimation(event){
// define event target(input)
  target=event.target
///add new animate.css animation class 
 target.classList.add('animate__animated')
 target.classList.add('animate__flipInX')
 target.classList.add('duration-1000')
 target.classList.add('transition-all')
}

/// create a function to handel blur animtion of all inputs

function blurAnimation(event){
// define event target(input)
  target=event.target
///remove animate.css animation class to prepare the targets for new animation classes
  target.classList.remove('animate__animated')
  target.classList.remove(`animate__flipInX`)
  target.classList.remove('duration-1000')
  target.classList.remove('transition-all')
}
</script>

<style lang="scss" scoped>

</style>