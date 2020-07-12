import axios from 'axios';
import { Notify } from 'quasar'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//unorthodox-posts.herokuapp.com/api/' : '//localhost:3000/api/';

var api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})
