<template>
    <div class="background">
        <div class="row justify-center" v-if="!loggedIn">
            <div class="col-xs-10">
                <div class="row justify-center">
                    <div class="col-xs-10 col-md-6">
                        <q-input filled v-model="email" label="Email" lazy-rules
                            :rules="[ val => val && val.length > 0 || '']" />
                        <q-input filled v-model="password" label="Password" type="password" lazy-rules
                            :rules="[ val => val && val.length > 0 || '']" />
                    </div>
                </div>
                <div class="row justify-center">
                    <div class="col-xs-6">
                        <q-btn @click="login" color="blue" class="q-mt-sm">Login</q-btn>
                    </div>
                </div>
            </div>
        </div>
        <template v-if="admin">
            <div class="row justify-center text-center" v-else>
                <h3 class="col-xs-10 text-center">Sponsors</h3>
                <q-btn @click="addingSponsor = !addingSponsor" class="col-xs-4 text-center" color="red">Toggle Sponsor
                    Form
                </q-btn>
                <div v-if="addingSponsor" class="col-xs-12 dark-back q-mt-lg">
                    <div class="row justify-center">
                        <div class="col-xs-6">
                            <h5 class="text-white">Add Sponsor</h5>
                        </div>
                        <div class="col-xs-12">
                            <q-form @submit="addSponsor" class="q-gutter-md">
                                <div class="row justify-center">
                                    <q-input square class="col-xs-10" filled v-model="name" label="Name"
                                        bg-color="white" lazy-rules :rules="[ val => val && val.length > 0 || '']" />
                                    <q-input square class="col-xs-10" filled v-model="logo" label="Logo Link (Optional)"
                                        bg-color="white" />
                                    <q-input square class="col-xs-10" filled v-model="link"
                                        label="Website Link (Optional)" bg-color="white" />
                                    <q-input square class="col-xs-10" filled v-model="level" label="Sponsor Level"
                                        bg-color="white" lazy-rules :rules="[ val => val && val.length > 0 || '']" />
                                    <q-input square class="col-xs-10" filled v-model="description"
                                        label="Description (Optional)" bg-color="white" type="textarea" />
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
                        <div v-for="sponsor in sponsors" class="col-xs-3 self-center">
                            <q-card>
                                Sponsor Level: {{sponsor.level}}
                                <q-btn v-if="sponsor.visible" flat @click="openURL(sponsor.link)" class="greenCard">
                                    <img class="responsive silver silver-space desktop-only" :src="sponsor.logo"
                                        :alt="sponsor.name">
                                    <img class="responsive silver-big-mobile mobile-only" :src="sponsor.logo"
                                        :alt="sponsor.name">
                                </q-btn>
                                <q-btn v-else flat @click="openURL(sponsor.link)" class="redCard">
                                    <img class="responsive silver silver-space desktop-only" :src="sponsor.logo"
                                        :alt="sponsor.name">
                                    <img class="responsive silver-big-mobile mobile-only" :src="sponsor.logo"
                                        :alt="sponsor.name">
                                </q-btn>
                                <q-separator />
                                <q-btn @click="pickSponsor(sponsor)" flat no-caps>Edit</q-btn>
                                <q-btn @click="toggleVisiblity(sponsor._id, sponsor.visible)" flat no-caps>Toggle
                                    visibility
                                </q-btn>
                            </q-card>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <q-dialog v-model="editModal" class="">
            <div class="editModal text-center">
                <q-input dark v-model="chosenItemName" type="text" label="Name" />
                <q-input dark v-model="chosenItemDescription" type="text" label="Description" />
                <q-input dark v-model="chosenItemLogo" type="text" label="Logo" />
                <q-input dark v-model="chosenItemLink" type="text" label="URL" />
                <q-input dark v-model="chosenItemLevel" type="text" label="Level" />
                <q-btn color="red" no-caps @click="editSponsor" class="q-mt-sm">Submit Edits</q-btn>
                <q-btn color="red" @click="deleteSponsor(chosenItemId)" class="q-mt-sm">Delete</q-btn>
            </div>
        </q-dialog>
    </div>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'Admin',
        data() {
            return {
                email: '',
                password: '',
                name: '',
                chosenItemName: '',
                logo: '',
                chosenItemLogo: '',
                link: '',
                chosenItemLink: '',
                level: '5',
                chosenItemLevel: '5',
                description: '',
                chosenItemDescription: '',
                visible: false,
                addingSponsor: false,
                editModal: false
            }
        },
        components: {
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.loggedIn
            },
            sponsors() {
                return this.$store.state.sponsors.allSponsors;
            },
            admin() {
                return this.$store.state.auth.admin;
            }
        },
        mounted() {
            this.$store.dispatch('auth/getAuth');
            this.$store.dispatch('sponsors/getSponsors')
        },
        methods: {
            openURL,
            pickSponsor(sponsor) {
                this.chosenItemName = sponsor.name
                this.chosenItemLogo = sponsor.logo
                this.chosenItemLink = sponsor.link
                this.chosenItemLevel = sponsor.level
                this.chosenItemDescription = sponsor.description
                this.chosenItemId = sponsor._id
                this.editModal = true;
            },
            editSponsor() {
                var obj = {
                    name: this.chosenItemName,
                    description: this.chosenItemDescription,
                    logo: this.chosenItemLogo,
                    link: this.chosenItemLink,
                    level: this.chosenItemLevel,
                    _id: this.chosenItemId
                }
                this.$store.dispatch('sponsors/editSponsor', obj)
                this.editModal = false;
            },
            deleteSponsor(id) {
                this.$store.dispatch('sponsors/deleteSponsor', id)
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
                this.$store.dispatch('sponsors/toggleVisibility', obj);

            },
            addSponsor() {
                var obj = {
                    name: this.name,
                    logo: this.logo,
                    link: this.link,
                    level: this.level,
                    description: this.description,
                    visible: this.visible,
                }
                this.$store.dispatch('sponsors/addSponsor', obj)
                this.name = '';
                this.logo = '';
                this.link = '';
                this.level = '5';
                this.description = '';
                this.visible = false;
                this.addingSponsor = false;
            },
        }

    }
</script>

<style>
    .editModal {
        width: 85vw;
        background-color: rgb(0, 0, 0);
        padding: 1rem;
    }

    .greenCard {
        border: 3px solid green;
    }

    .redCard {
        border: 3px solid red;
    }

    .a-style {
        text-decoration: underline;
        color: blue;
    }

    .background {
        background-color: rgba(255, 255, 255, 0.85);
        color: black;
    }

    .dark-back {
        background-color: rgba(0, 0, 117, 0.699);
    }
</style>