<template>
  <q-layout ref="layout" class="back ride-back" view="lHh Lpr fff">
    <!-- <q-toolbar class="head desktop-only">
      <q-btn @click="$router.push('/')">
        <img src="statics/logos/RFHIdahoLogo.png" alt="logo" class="mini">
      </q-btn>
      <q-toolbar-title class="desktop-only">
        Ride For Hope Idaho
      </q-toolbar-title>
      <q-btn outline color="red"
        @click="openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventStore.aspx%3FfEID%3D71518%26mSource%3DimAOverview')">
        Just
        Donate
      </q-btn>
    </q-toolbar> -->
    <q-toolbar class="head mobile-only">
      <q-btn class="mobile-only" flat @click="leftDrawerOpen = !leftDrawerOpen">
        <q-icon name="menu" />
      </q-btn>
      <q-btn @click="$router.push('/')">
        <img src="statics/logos/RFHIdahoLogo.png" alt="logo" class="mini">
      </q-btn>
      <q-btn outline color="red"
        @click="openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventStore.aspx%3FfEID%3D71518%26mSource%3DimAOverview')">
        Just
        Donate
      </q-btn>
      <q-btn v-if="openRegistration" class="mobile-only" outline
        @click="openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')"
        color="red">Register
      </q-btn>
      <q-btn v-else class="mobile-only" outline @click="$router.push('/register')" color="red">Register
      </q-btn>
      <!-- <q-btn class="mobile-only">
        <img class="meridian-mobile" @click="openURL('http://www.meridian-cycles.com/')" src="statics/logos/meridian.png"
          alt="Meridian Cycles logo">
      </q-btn> -->
    </q-toolbar>

    <q-tabs align="center" class="shadow-2 tabs head desktop-only">
      <q-route-tab stretch flat class="tab" label="Home" name="home" to="/" />
      <q-tab stretch flat v-if="openRegistration" class="tab text-red" color="red" label="Register" name="reg"
        @click="openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')" />
      <q-route-tab v-else stretch flat class="tab text-red" color="red" label="Register" name="register"
        to="register" />
      <!-- <q-tab class="tab" slot="title" label="Rider Fundraising" name="fundraising"
        @click="openURL('https://www.imathlete.com/#/legacy?url=%2Fdonate%2FRideForHopeIdaho%3Fz%3D1517453663070')" /> -->
      <!-- <q-tab class="tab involved" align="left" name="rider"> -->
      <q-btn-dropdown stretch flat label="Rider Info" name="rider">
        <q-list>
          <q-item>
            <q-btn-dropdown auto-close stretch flat label="Routes" name="rider" class="width_100 tab inner-tab">
              <q-list>
                <q-tabs>
                  <q-route-tab class="tab inner-tab" label="9 Mile" name="rider" to="9-mile" />
                </q-tabs>
                <q-tabs>
                  <q-route-tab class="tab inner-tab" label="19 Mile" name="rider" to="19-mile" />
                </q-tabs>
                <q-tabs>
                  <q-route-tab class="tab inner-tab" label="35 Mile" name="rider" to="35-mile" />
                </q-tabs>
                <q-tabs>
                  <q-route-tab class="tab inner-tab" label="Metric Century" name="rider" to="metric" />
                </q-tabs>
                <q-tabs>
                  <q-route-tab class="tab inner-tab" label="Century" name="rider" to="Century" />
                </q-tabs>
              </q-list>
            </q-btn-dropdown>
          </q-item>
        </q-list>
        <q-item v-close-popup>
          <q-tabs class="width_100">
            <q-tab v-if="openRegistration"
              @click="openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')"
              name="home" class="tab inner-tab width_100 text-red" color="red" label="Register" />
            <q-route-tab v-else name="register" class="tab inner-tab width_100 text-red" color="red" label="Register"
              to="register" />
          </q-tabs>
        </q-item>
        <q-item v-close-popup>
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Packet Pick Up" name="rider" to="packet" />
          </q-tabs>
        </q-item>
        <q-item v-close-popup>
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Rules Of The Road" name="rider" to="rules" />
          </q-tabs>
        </q-item>
        <q-item v-close-popup>
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Start Times And Directions" name="rider" to="ride" />
          </q-tabs>
        </q-item>
        <q-item v-close-popup>
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="How Climbs Are Categorized" name="rider" to="climbs" />
          </q-tabs>
        </q-item>
        <q-item v-close-popup>
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Team Ride For Hope Idaho Information" name="rider" to="team" />
          </q-tabs>
        </q-item>
      </q-btn-dropdown>
      <q-btn-dropdown auto-close stretch flat label="Merchandise" name="merchandise" class="">
        <q-item>
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Jerseys and More" name="merchandise" to="merchandise" />
          </q-tabs>
        </q-item>
        <q-item>
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Raffle Items" name="merchandise" to="raffle" />
          </q-tabs>
        </q-item>
      </q-btn-dropdown>
      <q-route-tab class="tab" label="Sponsors" name="sponsors" to="sponsors" />
      <q-btn-dropdown stretch flat auto-close class="" label="Galleries" name="gallery">
        <q-item>
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="2018 Gallery" name="gallery" to="2018-gallery" />
          </q-tabs>
        </q-item>
        <q-item>
          <q-tabs class="width_100">
            <q-route-tab class="tab inner-tab" label="Past Rides" name="gallery" to="gallery" />
          </q-tabs>
        </q-item>
      </q-btn-dropdown>
      <q-route-tab class="tab" label="About" name="about" to="about" />
      <q-route-tab class="tab" label="Contact" name="contact" to="contact" />
    </q-tabs>

    <q-drawer v-model="leftDrawerOpen" class="mobile-only left-tab">
      <q-list class="mobile-only" link>
        <q-item clickable @click.native="push('/')" v-ripple>
          <q-item-section>Home</q-item-section>
        </q-item>
        <hr class="tabhrs">
        <q-item to="register">
          <q-item-section v-if="openRegistration"
            @click="openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')"
            class="side register" label="Register">Register</q-item-section>
          <q-item-section v-else class="side register" label="Register" @click.native="push('/register')">Register
          </q-item-section>
        </q-item>
        <hr class="tabhrs">
        <!-- <q-item
          @click="openURL('https://www.imathlete.com/#/legacy?url=%2Fdonate%2FRideForHopeIdaho%3Fz%3D1517453663070')"
          class="side" label="Rider Fundraising" />
        <hr class="tabhr"> -->
        </q-expansion-item>
        <q-expansion-item class="side-collapse" label="Rider Information">
          <q-list>
            <hr class="tabhr">
            <q-expansion-item class="margin-left-1" label="Routes">
              <hr class="tabhr">
              <q-item class="small-side" @click.native="push('/9-mile')">
                9 Mile </q-item>
              <hr class="tabhrs">
              <q-item class="small-side" @click.native="push('19-mile')">
                19 Mile </q-item>
              <hr class="tabhrs">
              <q-item class="small-side" @click.native="push('35-mile')">
                35 Mile </q-item>
              <hr class="tabhrs">
              <q-item class="small-side" @click.native="push('metric')">
                Metric Century </q-item>
              <hr class="tabhrs">
              <q-item class="small-side" @click.native="push('Century')">
                Century </q-item>
            </q-expansion-item>
          </q-list>
          <hr class="tabhrs">
          <q-item to="register">
            <q-item-section v-if="openRegistration"
              @click="openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')"
              class="small-side register" label="Register">Register</q-item-section>
            <q-item-section v-else class="small-side register" label="Register">Register</q-item-section>
          </q-item>
          <hr class="tabhrs">
          <q-item class="small-side" @click.native="push('packet')">
            Packet Pick Up </q-item>
          <hr class="tabhr">
          <q-item class="small-side" @click.native="push('rules')">
            Rules of the Road </q-item>
          <hr class="tabhrs">
          <q-item class="small-side" @click.native="push('ride')">
            Start Time/Directions </q-item>
          <hr class="tabhr">
          <q-item class="small-side" @click.native="push('climbs')">
            How Climbs are Categorized </q-item>
          <hr class="tabhr">
          <q-item class="small-side" @click.native="push('team')">
            Team Ride For Hope Idaho Information
          </q-item>
        </q-expansion-item>
        <hr class="tabhr">
        <q-expansion-item class="side-collapse" label="Merchandise">
          <hr class="tabhr">
          <q-item class="small-side left" @click.native="push('merchandise')">
            Jerseys and More </q-item>
          <hr class="tabhrs">
          <q-item class="small-side left" @click.native="push('raffle')">
            Raffle Items </q-item>
        </q-expansion-item>
        <hr class="tabhr">
        <!-- <q-item to="volunteers">
          <q-item class="side" label="Volunteer" />
          <hr class="tabhr">
        </q-item> -->
        <q-item @click.native="push('sponsors')">
          Sponsors
        </q-item>
        <hr class="tabhr">
        <q-expansion-item class="side-collapse" label="Galleries">
          <hr class="tabhr">
          <q-item class="small-side" @click.native="push('2018-gallery')">
            2018 Gallery </q-item>
          <hr class="tabhrs">
          <q-item class="small-side" @click.native="push('gallery')">
            Past Gallery </q-item>
        </q-expansion-item>
        <hr class="tabhr">
        <q-item class="side" @click.native="push('about')">
          About
        </q-item>
        <hr class="tabhr">
        <q-item class="side" @click.native="push('contact')">
          Contact
        </q-item>
        <hr class="tabhr">
      </q-list>
    </q-drawer>
    <router-view />
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
      openURL,
      push(tab) {
        this.$router.push(tab)
        this.leftDrawerOpen = false;
      },
      collapse() {
        this.$refs.popover.close();
        this.$refs.dropdown.hide();
        this.$refs.popoverRoutes.close();
        this.$refs.routePopB.close();
      },
      showVideos() {
        this.showVid = true;
      },
      sesame() {
        this.showSplash = true;
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
                this.openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')
                break;
              case 'give':
                this.openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')
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
                this.openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')
                break;
              case 'give':
                this.openURL('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813')
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
                this.openURL('https://www.google.com/maps/dir/10+barrel+brewing+boise')
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
    mounted() {

      let charityPass = false;
      let timeStamp = Date.now()
      let m = date.formatDate(timeStamp, 'MM')
      let d = date.formatDate(timeStamp, 'DD')
      let y = date.formatDate(timeStamp, 'YYYY')
      if (d == '17' || d == '18' || d == '19' || d == '20' || d == '21' || d == '22' || d == '23' || d == '24' || d == '25' || d == '26' || d == '27' || d == '28' || d == '29' || d == '30' || d == '31') {
        charityPass = true;
      }
      if (m == '01' && charityPass && y == '2019') {
        this.showSwal = true;
      }
      if (this.showSwal) {
        this.charitySwal();
      }
      if (this.earlyRegistration) {
        // setTimeout(this.registerSwal(), 500);
        this.registerSwal();

      }
      // Conditions to display swal
      // let dayPass = false;
      // let timeStamp = Date.now()
      // let m = date.formatDate(timeStamp, 'MM')
      // let d = date.formatDate(timeStamp, 'DD')
      // let y = date.formatDate(timeStamp, 'YYYY')
      // if(d == '10' || d == '11' || d == '12' || d == '13' || d == '14' || d == '15' || d == '16'){
      //   dayPass = true;
      // } 
      // if (m == '07' && dayPass && y == '2018') {
      // this.welcomeSwal();
      // }
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