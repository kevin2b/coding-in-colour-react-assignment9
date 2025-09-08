import { useSelector } from "react-redux"
import styles from './AnecdoteFilter.module.css'

const AnecdoteFilter = ({ onUpdateFilter }) => {
  const filter = useSelector(state => state.filter);
  return (
    <div className={styles["anecdote-filter"]}>
      <b>Filter:</b>
      <input className={styles["anecdote-filter__search"]} value={filter} onChange={onUpdateFilter} />
    </div>
  )
}

export default AnecdoteFilter