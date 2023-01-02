class TokenService {
  // getLocalrefresh_token () {
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   return user?.authorisation.refresh_token
  // }
  getToken () {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.authorisation.token
  }
  updateToken (token) {
    let user = JSON.parse(localStorage.getItem('user'))
    user.authorisation.token = token
    localStorage.setItem('user', JSON.stringify(user))
  }
  getUser () {
    return JSON.parse(localStorage.getItem('user'))
  }
  setUser (user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
  removeUser () {
    localStorage.removeItem('user')
  }
}
export default new TokenService()
