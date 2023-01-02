import api from './api'
import tokenService from './token.service'
class AuthService {
  login (data) {
    return api.post('login', data, {})
  }
  logout () {
    tokenService.removeUser()
    location.reload()
  }
}

export default new AuthService()
