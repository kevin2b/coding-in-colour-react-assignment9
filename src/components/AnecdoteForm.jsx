import styles from './AnecdoteForm.module.css'

const AnecdoteForm = ({ onClickCreate }) => {
  return (
    <div>
      <h2 className={styles["anecdote-form__title"]}>Create New</h2>
      <form onSubmit={onClickCreate} className={styles["anecdote-form"]}>
        <input id="content" placeholder="Add new" className={styles["anecdote-form__input"]}/>
        <button type="submit" className={styles["form__submit"]}>Create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm