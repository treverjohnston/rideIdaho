<template>
    <q-page class="black">
        <div class="row wrap justify-center">
            <div class="col-xs-11 col-md-10 black-back shadow-24 text-center q-pa-lg">
                <h3 class="desktop-only">Registration opens January 1, 2019</h3>
                <h4 class="mobile-only">Registration opens January 1, 2019</h4>
                <hr class="width_90">
                <h5>For now, check out our different rides!</h5>

                <div class="row justify-between desktop-only second-header">
                    <q-list separator class="col-md-4">
                        <q-item clickable v-for="route in routes">
                            <q-item-section v-if="selected == route.id" @click="selected = route.id" class="">
                                <p class="text-bold service selected shadow-16 text-white"
                                    v-anime="{ translateX: { value: ['-30px', '0px'], duration: 4000, }}">
                                    {{route.length}}
                                </p>
                            </q-item-section>
                            <q-item-section v-else @click="selected = route.id" class="grow">
                                <p class="text-bold non-selected">
                                    {{route.length}}
                                </p>
                            </q-item-section>
                        </q-item>
                    </q-list>

                    <div class="col-sm-6 col-md-6 col-lg-6 space-right">
                        <q-card class="spacers shadow-24 text-white">
                            <q-card-section>
                                <div class="text-h4 text-bold">{{routes[selected].length}}</div>
                            </q-card-section>

                            <q-separator dark inset />
                            <q-card-section class="sub ">
                                <span class="">
                                    {{routes[selected].shortDescription}}
                                </span>
                            </q-card-section>
                        </q-card>
                        <q-btn :to="routes[selected].url" color="white" size="lg" outline no-caps
                            class="quote-btn shadow-24 float-right gray-bg q-mt-md">
                            More Info
                        </q-btn>
                    </div>
                </div>
                <div class="row justify-center mobile-only">
                    <div class="col-xs-12 col-sm-6 col-md-5 mobile-border mobile-only" v-for="route in routes">
                        <q-card class="card-container">
                            <q-card-section class="text-center shadow-24">
                                <q-btn class="route-btn" @click="$router.push(route.url.trim('/'))" no-caps outline
                                    color="red">
                                    <span class="text-h4">{{route.length}}</span>
                                </q-btn>
                            </q-card-section>
                            <q-card-section>
                                <span class="text-center text-body1 text-white">
                                    {{route.shortDescription}}</span>
                            </q-card-section>
                            <q-card-section>
                                <q-btn :to="routes[selected].url" color="red" size="md" outline no-caps class="">
                                    More Info
                                </q-btn>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>

        </div>
    </q-page>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                selected: 0
            }
        },
        computed: {
            routes() {
                return this.$store.state.routes.routes;
            }
        },
        methods: {
            launch(url) {
                openURL(url);
            },

        }
    }
</script>

<style scoped>
    .non-selected {
        background-color: transparent;
    }

    .selected {
        background-color: rgba(75, 75, 75, 0.39);
        border: 3px solid rgb(197, 14, 14);
        color: black;
        padding: 1rem;
        /* border-radius: 15px; */
    }

    .card {
        margin: 1rem;
        /* background-color: rgba(255, 255, 255, 0.87); */
        /* border: 1px solid rgba(150, 0, 0, 0.699); */
        color: black;
    }

    .mob {
        margin-bottom: 1rem;
    }

    .margin {
        margin: 2.5rem 0 2.5rem 0;
    }

    .width_90 {
        width: 90%;
    }

    .hr {
        width: 20%
    }

    .btn {
        margin: 0.5rem 0.5rem 0.5rem 0;
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
    }
</style>