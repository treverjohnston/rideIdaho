import axios from 'axios';
import { Notify } from 'quasar'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//www.unorthodoxgifts.com/api/' : '//localhost:3000/api/';

var api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

export function getSponsors({ commit }) {
    api(`sponsors`)
        .then(res => {
            var visibleSponsors = [];
            var hiddenSponsors = [];
            for (const item in res.data.data) {
                if (res.data.data.hasOwnProperty(item)) {
                    const element = res.data.data[item];
                    if (element.visible) {
                        visibleSponsors.push(element);
                    } else {
                        hiddenSponsors.push(element);
                    }
                }
            }
            commit('setSponsors', res.data.data)
            commit('setHiddenSponsors', hiddenSponsors)
            commit('setVisibleSponsors', visibleSponsors)
        })
        .catch(err => {
            console.error(err)
        })
}

export function addSponsor({ commit, dispatch }, obj) {
    api.post('sponsors', obj)
        .then(res => {
            dispatch('getSponsors')
        })
        .catch(err => {
            console.error(err)
        })
}

export function toggleVisibility({ commit, dispatch }, obj) {
    api.put(`sponsors/${obj._id}`, obj)
        .then(res => {
            dispatch('getSponsors')
        })
        .catch(err => {
            console.error(err)
        })
}


export function deleteSponsor({ commit, dispatch }, id) {
    api.delete(`sponsors/${id}`)
        .then(res => {
            console.log('deleted', res)
            dispatch('getSponsors')
        })
        .catch(err => {
            console.error(err)
        })
}

export function editSponsor({ commit, dispatch }, obj) {
    api.put(`sponsors/${obj._id}`, obj)
        .then(res => {
            dispatch('getSponsors')
        })
        .catch(err => {
            console.error(err)
        })
}