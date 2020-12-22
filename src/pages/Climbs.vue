<template>
    <q-layout class="bg-neutral-9 text-neutral-3">
        <div class="row justify-center q-mb-xl">
            <div class="col-xs-11 col-md-5 text-center self-center">
                <h3 class="desktop-only">Information About Climbs
                </h3>
                <h5 class="mobile-only">Information About Climbs
                </h5>
                <hr class="">
            </div>
        </div>
        <div class="row justify-around">
            <div class="col-xs-11 col-md-4 text-justify self-center">
                <div class="text-justify text-h6">
                    For any climb to be rated (receive a climb
                    score/category)
                    it must be 500
                    meters in length with an average
                    grade of 3% or more . Climbs are categorized from 4 (easiest) to beyond category (HC) most
                    difficult.
                    Map My Ride has added an additional category 5 rating. All climb scores are based on
                    distance,
                    grade/elevation
                    change, and maximum elevation. The combination of these factors drives all final climb
                    categories
                    and there is no subjective analysis used in the final scoring of any climb score. All other
                    climbs
                    that do not meet the criteria for categorization are simply too small to rate and can
                    usually be
                    crossed easily by bicycle, running or walking.
                </div>
                <div class="text-justify text-h6 q-mt-md">

                    Categorized climb ratings are given by the
                    UCI
                    for
                    races like the Tour de France and other professional cycling events. There are only three
                    categorized
                    climbs involving Ride For Hope Idaho routes. All three of the climbs are rated as category 5
                    climbs
                    using Map My Ride methodology. Two of the climbs are on the Century Route and one climb is
                    on
                    the
                    Metric Century course. The other routes do not have climbs that are steep
                    enough,
                    or
                    long enough, to categorize.
                </div>
                <div class="text-center text-body1 q-mt-md">
                    *Information about climb ratings modified from <a href="https://www.mapmyride.com/routes/climb_information/" target="_blank">Map My Ride</a>
                </div>
            </div>
            <div class="col-xs-11 col-md-5 self-center">
                <q-img src="statics/climbs.png" alt="climb rating information" class="responsive" />
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
    .pad {
        padding: 0 1rem 0 1rem;
    }

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