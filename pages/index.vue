<template>
<div>
<slider />
<feathures />
<productTab  />
<about />
<contact />
    </div>
</template>

<script setup>
import feathures from '~/components/feathures.vue';
import productTab from '~/components/ProductTab.vue';

const {public:{apiBase}}=useRuntimeConfig();
 const {data, error}= await useFetch(`${apiBase}/products/products-tabs`)


</script>

<style lang="scss" scoped>

</style>