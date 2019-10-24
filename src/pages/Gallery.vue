<template>
    <q-layout class="gallery">
        <div class="row justify-center">
            <q-carousel swipeable animated v-model="slide" thumbnails infinite class="col-xs-11 carousel">
                <q-carousel-slide v-for="img in pictures" :name="img.id" :img-src="img.url" />\
            </q-carousel>
        </div>
    </q-layout>
</template>

<script>
    export default {
        name: 'Gallery',
        data() {
            return {
                slide: 1
            }
        },
        computed: {
            pictures() {
                return this.$store.state.gallery.gallery
            }
        },
        mounted() {
            if (this.$store.state.gallery.gallery.length <= 1) {
                this.$store.dispatch('gallery/getPictures')
            }
        }
    }
</script>

<style scoped>
    .gallery {
        background-color: black;
        padding: 1rem 0 1rem 0;
        /* align-items: center;
       align-content: center; */
    }

    .carousel {
        height: 90vh;
        width: 100%;
        padding: 1rem;
    }
</style>