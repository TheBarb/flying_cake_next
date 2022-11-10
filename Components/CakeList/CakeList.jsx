import Cake from '../Cake/Cake'
import styles from './cakeList.module.scss'


const CakeList = ({myCakes, color}) => {
  return (
    <>
    <div className={styles.flexWrapper}>
    {
      myCakes && myCakes.map(cake => <Cake cake={cake} color={color} />)
    }
  </div>
  </>
  )
}

export default CakeList