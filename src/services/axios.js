import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
  }
})

api.interceptors.response.use(null, error => {
  if (error.response.status === 401) {
    window.location.href = '/error'
  }
  return Promise.reject(error);
})

export default api;