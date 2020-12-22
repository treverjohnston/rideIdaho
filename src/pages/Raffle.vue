<template>
    <q-layout class="bg-neutral-9 text-neutral-1">
        <div v-if="!openRegistration" class="row wrap justify-center">
            <div class="col-xs-11 col-md-10 text-center">
                <hr color="red" class="hr">
                <h4 class="fancy">Raffle tickets are available for purchase once registration opens</h4>
                <hr color="red" class="hr">
            </div>
        </div>
        <div v-if="openRegistration" class="row wrap justify-center desktop-only">
            <div class="col-xs-11 col-md-10 text-center">
                <hr color="red" class="hr">
                <h3 class="headline text-bold">2020 RAFFLE ITEMS ANNOUNCED AT EVENT</h3>
                <h4 class="fancy">Raffle tickets are available for purchase: </h4>
                <h4>1 ticket for $3</h4>
                <h4>2 tickets for $5</h4>
                <h4>4 tickets for $10</h4>
                <h4>10 tickets for $20</h4>
                <h4 class="fancy">Additional meal tickets are also available for $10</h4>
                <q-btn class="btn shadow-24" no-caps @click="openURL(merchandiseUrl)">
                    Purchase Raffle Tickets</q-btn>
                <hr color="red" class="hr">
            </div>
        </div>
        <div v-if="openRegistration" class="row wrap justify-center mobile-only">
            <div class="col-xs-11 text-center">
                <hr color="red" class="hr">
                <h4 class="headline text-bold">2020 RAFFLE ITEMS ANNOUNCED AT EVENT</h4>
                <h5 class="fancy ">Raffle tickets are available for purchase: </h5>
                <h5>1 ticket for $3</h5>
                <h5>2 tickets for $5</h5>
                <h5>4 tickets for $10</h5>
                <h5>10 tickets for $20</h5>
                <h5 class="fancy">Additional meal tickets are also available for $10</h5>
                <q-btn class="btn shadow-24" no-caps @click="openURL(merchandiseUrl)">
                    Purchase Raffle Tickets</q-btn>
                <hr color="red" class="hr">
            </div>
        </div>
    </q-layout>
</template>

<script>
    import { openURL } from 'quasar'

    export default {
        name: 'Raffle',
        data() {
            return {}
        },
        computed: {
            items() {
                return this.$store.state.raffle.raffles
            },
            openRegistration() {
                return this.$store.state.state.openRegistration
            },
            merchandiseUrl() {
                return this.$store.state.state.merchandiseUrl;
            }
        },
        methods: {
            openURL,
        }
    }
</script>

<style scoped>
    .back {
        background-color: transparent;
    }

    .btn {
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
        padding: 1rem 1rem 1rem 1rem;
        margin: 1rem 0 1rem 0;
    }

    .headline {
        /* text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2); */
    }

    .hr {
        width: 80%;
    }

    .top {
        background-color: rgba(160, 160, 160, 0.507);
        margin: 3rem 0 3rem 0;
        padding: 2rem 0 1rem 0;
    }

    .img {
        max-height: 20rem;
    }

    .raffle {
        /* background-image: url("../statics/road.jpg"); */
        background-size: cover;
        overflow: auto;
        background-attachment: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .pics {
        background-color: rgba(160, 160, 160, 0.507);
        margin: 0 10rem 0 10rem;
        padding-top: 2rem;
    }

    .pics-mobile {
        background-color: rgba(160, 160, 160, 0.507);
    }
</style>