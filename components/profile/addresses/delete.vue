<template>
    <button @click="deleteAddress" class="btn btn-dark">حذف</button>
</template>

<script setup>
const props=defineProps(['addressId'])

const refreshGetAddress = inject('refreshGetAddress');
const loading = ref(false);


async function deleteAddress() {
    try {
        loading.value = true;

        await $fetch('/api/profile/address/delete', {
            method: 'POST',
            body: { address_id: props.addressId }
        });

        refreshGetAddress()
        toastr.warning("حذف آدرس باموفقیت انجام شد");
    } catch (error) {
        console.log(Object.values(error?.data.data.message).flat());
    } finally {
        loading.value = false;
    }
}
</script>

<style lang="scss" scoped>

</style>