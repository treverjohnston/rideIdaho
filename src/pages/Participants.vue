<template>
    <q-layout class="black">
        <div class="row justify-center">
            <div class="col-xs-11 col-md-10 white-back shadow-24">
                <h6 v-for="team in teams" class="q-ml-sm">
                    {{team.Team}} :
                    {{team.Count}}
                </h6>
                <!-- <h6 v-for="participant in participantList" class="q-ml-sm">
                    {{participant.FullName}}
                </h6> -->
            </div>
        </div>
    </q-layout>
</template>

<script>
    import { openURL, Notify } from 'quasar'
    export default {
        name: 'Participants',
        data() {
            return {
            }
        },
        methods: {
            openURL
        },
        mounted() {
            this.$store.dispatch('state/getParticipantList');
        },
        computed: {
            participantList() {
                return this.$store.state.state.participantList;
            },
            teams() {
                return this.$store.state.state.teamsDictionary;
            },
        }
    }
</script>

<style scoped>
</style>