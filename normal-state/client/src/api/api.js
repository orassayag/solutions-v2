import axios from 'axios';
import settings from '../settings/settings';

const api = axios.create({
    baseURL: settings.api_base_url
});

export default api;