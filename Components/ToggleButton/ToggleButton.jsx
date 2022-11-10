import styles from '../ToggleButton/toggleButton.module.scss'

const ToggleButton = ({isToggled, setIsToggled}) => {
  return (
    <>

    <div className={styles.toggle_container}>
    <span className='legend'>süss</span>
      <input type="checkbox" id="flavour" className={styles.toggle} onChange={() => setIsToggled(!isToggled)}/>
      <label htmlFor="flavour" className={styles.label}>
        <div className={styles.ball}></div>
      </label>
      <span className='legend'>salzig</span>
    </div>
   </>
  )
}

export default ToggleButton