<template>
    <div class="background">
        <Login v-if="!loggedIn"></Login>
        <div class="row justify-center text-center" v-else>
            <template v-if="admin">
                <h3 class="col-xs-10 text-center">Routes</h3>
                <q-btn @click="addingRoute = !addingRoute" class="col-xs-4 text-center" color="red">Toggle Route
                    Form
                </q-btn>
                <div v-if="addingRoute" class="col-xs-12 dark-back q-mt-lg">
                    <div class="row justify-center">
                        <div class="col-xs-6">
                            <h5 class="text-white">Add Route</h5>
                        </div>
                        <div class="col-xs-12">
                            <q-form @submit="addRoute" class="q-gutter-md">
                                <div class="row justify-center">
                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="Headline" type="text"
                                        label="Headline" />
                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="EarlyReg" type="text"
                                        label="Early Registration Cost ($65)" />
                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="Reg" type="text"
                                        label="Registration Cost ($75)" />
                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="Url" type="text"
                                        label="URL (/routes/9-mile)" />
                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="Length" type="text"
                                        label="Length (9 Mile)" />
                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="MapLink" type="text"
                                        label="Map My Ride link" />

                                    <span class="col-xs-8" v-for="stop in RestStops">
                                        <div class="box">
                                            <div class="title">
                                                {{stop}}
                                            </div>
                                            <q-btn @click="removeRestFromForm(stop)">Remove Rest Stop
                                            </q-btn>
                                            <hr>
                                        </div>
                                    </span>
                                    <q-input square class="col-xs-5 q-mt-md" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="tempRestStop"
                                        type="text" label="Rest Stop" />
                                    <q-btn color="red" class="col-xs-3" @click.native="addRestToForm">Add Rest Stop
                                    </q-btn>

                                    <q-input square class="col-xs-10" disabled filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="RestStops"
                                        type="textarea" label="Rest Stop (Array of Strings)" />
                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="BtnClass" type="text"
                                        label="Button Class (btn color bg-purple)" />
                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="Frame" type="text"
                                        label="iFrame Link" />
                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="FrameMobile" type="text"
                                        label="Mobile iFrame Link" />
                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="StartTime" type="text"
                                        label="Start Time (11:00 AM*)" />

                                    <span class="col-xs-8" v-for="map in OtherMaps">
                                        <div class="box">
                                            <div class="title">
                                                {{map.order}}: {{map.title}}
                                            </div>
                                            <div class="link">{{map.link}}</div>
                                            <q-btn @click="removeMapLinkFromForm(map.title,map.link)">Remove Link
                                            </q-btn>
                                            <hr>
                                        </div>
                                    </span>
                                    <q-input square class="col-xs-8 q-mt-md" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="mapLinkLink" type="text"
                                        label="Map Link URL" />
                                    <q-input square class="col-xs-5" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="mapLinkTitle"
                                        type="text" label="Map Link Name (Map My Ride)" />
                                    <q-btn color="red" class="col-xs-3" @click.native="addMapLinkToForm">Add Map Link
                                    </q-btn>
                                    <q-btn color="red" class="col-xs-3" @click.native="changeMapLinkOrderUp">Up Map Link
                                        Order
                                    </q-btn>
                                    <q-btn color="red" class="col-xs-3" @click.native="changeMapLinkOrderDown">Down Map
                                        Link Order
                                    </q-btn>
                                    <q-input disabled square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="OtherMaps"
                                        type="textarea" label="Short Description (Front Page)" />

                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="ShortDescription"
                                        type="textarea" label="Short Description (Front Page)" />
                                    <q-input square class="col-xs-10" filled bg-color="white" lazy-rules
                                        :rules="[ val => val && val.length > 0 || '']" v-model="Description"
                                        type="textarea" label="Description (Route Page" />
                                    <q-checkbox v-model="visible" class="col-xs-10 text-white">Publicly Visible
                                    </q-checkbox>
                                </div>
                                <div>
                                    <div class="row justify-center">
                                        <div class="col-xs-10">
                                            <q-btn label="Submit" type="submit" class="full-width" color="white"
                                                size="xl" flat no-caps unelevated />
                                        </div>
                                    </div>
                                </div>
                            </q-form>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 q-mt-xl q-mb-xl">
                    <div class="row justify-center q-gutter-sm">
                        <div v-for="route in routes" class="col-xs-3 self-center">
                            <q-card class="adminCard">
                                <div class="row justify-center">
                                    {{route}}
                                </div>
                            </q-card>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <q-dialog v-model="editModal" class="">
            <div class="editModal text-center">
                <q-input dark v-model="cHeadline" type="text" label="Headline" />
                <q-input dark v-model="cEarlyReg" type="text" label="Early Registration Cost ($65)" />
                <q-input dark v-model="cReg" type="text" label="Registration Cost ($75)" />
                <q-input dark v-model="cUrl" type="text" label="URL (/routes/9-mile)" />
                <q-input dark v-model="cLength" type="text" label="Length (9 Mile)" />
                <q-input dark v-model="cMapLink" type="text" label="Map My Ride link" />
                <q-input dark v-model="cRestStops" type="text" label="Rest Stop (Array of Strings)" />
                <q-input dark v-model="cBtnClass" type="text" label="Button Class (btn color bg-purple)" />
                <q-input dark v-model="cFrame" type="text" label="iFrame Link" />
                <q-input dark v-model="cFrameMobile" type="text" label="Mobile iFrame Link" />
                <q-input dark v-model="cStartTime" type="text" label="Start Time (11:00 AM*)" />
                <q-input dark v-model="cOtherMaps" type="text" label="Other Maps (Array of Objects {title, link})" />
                <q-input dark v-model="cShortDescription" type="text" label="Short Description (Front Page)" />
                <q-input dark v-model="cDescription" type="text" label="Description (Route Page" />
                <q-btn color="red" no-caps @click="editRoute" class="q-mt-sm">Submit Edits</q-btn>
                <q-btn color="red" @click="deleteRoute(chosenItemId)" class="q-mt-sm">Delete</q-btn>
            </div>
        </q-dialog>
    </div>
