import styles from './cake.module.scss'

const Cake = ({cake, color}) => {
  return (
    <>
     <li key={cake.id} className={styles.card} > 
        <div className={styles.colorSquare} style={{backgroundColor:color}}></div>
          <h4 className={styles.name}>{cake.attributes.name}</h4>
          <hr className={styles.line}/>
          <p className={styles.description}>{cake.attributes.description}</p>
          <div className='legend'>99,99 €</div>
    </li>
    </>
  )
}

export default Cake
