<template>
  <q-layout ref="layout" class="back ride-back" view="lHh Lpr fff">
    <!-- DESKTOP TABS START -->
    <q-tabs align="center" class="shadow-2 tabs head desktop-only">
      <q-route-tab stretch flat class="tab" label="Home" name="home" to="/" />

      <q-btn-dropdown v-if="openRegistration" auto-close stretch flat label="Register" name="merchandise"
        class="text-red">
        <q-item class="black-bg">
          <q-tabs class="width_100">
            <q-tab @click="openURL(registrationUrl)" name="home" class="tab inner-tab width_100 black-bg" color=""
              label="Register" />
          </q-tabs>
        </q-item>
        <q-item class="black-bg">
          <q-tabs class="width_100">
            <q-tab @click="openURL(participantUrl)" name="home" class="tab inner-tab width_100 black-bg" color=""
              label="Participants" />
          </q-tabs>
        </q-item>
        <q-item class="black-bg">
          <q-tabs class="width_100">
            <q-tab @click="openURL(merchandiseUrl)" name="home" class="tab inner-tab width_100 black-bg" color=""
              label="Just Donate" />
          </q-tabs>
        </q-item>
      </q-btn-dropdown>
      <q-route-tab v-else stretch flat class="tab text-red" color="red" label="Register" name="register"
        to="/register" />

      <q-btn-dropdown stretch flat label="Rider Info" name="rider">
        <q-list>
          <q-item class="black-bg">
            <q-btn-dropdown flat auto-close stretch label="Routes" name="rider" class="width_100 tab inner-tab">
              <q-list>
                <q-tabs v-for="route in routes">
                  <q-route-tab class="tab inner-tab" :label="route.length" name="rider" :to="route.url" />
                </q-tabs>
              </q-list>
            </q-btn-dropdown>
          </q-item>
        </q-list>
        <q-item v-close-popup>
          <q-tabs class="width_100 black-bg">
            <q-tab v-if="openRegistration" @click="openURL(registrationUrl)" name="home"
              class="tab inner-tab width_100 text-red black-bg" color="red" label="Register" />
            <q-route-tab v-else name="register" class="tab inner-tab width_100 text-red black-bg" color="red"
              label="Register" to="/register" />
          </q-tabs>
        </q-item>
        <q-item v-close-popup class="black-bg">
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Packet Pick Up" name="rider" to="/packet" />
          </q-tabs>
        </q-item>
        <q-item v-close-popup class="black-bg">
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Rules Of The Road" name="rider" to="/rules" />
          </q-tabs>
        </q-item>
        <q-item v-close-popup class="black-bg">
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Start Times And Directions" name="rider" to="/ride" />
          </q-tabs>
        </q-item>
        <q-item v-close-popup class="black-bg">
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="How Climbs Are Categorized" name="rider" to="/climbs" />
          </q-tabs>
        </q-item>
        <q-item v-close-popup class="black-bg">
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Team Ride For Hope Idaho Information" name="rider" to="/team" />
          </q-tabs>
        </q-item>
      </q-btn-dropdown>
      <q-btn-dropdown auto-close stretch flat label="Merchandise" name="merchandise" class="">
        <q-item class="black-bg">
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Jerseys and More" name="merchandise" to="/merchandise" />
          </q-tabs>
        </q-item>
        <q-item class="black-bg">
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Raffle Items" name="merchandise" to="/raffle" />
          </q-tabs>
        </q-item>
      </q-btn-dropdown>
      <q-route-tab class="tab black-bg" label="Sponsors" name="sponsors" to="/sponsors" />
      <q-btn-dropdown stretch flat auto-close class="" label="Galleries" name="gallery">
        <q-item class="black-bg">
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="2018 Gallery" name="gallery" to="/2018-gallery" />
          </q-tabs>
        </q-item>
        <q-item class="black-bg">
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Past Rides" name="gallery" to="/gallery" />
          </q-tabs>
        </q-item>
      </q-btn-dropdown>
      <q-route-tab class="tab black-bg" label="About" name="about" to="/about" />
      <q-route-tab class="tab black-bg" label="Contact" name="contact" to="/contact" />
    </q-tabs>
    <!-- DESKTOP TABS END -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- MOBILE TOOLBAR START -->
    <q-toolbar class="head mobile-only">
      <q-btn class="mobile-only" flat @click="leftDrawerOpen = !leftDrawerOpen">
        <q-icon name="menu" />
      </q-btn>
      <!-- <q-btn @click="$router.push('/')">
        <img src="statics/logos/RFHIdahoLogo.png" alt="logo" class="mini">
      </q-btn> -->
      <q-btn class="q-mr-xs" outline dense color="red" @click="openURL(merchandiseUrl)">
        Just Donate
      </q-btn>
      <q-btn v-if="openRegistration" dense class="mobile-only q-mr-xs" outline @click="openURL(registrationUrl)"
        color="red">
        Register
      </q-btn>
      <q-btn v-else class="mobile-only q-mr-xs" dense outline @click="$router.push('/register')" color="red">Register
      </q-btn>
      <q-btn v-if="openRegistration && participantTotal > 0" class="mobile-only" outline
        @click="openURL(participantUrl)" color="red">
        {{participantTotal}}
      </q-btn>
      <q-btn outline dense color="red" @click="openURL(participantUrl)">
        Participants
      </q-btn>
    </q-toolbar>
    <!-- MOBILE TOOLBAR END -->
    <!-- MOBILE DRAWER START -->
    <q-drawer v-model="leftDrawerOpen" class="mobile-only left-tab">
      <q-list class="mobile-only" link>
        <q-item clickable @click.native="push('/')" v-ripple>
          <q-item-section class="text-black">Home</q-item-section>
        </q-item>
        <hr class="tabhrs">
        <q-item to="/register">
          <q-item-section v-if="openRegistration" @click="openURL(registrationUrl)" class="side register text-red"
            label="Register">Register</q-item-section>
          <q-item-section v-else class="side register text-red" label="Register" @click.native="push('/register')">
            Register
          </q-item-section>
        </q-item>
        <hr class="tabhrs">
        </q-expansion-item>
        <q-expansion-item class="side-collapse text-black" label="Rider Information">
          <q-list>
            <hr class="tabhr">
            <q-expansion-item class="margin-left-1 text-black" label="Routes">
              <span v-for="route in routes">
                <hr class="tabhr">
                <q-item class="small-side" @click.native="push(route.url)">
                  {{route.length}} </q-item>
              </span>
            </q-expansion-item>
          </q-list>
          <hr class="tabhrs">
          <q-item to="/register">
            <q-item-section v-if="openRegistration" @click="openURL(registrationUrl)" class="small-side register"
              label="Register">Register</q-item-section>
            <q-item-section v-else class="small-side register" label="Register">Register</q-item-section>
          </q-item>
          <hr class="tabhrs">
          <q-item class="small-side" @click.native="push('/packet')">
            Packet Pick Up </q-item>
          <hr class="tabhr">
          <q-item class="small-side" @click.native="push('/rules')">
            Rules of the Road </q-item>
          <hr class="tabhrs">
          <q-item class="small-side" @click.native="push('/ride')">
            Start Time/Directions </q-item>
          <hr class="tabhr">
          <q-item class="small-side" @click.native="push('/climbs')">
            How Climbs are Categorized </q-item>
          <hr class="tabhr">
          <q-item class="small-side" @click.native="push('/team')">
            Team Ride For Hope Idaho Information
          </q-item>
        </q-expansion-item>
        <hr class="tabhr">
        <q-expansion-item class="side-collapse text-black" label="Merchandise">
          <hr class="tabhr">
          <q-item class="small-side left" @click.native="push('/merchandise')">
            Jerseys and More </q-item>
          <hr class="tabhrs">
          <q-item class="small-side left" @click.native="push('/raffle')">
            Raffle Items </q-item>
        </q-expansion-item>
        <hr class="tabhr">
        <q-item @click.native="push('/sponsors')" class="text-black">
          Sponsors
        </q-item>
        <hr class="tabhr">
        <q-expansion-item class="side-collapse text-black" label="Galleries">
          <hr class="tabhr">
          <q-item class="small-side" @click.native="push('/2018-gallery')">
            2018 Gallery </q-item>
          <hr class="tabhrs">
          <q-item class="small-side" @click.native="push('/gallery')">
            Past Gallery </q-item>
        </q-expansion-item>
        <hr class="tabhr">
        <q-item class="side" @click.native="push('/about')">
          About
        </q-item>
        <hr class="tabhr">
        <q-item class="side" @click.native="push('/contact')">
          Contact
        </q-item>
        <hr class="tabhr">
      </q-list>
    </q-drawer>
    <!-- MOBILE DRAWER END -->

    <!-- ROUTER VIEW -->
    <router-view />
    <!-- ROUTER VIEW -->



    <!-- Footer -->
    <div class="footer text-center text-bold">
      <div class="row justify-center">
        <div class="col-xs-12">
          <h3 class="text-center desktop-only white">
            Thank you for supporting Ride for Hope!
          </h3>
          <h6 class="text-center mobile-only white">
            Thank you for supporting Ride for Hope!
          </h6>
        </div>
        <div class="col-xs-12">
          <div class="row justify-center">
            <div class="col-xs-12">
              <hr class="hr">
            </div>
            <div class="col-xs-6 col-md-3 self-center">
              <q-btn flat @click="openURL('https://www.strava.com/clubs/302822')" flat>
                <img class="strava" src="statics/logos/strava.png" alt="strava logo">
              </q-btn>
            </div>
            <div class="col-xs-6 col-md-3 mobile-only self-center">
              <q-btn flat @click="openURL('https://www.facebook.com/rideforhopeidaho/')" flat>
                <q-icon class="fb" size="5.75rem" name="fab fa-facebook-square" />
              </q-btn>
            </div>
            <q-btn flat class="col-md-3 self-center" @click="openURL('//www.ebenezerwebsites.com/')">
              <img class="ebenezer" src="../assets/ebenezer.png" alt="Ebenezer Websites Logo">
            </q-btn>
            <!-- <div v-scroll-fire="animate" class="col-md-3 self-center" id="bar">
              <q-btn flat data-x="360" class="el" @click="openURL('http://www.meridian-cycles.com/')">
                <img class="meridian-big" src="statics/logos/meridian.png" alt="Meridian Cycles logo">
              </q-btn>
            </div> -->
            <div class="col-md-3 desktop-only self-center">
              <q-btn flat @click="openURL('https://www.facebook.com/rideforhopeidaho/')">
                <q-icon class="fb" size="5.75rem" name="fab fa-facebook-square" />
              </q-btn>
            </div>
            <div class="col-xs-12">
              <hr class="hr">
              <div class="row justify-center">
                <div class="col-xs-12 pad">
                  <small class="text-center white">
                    Be sure to check out these other great charity rides!
                  </small>
                </div>
                <div class="col-xs-12">
                  <q-btn flat @click="openURL('https://www.cycleforindependence.org/')">
                    <img class="meridian-big" src="statics/logos/cfi.jpg" alt="Cycle for independence logo">
                  </q-btn>
                </div>
                <div class="col-xs-12">
                  <q-btn flat
                    @click="openURL('http://web.alsa.org/site/TR?sid=8540&type=fr_informational&pg=informational&fr_id=13510')">
                    <img class="meridian-big" src="statics/logos/als.png" alt="ALS Team Challenge logo">
                  </q-btn>
                </div>
              </div>
              <hr class="hr">
              <div class="row justify-center">
                <div class="col-xs-11 text-center white">
                  <small>Special thanks to Imago Caeli for all 2018 Ride For Hope Idaho video!</small>
                </div>
              </div>
              <hr class="hr">
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <!-- <q-btn flat class="">
            <img class="ebenezer" src="../assets/ebenezer.png" alt="Ebenezer Websites Logo">
          </q-btn> -->
          <!-- <q-btn flat class="" @click="openURL('//www.ebenezerwebsites.com/')">
            <img class="ebenezer" src="../assets/ebenezer.png" alt="Ebenezer Websites Logo">
          </q-btn> -->
        </div>
      </div>
    </div>
    </div>
  </q-layout>
