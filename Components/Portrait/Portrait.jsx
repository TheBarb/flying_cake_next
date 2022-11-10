
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

    <h3 className={styles.description}> Handgemachte Kuchen - frisch geliefert</h3>
    <div className={`${styles.punchline} display_two`}>EAT<br/> MORE<br/>CAKE</div>

    </div>
  )
}

export default Portrait