<template>
    <div class="row justify-center text-neutral-8">
        <q-list separator class="col-md-4 desktop-only q-mr-lg">
            <div v-for="route in routes">
                <q-item v-if="selected == route.id" class="route-item">
                    <q-item-section @click="selected = route.id" class="">
                        <p class="text-bold router-tab selected shadow-16 text-neutral-8"
                            v-anime="{ translateX: { value: ['-30px', '0px'], duration: 4000, }}">
                            {{route.length}}
                        </p>
                    </q-item-section>

                </q-item>
                <q-item clickable class="route-item" v-else>
                    <q-item-section @click="selected = route.id" class="router-tab non-hoverable">
                        <p class="text-bold non-selected">
                            {{route.length}}
                        </p>
                    </q-item-section>
                </q-item>
            </div>
        </q-list>

        <div class="col-sm-6 desktop-only q-ml-lg">
            <q-card class="spacers shadow-24 text-neutral-8 bg-neutral-3">
                <q-card-section>
                    <div class="text-h4 text-bold">{{routes[selected].length}}</div>
                </q-card-section>

                <q-separator dark inset />
                <q-card-section class="sub">
                    <span class="text-h5">
                        {{routes[selected].shortDescription}}
                    </span>
                </q-card-section>
            </q-card>
            <q-btn v-if="!openRegistration && !onRegisterPage" to="register" color="primary-3" size="lg" no-caps
                class="quote-btn shadow-24 float-right gray-bg q-mt-md text-neutral-9 ">
                Register
            </q-btn>
            <!-- TODO: Update this to do the pop up store and also the mobile -->
            <q-btn v-else color="primary-3" size="lg" no-caps @click="registrationClosedDialog = !registrationClosedDialog"
                class="quote-btn shadow-24 float-right gray-bg q-mt-md text-neutral-9 ">
                Register
            </q-btn>
            <q-btn :to="routes[selected].url" color="text-neutral-9" size="lg" no-caps outline
                class="quote-btn shadow-24 float-right gray-bg q-mt-md q-mr-lg">
                More Info
            </q-btn>
        </div>

        <div class="mobile-only col-xs-12">
            <div class="row justify-center q-gutter-md">
                <q-card class="white-border bg-neutral-2 col-xs-11 col-sm-5 mobile-border mobile-only q-mb-md"
                    v-for="route in routes">
                    <q-card-section class="text-center">
                        <q-btn class="route-btn" @click="$router.push(route.url.trim('/'))" no-caps outline
                            color="primary-4">
                            <span class="text-h4">{{route.length}}</span>
                        </q-btn>
                    </q-card-section>
                    <q-card-section>
                        <span class="text-center text-body1 text-neutral-8">
                            {{route.shortDescription}}</span>
                    </q-card-section>
                    <q-card-section class="text-center">
                        <q-btn :to="routes[selected].url" color="neutral-9" size="md" outline no-caps
                            class="text-neutral-8 q-mr-md">
                            More Info
                        </q-btn>
                        <q-btn v-if="!openRegistration && !onRegisterPage" to="register" color="primary-3" size="md" no-caps class="text-neutral-9 ">
                            Register
                        </q-btn>
                        <q-btn v-else color="primary-3" size="md" no-caps class="text-neutral-9 " @click="registrationClosedDialog = !registrationClosedDialog">
                            Register
                        </q-btn>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="registrationClosedDialog">
            <q-card>
                <q-toolbar>
                    <q-avatar>
                        <img src="statics/logos/RFHIdahoLogo.png">
                    </q-avatar>
        
                    <q-toolbar-title><span class="text-weight-bold">Ride For Hope Idaho</span></q-toolbar-title>
        
                    <q-btn flat round dense icon="close" v-close-popup />
                </q-toolbar>
        
                <q-card-section>
                    <!-- TODO: 2022 add back in -->
                    <!-- <span class="text-body1">
                        Online registration for the 2021 Ride For Hope Idaho is open between {{openReg}} and {{closeReg}}.
                    </span> -->
        <span class="text-body1">
            Check back in 2022 for when online registration will open.
        </span>
                </q-card-section>
                <!-- <q-card-section>
                    <span class="text-body1">
                        In-person registration is available at packet pickup on June 25, or on the day of the ride, June 26.
                    </span>
        
                </q-card-section> -->
                <q-card-section>
                    <span class="text-body1">
                        If you are looking to help the cause without riding, you can donate directly to Genesis Community Health with the button below, or contact us to volunteer.
                    </span>
        
                </q-card-section>
                <q-card-section class="text-center">
                    <q-btn class="cbtnm" no-caps color="primary-3" to="contact">Contact</q-btn>
                    <q-btn class="cbtnm q-ml-md q-mr-md" no-caps color="accent-4" @click="openURL('https://genesiscommunityhealth.com/donate/')">Donate</q-btn>
                    <q-btn class="cbtnm" no-caps color="neutral-3" @click="registrationClosedDialog = false">Close</q-btn>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    import { openURL } from "quasar";

    export default {
        name: 'RouteCarousel',
        data() {
            return {
                selected: 0,
                registrationClosedDialog: false
            }
        },
        props: {
            onRegisterPage: {
                type: Boolean
            }
        },
        components: {

        },
        computed: {
             openReg() {
                return this.$store.state.dates.openReg.stringDate
            },
            closeReg() {
                return this.$store.state.dates.closeReg.stringDate
            },
            routes() {
                return this.$store.state.routes.routes;
            },
            openRegistration() {
                return this.$store.state.state.openRegistration;
            }
        },
        methods: {
            openURL
        },
        mounted() {
        },
    }
</script>
<style scoped>
</style>