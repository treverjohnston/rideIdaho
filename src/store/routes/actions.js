import axios from 'axios';
import { Notify } from 'quasar'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//www.unorthodoxgifts.com/api/' : '//localhost:3000/api/';

var api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

export function getRoutes({ commit }) {
    api(`routes`)
        .then(res => {
            var visibleRoutes = [];
            var hiddenRoutes = [];
            for (const item in res.data.data) {
                if (res.data.data.hasOwnProperty(item)) {
                    const element = res.data.data[item];
                    if (element.visible) {
                        visibleRoutes.push(element);
                    } else {
                        hiddenRoutes.push(element);
                    }
                }
            }
            commit('setRoutes', res.data.data)
        })
        .catch(err => {
            console.error(err)
        })
}

export function addRoute({ commit, dispatch }, obj) {
    api.post('routes', obj)
        .then(res => {
            dispatch('getRoutes')
        })
        .catch(err => {
            console.error(err)
        })
}

export function toggleVisibility({ commit, dispatch }, obj) {
    api.put(`routes/${obj._id}`, obj)
        .then(res => {
            dispatch('getRoutes')
        })
        .catch(err => {
            console.error(err)
        })
}


export function deleteRoute({ commit, dispatch }, id) {
    api.delete(`routes/${id}`)
        .then(res => {
            console.log('deleted', res)
            dispatch('getRoutes')
        })
        .catch(err => {
            console.error(err)
        })
}

export function editRoute({ commit, dispatch }, obj) {
    api.put(`routes/${obj._id}`, obj)
        .then(res => {
            Notify.create({
                message: res.data.data.message,
                type: 'primary',
                color: 'secondary',
                textColor: 'white',
                position: 'top',
            });
            dispatch('getRoutes')
        })
        .catch(err => {
            console.error(err)
        })
}