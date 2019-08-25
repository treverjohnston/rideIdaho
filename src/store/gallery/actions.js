import axios from 'axios';

export function getPictures({ commit, dispatch }) {
    // cl.imageTag('rfh.json', { type: 'list' }).toHtml();
    axios
        .get('https://res.cloudinary.com/treverscloud/image/list/rfh.json')
        .then(res => {
            var pics = res.data.resources;
            commit('setPics', pics);
        })
        .catch(err => {
            commit('handleError', err);
        });
}

export function sendEmail({ commit, dispatch }, obj) {
    console.log('email obj', obj);
    $.ajax({
        url: 'https://formspree.io/rideforhopeidaho@gmail.com',
        method: 'POST',
        data: {
            name: obj.name,
            _email: obj.email,
            phone: obj.phone,
            _subject: obj._subject,
            message: obj.message
        },
        dataType: 'json'
    });
    Notify.create('Message Sent');
}