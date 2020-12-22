<template>
    <q-layout class="black">
        <div class="row justify-center">
            <div class="col-xs-12 bg-neutral-9 full-page">
                <div class=""
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-300px', '25px'], duration: 1000},  easing: 'linear' }">
                    <div class="row wrap justify-center">
                        <div class="col-xs-12 text-center">
                            <h2>Contact Us</h2>
                            <hr class="hr">
                            <h5 class="desktop-only">Please contact us anytime with any questions or inquiries!</h5>
                            <h6 class="mobile-only">Please contact us anytime with any questions or inquiries!</h6>
                        </div>
                    </div>
                    <div class="row justify-center bot desktop-only xs-gutter">
                        <div class="col-xs-3 self-center space">
                            <img src="statics/logos/RFHIdahoLogo.png" class="responsive img"
                                alt="Ride for hope idaho logo">
                        </div>
                        <div class="col-xs-7 self-center">
                            <q-input v-model="name" label="Name" name="name" type="text" />
                            <q-input v-model="email" label="Email" name="email" type="email" />
                            <q-input v-model="phone" label="Phone" name="phone" type="tel" />
                            <q-input v-model="subject" label="Subject" name="subject" type="text" />
                            <q-input v-model="message" type="textarea" name="message" label="Message" :max-height="100"
                                :min-rows="5" />
                            <q-btn @click="sendEmail" outline color="black" class="q-mt-sm">Send</q-btn>
                        </div>
                    </div>
                    <div class="row wrap justify-center mobile-only">
                        <div class="col-xs-11">
                            <q-input v-model="name" label="Name" name="name" />
                            <q-input v-model="email" label="Email" name="email" />
                            <q-input v-model="phone" label="Phone" name="phone" />
                            <q-input v-model="subject" label="Subject" name="subject" />
                            <q-input v-model="message" type="textarea" name="message" label="Message" :max-height="100"
                                :min-rows="5" />
                            <q-btn @click="sendEmail" outline color="black" class="q-mt-sm">Send</q-btn>
                        </div>
                        <div class="col-xs-10 bot">
                            <img src="statics/logos/RFHIdahoLogo.png" class="responsive img"
                                alt="Ride for hope idaho logo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import { openURL, Notify } from 'quasar'
    export default {
        name: 'Contact',
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            }
        },
        methods: {
            openURL,
            sendEmail() {
                if (this.name == '' || this.email == '' || this.subject == '' || this.message == '') {
                    Notify.create({
                        message: 'Something went wrong, please try again. Be sure to check all fields are filled out.',
                        color: 'red'
                    })
                    return
                }
                var obj = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    subject: this.subject,
                    message: this.message,
                    from: "rfhi"
                }
                this.$store.dispatch('state/sendEmail', obj)
            }
        }
    }
</script>

<style scoped>
    .full-page{
        min-height: 100vh;
    }
    .space {
        padding-right: 3rem;
    }

    .img {
        border: 5px solid black;
    }

    .bot {
        margin: 3rem 0 3rem 0;
    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);
    }

    .hr {
        width: 20%
    }
</style>