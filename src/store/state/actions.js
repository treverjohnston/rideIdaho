import axios from 'axios';
import { Notify } from 'quasar'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//www.unorthodoxgifts.com/' : '//localhost:3000/';

var api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

var imathleteBaseUrl = '//legacy.imathlete.com/'
var imathleteAPI = axios.create({
    baseURL: imathleteBaseUrl,
    timeout: 4000
})

export function sendEmail({ commit, dispatch }, obj) {
    api.post('email', obj)
        .then(res => {
            Notify.create({ message: 'Message Sent', color: 'green' });
        })
        .catch(err => {
            Notify.create({ message: 'Message send failed: \n If issue persists, please email rideforhope@gmail.com  \n\n Error:  ' + err, color: 'red' });
        })
}

export function getParticipantTotal({ commit, dispatch }) {

    api.get('api/participants/count')
        .then(res => {
            var body = res.data.data.body;
            var totalStates = body.split('<State>').length - 1;
            var splitRes = body.split('<StateParticipants>');
            var totalParticipants = 0;

            for (let i = 1; i < splitRes.length; i++) {
                const element = splitRes[i];
                var next = element.split('</StateParticipants>')
                totalParticipants += parseInt(next[0]);
            }

            commit('setParticipantTotal', totalParticipants);
            commit('setStateTotal', totalStates);
        })
}
export function getParticipantList({ commit, dispatch }) {

    api.get('api/participants/list')
        .then(res => {
            var body = res.data.data.body;
            var parsedBody = JSON.parse(body);
            var participantArray = parsedBody['d'];
            commit('setParticipantList', participantArray);
        })
}