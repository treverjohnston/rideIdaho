<template>
    <q-layout class="team">
        <div class="row justify-center">
            <div class="col-xs-11 col-md-10 white-back shadow-24">
                <div class="row wrap justify-center xs-gutter">
                    <div class="col-xs-5 col-md-3 self-center left">
                        <img src="statics/team2.jpg" class="responsive img" alt="RFH Riders">
                    </div>
                    <div class="col-xs-5 col-md-4 desktop-only self-center">
                        <img src="statics/team1.jpg" class="responsive img" alt="RFH Riders">
                    </div>
                    <div class="col-xs-5 col-md-3 self-center right">
                        <img src="statics/team3.jpg" class="responsive img" alt="RFH Riders">
                    </div>
                    <div class="col-xs-8 col-md-4 mobile-only self-center">
                        <img src="statics/team1.jpg" class="responsive border" alt="RFH Riders">
                    </div>
                </div>
                <div class="row justify-center bot">
                    <div class="col-xs-11 col-md-6 text-center">
                        <h3 class="desktop-only">Team Ride For Hope Idaho</h3>
                        <h4 class="mobile-only">Team Ride For Hope Idaho</h4>
                        <p>Interested in joining Team Ride For Hope Idaho?</p>
                        <hr class="width_90">
                        <p>Take a look at our club on Strava or view our Facebook page</p>
                        <div class="row justify-center">
                            <div class="col-xs-6">
                                <q-btn flat @click="openURL('https://www.strava.com/clubs/302822')" flat>
                                    <img class="strava responsive" src="statics/logos/strava2.png" alt="strava logo">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 self-center">
                                <q-btn flat @click="openURL('https://www.facebook.com/rideforhopeidaho/')" flat>
                                    <q-icon class="fb" size="10rem" name="fab fa-facebook-square" />
                                </q-btn>
                            </div>
                            <div class="col-xs-12">
                                <p>For more information, call David Marsey at (720)-474-5507</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center">
                        <iframe
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%2Frideforhopeidaho&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                            width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                            allowTransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
                <div class="row justify-center">
                    <div class="col-xs-10 text-center">
                        <h3 class="desktop-only">Requirements</h3>
                        <h4 class="mobile-only">Requirements</h4>
                        <hr class="width_90">
                        <p>
                            You must attend every Saturday training ride. (We leave from Meridian
                            Cycles)
                        </p>
                        <p>You must commit to another charity ride. (i.e. Cycle for Independence)</p>
                    </div>
                </div>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'Team',
        data() {
            return {
            }
        },
        methods: {
            openURL
        }
    }
</script>

<style scoped>
    .black-back {
        background-color: rgba(138, 138, 138, 0.905);
    }

    .team {
        background-image: url("https://res.cloudinary.com/treverscloud/image/upload/v1517856029/bw_icaeha.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        /* text-shadow: 0 0 5px #fff; */
        color: black;
    }

    .right {
        margin-left: 1rem;
    }

    .left {
        margin-right: 1rem;
    }

    .fb {
        color: rgb(59, 89, 152);
        width: 10rem;
    }

    .frame {
        width: 100%;
        height: 80vh;
    }

    .img {
        max-height: 45vh;
        margin-top: 3rem;
        border: 5px solid black;
    }

    .border {
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
</style>