<template>
    <q-layout class="bg-neutral-9 text-neutral-1">
        <div class="row wrap justify-center">
            <div class="col-xs-11 col-md-10 text-center">
                <h2 class="desktop-only">Merchandise</h2>
                <h4 class="mobile-only">Merchandise</h4>
                <hr class="width_90">
                <h5>Check back soon for Merchandise</h5>
            </div>
        </div>
    </q-layout>
</template>
<script>
    export default {
        name: 'Merch',
        data() {
            return {}
        },
        computed: {
            merchandise() {
                return this.$store.state.merchandise.merchandise
            }
        },
    }
</script>

<style scoped>

</style>