</template>

<script>
    import { openURL } from 'quasar'
    import Login from 'components/Login.vue'
    export default {
        name: 'Admin',
        data() {
            return {
                tempRestStop: '',
                mapLinkTitle: '',
                mapLinkLink: '',
                visible: false,
                addingRoute: false,
                editModal: false,
                Id: 0,
                EarlyReg: '',
                Reg: '',
                Url: '',
                Length: '',
                MapLink: '',
                RestStops: [],
                BtnClass: '',
                Headline: '',
                Frame: '',
                FrameMobile: '',
                StartTime: '',
                OtherMaps: [],
                ShortDescription: '',
                Description: '',
                cId: 0,
                cEarlyReg: '',
                cReg: '',
                cUrl: '',
                cLength: '',
                cMapLink: '',
                cRestStops: [],
                cBtnClass: '',
                cHeadline: '',
                cFrame: '',
                cFrameMobile: '',
                cStartTime: '',
                cOtherMaps: [],
                cShortDescription: '',
                cDescription: ''
            }
        },
        components: {
            Login
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.loggedIn
            },
            routes() {
                return this.$store.state.routes.routes;
            },
            admin() {
                return this.$store.state.auth.admin;
            }
        },
        mounted() {
            this.$store.dispatch('auth/getAuth');
            this.$store.dispatch('routes/getRoutes')
        },
        methods: {
            openURL,
            editRoute() {
                var obj = {
                    id: this.cId,
                    _id: this.cId,
                    earlyReg: this.cEarlyReg,
                    reg: this.cReg,
                    url: this.cUrl,
                    length: this.cLength,
                    mapLink: this.cMapLink,
                    restStops: this.cRestStops,
                    btnClass: this.cBtnClass,
                    headline: this.cHeadline,
                    frame: this.cFrame,
                    frameMobile: this.cFrameMobile,
                    startTime: this.cStartTime,
                    otherMaps: this.cOtherMaps,
                    shortDescription: this.cShortDescription,
                    description: this.cDescription
                }
                this.$store.dispatch('routes/editRoute', obj)
                this.editModal = false;
            },
            deleteRoute(id) {
                this.$store.dispatch('routes/deleteRoute', id)
                this.editModal = false;
            },
            login() {
                var obj = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('auth/login', obj)
                if (this.loggedIn) {
                    this.$router.push('/admin/reports');
                }
            },
            toggleVisiblity(id, visible) {
                var obj = {
                    _id: id,
                    visible: !visible
                }
                this.$store.dispatch('routes/toggleVisibility', obj);

            },
            addRoute() {
                var obj = {
                    earlyReg: this.EarlyReg,
                    reg: this.Reg,
                    url: this.Url,
                    length: this.Length,
                    mapLink: this.MapLink,
                    restStops: this.RestStops,
                    btnClass: this.BtnClass,
                    headline: this.Headline,
                    frame: this.Frame,
                    frameMobile: this.FrameMobile,
                    startTime: this.StartTime,
                    otherMaps: this.OtherMaps,
                    shortDescription: this.ShortDescription,
                    description: this.Description,
                    visible: this.visible,
                }
                this.$store.dispatch('routes/addRoute', obj)
                this.addingRoute = false;
            },
            addMapLinkToForm() {
                var obj = { title: this.mapLinkTitle, link: this.mapLinkLink, order: this.otherMaps.length };
                var tempMaps = this.OtherMaps;
                tempMaps.push(obj);
                this.OtherMaps = tempMaps;
            },
            upMapLinkOrder(title, order) {
                this.otherMaps.forEach(obj => {
                    if (obj.title === title) {
                        this.otherMaps.order = order;
                    }
                })
                this.otherMaps.sort(function (a, b) { return a.order - b.order });
            },
            removeMapLinkFromForm(title, link) {
                var validObjects = [];
                var maps = this.OtherMaps;
                maps.forEach(obj => {
                    if (obj.title === title) {
                    }
                    else {
                        validObjects.push(obj);
                    }
                });
                this.OtherMaps = validObjects;
            },
            addRestToForm() {
                this.RestStops.push(this.tempRestStop);
            },
            removeRestFromForm(title) {
                var validObjects = [];
                var rests = this.RestStops;
                rests.forEach(obj => {
                    if (obj === title) {
                    }
                    else {
                        validObjects.push(obj);
                    }
                });
                this.RestStops = validObjects;
            }

        }

    }
</script>

<style>
    .box {
        background-color: white;
        color: black;
        padding: .5rem;
    }
</style>