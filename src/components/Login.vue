<template>
    <div class="row justify-center q-pt-xl q-pb-xl">
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
</template>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',

            }
        },
        components: {
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.loggedIn
            },
            admin() {
                return this.$store.state.auth.admin;
            }
        },
        mounted() {

        },
        methods: {
            login() {
                var obj = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('auth/login', obj)
                if (this.loggedIn) {
                    this.$router.push('/admin/reports');
                }
            }
        }

    }
</script>

<style>
</style>