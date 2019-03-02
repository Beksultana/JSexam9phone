import axios from 'axios';

const axiosContacts = axios.create({
    baseURL: 'https://exam-js.firebaseio.com/'
});

export default axiosContacts;