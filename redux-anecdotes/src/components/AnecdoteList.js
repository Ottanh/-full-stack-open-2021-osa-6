import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filter}) => {
    return anecdotes.filter(anecdote => anecdote.content.includes(filter.filter))
  }).sort((a,b) => { return b.votes - a.votes })
  const dispatch = useDispatch()

  const addVote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
    dispatch(createNotification(`You voted '${anecdotes.find(x => x.id === id).content}'`, 5000))
  }

  console.log(anecdotes)

  return (
    <div>
    <h2>Anecdotes</h2>
    <Filter/>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => addVote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
    </div>
  )
}


export default AnecdoteList