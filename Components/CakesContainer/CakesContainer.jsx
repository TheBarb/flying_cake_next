import { useState } from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import CakeList from '../CakeList/CakeList'
import styles from '../CakesContainer/cakesContainer.module.scss'


const CakesContainer = ({sweetCakes, saltyCakes}) => {

    const[isToggled, setIsToggled] = useState(true) 

    let myCakes = [];
    let color = "";
  
        if (isToggled) {
            myCakes = sweetCakes
            color = "rgb(239, 130, 111)"
        } else {
            myCakes = saltyCakes
            color = "rgb(123, 203, 120)"
        }

  return (
    <div className={styles.wrapper}>
        <ToggleButton isToggled={isToggled} setIsToggled={setIsToggled}/>
        <CakeList />
    </div>
  )
}

export default CakesContainer
