import axios from 'axios';
import { Notify } from 'quasar'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//unorthodox-posts.herokuapp.com/api/' : '//localhost:3000/api/';

var api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

export function getDates({ commit }) {
    api(`dates`)
        .then(res => {
            commit('setDates', res.data)
        })
        .catch(err => {
            console.error(err)
        })
}

export function addDate({ commit, dispatch }, obj) {
    api.post('dates', obj)
        .then(res => {
            dispatch('getDates')
        })
        .catch(err => {
            console.error(err)
        })
}


export function deleteDate({ commit, dispatch }, id) {
    api.delete(`dates/${id}`)
        .then(res => {
            dispatch('getDates')
        })
        .catch(err => {
            console.error(err)
        })
}

export function editDate({ commit, dispatch }, obj) {
    api.put(`dates/${obj._id}`, obj)
        .then(res => {
            Notify.create({
                message: res.statusText,
                type: 'primary',
                color: 'secondary',
                textColor: 'white',
                position: 'top',
            });
            dispatch('getDates')
        })
        .catch(err => {
            console.error(err)
        })
}