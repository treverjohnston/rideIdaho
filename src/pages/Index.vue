<template>
  <div>
    <div class="row justify-center media-container">
      <q-media-player class="full-vid" background-color="black" autoplay :source="video" hide-volume-slider mobile-mode
        no-controls loop muted dense playsinline dark>
        <template v-slot:overlay>
          <div class="text-center"
            v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-300px', '0px'], duration: 1000},  easing: 'linear' }">
            <img class="self-center text-center vid-logo desktop-overlay desktop-only"
              src="statics/logos/RFHIdahoLogo.png" alt="RFHI Logo">
            <img class="mini self-center text-center vid-logo mobile-only" src="statics/logos/RFHIdahoLogo.png"
              alt="RFHI Logo">
          </div>
        </template>
      </q-media-player>
    </div>
    <div class="row justify-center spacer text-center dark-background">
      <div class="col-xs-11 mobile-only">
        <span class="text-weight-bold text-h4">Ride For Hope Idaho</span>
        <hr class="hr">
      </div>
      <div class="col-xs-11 col-sm-3 "
        v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['400px', '0px'], duration: 1000},  easing: 'linear' }">
        <div class="text-h5 text-weight-bold">
          Location
        </div>
        <div class="text-h6 text-weight-medium">
          Kuna, Idaho
        </div>
        <hr class="hr">
      </div>
      <div class="col-xs-11 col-sm-3 "
        v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['300px', '0px'], duration: 1000},  easing: 'linear' }">
        <div class="text-h5 text-weight-bold">
          2020 Date
        </div>
        <div class="text-h6 text-weight-medium">
          Saturday, June 20
        </div>
        <hr class="hr">
      </div>
      <div class="col-xs-11 col-sm-3 "
        v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['200px', '0px'], duration: 1000},  easing: 'linear' }">
        <div class="text-h5 text-weight-bold">
          Routes
        </div>
        <div class="text-h6 text-weight-medium">
          5
        </div>
        <hr class="hr">
      </div>
      <div class="col-xs-11 col-sm-3" v-if="participantTotal >= 10"
        v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['100px', '0px'], duration: 1000},  easing: 'linear' }">
        <div class="text-h5 text-weight-bold">
          Current Riders
        </div>
        <div class="text-h6 text-weight-medium" @click="openURL(participantUrl)">
          {{participantTotal}}
        </div>
        <hr class="hr">
      </div>
    </div>

    <div class="row justify-center dark-background">
      <div class="col-xs-12">
        <div class="text-center">
          <div class="promo text-center desktop-only">
            <h1 class="text-weight-bold">Ride For Hope Idaho</h1>
            <div class="text-weight-bold text-h4 soft-red q-mb-md">Supporting Healthcare for the Medically Underserved
            </div>
            <div class="q-title text-h5">Online registration ends 6/18/2020.</div>
            <div class="q-title text-h5">Day of ride registration available.</div>
            <div class="q-title text-h5">Discount offered for teams of 5 or more and for families. Contact for more
              details.
            </div>
          </div>
        </div>
        <div class="promo text-center mobile-only">
          <div
            v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['300px', '0px'], duration: 1000},  easing: 'linear' }">
            <div class="text-weight-bold text-h5 soft-red q-mb-lg">Supporting Healthcare for the Medically Underserved
            </div>
            <div class="text-h6 q-title">Online registration ends 6/18/2020.</div>
            <div class="text-h6 q-title">Day of ride registration available.</div>
            <div class="text-h6 q-title">Discount offered for teams of 5 or more and for families. Contact for more
              details.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer row wrap light-background">
      <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-3 self-center text">
        <b>Ride For Hope Idaho</b> is a charity bicycle event with the firm belief that quality healthcare should be
        accessible
        to everyone. We support the holistic approach to healthcare where true healing focuses not only on symptoms,
        but
        the underlying root cause of disease.
      </h6>
      <div class="text-center col-xs-12 col-md-3">
        <img class="ride self-center xs-gutter" src="statics/logos/RFHIdahoLogo.png" alt="ride for hope logo">
      </div>
      <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-3 self-center text"
        v-scroll-fire="fadeInImage">
        <b>Ride For Hope Idaho</b> is committed to ensuring that 100% of participant fees and donations go directly
        to charity.
        This unique commitment is made possible by charitable contributions from local sponsors which cover the
        entire
        cost of the event.
      </h6>
    </div>
    <div class="row justify-around dark-background">
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
    <div class="row wrap justify-center gen light-background q-mb-md">
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
    <div class="q-gutter-md row wrap justify-center carousel-container bg-white">
      <!-- MOBILE -->
      <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated padding infinite
        autoplay control-color="black" class="bg-white col-xs-8 mobile-only">
        <q-carousel-slide v-for="sponsor in l2" :name="sponsor.name" class="no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-btn flat class="absolute-center" to="sponsors">
              <img class="slide-img-mobile absolute-center" :src="sponsor.logo" :alt="sponsor.name" />
            </q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <!-- DESKTOP -->
      <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated padding arrows
        infinite autoplay class="bg-white col-xs-10 col-sm-4 col-md-3 desktop-only">
        <q-carousel-slide v-for="sponsor in l2" :name="sponsor.name" class=" no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-btn flat class="absolute-center" to="sponsors">
              <img class="slide-img absolute-center" :src="sponsor.logo" :alt="sponsor.name" />
            </q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <q-carousel v-model="slide2" transition-prev="scale" transition-next="scale" swipeable animated padding arrows
        infinite autoplay class="bg-white col-xs-10 col-sm-4 col-md-3 desktop-only">
        <q-carousel-slide v-for="sponsor in l2" :name="sponsor.name" class=" no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-btn flat class="absolute-center" to="sponsors">
              <img class="slide-img absolute-center" :src="sponsor.logo" :alt="sponsor.name" />
            </q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <q-carousel v-model="slide3" transition-prev="scale" transition-next="scale" swipeable animated padding arrows
        infinite autoplay class="bg-white col-xs-10 col-sm-4 col-md-3 desktop-only">
        <q-carousel-slide v-for="sponsor in l2" :name="sponsor.name" class=" no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-btn flat class="absolute-center" to="sponsors">
              <img class="slide-img absolute-center" :src="sponsor.logo" :alt="sponsor.name" />
            </q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>

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
        video: `./statics/video/head.mp4`,
        slide: "Ebenezer Websites LLC",
        slide2: "Lyle Pearson",
        slide3: "Imago Caeli LLC"
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
      },
      participantUrl() {
        return this.$store.state.state.participantUrl;
      },
      l2() {
        return this.$store.state.sponsors.lvl2;
      },
    },
    methods: {
      openURL,
      fadeInImage() {
        this.routes.forEach(route => {
          var el = document.getElementById(route.id)
          el.classList.add('loaded')
        });
      }
    },
    mounted() {
      this.$store.dispatch('state/getParticipantTotal');
    },

  };
