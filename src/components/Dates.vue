<template>
    <div class="row justify-center">
        <h3 class="col-xs-10 text-center">Dates</h3>
        <q-btn @click="dateForm = !dateForm" class="col-xs-4 text-center" color="red">Toggle Dates
            Form
        </q-btn>
        <div v-if="dateForm" class="col-xs-12 dark-back q-mt-lg">
            <div class="row justify-center">
                <div class="col-xs-6">
                    <h5 class="text-white">Add Date</h5>
                </div>
                <div class="col-xs-12">
                    <q-form @submit="addDate" class="q-gutter-md">
                        <div class="row justify-center">
                            <q-input square class="col-xs-10" filled v-model="name" label="Name" bg-color="white"
                                lazy-rules :rules="[ val => val && val.length > 0 || '']" />
                            <q-date v-model="d" class="col-xs-5" />

                        </div>
                        <div>
                            <div class="row justify-center">
                                <div class="col-xs-10">
                                    <q-btn label="Submit" type="submit" class="full-width" color="white" size="xl" flat
                                        no-caps unelevated />
                                </div>
                            </div>
                        </div>
                    </q-form>
                </div>
            </div>
        </div>
        <div class="col-xs-12">

            <div class="row justify-center q-gutter-sm q-mt-lg">
                <div class="col-xs-12 text-bold">
                    *IMPORTANT: Times are in UTC, subtract 6 or 7 (daylight savings) for MST
                </div>
                <div v-for="d in dates" class="col-xs-3 self-center">
                    <q-card class="adminCard">
                        <div class="row justify-center">
                            <div class="col-xs-12">
                                <b>Date Name:</b> {{d.name}}
                            </div>
                            <div class="col-xs-12">
                                <b>Pretty:</b> {{d.stringDate}}

                            </div>
                            <div class="col-xs-12">
                                <b> Raw:</b> {{d.date}}
                            </div>
                            <div class="col-xs-12">
                                <b> Id:</b> {{d.simpleId}}
                            </div>
                            <div class="col-xs-12">
                                <q-separator />
                            </div>
                            <div class="col-xs-12">
                                <q-btn @click="pickDate(d)" flat no-caps>Edit</q-btn>

                            </div>
                        </div>
                    </q-card>
                </div>
            </div>
        </div>
        <q-dialog v-model="editModal" class="">
            <div class="editModal text-center">
                <q-input dark v-model="chosenItemName" type="text" label="Name" />
                <q-date dark v-model="chosenItemDate" mask="YYYY-MM-DD HH:mm" />
                <q-time v-model="chosenItemDate" mask="YYYY-MM-DD HH:mm"  />


                <q-input dark v-model="chosenItemSimpleId" type="text" label="Simple Id" />
                <q-input dark v-model="chosenItemId" type="text" label="ID" disabled />
                <q-btn color="red" no-caps @click="editDate" class="q-mt-sm">Submit Edits</q-btn>
                <q-btn color="red" @click="deleteDate(chosenItemId)" class="q-mt-sm">Delete</q-btn>
            </div>
        </q-dialog>
    </div>
</template>

<script>
    import { openURL } from "quasar";
    import { date } from 'quasar'


    export default {
        name: 'Dates',
        data() {
            return {
                dateForm: false,
                editModal: false,
                name: '',
                chosenItemName: '',
                d: "",
                simpleId:"",
                chosenItemDate: '',
                chosenItemId: '',
                chosenItemSimpleId: ''
            }
        },
        components: {

        },
        computed: {
            dates() {
                return this.$store.state.dates.allDates;
            }
        },
        methods: {
            formatDate(timeStamp) {
                return date.formatDate(timeStamp, 'MMMM DD, YYYY')
            },
            openURL,
            pickDate(d) {
                this.chosenItemName = d.name
                this.chosenItemDate = date.formatDate(d.date, 'YYYY-MM-DD HH:mm')
                this.chosenItemId = d._id
                this.chosenItemSimpleId = d.Simple
                this.editModal = true
            },
            addDate() {
                var obj = {
                    name: this.name,
                    date: this.d,
                    simpleId: this.simpleId,
                    stringDate: this.formatDate(this.d)
                }
                this.$store.dispatch('dates/addDate', obj)
                this.name = '';
                this.d = '';

                this.addingDate = false;
            },
            editDate() {
                var obj = {
                    name: this.chosenItemName,
                    date: this.chosenItemDate,
                    stringDate: this.formatDate(this.chosenItemDate),
                    _id: this.chosenItemId,
                    simpleId: this.chosenItemSimpleId
                }
                this.$store.dispatch('dates/editDate', obj)
                this.editModal = false;
            },
            deleteDate(id) {
                this.$store.dispatch('dates/deleteDate', id)
                this.editModal = false;
            },
        },
        mounted() {
            this.$store.dispatch('dates/getDates')
        },
    }
</script>
<style scoped>
</style>