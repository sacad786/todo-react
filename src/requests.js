import Axios from "axios";

export function createUsers(user) {
    return Axios.post("http://localhost:8080/api/user/", user)
}

export function getUsersByUsername(username) {
    return Axios.get(`http://localhost:8080/api/user/username/${username}`)
}

export function getTasks() {
    return Axios.get("http://localhost:8080/api/user/task/all")
}

export function createTasks(task) {
    return Axios.post(`http://localhost:8080/api/user/${task.userId}/task`, task)
}

export function updateTasks(task) {
    console.log(task);
    
    return Axios.put(`http://localhost:8080/api/user/${task.userId}/task/${task.taskId}`, task)
}
export function deleteTasks(task) {
    return Axios.delete(`http://localhost:8080/api/user/${task.userId}/task/${task.taskId}`)
}

