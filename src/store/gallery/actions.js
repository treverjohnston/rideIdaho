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