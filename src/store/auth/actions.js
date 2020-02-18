import axios from 'axios'
import { Notify } from 'quasar'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//www.unorthodoxgifts.com/' : '//localhost:3000/';

let auth_api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

export function getAuth({ commit, dispatch }) {
    auth_api('authenticate')
        .then(res => {
            if (res.data.data == null) {
                commit('setLoginStatus', false)
                console.error("Login Failed")
            }
            else if (res.data.data._id !== null) {
                commit('setLoginStatus', true)
                commit('setUserInfo', res.data.data)
            } else {
                commit('setLoginStatus', false)
                console.error("Login Failed")
            }
        })
        .catch(err => {
        })
}

export function login({ commit, dispatch }, obj) {
    auth_api.post('login', obj)
        .then(res => {
            if (res.data.error) {
                swal({
                    title: 'Login Failed',
                    text: res.data.message,
                    timer: 2000
                })
                return;
            }
            commit('setLoginStatus', true)
            commit('setUserInfo', res.data.data)

        })
        .catch(err => {
            commit('setLoginStatus', false)
            console.error(err)
        })
}
export function logout({ commit, dispatch }) {
    auth_api.delete('logout')
        .then(res => {
            commit('setLoginStatus', false)
            Notify.create({
                message: res.data.message,
                type: 'primary',
                color: 'secondary',
                textColor: 'white',
                position: 'top',
            })
        }).catch(err => {
            console.error(err)
        })
}