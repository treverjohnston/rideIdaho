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
    <div class="row justify-center spacer text-center bg-neutral-2 text-neutral-8">
      <div class="col-xs-11 mobile-only">
        <span class="text-weight-bold text-h4">Ride For Hope Idaho</span>
        <hr class="hr">
      </div>
      <div class="col-xs-11 col-sm-3"
        v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['400px', '0px'], duration: 1000},  easing: 'linear' }">
        <router-link to="ride" class="routerLink text-neutral-8">
          <div class="text-h5 text-weight-bold">
            Location
          </div>
          <div class="text-h6 text-weight-medium">
            Kuna, Idaho
          </div>
        </router-link>
        <hr class="hr">
      </div>
      <!-- TODO: 2022 add back in -->
      <!-- <div class="col-xs-11 col-sm-3 "
        v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['300px', '0px'], duration: 1000},  easing: 'linear' }">
        <router-link to="ride" class="routerLink text-neutral-8">
          <div class="text-h5 text-weight-bold">
            2022 Date
          </div>
          <div class="text-h6 text-weight-medium">
            {{rideDate}}
          </div>
        </router-link>
        <hr class="hr">
      </div>-->
      <div class="col-xs-11 col-sm-3" 
        v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['200px', '0px'], duration: 1000},  easing: 'linear' }">
        <router-link to="all-routes" class="routerLink text-neutral-8">
          <div class="text-h5 text-weight-bold">
            Routes
          </div>
          <div class="text-h6 text-weight-medium">
            5
          </div>
        </router-link>
        <hr class="hr">
      </div>
      <div class="col-xs-11 col-sm-3"
        v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['200px', '0px'], duration: 1000},  easing: 'linear' }">
        <router-link to="about" class="routerLink text-neutral-8">
          <div class="text-h5 text-weight-bold">
            Amount Donated
          </div>
          <div class="text-h6 text-weight-medium" id="number">
            <input readonly class="text-output large-text text-neutral-8" value="$0">
          </div>
        </router-link>
        <hr class="hr">
      </div>
      <!-- <div class="col-xs-11 col-sm-3 text-neutral-8" v-if="participantTotal >= 10 && openRegistration"
        v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['100px', '0px'], duration: 1000},  easing: 'linear' }">
        <div class="text-h5 text-weight-bold" @click="openURL(participantUrl)">
          Current Riders
        </div>
        <div class="text-h6 text-weight-medium" @click="openURL(participantUrl)">
          {{participantTotal}}
        </div>
        <hr class="hr">
      </div> -->
    </div>

    <div class="row justify-center bg-neutral-2 text-neutral-9">
      <div class="col-xs-12">
        <div class="text-center">
          <div class="promo text-center desktop-only">
            <h1 class="text-weight-bold">Ride For Hope Idaho</h1>
            <div class="text-weight-bold text-h4 text-primary-3 q-mb-md">Supporting Healthcare for the Medically
              Underserved
            </div>
            <!-- <span v-if="openRegistration">
              <div class="q-title text-h5">Online registration ends 7/4/2021.</div>
              <div class="q-title text-h5">Day of ride registration available.</div>
              <div class="q-title text-h5">Discount offered for teams of 5 or more and for families. Contact for more
                details.
              </div>
            </span> -->
            <span v-if="openRegistration">
              <!-- TODO: 2022 add back in -->
              <!-- <div class="q-title text-h5">Registration is now open for <i><b>Ride For Hope Idaho 2021 </b></i> Virtual
                Event!</div>
              <div class="q-title text-h5">Registration Fee: $35.00 —
                100% donation for Genesis Community Health in Garden City</div>
              <div class="q-title text-h5">Log in to any of the great platforms out there that you use and name the
                ride:
                <b><i><u>“Ride For Hope Idaho 2021”</u></i></b>
              </div>
              <div class="q-title text-h5">For more information, check out the Registration page</div>
              <q-btn class="cbtnm" @click="$router.push('/register')">Register</q-btn> -->

            </span>
          </div>
        </div>
        <div class="promo text-center mobile-only">
          <div
            v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['300px', '0px'], duration: 1000},  easing: 'linear' }">
            <div class="text-weight-bold text-h5 text-primary-3 q-mb-lg">Supporting Healthcare for the Medically
              Underserved
            </div>
            <!-- <span v-if="openRegistration">
              <div class="text-h6 q-title">Online registration ends 7/4/2021.</div>
              <div class="text-h6 q-title">Day of ride registration available.</div>
              <div class="text-h6 q-title">Discount offered for teams of 5 or more and for families. Contact for more
                details.</div>
            </span> -->
            <span v-if="openRegistration">
            <!-- TODO: 2022 add back in -->
              <!-- <div class="text-body1 q-title">Registration is now open for <i><b>Ride For Hope Idaho 2021 </b></i> Virtual
                Event!</div>
              <div class="text-body1 q-title">Registration Fee: $35.00 —
                100% donation for Genesis Community Health in Garden City</div>
              <div class="text-body1 q-title">Log in to any of the great platforms out there that you use and name the
                ride:
                <b><i><u>“Ride For Hope Idaho 2021”</u></i></b>
              </div>
              <div class="text-body1 q-title">For more information, check out the Registration page</div>
              <q-btn class="cbtnm" @click="$router.push('/register')">Register</q-btn> -->
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer row justify-center bg-neutral-9 text-neutral-2 ">

      <div class="para col-xs-10 col-md-5 text-center desktop-only self-center q-mr-xl">
        <iframe width="100%" height="550" src="https://www.youtube-nocookie.com/embed/3fNAnhqBxGo" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="text-center light-paragraph col-xs-12 col-md-3 self-center text desktop-only q-ml-xl">
        <div class="row justify-center">
          <h6 class="text-center light-paragraph col-xs-12 self-center text">
            <b>Ride For Hope Idaho</b> is a charity bicycle event with the firm belief that quality healthcare should be
            accessible
            to everyone. We support the holistic approach to healthcare where true healing focuses not only on symptoms,
            but
            the underlying root cause of disease.
          </h6>

          <h6 class="text-center light-paragraph col-xs-12 self-center text" v-scroll-fire="fadeInImage">
            <b>Ride For Hope Idaho</b> is committed to ensuring that 100% of participant fees and donations go directly
            to charity.
            This unique commitment is made possible by charitable contributions from local sponsors which cover the
            entire
            cost of the event.
          </h6>
        </div>
      </div>

      <div class="text-center light-paragraph col-xs-12 self-center text mobile-only">
        <div class="row justify-center">

          <span class="text-center light-paragraph col-xs-12 col-sm-8  self-center text text-body1">
            <b>Ride For Hope Idaho</b> is a charity bicycle event with the firm belief that quality healthcare should be
            accessible
            to everyone. We support the holistic approach to healthcare where true healing focuses not only on symptoms,
            but
            the underlying root cause of disease.
          </span>

          <div class="para col-xs-11 text-center  mobile-only">
            <iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/3fNAnhqBxGo" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <span class="text-center light-paragraph col-xs-12 col-sm-8  self-center text text-body1"
            v-scroll-fire="fadeInImage">
            <b>Ride For Hope Idaho</b> is committed to ensuring that 100% of participant fees and donations go directly
            to charity.
            This unique commitment is made possible by charitable contributions from local sponsors which cover the
            entire
            cost of the event.
          </span>
        </div>
      </div>
    </div>
    <div class="row justify-around bg-neutral-2 text-neutral-8">
      <div class="col-xs-12 text-center">
        <q-card-section>
          <h2>Routes</h2>
        </q-card-section>
        <hr class="routeshr" v-scroll-fire="fadeInImage">
      </div>

      <RouteCarousel></RouteCarousel>
    </div>

    <div class="row wrap justify-center gen bg-neutral-9">
      <div class="text-center light-paragraph col-xs-12 col-sm-7 col-md-4 self-center text text-neutral-2 desktop-only"
        data-x="80">
        <h6>
          <b>Ride For Hope Idaho</b> is proud to support Genesis Community Health. Genesis Community
          Health is an integrated healthcare facility providing primary medical care, basic dental, mental
          health, specialty referral and medication to the low-income and uninsured in the Treasure
          Valley. The clinic is staffed by volunteers and healthcare providers who donate their time and
          services to care for those who otherwise do not have access to healthcare. The clinic depends
          heavily upon charitable contributions and volunteers to continue to provide these services.
        </h6>
      </div>
      <div class="text-center light-paragraph col-xs-11 col-sm-8 col-md-7 self-center text text-neutral-2 mobile-only"
        data-x="80">
        <span class="text-body1">
          <b>Ride For Hope Idaho</b> is proud to support Genesis Community Health. Genesis Community
          Health is an integrated healthcare facility providing primary medical care, basic dental, mental
          health, specialty referral and medication to the low-income and uninsured in the Treasure
          Valley. The clinic is staffed by volunteers and healthcare providers who donate their time and
          services to care for those who otherwise do not have access to healthcare. The clinic depends
          heavily upon charitable contributions and volunteers to continue to provide these services.
        </span>
      </div>
      <div class="col-xs-12 col-md-4 text-center self-center">
        <div class="row justify-center">
          <div class="col-xs-12">
            <q-btn @click="openURL('https://genesiscommunityhealth.com/')" class=" q-mb-lg " flat>
              <img class="gch responsive" src="statics/logos/gch.png" alt="genesis community health logo">
            </q-btn>
          </div>
          <div class="col-xs-12">
            <q-btn class="mobile-only" size="md" color="accent-4"
              @click="openURL('https://genesiscommunityhealth.com/')">Learn More</q-btn>
            <q-btn class="desktop-only" size="lg" color="accent-4"
              @click="openURL('https://genesiscommunityhealth.com/')">Learn More</q-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="q-gutter-md row wrap justify-center carousel-container bg-neutral-9">
      <!-- MOBILE -->
      <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated padding infinite
        autoplay control-color="black" class="bg-neutral-9 col-xs-5 mobile-only">
        <q-carousel-slide v-for="sponsor in l2" :name="sponsor.name" class="no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-btn flat class="absolute-center" @click="openURL(sponsor.link)">
              <img class="slide-img-mobile absolute-center" :src="sponsor.logo" :alt="sponsor.name" />
            </q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <q-carousel v-model="slide2" transition-prev="scale" transition-next="scale" swipeable animated padding infinite
        autoplay control-color="black" class="bg-neutral-9 col-xs-5 mobile-only">
        <q-carousel-slide v-for="sponsor in l2" :name="sponsor.name" class="no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-btn flat class="absolute-center" @click="openURL(sponsor.link)">
              <img class="slide-img-mobile absolute-center" :src="sponsor.logo" :alt="sponsor.name" />
            </q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <!-- DESKTOP -->
      <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" animated padding infinite autoplay
        class="bg-neutral-9 col-xs-10 col-sm-4 col-md-3 desktop-only">
        <q-carousel-slide v-for="sponsor in l2" :name="sponsor.name" class=" no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-btn flat class="absolute-center" @click="openURL(sponsor.link)">
              <img class="slide-img absolute-center" :src="sponsor.logo" :alt="sponsor.name" />
            </q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <q-carousel v-model="slide2" transition-prev="scale" transition-next="scale" animated padding infinite autoplay
        class="bg-neutral-9 col-xs-10 col-sm-4 col-md-3 desktop-only">
        <q-carousel-slide v-for="sponsor in l2" :name="sponsor.name" class=" no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-btn flat class="absolute-center" @click="openURL(sponsor.link)">
              <img class="slide-img absolute-center" :src="sponsor.logo" :alt="sponsor.name" />
            </q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <q-carousel v-model="slide3" transition-prev="scale" transition-next="scale" animated padding infinite autoplay
        class="bg-neutral-9 col-xs-10 col-sm-4 col-md-3 desktop-only">
        <q-carousel-slide v-for="sponsor in l2" :name="sponsor.name" class=" no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-btn flat class="absolute-center" @click="openURL(sponsor.link)">
              <img class="slide-img absolute-center" :src="sponsor.logo" :alt="sponsor.name" />
            </q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>

    </div>
    <q-dialog v-model="modalDialog">
      <q-card>
        <q-toolbar>
          <q-avatar>
            <img src="statics/logos/RFHIdahoLogo.png">
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold">Ride For Hope Idaho</span></q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section v-for="modal in modalCallouts">
          <span class="text-body1">
            {{modal}}
          </span>
        </q-card-section>
        <h4 class="text-center signature">
          <em>
            <b>Team Ride For Hope Idaho</b>
          </em>
        </h4>
        <q-card-section class="text-center">
          <q-btn size="lg" color="accent-4" @click="openURL('https://genesiscommunityhealth.com/donate/')">Donate</q-btn>
        </q-card-section>
        <!-- <q-card-section class="text-center">
          <q-btn class="cbtnm" @click="$router.push('/register')">Register</q-btn>
        </q-card-section> -->
      </q-card>
    </q-dialog>
  </div>

