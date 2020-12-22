<template>
    <q-layout class="bg-neutral-2 text-neutral-8">
        <div class="row justify-center">
            <div class="col-xs-11 col-md-10">
                <div class="row wrap justify-center">
                    <div class="col-xs-12">
                        <div class="row justify-center"
                            v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-300px', '0px'], duration: 1000},  easing: 'linear' }">
                            <div class="col-xs-12 text-center">
                                <h2 class=" text-center">{{route.length}} Ride</h2>
                                <h4 class=" text-center">
                                    {{route.headline}}
                                </h4>
                                <hr class="hr" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-center"
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['300px', '0px'], duration: 1000},  easing: 'linear' }">
                    <div class="col-xs-12 col-lg-4">
                        <div class="row wrap justify-center q-mt-xl">
                            <div class="col-xs-12 col-md-11 text-center router-border bg-neutral-t-3">
                                <div class="q-pt-sm q-mt-lg text-h5">
                                    Regular Registration: {{route.reg}}
                                </div>
                                <div class="q-pt-sm q-mt-lg text-h5">
                                    Early Registration: {{route.earlyReg}}
                                </div>
                                <div class="q-pt-sm q-mt-lg q-mb-lg text-h6">
                                    Discount offered for teams of 5 or more and for families. Contact for more details.
                                </div>
                                <q-btn v-if="openRegistration" no-caps class="q-mb-lg" color="primary-3" size="large"
                                    @click="openURL(registrationUrl)">
                                    Register
                                    Now
                                </q-btn>
                                <q-btn v-else no-caps class="q-mb-lg" color="primary-3" size="large"
                                    @click="$router.push('/register')">Register
                                    Now
                                </q-btn>
                            </div>
                        </div>
                        <div class="row wrap justify-center q-mt-xl">
                            <div class="text-center col-xs-12 col-md-11 bg-neutral-t-3 router-border">
                                <div class="q-pt-sm q-mt-lg text-h5">Ride Day Registration opens at 6:00 AM</div>
                                <hr class="width_90" />
                                <div class="q-pt-sm q-mt-lg text-h5 text-bold">{{route.length}} Start Time</div>
                                <div class="q-pt-sm q-mt-lg text-h5">{{route.startTime}}</div>
                                <hr class="width_90" />
                                <div class="q-pt-sm q-mt-lg q-mb-lg text-h6">
                                    *Please be at the start line ready to ride at least 15 minutes
                                    before posted start time.
                                </div>
                            </div>
                        </div>
                        <div class="row justify-center q-mt-xl">
                            <div class="col-xs-12 col-md-11 text-center router-border bg-neutral-t-3">
                                <div class="row justify-center">
                                    <div class="col-xs-4 q-pt-sm q-mt-lg">
                                        <img class="responsive rest"
                                            src="https://res.cloudinary.com/treverscloud/image/upload/v1517598415/Bathroom_sign_xybmya.jpg"
                                            alt="rest stop" />
                                    </div>
                                    <div class="col-xs-12 self-center q-pt-sm q-mt-sm">
                                        <span class="text-h4">Rest Stops</span>
                                        <hr class="hr" />
                                    </div>
                                    <div class="text-h5 q-pt-sm q-mb-lg col-xs-12" v-for="stop in route.restStops">
                                        {{stop}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-center desktop-only q-mt-xl">
                            <div class="col-xs-11 text-center router-border bg-neutral-t-3 q-pb-lg">
                                <div class="row justify-center q-gutter-md">
                                    <div class="col-xs-12 text-h5 q-mt-xl">Quick Links To Other Routes</div>
                                    <div class="col-xs-12">
                                        <hr class="width_90">
                                    </div>
                                    <q-btn v-for="otherRoute in routes" v-if="otherRoute.length != route.length"
                                        size="large" class="col-xs-5" color="primary-3"
                                        @click="$router.push(otherRoute.url.trim('/'))" no-caps>
                                        {{otherRoute.length}}</q-btn>
                                </div>
                            </div>
                        </div>
                        <div class="row wrap justify-center desktop-only last q-mt-xl">
                            <div class="col-xs-11 text-center router-border bg-neutral-t-3 q-pb-lg q-pt-lg">
                                <div class="row justify-center q-gutter-md">
                                    <div class="col-xs-12 text-h4">Other Resources</div>
                                    <div class="col-xs-12">
                                        <hr class="width_90">
                                    </div>
                                    <q-btn class="" color="primary-3" @click="$router.push('/climbs')" no-caps
                                        size="large">
                                        Information
                                        About
                                        Climbs</q-btn>
                                    <q-btn class="" color="primary-3" @click="$router.push('/rules')" no-caps
                                        size="large">Rules Of
                                        The Road
                                    </q-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-lg-7 q-mt-xl">
                        <div class="row wrap justify-center">
                            <div class=" q-pa-lg col-xs-12 col-md-11 desktop-only">
                                <div class="row justify-center">
                                    <div class="desktop-only col-xs-12">
                                        <iframe id="mapmyfitness_route" :src="route.frame" height="670px" width="100%"
                                            frameborder="0"></iframe>
                                    </div>
                                    <div
                                        class="text-center col-xs-12 text-justify text-h5 router-border q-mt-md bg-neutral-t-3 q-pa-lg">
                                        {{route.description}}
                                    </div>
                                    <div align="center" class="q-mt-xl col-xs-12 router-border bg-neutral-t-3 q-pa-md" label="View More Map Options">
                                        <div class="row justify-center q-gutter-md">
                                            <q-btn size="large" :class="route.btnClass" v-for="link in route.otherMaps"
                                                @click="link.link != '' ? openURL(link.link) : notifyNotReady()"
                                                no-caps>
                                                {{link.title}}</q-btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-11 mobile-only">
                                <div class="row justify-center">
                                    <div class="mobile-only col-xs-12">
                                        <iframe id="mapmyfitness_route" :src="route.frameMobile" height="650px"
                                            width="100%" frameborder="0"></iframe>
                                    </div>
                                    <div align="center" class="q-mt-xl col-xs-12 q-mb-xl" label="View More Map Options">
                                        <div class="row justify-center q-gutter-md">
                                            <q-btn size="large" :class="route.btnClass" v-for="link in route.otherMaps"
                                                @click="link.link != '' ? openURL(link.link) : notifyNotReady()"
                                                no-caps>
                                                {{link.title}}</q-btn>
                                        </div>
                                    </div>
                                    <div
                                        class="text-center col-xs-12 text-justify text-h6 router-border q-mt-md bg-neutral-t-3 q-pa-lg">
                                        {{route.description}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-center mobile-only">
                            <div class="col-xs-12 text-center router-border q-pb-xl q-mb-lg q-mt-lg bg-neutral-t-3">
                                <div class="row justify-center q-gutter-md">
                                    <div class="col-xs-12 text-center text-h5 q-pt-lg">Quick Links To Other Routes</div>
                                    <div class="col-xs-12">
                                        <hr class="width_90">
                                    </div>
                                    <q-btn v-for="otherRoute in routes" v-if="otherRoute.length != route.length"
                                        size="large" class="col-xs-5" color="primary-3"
                                        @click="$router.push(otherRoute.url.trim('/'))" no-caps>
                                        {{otherRoute.length}}</q-btn>
                                </div>
                            </div>
                        </div>
                        <div class="row wrap justify-center mobile-only bot-link ">
                            <div class="col-xs-12 text-center router-border bg-neutral-t-3">
                                <div class="row justify-center ">
                                    <div class="col-xs-12 text-center text-h5 q-mt-lg q-mb-md">Other Resources</div>
                                    <div class="col-xs-12">
                                        <hr class="width_90">
                                    </div>
                                    <div class="col-xs-11 text-center">
                                        <q-btn class="q-mt-sm" color="primary-3"
                                            @click="$router.push('/climbs')" no-caps size="large">
                                            Information
                                            About Climbs
                                        </q-btn>
                                    </div>
                                    <div class="col-xs-11 text-center">
                                        <q-btn class="q-mb-lg q-mt-md" color="primary-3" @click="$router.push('/rules')" no-caps
                                            size="large">Rules
                                            Of The
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
        name: "Route",
        data() {
            return {
                route: []
            };
        },
        mounted() {
            this.$store.state.routes.routes.forEach(route => {
                if (this.$route.path.includes(route.url)) {
                    return this.route = route;
                }
            });
        },
        watch: {
            $route(to, from) {
                this.$store.state.routes.routes.forEach(route => {
                    if (this.$route.path.includes(route.url)) {
                        return this.route = route;
                    }
                });
            }
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
            },
            registrationUrl() {
                return this.$store.state.state.registrationUrl;
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

    .rest {
        max-height: 3rem;
    }

    .top {
        padding-top: 1rem;
    }

    .btn {
        margin: 0.5rem 0.5rem 0.5rem 0;
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
    }

    .color {
        color: white;
    }

    .small {
        font-size: 0.5rem;
    }

    .white-text {
        color: white;
    }

    .map {
        height: 90vh;
        width: 100%;
    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);
    }

    .router-border {
        border: 1px solid white;
        border-radius: .5rem;
    }
</style>