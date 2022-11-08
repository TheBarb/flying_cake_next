
import Image from 'next/image'
import portrait from '../../public/stillife_portrait.png'
import styles from './portrait.module.scss'

const Portrait = () => {

  return (
  <div className={styles.container}>
    <Image 
    className={styles.backgroundImage}
    src={portrait} 
    alt='Lasst uns zusammen feiern!' 
    layout='responsive'
    objectFit='contain'
    priority= 'true'
    />
      <h4 className={styles.description}>Handgemachte Kuchen - frisch geliefert</h4>
    <div className={styles.punchline}>FLYING<br/> CAKE</div>
    </div>
  )
}

export default Portrait