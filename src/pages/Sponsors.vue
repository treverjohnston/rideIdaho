<template>
    <q-layout class="">
        <div class="row justify-center">
            <div class="col-xs-12 bg-neutral-9">
                <div class="row wrap justify-center text-center q-mt-xl q-mb-xl"
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['300px', '0px'], duration: 1000},  easing: 'linear' }">
                    <div class="col-xs-11 col-md-8 text-center bg-neutral-6">
                        <h2 class="text-bold shadow desktop-only">Veni Vidi Vici Sponsors</h2>
                        <h4 class="text-bold shadow mobile-only">Veni Vidi Vici Sponsors</h4>
                        <big class="text-italic text-neutral-9">"I came. I saw. I conquered."</big>
                        <hr color="bg-primary-7" class="hr">
                        <div class="mid row wrap justify-center">

                            <div v-for="sponsor in l1" class="mid row wrap justify-center">
                                <div id="bar" class="col-xs-12 col-md-12">
                                    <q-btn flat class="el" data-x="360" @click="openURL(sponsor.link)">
                                        <img class="responsive gold desktop-only" :src="sponsor.logo"
                                            alt="sponsor.name">
                                        <img class="responsive gold-mobile mobile-only" :src="sponsor.logo"
                                            alt="sponsor.name">
                                    </q-btn>
                                </div>
                            </div>
                            <q-btn v-if="l1.length === 0" class="row wrap btn text-center text-h6" no-caps
                                @click="$router.push('/contact')">Become the
                                Premier Ride For
                                Hope Sponsor</q-btn>
                        </div>
                    </div>
                </div>
                <div class="row wrap justify-center text-center q-mt-xl q-mb-xl"
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['300px', '0px'], duration: 1000},  easing: 'linear' }">
                    <div class="col-xs-11 col-md-8 bg-neutral-6">
                        <h2 class="text-bold shadow desktop-only">Omnes Spem Sponsors</h2>
                        <h4 class="text-bold shadow mobile-only">Omnes Spem Sponsors</h4>
                        <big class="text-italic text-neutral-9">"Hope Conquers All"</big>
                        <hr color="bg-primary-7" class="hr">
                        <div class="mid row wrap justify-center">
                            <div v-for="sponsor in l2" class="col-xs-12 col-md-9 self-center">
                                <q-btn v-if="sponsor.logo != ''" flat @click="openURL(sponsor.link)">
                                    <img class="responsive silver silver-space desktop-only" :src="sponsor.logo"
                                        :alt="sponsor.name">
                                    <img class="responsive silver-big-mobile mobile-only" :src="sponsor.logo"
                                        :alt="sponsor.name">
                                </q-btn>
                            </div>
                            <q-btn v-if="l2.length === 0" class="row wrap btn text-h6" no-caps
                                @click="$router.push('/contact')">Become a Omnes
                                Spem Sponsor</q-btn>
                        </div>
                    </div>
                </div>
                <div class="row wrap justify-center text-center q-mt-xl q-mb-xl"
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['300px', '0px'], duration: 1000},  easing: 'linear' }">
                    <div class="col-xs-11 col-md-8 bg-neutral-6">
                        <h2 class="text-bold shadow desktop-only">Virtutem Spei Sponsors</h2>
                        <h4 class="text-bold shadow mobile-only">Virtutem Spei Sponsors</h4>
                        <big class="text-italic text-neutral-9">"Hope And Strength"</big>
                        <hr color="bg-primary-7" class="hr">
                        <div class="mid row wrap justify-center">
                            <div v-for="sponsor in l3" class="col-xs-8 col-md-6 self-center">
                                <q-btn v-if="sponsor.logo != ''" flat @click="openURL(sponsor.link)">
                                    <img class="responsive carp" :src="sponsor.logo" :alt="sponsor.name">
                                </q-btn>
                                <q-btn flat color="black" no-caps v-else>
                                    <h6 class="black silver-text">R__B Ranch
                                    </h6>
                                </q-btn>
                            </div>
                            <q-btn v-if="l3.length === 0" class="row wrap btn text-h6" no-caps
                                @click="$router.push('/contact')">Become a Virtutem
                                Spei Sponsor</q-btn>
                        </div>
                    </div>
                </div>

                <div class="row wrap justify-center text-center q-mt-xl q-mb-xl"
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-300px', '0px'], duration: 1000},  easing: 'linear' }">
                    <div class="col-xs-11 col-md-8 bg-neutral-6">
                        <h2 class="text-bold shadow desktop-only">Carpe Diem Sponsors</h2>
                        <h4 class="text-bold shadow mobile-only">Carpe Diem Sponsors</h4>
                        <big class="text-italic text-neutral-9">"Seize The Day"</big>
                        <hr color="bg-primary-7" class="hr">
                        <div class="mid row wrap justify-center">

                            <div v-for="sponsor in l4" class="col-xs-6 col-md-4 self-center">
                                <q-btn flat>
                                    <img class="responsive carp" :src="sponsor.logo" :alt="sponsor.name">
                                </q-btn>
                            </div>
                            <q-btn v-if="l4.length === 0" class="row wrap btn text-h6" no-caps
                                @click="$router.push('/contact')">Become a Carpe
                                Diem Sponsor</q-btn>
                        </div>
                    </div>
                </div>

                <!-- SUPPORT -->
                <div class="row wrap justify-center text-center q-mt-xl q-mb-xl"
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-300px', '0px'], duration: 1000},  easing: 'linear' }">
                    <div class="col-xs-11 col-md-8 bg-neutral-6">
                        <h2 class="text-bold shadow desktop-only">Support</h2>
                        <h4 class="text-bold shadow mobile-only">Support</h4>
                        <hr color="bg-primary-7" class="hr">
                        <div class="mid row wrap justify-center">

                            <div v-for="sponsor in l5" class="col-xs-6 col-md-6 self-center last margin">
                                <h6 class="text-bold desktop-only">{{sponsor.name}}</h6>
                                <h6 class="text-bold mobile-only">{{sponsor.name}}</h6>
                            </div>
                            <q-btn v-if="l5.length === 0" class="row wrap btn text-h6" no-caps
                                @click="$router.push('/contact')">Become a Support Sponsor</q-btn>
                        </div>
                    </div>
                </div>

                <div class="top-marg"></div>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'Sponsors',
        data() {
            return {
            }
        },
        mounted() {
            this.$store.dispatch('sponsors/getSponsors')
        },
        computed: {
            pictures() {
                return this.$store.state.gallery.pictures
            },
            l1() {
                return this.$store.state.sponsors.lvl1;
            },
            l2() {
                return this.$store.state.sponsors.lvl2;
            },
            l3() {
                return this.$store.state.sponsors.lvl3;
            },
            l4() {
                return this.$store.state.sponsors.lvl4;
            },
            l5() {
                return this.$store.state.sponsors.lvl5;
            },
        },
        methods: {
            openURL
        }
    }
