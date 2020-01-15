<template>
  <!-- <div>
    <div class="row justify-center">
      <div id="video_overlays" class="absolute text-center">
        <img class="self-center text-center vid-logo desktop-only" src="statics/logos/RFHIdahoLogo.png" alt="RFHI Logo"
          v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-300px', '0px'], duration: 1000},  easing: 'linear' }">
        <img class="mini self-center text-center vid-logo mobile-only" src="statics/logos/RFHIdahoLogo.png"
          alt="RFHI Logo"
          v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-300px', '0px'], duration: 1000},  easing: 'linear' }">

        <h5 v-if="openRegistration && participantTotal > 10" class="self-center text-center vid-logo mobile-only"
          v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-300px', '-50px'], duration:
          1000}, easing: 'linear' }" @click="openURL(participantUrl)">
          {{participantTotal}}
        </h5>
      </div>
      <video class="fit" style="width: 100%;" id="player" :src="video" type="video/mp4" playsinline="playsinline"
        muted="muted" autoplay="autoplay" loop="loop">Your browser does not
        support this
        streaming content.
      </video>
    </div> -->
  <div>
    <div class="row justify-center">
      <q-media-player background-color="black" autoplay :source="video" hide-volume-slider mobile-mode no-controls loop
        muted dense playsinline dark>
        <template v-slot:overlay>
          <div class="text-center">
            <img class="self-center text-center vid-logo desktop-overlay desktop-only"
              src="statics/logos/RFHIdahoLogo.png" alt="RFHI Logo"
              v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-300px', '0px'], duration: 1000},  easing: 'linear' }">
              <div class="video-banner desktop-only">
                  <big>2020 Participant Total: {{participantTotal}}</big>
                  <br>
                  <big>Help us reach our goal of 400 riders, register early and save!</big>
                </div>
            <div class="mobile-only" 
            v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-300px', '0px'], duration: 1000},  easing: 'linear' }">
              <img class="mini self-center text-center vid-logo" src="statics/logos/RFHIdahoLogo.png"
                alt="RFHI Logo">
                <div class="video-banner">
                  2020 Participant Total: {{participantTotal}} 
                </div>
              </div>
          </div>
        </template>
      </q-media-player>
    </div>

    <div class="row justify-center">
      <div class="col-xs-12">
        <div class="text-center">
          <div class="promo text-center desktop-only">
            <div class="light-paragraph text-h5">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</div>
            <hr>
            <h1 class="text-bold">Ride For Hope Idaho</h1>
            <div class="text-bold text-h3">2020 Event Date: Saturday, June 20</div>
            <div class="text-bold text-h3">Kuna, ID</div>
            <hr>
            <div class="q-title text-h5">Online registration ends 6/18/2020.</div>
            <div class="q-title text-h5">Day of ride registration available.</div>
            <div class="q-title text-h5">Discount offered for teams of 5 or more and for families. Contact for more
              details.
            </div>
            <hr>
          </div>
        </div>
        <div class="promo text-center mobile-only">
          <div
            v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['300px', '0px'], duration: 1000},  easing: 'linear' }">
            <div class="text-h6 light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</div>
            <hr>
            <div class="text-h4 text-bold">Ride For Hope Idaho</div>
            <div class="text-h5">2020 Event Date:</div>
            <div class="text-h5">Saturday, June 20</div>
            <div class="text-h5">Kuna, ID</div>
            <hr>
            <div class="text-h6 q-title">Online registration ends 6/18/2020.</div>
            <div class="text-h6 q-title">Day of ride registration available.</div>
            <div class="text-h6 q-title">Discount offered for teams of 5 or more and for families. Contact for more
              details.</div>
            <hr>
          </div>
        </div>
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
      <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-4 self-center text"
        v-scroll-fire="fadeInImage">
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
        <hr class="routeshr" v-scroll-fire="fadeInImage">
      </div>
      <div class="col-xs-12 col-sm-6 col-md-5 border desktop-only self-center grow" v-for="route in routes">
        <q-card :id="route.id" class="text-center card-container shadow-24 not-loaded">
          <q-card-section>
            <q-btn class="route-btn grow" @click="$router.push(route.url.trim('/'))" outline color="red">
              <span class="text-h3 q-pa-sm">{{route.length}}</span>
            </q-btn>
          </q-card-section>
          <q-card-section class="text-justify">
            <span class="white text-body1">
              {{route.shortDescription}}</span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-11 col-sm-6 col-md-5 mobile-border mobile-only" v-for="route in routes">
        <q-card class="text-center card-container shadow-24">
          <q-card-section>
            <q-btn class="route-btn" @click="$router.push(route.url.trim('/'))" outline color="red">
              <span class="text-h4">{{route.length}}</span>
            </q-btn>
          </q-card-section>
          <q-card-section>
            <span class="white text-justify text-h6">
              {{route.shortDescription}}</span>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row wrap justify-center gen">
      <div class="text-center col-xs-12 col-md-4 self-center">
        <q-btn @click="openURL('https://genesiscommunityhealth.com/about-us/')" flat>
          <img class="gch responsive" src="statics/logos/gch.png" alt="genesis community health logo">
        </q-btn>
      </div>
      <div class="text-italic text-center light-paragraph col-xs-12 col-md-4 self-center text" data-x="80">
        <h6>
          Ride For Hope Idaho is proud to support Genesis Community Health. Genesis Community
          Health is an integrated healthcare facility providing primary medical care, basic dental, mental
          health, specialty referral and medication to the low-income and uninsured in the Treasure
          Valley. The clinic is staffed by volunteers and healthcare providers who donate their time and
          services to care for those who otherwise do not have access to healthcare. The clinic depends
          heavily upon charitable contributions and volunteers to continue to provide these services.
        </h6>
      </div>
      <div class="col-xs-12 col-md-4 text-center self-center">
        <q-btn class="cbtnm" @click="$router.push('/charities')">Learn More</q-btn>
      </div>
    </div>
  </div>

</template>

<script>
  import { openURL } from "quasar";

  export default {
    name: "index",
    data() {
      return {
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
      participantTotal() {
        return this.$store.state.state.participantTotal;
      }
    },
    methods: {
      openURL,
      fadeInImage() {
        this.routes.forEach(route => {
          var el = document.getElementById(route.id)
          el.classList.add('loaded')
        });
      }
    }
  };
</script>

<style scoped>
  .full-vid {
    width: 100%;
  }

  .video-banner{
    background-color: rgba(0,0,0,.6);
    width:100vw;
    padding:1px;
  }

  .desktop-overlay {
    margin-top: 15vh;
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
    height: 7rem;
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
</style>