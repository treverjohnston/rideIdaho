<template>
    <q-layout class="black">
        <div class="row justify-center">
            <div class="col-xs-11 col-md-10 black-back shadow-24">
                <div class="row wrap justify-center">
                    <div class="col-xs-12">
                        <div class="row justify-center">
                            <div class="col-xs-12 text-center">
                                <h2 class="headline text-center white">{{route.length}} Ride</h2>
                                <h5 class="headline text-center white">
                                    {{route.headline}}
                                </h5>
                                <hr class="hr" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-center">
                    <div class="col-xs-12 col-lg-4 r-links">
                        <div class="row wrap justify-center">
                            <div class="col-xs-11 text-center spacers">
                                <q-btn v-if="openRegistration" no-caps class="btn spacers"
                                    @click="openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')">
                                    Register
                                    Now
                                </q-btn>
                                <q-btn v-else no-caps class="btn spacers" @click="$router.push('/register')">Register
                                    Now
                                </q-btn>
                                <div class="top">
                                    Regular Registration: {{route.reg}}
                                </div>
                                <div class="top">
                                    Early Registration: {{route.earlyReg}}
                                </div>
                                <div class="top">
                                    Discount offered for teams of 5 or more and for families. Contact for more details.
                                </div>
                            </div>
                        </div>
                        <div class="row wrap justify-center">
                            <div class="light-paragraph text-center col-xs-11 col-md-11 spacers">
                                <p>Ride Day Registration opens at 6:00 AM</p>
                                <hr class="width_90" />
                                <h4>{{route.length}} Start Time</h4>
                                <h5>{{route.startTime}}</h5>
                                <hr class="width_90" />
                                <p>
                                    *Please be at the start line ready to ride at least 15 minutes
                                    before posted start time.
                                </p>
                            </div>
                        </div>
                        <div class="row justify-center">
                            <div class="col-xs-11 col-md-11 text-center border spacers">
                                <div class="row justify-center">
                                    <div class="col-xs-4">
                                        <img class="responsive rest"
                                            src="https://res.cloudinary.com/treverscloud/image/upload/v1517598415/Bathroom_sign_xybmya.jpg"
                                            alt="rest stop" />
                                    </div>
                                    <div class="col-xs-12 self-center">
                                        <h5>Rest Stops</h5>
                                        <hr class="hr" />
                                    </div>
                                    <div class="text-h6 q-mt-sm" v-for="stop in route.restStops">{{stop}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-center desktop-only">
                            <div class="col-xs-11 text-center spacers">
                                <div class="row justify-center">
                                    <h5 class="col-xs-12">Quick Links To Other Routes</h5>
                                    <div class="col-xs-12">
                                        <hr class="width_90">
                                    </div>
                                    <q-btn v-for="otherRoute in routes" v-if="otherRoute.length != route.length"
                                        class="col-xs-4 btn spacers" @click="$router.push(otherRoute.url.trim('/'))"
                                        no-caps>
                                        {{otherRoute.length}}</q-btn>
                                </div>
                            </div>
                        </div>
                        <div class="row wrap justify-center desktop-only last">
                            <div class="col-xs-11 text-center spacers">
                                <div class="row justify-center">
                                    <h5 class="col-xs-12">Resources</h5>
                                    <div class="col-xs-12">
                                        <hr class="width_90">
                                    </div>
                                    <q-btn class="btn spacers" @click="$router.push('climbs')" no-caps>Information About
                                        Climbs</q-btn>
                                    <q-btn class="btn spacers" @click="$router.push('rules')" no-caps>Rules Of The Road
                                    </q-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-lg-7 top-marg">
                        <div class="row wrap justify-center">
                            <q-card class="route col-xs-11 col-md-11 shadow-24">
                                <q-card-section class="desktop-only">
                                    <iframe id="mapmyfitness_route" :src="route.frame" height="650px" width="100%"
                                        frameborder="0"></iframe>
                                </q-card-section>
                                <q-card-section class="mobile-only">
                                    <iframe id="mapmyfitness_route" :src="route.frameMobile" height="650px" width="100%"
                                        frameborder="0"></iframe>
                                </q-card-section>
                                <div align="center" class="white small" label="View More Map Options">
                                    <q-btn v-for="link in route.otherMaps" :class="route.btnClass"
                                        @click="link.link != '' ? openURL(link.link) : notifyNotReady()" no-caps>
                                        {{link.title}}</q-btn>
                                </div>
                            </q-card>
                        </div>
                        <div class="row wrap justify-center">
                            <h6 class="white text-center col-xs-11 spacers description text-justify">
                                {{route.description}}
                            </h6>
                        </div>
                        <div class="row justify-center mobile-only">
                            <div class="col-xs-11 text-center spacers white">
                                <div class="row justify-center white">
                                    <h5 class="col-xs-12 text-center">Quick Links To Other Routes</h5>
                                    <div class="col-xs-12">
                                        <hr class="width_90">
                                    </div>
                                    <q-btn v-for="otherRoute in routes" v-if="otherRoute.length != route.length"
                                        class="col-xs-4 btn spacers" @click="$router.push(otherRoute.url.trim('/'))"
                                        no-caps>
                                        {{otherRoute.length}}</q-btn>
                                </div>
                            </div>
                        </div>
                        <div class="row wrap justify-center mobile-only bot-link">
                            <div class="col-xs-11 text-center spacers white">
                                <div class="row justify-center white">
                                    <h5 class="col-xs-12 text-center">Resources</h5>
                                    <div class="col-xs-12">
                                        <hr class="width_90">
                                    </div>
                                    <div class="col-xs-11 text-center">
                                        <q-btn class="btn spacers" @click="$router.push('climbs')" no-caps>Information
                                            About Climbs
                                        </q-btn>
                                        <q-btn class="btn spacers" @click="$router.push('rules')" no-caps>Rules Of The
                                            Road
                                        </q-btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import { openURL, Notify } from "quasar";
    export default {
        name: "Century",
        data() {
            return {
                route: []
            };
        },
        beforeMount() {
            this.$router.push('/routes/Century')
        },
        mounted() {
            this.$store.state.routes.routes.forEach(route => {
                if (route.url == this.$route.path) {
                    return this.route = route;
                }
            });
        },
        computed: {
            pictures() {
                return this.$store.state.gallery.pictures;
            },
            routes() {
                return this.$store.state.routes.routes;
            },
            openRegistration() {
                return this.$store.state.state.openRegistration;
            }
        },
        methods: {
            openURL,
            notifyNotReady() {
                Notify.create({
                    message: 'Printable maps with turn by turn cue sheet available for participants to print are pending. \nPlease check back later.',
                    color: 'primary'
                })
            }
        }
    };
</script>

<style scoped>
    .last {
        margin-bottom: 1rem;
    }

    .top {
        padding-top: 1rem;
    }

    .btn {
        margin: .5rem .5rem .5rem 0;
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
    }

    .color {
        background-color: rgba(27, 187, 27, 0.844);
    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);

    }
</style>