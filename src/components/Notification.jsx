import { useSelector } from 'react-redux'
import styles from './Notification.module.css'

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  return (
    <>
      {notification === '' 
      ? ''
      : <div className={styles.notification}>
          {notification}
        </div>
      }
    </>
  )
}

export default Notification