import axios from 'axios';
axios.interceptors.response.use(function (response) {
    return response.data;
});

axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
export default axios;


