import axios from 'axios';
import { Notify } from 'quasar'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//www.unorthodoxgifts.com/' : '//localhost:3000/';

var api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
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