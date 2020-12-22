<template>
    <q-layout class="bg-neutral-9">
        <div class="row justify-center bg-neutral-9 text-neutral-3 text-center ">
            <div class="col-xs-10 text=center">
                <h2 class="desktop-only">Ride Day Information</h2>
                <h4 class="mobile-only">Ride Day Information</h4>
                <h5>Registration opens at 6:00 AM</h5>
                <!-- <p>*Please be at the start line ready to ride at least 15 minutes before posted start time.</p> -->
                <hr class="width_90">
            </div>
        </div>
        <div class="row justify-around bg-neutral-9 text-neutral-3 text-center q-pb-xl">
            <div class="col-xs-6 desktop-only">
                <h3 class="desktop-only text-center">Directions (Kuna City Hall)</h3>

                <iframe class="frame shadow-24 route" src="//www.google.com/maps/embed/v1/place?q=Kuna%20City%20Hall
                    &zoom=13
                    &attribution_source=Google+Maps+Embed+API
                    &attribution_web_url=https://developers.google.com/maps/documentation/embed/
                    &key=AIzaSyBLaoSdXeLvOkN5Tp5YkPZ35gXfi5-LhsI" allowfullscreen>
                </iframe>
            </div>
            <div class="col-xs-11 col-md-3 text-center">
                <h3>Start Times</h3>
                <div class="row q-mt-sm" v-for="route in routes">
                    <q-btn no-caps color="primary-4" class="col-xs-6 self-center q-pa-md" @click="$router.push(route.url.trim('/'))">
                        <span class="text-h5 text-bold">{{route.length}}</span>
                    </q-btn>
                    <q-btn unelevated class="col-xs-6 self-center q-pa-md" @click="$router.push(route.url.trim('/'))">
                        <span class="text-h5">{{route.startTime}}</span>
                    </q-btn>

                </div>
                <h5>*Please be at the start line ready to ride at least 15 minutes before posted start time.
                </h5>
            </div>
            <div class="col-xs-12 mobile-only self-center">
                <h4 class="mobile-only text-center">Directions (Kuna City Hall)</h4>

                <iframe class="frame shadow-24 route" src="//www.google.com/maps/embed/v1/place?q=Kuna%20City%20Hall
                                &zoom=13
                                &attribution_source=Google+Maps+Embed+API
                                &attribution_web_url=https://developers.google.com/maps/documentation/embed/
                                &key=AIzaSyBLaoSdXeLvOkN5Tp5YkPZ35gXfi5-LhsI" allowfullscreen>
                </iframe>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'Ride',
        data() {
            return {
            }
        },
        computed: {
            routes() {
                return this.$store.state.routes.routes;
            },
        },
        methods: {
            openURL
        }
    }
</script>

<style scoped>
    .frame {
        width: 100%;
        height: 80vh;
    }

    .img {
        height: 60vh;
        margin-top: 3rem;
        border: 5px solid black;

    }

    .bot {
        margin: 3rem 0 0 0;
    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);
    }

    .width_90 {
        width: 90%;
    }

    .hr {
        width: 20%
    }

    .time-border {
        border: 1px solid black;
    }
</style>