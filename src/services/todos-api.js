// This file will be our endpoints
// connecting to my express api
import axios from 'axios'
const baseURL = ''


export const getTodos = () => {
    const URL = 'http://localhost:3001/todos'
    // const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

export const getTodo = (id) => {
    const URL = `http://localhost:3001/todos/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteTodo = (id) => {
    const URL = `http://localhost:3001/todos/${id}`
    const response = axios.delete(URL)
    return response
}

export const editTodo = (id, updatedTodo) => {
    const URL = `http://localhost:3001/todos/${id}`
    console.log('sending: ', URL, updatedTodo);

    const response = axios.put(URL, updatedTodo)
    return response
}

export const createTodo = (todo) => {
    const URL = 'http://localhost:3001/todos' 
    const response = axios.post(URL, todo)
    return response
}