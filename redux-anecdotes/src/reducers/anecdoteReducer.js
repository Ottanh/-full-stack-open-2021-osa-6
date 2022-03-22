import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      console.log(action.payload)
      return state.concat(action.payload)
    },
    vote(state, action) {
      const changedAnecdote = action.payload
      const id = changedAnecdote.id
      return state.map(note => note.id !== id ? note : changedAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }

  }

})

export const initializeAnecdotes = () => {  
  return async dispatch => {    
    const anecdotes = await anecdoteService.getAll()    
    dispatch(setAnecdotes(anecdotes))  
  }}

export const createAnecdote = content => {  
  return async dispatch => {   
    const anecdote = await anecdoteService.createNew(content)    
    dispatch(appendAnecdote(anecdote))  
  }}

export const voteAnecdote = id => {
  return async (dispatch, getState) => {
    const anecdote = getState().anecdotes.find(n => n.id === id);
    const voteAddedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const response = await anecdoteService.putAnecdote(voteAddedAnecdote, id)
    dispatch(vote(response));
  }
}




export const { appendAnecdote, vote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer