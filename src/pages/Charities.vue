<template>
    <q-layout class="black">
        <div class="row justify-center">
            <div class="col-xs-11 col-sm-10 white-back">
                <div class="row justify-center">

                    <div class="col-xs-10 text-center">
                        <div class="text-h4">Learn More About Genesis Community Health</div>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center">
                        <iframe src="https://player.vimeo.com/video/214745227" width="100%" height="300" frameborder="0"
                            webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                    <div class="col-xs-12 text-center self-center mobile-only">
                        <hr class="s">
                        <h6>Genesis Community</h6>
                        <h6> Healthcare Overview</h6>
                        <hr class="s">
                    </div>
                    <div class="col-xs-10 col-md-4 text-center self-center">
                        <q-card-section
                            @click="openURL('//www.ktvb.com/news/health/free-primary-health-clinic-wants-to-take-on-more-patients/482912341')"
                            class="mobile-only" overlay-postion="full">
                            <img src="../statics/video_pics/ktvb.jpg" alt="Genesis Info Video" class="responsive">
                        </q-card-section>
                        <q-btn flat
                            @click="openURL('//www.ktvb.com/news/health/free-primary-health-clinic-wants-to-take-on-more-patients/482912341')"
                            class="shadow-24 two desktop-only ">
                            <img src="../statics/video_pics/ktvb.jpg" alt="Genesis Info Video" class="responsive">
                            <!-- <div class="otwo desktop-only">
                                <h5>Genesis Community Healthcare Overview</h5>
                            </div> -->
                        </q-btn>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center">
                        <iframe src="https://player.vimeo.com/video/217763499" width="100%" height="300" frameborder="0"
                            webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'Ride',
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
</style>