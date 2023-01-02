import axios from 'axios'
import tokenService from './token.service'
import Swal from 'sweetalert2'
import authService from './auth.service'
const instance = axios.create({
  // baseURL: 'https://escuela-para-padres-api.herokuapp.com',
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

instance.interceptors.request.use(
  function (config) {
    config.headers['Authorization'] = 'Bearer ' + tokenService.getToken()

    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    if (error.response.request.status === 401 && error.response.config.url != 'login') {
      Swal.fire({
        title: 'Tu sesión ha caducado...',
        text: 'Parece que tu sesión ha caducado, logueate de nuevo.',
        icon: 'warning',
        confirmButtonText: 'Ok',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      }).then(response => {
        authService.logout()
      })
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)
export default instance
