import { useSelector } from "react-redux"

const AnecdoteFilter = ({ onUpdateFilter }) => {
  const filter = useSelector(state => state.filter);
  return (
    <div>
      filter <input value={filter} onChange={onUpdateFilter} />
    </div>
  )
}

export default AnecdoteFilter