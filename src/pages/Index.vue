<template>
  <!-- Below this is all of the home page stuff not related to navbars and such -->
  <div>
    <div class="row justify-center">
      <div id="video_overlays" class="absolute text-center">
        <img class="ride self-center text-center vid-logo desktop-only" src="statics/logos/RFHIdahoLogo.png"
          alt="RFHI Logo">
        <img class="mini self-center text-center vid-logo mobile-only" src="statics/logos/RFHIdahoLogo.png"
          alt="RFHI Logo">
      </div>
      <video class="fit" style="width: 100%;" id="player" :src="video" poster="./statics/backgrounds/header.jpg"
        type="video/mp4" playsinline="playsinline" muted="muted" autoplay="autoplay" loop="loop">Your browser does not
        support this
        streaming content.
        <img src="statics/backgrounds/header.jpg" style="width: 100%" alt="mobile background of riders"
          class="mobile-only responsive">
      </video>
    </div>

    <div class="row justify-center">
      <div class="col-xs-12">
        <div class="text-center">
          <div class="promo text-center desktop-only">
            <h5 class="light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</h5>
            <hr>
            <h1 class="text-bold">Ride For Hope Idaho</h1>
            <h3 class="text-bold">2019 Event Date: Saturday, June 8</h3>
            <h3 class="text-bold">Kuna, ID</h3>
            <hr>
            <h5 class="q-title">Online registration ends 6/6/2019. Last day to register and be guarenteed a T-Shirt:
              5/30/19</h5>
            <h5 class="q-title">Day of ride registration available.</h5>
            <h5 class="q-title">Discount offered for teams of 5 or more and for families. Contact for more details.
            </h5>
            <hr>
            <q-btn @click="launch('https://bigkbbqidaho.com/')" class="cbtnm shadow-24 text-center">Catered By
              Big K BBQ
            </q-btn>
            <!-- <h6 class="q-title">A special thanks to
                <a class="noHighlight" href="https://www.imagocaeli.com/" target="_blank">Imago Caeli</a>
                for all 2018
                Ride For Hope Idaho video!</h6>
              <q-btn @click="$router.push('2018-gallery')" class="cbtnm shadow-24 text-center">2018 Video and Gallery
              </q-btn> -->
            <q-btn v-if="showSwal" @click="charitySwal()" class="cbtnm shadow-24 text-center ">10 Barrel Brewing
              Co.
              Charity Day</q-btn>
          </div>
          <div>
            <!-- <q-btn @click="$refs.charityModal.open()" class="cbtnm shadow-24 text-center">Packet Pick Up Information</q-btn> -->
            <!-- <q-btn @click="$router.push('ride')" class="cbtnm shadow-24 text-center desktop-only">Ride Day Information</q-btn> -->
          </div>
        </div>
        <div class="promo text-center mobile-only">
          <h6 class="light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</h6>
          <hr>
          <h4 class="text-bold">Ride For Hope Idaho</h4>
          <h5 class="">2019 Event Date:</h5>
          <h5>Saturday, June 8</h5>
          <h5 class="">Kuna, ID</h5>
          <hr>
          <h6 class="q-title">Online registration ends 6/6/2019. Last day to register and be guarenteed a T-Shirt:
            5/30/19</h6>
          <h6 class="q-title">Day of ride registration available.</h6>
          <h6 class="q-title">Discount offered for teams of 5 or more and for families. Contact for more details.</h6>
          <hr>
          <q-btn @click="launch('https://bigkbbqidaho.com/')" class="cbtnm shadow-24 text-center">Catered By
            Big K BBQ
          </q-btn>
          <!-- <h6 class="q-title">A special thanks to
              <a class="noHighlight" href="https://www.imagocaeli.com/" target="_blank">Imago Caeli</a> for all 2018
              Ride For Hope Idaho video!</h6>
            <q-btn v-if="showSwal" @click="charitySwal()" class="cbtnm shadow-24 text-center ">10 Barrel Brewing Co.
              Charity Day</q-btn>
            <q-btn @click="$router.push('2018-gallery')" class="cbtnm shadow-24 text-center">2018 Video and Gallery
            </q-btn> -->
        </div>

        <!-- <q-btn @click="$router.push('2018-gallery')" class="cbtnm shadow-24 text-center">2018 Gallery and Video</q-btn> -->
        <!-- <q-btn @click="packetSwal()" class="cbtnm shadow-24 text-center">Packet Pick Up Information</q-btn> -->
      </div>
    </div>
    <div class="spacer row wrap">
      <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-4 self-center text">
        <b>Ride For Hope Idaho</b> is a charity bicycle event with the firm belief that quality healthcare should be
        accessible
        to everyone. We support the holistic approach to healthcare where true healing focuses not only on symptoms,
        but
        the underlying root cause of disease.
      </h6>
      <div class="text-center col-xs-12 col-md-4">
        <img class="ride self-center xs-gutter" src="statics/logos/RFHIdahoLogo.png" alt="ride for hope logo">
      </div>
      <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-4 self-center text">
        <b>Ride For Hope Idaho</b> is committed to ensuring that 100% of participant fees and donations go directly
        to charity.
        This unique commitment is made possible by charitable contributions from local sponsors which cover the
        entire
        cost of the event.
      </h6>
    </div>
    <div class="row justify-around head">
      <div class="col-xs-12 text-center">
        <q-card-section>
          <h2>Routes</h2>
        </q-card-section>
        <hr class="routeshr">
      </div>
      <div class="col-xs-12 col-sm-6 col-md-5 border desktop-only self-center" v-for="route in routes">
        <q-card-section class="text-center card-container shadow-24">
          <q-btn class="route-btn" @click="$router.push(route.url.trim('/'))" outline color="red">
            <h4>{{route.length}}</h4>
          </q-btn>
          <h6 class="white text-justify">
            {{route.shortDescription}}</h6>
        </q-card-section>
      </div>
      <div class="col-xs-11 col-sm-6 col-md-5 mobile-border mobile-only" v-for="route in routes">
        <q-card-section class="text-center card-container shadow-24">
          <q-btn class="route-btn" @click="$router.push(route.url.trim('/'))" outline color="red">
            <h4>{{route.length}}</h4>
          </q-btn>
          <h6 class="white text-justify">
            {{route.shortDescription}}</h6>
        </q-card-section>
      </div>
    </div>
    <div class="row wrap justify-center gen">
      <div class="text-center col-xs-12 col-md-4 self-center">
        <q-btn @click="launch('https://genesiscommunityhealth.com/about-us/')" flat>
          <img class="gch responsive" src="statics/logos/gch.png" alt="genesis community health logo">
        </q-btn>
      </div>
      <div class="text-italic text-center light-paragraph col-xs-12 col-md-4 self-center text" data-x="80">
        <h6>
          This year we are proud to support Genesis Community Health and Boise Rescue Mission. Genesis Community
          Health is an integrated
          healthcare facility providing primary medical care, basic dental, mental health, specialty referral and
          medication
          to the low-income and uninsured. Boise Rescue Mission provides programs and services including addiction
          recovery
          and food and shelter for homeless men, women and children.
        </h6>
        <q-btn class="cbtnm" @click="$router.push('charities')">Learn More</q-btn>
      </div>
      <div class="text-center col-xs-12 col-md-4 self-center">
        <q-btn @click="launch('https://boiserm.org/')" flat>
          <img class="responsive check" src="statics/logos/brm.png" alt="Boise Rescue Mission Logo">
        </q-btn>
      </div>
    </div>
  </div>