</script>

<style scoped>
  .carousel-container {
    height: 30vh;
  }

  .slide-img {
    max-width: 15vw;
  }

  .slide-img-mobile {
    width: 60vw;
  }

  .slide-container {
    position: relative;
  }

  .soft-red {
    color: rgb(190, 30, 30);
  }

  .full-vid {
    width: 100%;
  }

  .media-container {
    width: 100%;
    max-height: 80vh;
    overflow: hidden;
  }

  .desktop-overlay {
    margin-top: 15vh;
  }


  .space {
    margin: 1rem 0 1rem 0
  }

  .pad {
    padding-bottom: 1rem;
  }


  .s {
    width: 70%;
    color: red;
  }


  .gen {
    padding: 1rem 0 1rem 0;
  }

  .light-background {
    background-color: rgba(255, 255, 255, 0.95);
    color: black;
  }

  .vid {
    width: 100vw;
    height: 100vh;
  }

  .video {
    background-color: white;
    color: black;
    padding: 1rem 0 2rem 0;
  }

  .gch {
    width: 20rem;
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


  .back {
    background-color: rgba(0, 0, 0, 0.589);
    color: white;
  }

  .hr {
    width: 80%;
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

  .mini {
    height: 7rem;
  }


  .q-btn {
    text-transform: none;
  }

  .spacer {
    padding: 0.5rem 0 0.5rem 0;
    display: flex;
    justify-content: center;
  }

  .cbtnm {
    background-color: rgba(218, 0, 0, 0.699);
    color: white;
    padding: 0 2rem 0 2rem;
    margin-top: 1rem;
  }

  .card {
    background-color: rgba(197, 7, 7, 0.8);
    padding: 2rem 2rem 2rem 2rem;
  }

  .ride {
    margin: 1rem 0 1rem 0;
    max-height: 13rem;
  }

  .promo {
    padding: 0rem 2rem 6rem 2rem;
    border-radius: 5px;
  }


  .dark-background {
    background-color: rgba(17, 17, 17, 0.8);
    color: white;
  }

  .tab {
    text-transform: none;
    /* background: rgba(8, 8, 8, 0.705); */
  }

  .logo {
    position: absolute;
    transform-style: preserve-3d;
  }
</style>