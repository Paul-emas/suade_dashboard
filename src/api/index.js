import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

const https = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
});

export default https;