</template>

<script>
  import anime from "animejs";
  import {
    dom,
    event,
    openURL,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QTab,
    QTabs,
    QParallax,



    QRouteTab,





    Ripple,

    ScrollFire,

    QVideo,

    date,
    QCarousel
  } from "quasar";

  export default {
    name: "index",
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QItem,
      QTab,
      QTabs,
      QParallax,



      QRouteTab,






      QVideo,

      QCarousel
    },
    data() {
      return {
        showVid: false,
        showSplash: false,
        showSwal: false,
        video: `./statics/video/head.mp4`
      };
    },
    computed: {
      home() {
        if (this.$route.path == "/") {
          return true;
        } else {
          return false;
        }
      },
      routes() {
        return this.$store.state.routes.routes;
      },
      openRegistration() {
        return this.$store.state.state.openRegistration;
      },
      earlyRegistration() {
        return this.$store.state.state.earlyRegistration;
      }
    },
    methods: {
      launch(url) {
        openURL(url);
      },
      collapse() {
        this.$refs.popover.close();
        this.$refs.popoverRoutes.close();
        this.$refs.routePopB.close();
      },
      showVideos() {
        this.showVid = true;
      },
      sesame() {
        this.showSplash = true;
      },
      animate() {
        anime({
          targets: "#bar .el",
          translateX: function (el) {
            return 0;
          },
          translateY: function (el, i) {
            return 0;
          },
          scale: function (el, i, l) {
            return 1.25;
          },
          duration: function () {
            return anime.random(500, 800);
          },
          duration: function () {
            return anime.random(800, 1100);
          },
          delay: function () {
            return anime.random(0, 500);
          },
          direction: "reverse"
        });
      },
      funSwal() {
        return swal({
          title: 'Rider Fundraising',
          text: 'This year, each participant has the goal of raising $250 in additional funds for Ride For Hope Idaho. If you wish to simply donate, you can either choose one of these riders to donate to, or just donate to the ride in general.',
          buttons: {
            sponsor: { text: "Sponsor a Rider", value: "sponsor" },
            give: { text: "Give to Ride For Hope Idaho", value: "give" }
          }
        })
          .then((value) => {
            switch (value) {
              case 'sponsor':
                this.launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')
                break;
              case 'give':
                this.launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')
                break;
            }
          })
      },
      donSwal() {
        return swal({
          title: 'Donate',
          text: 'This year, each participant has the goal of raising $250 in additional funds for Ride For Hope Idaho. If you wish to simply donate, you can either choose one of these riders to donate to, or just donate to the ride in general.',
          buttons: {
            sponsor: { text: "Sponsor a Rider", value: "sponsor" },
            give: { text: "Give to Ride For Hope Idaho", value: "give" }
          }
        })
          .then((value) => {
            switch (value) {
              case 'sponsor':
                this.launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')
                break;
              case 'give':
                this.launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')
                break;
            }
          })
      },
      charitySwal() {
        return swal({
          title: 'January 31, 2019 Charity Day',
          text: 'Join us at 10 Barrel Brewing Co. January 31st, 2019 for a charity night. All proceeds from 5-9 are donated to charity! Between 2017 and 2018 this charity night has raised over $4000!',
          buttons: {
            site: { text: "10 Barrel Brewing Co.", value: "site" },
            dismiss: { text: "Dismiss", value: "dismiss" }
          }
        })
          .then((value) => {
            switch (value) {
              case 'site':
                this.launch('https://www.google.com/maps/dir/10+barrel+brewing+boise')
                break;
              case 'dismiss':
                break;
            }
          })
      },
      packetSwal() {
        return swal({
          title: 'Packet Pick Up',
          text: 'Friday, June 7 from 2pm-8pm at Meridian Cycles',
          buttons: {
            site: { text: "More Information", value: "site" },
            dismiss: { text: "Dismiss", value: "dismiss" }
          }
        })
          .then((value) => {
            switch (value) {
              case 'site':
                this.$router.push('packet')
                break;
              case 'dismiss':
                break;
            }
          })
      },
      welcomeSwal() {
        return swal({
          title: 'Thank You!',
          text: 'Thank you to all of the amazing volunteers and riders who helped make the 2018 Ride For Hope Idaho the most successful ever! The fun is not over yet though! Join us July 16th at Payette Brewing Company for a charity night benefiting Ride For Hope Idaho!',
          buttons: {
            dismiss: { text: "Dismiss", value: "dismiss" }
          }
        })
          .then((value) => {
            switch (value) {
              case 'dismiss':
                break;
            }
          })
      },
      registerSwal() {
        return swal({
          title: 'Early Registration Ending Soon!',
          text: 'Early Registration ends 4/30/2019. Sign up now to take advantage of a discount!',
          buttons: {
            dismiss: { text: "Dismiss", value: "dismiss" }
          }
        })
          .then((value) => {
            switch (value) {
              case 'dismiss':
                break;
            }
          })
      }
    },
    directives: {
    },
    mounted() { }

  };
</script>

<style scoped>
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

  .brm-video {
    background-color: black;
    color: white;
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

  .q-popover {
    background-color: rgba(17, 17, 17, 0.88);
    color: white;
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

  .card-routes {
    background-color: rgba(255, 0, 0, 0.664);
    padding: 2rem 2rem 2rem 2rem;
  }

  .card {
    background-color: rgba(197, 7, 7, 0.8);
    padding: 2rem 2rem 2rem 2rem;
  }

  .card-mobile {
    background-color: rgba(197, 7, 7, 0.8);
    /* padding: 2rem 2rem 2rem 2rem; */
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
    /* background: rgba(8, 8, 8, 0.705); */
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