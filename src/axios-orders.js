import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7f2b4.firebaseio.com/'
});

export default instance;