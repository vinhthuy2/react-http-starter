import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
export default axiosInstance;