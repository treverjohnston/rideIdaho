<template>
    <q-layout class="contact black">
        <div class="row wrap justify-center">
            <div class="col-xs-11 col-md-8 text-center">
                <h3 class="desktop-only">Fundraising</h3>
                <h4 class="mobile-only">Fundraising</h4>
                <hr class="width_90">
                <p>Check back soon for information about Fundraising</p>
                <q-btn>Fundraise</q-btn>
            </div>


        </div>
    </q-layout>
</template>

<script>
    import { openURL } from 'quasar'
    export default {
        name: 'Ride',
        data() {
            return {}
        },
        methods: {
            openURL
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