</template>

<script>
  import { openURL } from "quasar";
  import anime from "animejs";
  import RouteCarousel from '../components/RouteCarousel.vue'
  import { date } from 'quasar'

  export default {
    name: "index",
    data() {
      return {
        showVid: false,
        showSplash: false,
        showSwal: false,
        showModal: false,
        modalDialog: true,
        video: `./statics/video/head.mp4`,
        slide: "Ebenezer Websites LLC",
        slide2: "Lyle Pearson",
        slide3: "Imago Caeli LLC",
        modalCallouts: [
          "We regret that the 2022 Ride For Hope Idaho will not take place.",
        "If you would still like to support the cause, you can donate directly to Genesis Community Health by following the link below.",
        "If you are interested in becoming the Premier Sponsor for the 2023 Ride For Hope Idaho, please send us a message through the Contact page. We would love to hear from you!"
        ],
      };
    },
    components: {
      RouteCarousel
    },
    computed: {
      routes() {
        return this.$store.state.routes.routes;
      },
      openRegistration() {
        return this.$store.state.dates.openRegistration;
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
      rideDate() {
        var start = date.formatDate(this.$store.state.dates.rideDate.date, "dddd, MMMM DD");
        var end = date.formatDate(this.$store.state.dates.endRideDate.date, "dddd, MMMM DD");
        if (new Date(end) > new Date(start)) {
          return start + " - " + end;
        }
        return start;
      },
      modalDate() {
        return date.formatDate(this.$store.state.dates.modalDate.date, "dddd, MMMM DD");
      },
      showModal() {
        let modalDate = this.modalDate;

        let date = new Date();
        console.log(this.$store.state.dates.modalDate.date)
        console.log('modal', modalDate)
        if (date < modalDate) {
          this.modalDate = true;
          this.modalDialog = true;
        }
      }
    },
    methods: {
      openURL,
      fadeInImage() {
        this.routes.forEach(route => {
          var el = document.getElementById(route.id)
          el.classList.add('loaded')
        });
      },
      animateNumber() {
        anime({
          targets: '#number input',
          value: '$' + '66500',
          round: 1,
          easing: 'easeInOutExpo',
          duration: 3333
        });
      }
    },
    mounted() {
      // this.$store.dispatch('state/getParticipantTotal');
      this.$store.dispatch('sponsors/getSponsors')
      this.animateNumber();
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
    width: 40vw;
  }

  .slide-container {
    position: relative;
  }

  .text-primary-3 {
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