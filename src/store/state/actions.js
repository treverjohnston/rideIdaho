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
    timeout: 4000,
    headers: { 'Content-Type': 'application/json' }
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
    var settings = {
        "url": "https://legacy.imathlete.com/data/events/services/EventParticipantsService.asmx/GetEventParticipantsList",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({ "parameters": { "EventID": "73331", "UserID": "", "Sort": "na", "PrevEventID": "", "PageIndex": 1, "PageSize": 500, "NameFilter": "", "AgeFrom": 0, "AgeTo": 200, "Gender": "", "FinishTimeFrom": 0, "FinishTimeTo": 70000, "CategoryID": "0", "WaveID": "", "SportID": 0, "TeamNameFilter": "" } }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    // var body = JSON.stringify({ "parameters": { "EventID": "73331", "UserID": "", "Sort": "na", "PrevEventID": "", "PageIndex": 1, "PageSize": 500, "NameFilter": "", "AgeFrom": 0, "AgeTo": 200, "Gender": "", "FinishTimeFrom": 0, "FinishTimeTo": 70000, "CategoryID": "0", "WaveID": "", "SportID": 0, "TeamNameFilter": "" } })

    // imathleteAPI.post('data/events/services/EventParticipantsService.asmx/GetEventParticipantsList', body)
    //     .then(res => {
    //         Notify.create({ message: 'Got participants', color: 'green' });
    //         console.log('RES', res);
    //         var participantTotal = res.data.resources;
    //         commit('setParticipantTotal', participantTotal);
    //     })
    //     .catch(err => {
    //         //Need to get rid of this before go live
    //         Notify.create({ message: 'Get participants failed: \n\n Error:  ' + err, color: 'red' });
    //     })
}