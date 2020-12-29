<template>
    <q-layout class="bg-neutral-2">
        <div class="bg-neutral-9">
            <div class="row wrap justify-center bg-neutral-9 text-neutral-1">
                <div class="col-xs-12 text-center">
                    <h3>2021 Registration</h3>
                    <hr class="hr">
                </div>
            </div>
            <div class="row wrap justify-center bg-neutral-9 text-neutral-1">
                <div class="col-xs-12 col-sm-8 text-justify q-pa-lg">
                    <div>
                        <h5 class="desktop-only">Online Registration opens January 1, 2021. Online registration closes
                            at
                            midnight
                            on June 24, 2021. You may also register in person at packet pick-up and at the ride.</h5>
                        <span class="mobile-only text-h6">Online Registration opens January 1, 2021. Online registration
                            closes at
                            midnight
                            on June 24, 2021. You may also register in person at packet pick-up and at the ride.</span>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-8 text-justify q-pa-lg">
                    <div v-if="!openRegistration">

                        <h5 class="desktop-only">Early packet pickup will be on Friday, June 25, 2021 from 4:00 PM
                            to 7:00 PM at Meridian Cycles, 1203 N. Main St., Meridian, Idaho</h5>
                        <span class="mobile-only text-h6">Early packet pickup will be on Friday, June 25, 2021 from 4:00
                            PM
                            to 7:00 PM at Meridian Cycles, 1203 N. Main St., Meridian, Idaho</span>

                    </div>
                </div>
            </div>
        </div>
        <div v-if="!openRegistration" class=" q-pt-lg">
            <RouteCarousel :onRegisterPage="true"></RouteCarousel>
        </div>
        <div v-else class=" q-pb-xl">
            <div id="athleteRegIframe"></div>
        </div>
    </q-layout>
</template>
<script>
    import { openURL } from 'quasar'
    import RouteCarousel from '../components/RouteCarousel.vue'
    export default {
        name: 'Register',
        data() {
            return {
            }
        },
        computed: {
            openRegistration() {
                let closeDate = new Date("June 25, 2021 00:00:00")
                let openDate = new Date("January 1, 2021 00:00:00")

                let date = new Date();
                if (date > openDate && date < closeDate) {
                    return true;
                }
                return false;
                // return this.$store.state.state.openRegistration;
            }
        },
        components: {
            RouteCarousel
        },
        methods: {
            openURL,
            bikeReg() {
                if (this.openRegistration) {
                    let promise = new Promise((resolve, reject) => {
                        let script = document.createElement('script')
                        script.setAttribute('src', 'https://www.bikereg.com/Scripts/athleteRegWidget.js')
                        script.setAttribute('id', 'athleteRegWidget')
                        script.setAttribute('data-event', '48687')
                        var iframe = document.getElementById('athleteRegIframe')
                        iframe.appendChild(script)
                    })
                    return promise
                }

            }
        },
        mounted() {
            this.bikeReg();
        }

    }
</script>

<style scoped>
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