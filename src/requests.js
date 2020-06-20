import Axios from "axios";

export function getUsername(username) {
    return Axios.get(`http://localhost:8080/api/user/username/${username}`)
}
export function createUser(user) {
    return Axios.post('http://localhost:8080/api/user/',user)
}
export function getTasks() {
    return Axios.get('http://localhost:8080/api/user/task/all')
}
export function createTask(task) {
    return Axios.post(`http://localhost:8080/api/user/${task.userId}/task`, task)
}

export function updateTask(task) {
    return Axios.put(`http://localhost:8080/api/user/${task.userId}/task/${task.id}`, task)
}
export function deleteTask(task) {
    console.log(task);
    return Axios.delete(`http://localhost:8080/api/user/${task.userId}/task/${task.id}`)
}