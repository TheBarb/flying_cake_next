import styles from './newToggleButton.module.scss'

const NewToggleButton = ({isToggled, setIsToggled}) => {
  return (
    <>
    <div className={styles.checkbox}>
      <input className={styles.status}
            id="status"
             type="checkbox" 
             name="status" 
             onChange={() => setIsToggled(!isToggled)}/>
      <label htmlFor="status">
        <div className={`${styles.switch} ${styles.text}`}
             sweet="süss"
             salty="salzig">
      </div>
      </label>
    </div>
</>
  )
}

export default NewToggleButton