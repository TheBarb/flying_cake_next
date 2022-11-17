import { useState } from 'react'
import styles from './swipeToggleButton.module.scss'

const SwipeToggleButton = ( {isToggled, setIsToggled}) => {
          
const [touchStart, setTouchStart] = useState(null)
const [touchEnd, setTouchEnd] = useState(null)


// the required distance between touchStart and touchEnd to be detected as a swipe
const minSwipeDistance = 20 

const onTouchStart = (e) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
 
  //state changes with every toggle
  //if (isLeftSwipe || isRightSwipe) isLeftSwipe ? setIsToggled(!isToggled) : setIsToggled(!isToggled)
  if (isLeftSwipe || isRightSwipe) isLeftSwipe ? setIsToggled(false) : setIsToggled(true)
    
  }

 let flavoredColor;

 isToggled ? flavoredColor = '#E67E5Fff' : flavoredColor =  '#82C2B3ff';


  return (
   <>
    <div className={styles.toggle_container} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
  
  <input type="checkbox" id="flavours" className={styles.toggle} onChange={() => setIsToggled(!isToggled)}/>
  <label htmlFor="flavours" className={`${styles.label} ${isToggled ? styles.labelActive : ''}`}>
    <div className="legend">SÜSS</div>
    <div className={`${styles.ball} ${isToggled ? styles.ballActive : ''}`}></div>
    <div className="legend">SALZIG</div>
  </label>
 
</div>
   </>
  )
}

export default SwipeToggleButton
