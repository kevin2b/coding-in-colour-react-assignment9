/* Component Imports */
import Notification from './components/Notification'
import AnecdoteFilter from './components/AnecdoteFilter'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'

/*Redux import*/
import { setNotification } from './store/notificationSlice'
import { setFilter } from './store/filterSlice'
import { incrementVoteById, addAnecdote } from './store/anecdoteSlice'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(state => state.anecdote);

  /**
   * Performs two actions:
   *  Updates the vote count of the anecdote the user has voted for
   *  Updates the notification and then resets it after 5 seconds
   * @param {obj} e an event object
   * @param {number} id The id of the anecdote the user has voted for
   */
  const handleClickVote = (e, id) => {
    e.preventDefault()
    dispatch(incrementVoteById(id))

    const votedAnecdote = anecdotes.find((obj) => obj.id === id)
    dispatch(setNotification(`You voted for anecdote "${votedAnecdote.content}"`))
    setTimeout(() => {
       dispatch(setNotification(''))
    }, 5000)
  }


  /**
   * Performs two actions:
   *  Updates the vote count of the anecdote the user has voted for
   *  Updates the notification and then resets it after 5 seconds
   * @param {obj} e an event object
   */
  const handleClickCreate = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    e.target.content.value = ''
    dispatch(addAnecdote (content))

    dispatch(setNotification(`You created anecdote "${content}"`))
    setTimeout(() => {
      dispatch(setNotification(''))
    }, 5000)
  }

  /**
   * Performs one action:
   *  Updates the filter as the user types characters into input
   * @param {obj} e an event object
   */
  const handleUpdateFilter = (e) => {
    e.preventDefault()
    console.log(e.target.value);
    dispatch(setFilter(e.target.value))
  }


  return (
    <div className='wrapper'>
      <h1>Anecdotes</h1>
      <Notification />
      <AnecdoteFilter onUpdateFilter={handleUpdateFilter} />
      <AnecdoteList onClickVote={handleClickVote}/>
      <AnecdoteForm onClickCreate={handleClickCreate} />
    </div>
  )
}

export default App;