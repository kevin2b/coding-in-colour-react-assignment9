import { useSelector } from "react-redux"

const AnecdoteList = ({ onClickVote }) => {
  const filter = useSelector(state => state.filter);
  const anecdotes = useSelector(state => state.anecdote);
  return (
    <div>
      {anecdotes
        .filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => 
      <div key={anecdote.id}>
        <p>{anecdote.content}</p>
        <span>has <b>{anecdote.votes}</b> votes</span>
        <button onClick={(e) => onClickVote(e, anecdote.id)}>vote</button>
      </div>
    )}
    </div>
  )
}

export default AnecdoteList