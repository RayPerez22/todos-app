// This file will be our endpoint
import axios from 'axios'

export const getTodos = () => {
    const URL = 'http://localhost:3001/todos'
    const response = axios.get(URL)
    console.log(response)
    return response
}