import axios from 'axios'
import { asObject } from '../util'



const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}

const createNew = async (content) => {  
  const object = asObject(content)
  const response = await axios.post(baseUrl, object)  
  return response.data
}

const putAnecdote = async (anecdote, id) => {
  const response = await axios.put(`${baseUrl}/${id}`, anecdote)
  return response.data
}

const services = { getAll, createNew, putAnecdote}
export default services
