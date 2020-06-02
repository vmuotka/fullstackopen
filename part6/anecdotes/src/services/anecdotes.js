import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createAnecdote = async (content) => {
  const object = { content, votes: 0 }
  const res = await axios.post(baseUrl, object)
  return res.data
}

const vote = async (id) => {
  let anecdote = await axios.get(baseUrl + '/' + id)
  anecdote = anecdote.data
  anecdote.votes += 1
  const res = await axios.put(baseUrl + '/' + id, anecdote)
  return res.data
}

export default { getAll, createAnecdote, vote }