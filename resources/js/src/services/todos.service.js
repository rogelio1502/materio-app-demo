import api from './api'
class TodosService {
  all () {
    return api.get('todos', {})
  }
  remove (id) {
    return api.delete('todo/' + id)
  }
  add (title, description) {
    let body = new FormData()
    body.append('title', title)
    body.append('description', description)
    return api.post('todo', body)
  }
}

export default new TodosService()
