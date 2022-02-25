import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filter}) => {
    return anecdotes.filter(anecdote => anecdote.content.includes(filter.filter))
  })
  const dispatch = useDispatch()

  const addVote = (id) => {
    console.log('vote', id)
    dispatch(vote(id))
    dispatch(setNotification(`You voted '${anecdotes.find(x => x.id === id).content}'`))
    setTimeout(() => dispatch(setNotification('')), 5000)
  }

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