</template>

<script>
  import { date, openURL } from 'quasar'

  export default {
    name: "index",
    components: {
    },
    data() {
      return {
        leftDrawerOpen: false,
        showVid: false,
        showSplash: false,
        showSwal: false,
        video: `./statics/video/head.mp4`
      };
    },
    computed: {
      routes() {
        return this.$store.state.routes.routes;
      },
      openRegistration() {
        return this.$store.state.state.openRegistration;
      },
      earlyRegistration() {
        return this.$store.state.state.earlyRegistration;
      },
      registrationUrl() {
        return this.$store.state.state.registrationUrl;
      },
      participantUrl() {
        return this.$store.state.state.participantUrl;
      },
      participantTotal() {
        return this.$store.state.state.participantTotal;
      },
      merchandiseUrl() {
        return this.$store.state.state.merchandiseUrl;
      }
    },
    methods: {
      openURL,
      push(tab) {
        this.$router.push(tab)
        this.leftDrawerOpen = false;
      },
    },
    directives: {
    },
    mounted() {
      // this.$store.dispatch('state/getParticipantTotal');
    },

  };
</script>

<style scoped>
  .width_100 {
    width: 100%
  }

  .full-vid {
    width: 100%;
  }

  #video_overlays {
    /* float: left;
    z-index: 1000; */
    display: block;
    position: absolute;
    width: 100%;
    top: 15vh;
    z-index: 25;
    text-align: center;
  }

  .noHighlight {
    color: white;
    text-decoration: underline;
  }

  .space {
    margin: 1rem 0 1rem 0
  }

  .charityModal {
    background-color: rgba(0, 0, 0, 0.479);
  }

  .pad {
    padding-bottom: 1rem;
  }

  .ride-spacer {
    height: 7rem;
  }

  .s {
    width: 70%;
  }

  .check {
    max-width: 30vw;
  }

  .mid {
    height: 35vh;
  }

  .gen {
    background-color: rgba(255, 255, 255, 0.892);
    color: black;
    padding: 1rem 0 1rem 0;
  }

  .container:hover .overlay {
    opacity: 1;

  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(150, 0, 0, 0.699);
  }

  .two:hover .otwo {
    opacity: 1;

  }

  .otwo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(163, 163, 163, 0.699);
  }

  .three:hover .othree {
    opacity: 1;

  }

  .othree {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(70, 28, 28, 0.699);
  }

  .vid {
    width: 100vw;
    height: 100vh;
  }

  .vid-mobile {
    width: 100vw;
    /* height: 100vh; */
  }

  .video {
    background-color: white;
    color: black;
    padding: 1rem 0 2rem 0;
  }

  .gch {
    width: 20rem;
  }

  .s {
    color: red;
  }

  .routeshr {
    width: 90%;
    margin-bottom: 3rem;
  }

  .black {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.479);

  }

  .black-back {
    background: rgba(0, 0, 0, 0.308);
    height: 100%;
    width: 100%;
  }

  .text {
    padding: 1rem;
  }

  .silver {
    padding: 1rem;
  }

  .back {
    background-color: rgba(0, 0, 0, 0.589);
    color: white;
  }

  .hr {
    width: 80%;
  }

  .route-tab-cont {
    margin-bottom: 0.75rem;
  }

  .route-tab {
    color: white;
  }

  .top-title {
    margin-left: 0.5rem;
  }

  .strava-top {
    max-width: 4.5rem;
  }

  .meridian {
    max-width: 9rem;
  }

  .ebenezer {
    max-width: 7rem;
  }

  .meridian-mobile {
    max-height: 3rem;
    margin-top: 0.5rem;
  }

  .strava {
    width: 10rem;
  }

  .q-item-link:hover {
    background: rgba(255, 255, 255, 0.7);
  }

  .q-list-highlight {
    background: rgba(255, 255, 255, 0.7);
    color: black;
    font-weight: 400;
  }

  .tabhr {
    border-color: black;
    width: 100%;
  }

  .tabhrs {
    border-color: black;
    width: 100%;
  }

  .left-tab {
    text-align: left;
    padding-left: 1rem;
  }

  .small-side {
    font-weight: 400;
    color: black;
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  .margin-left-1 {
    margin-left: 1rem;
  }

  .side {
    font-weight: 400;
    color: black;
    font-size: 2rem;
  }

  .small {
    font-size: 0.7rem;
  }

  .mini {
    height: 4rem;
  }


  .q-btn {
    text-transform: none;
  }

  .fb {
    color: rgb(59, 89, 152);
    width: 10rem;
  }

  .footer {
    background-color: rgba(17, 17, 17, 0.88);
    color: rgb(180, 0, 0);
    padding-bottom: 1rem;
  }

  .spacer {
    padding: 0.5rem 0 0.5rem 0;
    /* background-color: rgba(0, 0, 0, 0.856); */
    background-color: rgba(255, 255, 255, 0.892);
    color: black;
    display: flex;
    justify-content: center;
  }

  .cbtnm {
    background-color: rgba(218, 0, 0, 0.699);
    color: white;
    padding: 0 2rem 0 2rem;
    margin-top: 1rem;
  }

  .cbtn {
    background-color: rgba(17, 17, 17, 0.88);
    color: white;
    padding: 0 2rem 0 2rem;
  }

  .options {
    display: flex;
    justify-content: space-around;
    background-color: rgba(17, 17, 17, 0.88);
    padding: 3rem 5rem 3rem 5rem;
  }

  .ride {
    margin: 1rem 0 1rem 0;
    max-height: 13rem;
  }



  .promo {
    /* margin-top: -6rem; */
    padding: 1rem 2rem 1rem 2rem;
    /* background-color: rgba(0, 128, 128, 0.803); */
    background-color: rgba(0, 0, 0, 0.699);
    color: white;
    /* color: black; */
    border-radius: 5px;
  }


  .head {
    background-color: rgba(17, 17, 17, 0.88);
    /* color: rgba(17, 17, 17, 0.705); */
  }

  .tab {
    text-transform: none;
    background-color: transparent;
    color: white;
  }

  .inner-tab {
    background-color: black;
    color: white;
  }

  .logo-container {
    width: 255px;
    height: 242px;
    perspective: 800px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .logo {
    position: absolute;
    transform-style: preserve-3d;
  }

  .back {
    /* background-image: url("~assets/cover.jpg"); */
    /* background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover; */
  }
</style>