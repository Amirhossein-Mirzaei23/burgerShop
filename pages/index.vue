<template>
<div>
    <!--component for slider part-->
<slider />
 <!--component for feathurs part-->
<feathures />
 <!--component for producr tab and tab control-->
<productTab  />
 <!--component for about section-->
<about />
 <!--component for contact us section-->
<contact />
    </div>
</template>

<script setup>
import feathures from '~/components/feathures.vue';
import productTab from '~/components/ProductTab.vue';
/// define api root and api base
const {public:{apiBase}}=useRuntimeConfig();



</script>

<style lang="scss" scoped>

</style>