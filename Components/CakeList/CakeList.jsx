import Cake from '../Cake/Cake'



const CakeList = ({myCakes, color}) => {
  return (
    <>
   
    {
      myCakes && myCakes.map(cake => <Cake cake={cake} color={color} />)
    }
 
  </>
  )
}

export default CakeList