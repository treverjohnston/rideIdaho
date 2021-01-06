<template>
    <q-layout class="bg-neutral-2">
        <div class="bg-neutral-9">
            <div class="row wrap justify-center bg-neutral-9 text-neutral-1">
                <div class="col-xs-12 text-center">
                    <h3 v-if="!openRegistration">2021 Registration</h3>
                    <h3 v-else>2021 Registration is Open</h3>
                    <hr class="hr">
                </div>
            </div>
            <div class="row wrap justify-center bg-neutral-9 text-neutral-1">
                <div class="col-xs-12 col-sm-8 text-justify q-pa-lg">
                    <div>
                        <h5 class="desktop-only">Online Registration opens {{openReg}}. Online registration closes
                            at
                            midnight
                            on {{closeReg}}. You may also register in person at packet pick-up and at the ride.</h5>
                        <span class="mobile-only text-h6">Online Registration opens {{openReg}}. Online registration
                            closes at
                            midnight
                            on {{closeReg}}. You may also register in person at packet pick-up and at the ride.</span>
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
        <div v-if="openRegistration" class="q-pb-xl bg-neutral-9 text-neutral-1">
            <div class="row justify-center">
                <div class="col-xs-12 text-center">
                    <span class="text-h5">If there is a problem loading registration, please <a
                            href="https://www.rideforhopeidaho.com/#/register?openreg=true">Click Here.</a></span>
                </div>
            </div>
            <div v-if="openRegistration && !regIsLoaded" class="row justify-center">
                <q-spinner-gears color="primary-4" class="col-xs-1 q-mt-lg" />
            </div>
        </div>
        <div class="q-pb-xl">
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
                regIsLoaded: false
            }
        },
        computed: {
            openReg() {
                return this.$store.state.dates.openReg.stringDate
            },
            closeReg() {
                return this.$store.state.dates.closeReg.stringDate
            },
            openRegistration() {
                return (this.$store.state.dates.openRegistration || window.location.hash.includes('?openreg=true'));
            },
            // regIsLoaded() {
            //     return document.getElementById('regFrame') != undefined;
            //     // console.log('iframe', iframe)
            //     //  if(iframe != null){
            //     //      return true;
            //     //  }
            //     //  return false;
            // }
        },
        components: {
            RouteCarousel
        },
        methods: {
            openURL,
            loadBikeReg() {
                console.log('Loading BikeReg Registration')

                let script = document.createElement('script')
                script.setAttribute('src', 'https://www.bikereg.com/Scripts/athleteRegWidget.js')
                script.setAttribute('id', 'athleteRegWidget')
                script.setAttribute('data-event', 'ride-for-hope-idaho')
                script.setAttribute('defer', 'true')
                var iframe = document.getElementById('athleteRegIframe')
                iframe.appendChild(script)
            },
            beginLoadingSequence() {
                if (this.openRegistration == true || localStorage.openRegistration == 'true') {
                    setTimeout(this.checkForReg, 5000)
                    setTimeout(this.updateLoader, 500)
                    this.loadBikeReg();
                    if (!localStorage.openRegistration == 'false') {
                        localStorage.openRegistration = true;
                        window.location.reload();
                    }
                }
            },
            checkForReg() {
                var iframe = document.getElementById('athleteRegIframe').children.length > 1
                if (iframe.children && iframe.children.length > 1) {
                    console.log('Loaded BikeReg Registration')
                }
                else {
                    console.log('Failed to load BikeReg. Reloading')
                    window.location.reload();
                }
            },
            updateLoader() {
                var frameExists = document.getElementById('regFrame') != undefined;
                console.log('frame', frameExists)
                if (frameExists) {
                    this.regIsLoaded = true;
                }

            }

        },
        mounted() {
            this.beginLoadingSequence()
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