</script>

<style scoped>
    .silver-space {
        margin-top: .5rem;
    }

    .silver-text {
        font-size: 2.5rem;
        /* font-family: "Niconne", cursive; */
    }

    .back {
        background-color: rgba(138, 138, 138, 0.905);
        color: black;
    }

    .last {
        margin-bottom: .5rem;
    }

    .black {
        color: black;
    }

    .gold {
        height: 14rem;
    }

    .gold-mobile {
        height: 11rem;
    }

    .silver {
        height: 13rem;
    }

    .silver-mobile {
        height: 6rem;
    }

    .silver-big {
        min-height: 12rem;
    }

    .silver-big-mobile {
        height: 9rem;
    }

    .btn {
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
        padding: 1rem 1rem 1rem 1rem;
        margin: 1rem 0 1rem 0;
    }

    .mid {
        /* background-color: rgba(224, 226, 226, 0.6); */
        padding: 1rem;
    }

    .responsive {
        padding: 1rem;
    }

    .shadow {
        /* text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2); */
        text-shadow: 0 0 5px #fff;
        color: black;
        /* color: white; */
    }


    .sponsors {
        background-image: url("https://res.cloudinary.com/treverscloud/image/upload/v1517856029/bw_icaeha.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }

    .red {
        color: rgb(212, 0, 0);
    }

    .hr {
        width: 60%;
    }

    .margin {
        margin: 1rem 0;
    }
</style>