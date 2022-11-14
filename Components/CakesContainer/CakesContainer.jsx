import { useState } from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import NewToggleButton from '../NewToggleButton/NewToggleButton'
import CakeList from '../CakeList/CakeList'
import styles from './cakesContainer.module.scss'


const CakesContainer = ({sweetCakes, saltyCakes}) => {

    const[isToggled, setIsToggled] = useState(true) 

    let myCakes = [];
    let color = "";
  
        if (isToggled) {
            myCakes = sweetCakes
            color = "rgb(237, 123, 180)"
        } else {
            myCakes = saltyCakes
            color = "rgb(241, 246, 100)"
        }

  return (
    <>
   <div className={styles.flexWrapper}>
        {/* <ToggleButton isToggled={isToggled} setIsToggled={setIsToggled}/> */}
        <NewToggleButton isToggled={isToggled} setIsToggled={setIsToggled}/>
        <CakeList myCakes={myCakes} color={color}/>
        </div>
     
    </>
  )
}

export default CakesContainer
