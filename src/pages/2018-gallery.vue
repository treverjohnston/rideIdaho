<template>
    <q-layout class="gallery">
        <div class="row justify-center">
            <div class="col-xs-11 col-sm-8 col-md-6 text-center">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/7lIGXzunu2A?rel=0" frameborder="0"
                    allowfullscreen></iframe>
            </div>
        </div>
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
                return this.$store.state.gallery.newGallery
            }
        },
        mounted() {
            if (this.$store.state.gallery.newGallery.length <= 1) {
                this.$store.commit('gallery/addToNewGallery');
            }
        }
    }
</script>

<style scoped>
    .gallery {
        background-color: black;
        padding: 1rem 0 1rem 0;
    }

    .image {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 5px;
    }

    .carousel {
        height: 90vh;
        width: 100%;
        padding: 1rem;
    }
</style>