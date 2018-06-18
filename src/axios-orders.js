import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-7d3fb.firebaseio.com'
});

export default instance;