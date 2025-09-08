import { useSelector } from "react-redux"
import styles from './AnecdoteList.module.css'

const AnecdoteList = ({ onClickVote }) => {
  const filter = useSelector(state => state.filter);
  const anecdotes = useSelector(state => state.anecdote);
  return (
    <div>
      {anecdotes
        .filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => 
      <div key={anecdote.id} className={styles.anecdote}>
        <p className={styles.anecdote__content}>{anecdote.content}</p>
        <div className={styles['anecdote__num-vote']}>Has <b>{anecdote.votes}</b> votes</div>
        <button onClick={(e) => onClickVote(e, anecdote.id)} className={styles.anecdote__vote}>Vote</button>
      </div>
    )}
    </div>
  )
}

export default AnecdoteList