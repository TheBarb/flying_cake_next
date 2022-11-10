import { useState } from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import CakeList from '../CakeList/CakeList'


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
  
        <ToggleButton isToggled={isToggled} setIsToggled={setIsToggled}/>
        <CakeList myCakes={myCakes} color={color}/>
     
    </>
  )
}

export default CakesContainer
