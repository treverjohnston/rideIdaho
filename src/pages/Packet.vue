<template>
    <q-layout class="bg-neutral-9 text-neutral-1">
        <div class="row wrap justify-center text-center">
            <div class="col-xs-11 col-md-10 text-center">
                <h2 class="desktop-only">Packet Pick Up</h2>
                <h4 class="mobile-only">Packet Pick Up</h4>
                <hr class="width_90">
                <h5>Check back in 2022 for packet pick up information.</h5>
            </div>
            <!-- TODO: 2022 add back in -->
            <!-- <div class="col-xs-12 col-sm-5">
                <h5>
                    <b>Date: </b>Friday, June 25, 2021</h5>
                <h5>
                    <b>Time: </b>4pm-7pm</h5>
            </div>
            <div class="col-xs-12 col-sm-5">
                <h4 class="text-bold">Meridian Cycles</h4>
                <h5>1203 N. Main St.</h5>
                <h5> Meridian, ID 83642</h5>
            </div> -->

        </div>
    </q-layout>
</template>

<script>
    export default {
        name: 'Ride',
        data() {
            return {}
        },
        methods: {
        }
    }
</script>

<style scoped>
    .frame {
        width: 100%;
        height: 80vh;
    }

    .img {
        height: 60vh;
        margin-top: 3rem;
        border: 5px solid black;

    }

    .bot {
        margin: 3rem 0 0 0;
    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);
    }

    .width_90 {
        width: 90%;
    }

    .hr {
        width: 20%
    }
</style>