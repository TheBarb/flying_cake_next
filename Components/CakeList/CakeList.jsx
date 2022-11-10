import Cake from '../Cake/Cake'
import styles from './cakeList.module.scss'

const CakeList = ({myCakes, color}) => {
  return (
    <>
    <ul className={styles.flexWrapper}>
    {
      myCakes && myCakes.map(cake => <Cake cake={cake} color={color} />)
    }
  </ul>
  </>
  )
}

export default CakeList