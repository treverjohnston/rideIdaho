<template>
    <q-layout class="black">
        <div class="row wrap justify-center">
            <div class="col-xs-11 col-md-10 black-back shadow-24 text-center q-pa-lg">
                <!-- <hr class="ihr"> -->
                <!-- <h3 class="desktop-only">Online Registration for 2019 is now closed</h3>
                <h4 class="mobile-only">Online Registration for 2019 is now closed</h4> -->
                <h3 class="desktop-only">Registration opens January 1, 2019</h3>
                <h4 class="mobile-only">Registration opens January 1, 2019</h4>
                <hr class="ihr">
                <h5>For now, check out our different rides!</h5>
                <hr class="ihr">

                <div class="row justify-between desktop-only second-header">
                    <q-list separator class="col-md-4">
                        <q-item clickable v-for="route in routes">
                            <q-item-section v-if="selected == route.id" @click="selected = route.id" class="">
                                <p class="text-bold service gray-bg selected shadow-16 "
                                    v-anime="{ translateX: { value: ['-30px', '0px'], duration: 4000, }}">
                                    {{route.length}}
                                </p>
                            </q-item-section>
                            <q-item-section v-else="selected == route.id" @click="selected = route.id">
                                <p class="text-bold route">
                                    {{route.length}}
                                </p>
                            </q-item-section>
                        </q-item>
                    </q-list>

                    <div class="col-sm-6 col-md-6 col-lg-6 space-right">
                        <q-card dark bordered class="card">
                            <q-card-section>
                                <div class="text-h4 text-bold ">{{routes[selected].length}}</div>
                            </q-card-section>

                            <q-separator dark inset />
                            <q-card-section class="sub ">
                                <span class="">
                                    {{routes[selected].shortDescription}}
                                </span>
                            </q-card-section>
                        </q-card>
                        <q-btn to="/contact" color="white" size="lg" outline rounded no-caps
                            class="quote-btn shadow-24 float-right gray-bg">
                            More Info
                        </q-btn>
                    </div>
                    <!-- <div class="col-xs-12 col-sm-6 col-md-5 border desktop-only self-center" v-for="route in routes">
                    <q-card class="text-center card-container shadow-24">
                        <q-card-section>
                            <q-btn class="q-pa-md" @click="$router.push(route.url.trim('/'))" outline color="red">
                                <span class="text-h4">{{route.length}}</span>
                            </q-btn>
                        </q-card-section>
                        <q-card-section class="text-center q-mt-lg">
                            <span class="white text-body1">
                                {{route.shortDescription}}</span>
                        </q-card-section>
                    </q-card>
                </div> -->
                </div>
                <div class="row justify-center mobile-only">
                    <div class="col-xs-12 col-sm-6 col-md-5 mobile-border mobile-only" v-for="route in routes">
                        <q-card-section class="text-center card-container shadow-24">
                            <q-btn class="route-btn" @click="$router.push(route.url.trim('/'))" outline color="red">
                                <h4>{{route.length}}</h4>
                            </q-btn>
                            <h6 class="white text-justify" slot="subtitle">
                                {{route.shortDescription}}</h6>
                        </q-card-section>
                    </div>
                </div>
                <!-- <h5>Check back later for 2019 Packet Pick Up times!</h5> -->
                <!-- <h5>
                        <b>Date: </b>Friday, June 22</h5>
                    <h5>
                        <b>Time: </b>2pm-8pm</h5>
                    <hr class="ihr">
                    <h4>Meridian Cycles</h4>
                    <h5>1203 N Main</h5>
                    <h5> Meridian, ID</h5>
                    <h5>83642</h5> -->
            </div>

        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QBtn,

    } from 'quasar'
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
        components: {
            QLayout,
            QBtn,

        },
        methods: {
            launch(url) {
                openURL(url);
            },

        }
    }
</script>

<style scoped>
    .selected {
        /* background-color: rgba(255, 255, 255, 0.87); */
        border: 3px solid rgb(197, 14, 14);
        color: black;
        padding: 1rem;
        border-radius: 15px;
    }

    .card {
        margin: 1rem;
        /* background-color: rgba(255, 255, 255, 0.87); */
        border: 1px solid rgba(150, 0, 0, 0.699);
        color: black;
    }

    .mob {
        margin-bottom: 1rem;
    }

    .margin {
        margin: 2.5rem 0 2.5rem 0;
    }

    .ihr {
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