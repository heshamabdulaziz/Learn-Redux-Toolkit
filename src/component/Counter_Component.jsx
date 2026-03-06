
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/Counterslice';

export default  function Counter_Component() {
 const {count,name}= useSelector((state) =>state.counter_A)
 const dispatch=useDispatch();

 const handlincreament=()=>{ 
  dispatch(increment())


 }
  return (
    <div>
    
 <p style={{fontSize:40}}>Product:{name}        count :<span style={{color:"red"}}>  {count} </span> </p>

<input type='number'/><br/><br/>

<button style={{backgroundColor:"blue",color:"white",fontSize:20,}} 

onClick={handlincreament}>INC(+)

</button> <br/><br/>
<button  style={{backgroundColor:"blue",color:"white",fontSize:20,}}

 onClick={()=>{ dispatch(increment(3))}}

>INC(+3)</button><br/><br/>

<button style={{backgroundColor:"blue",color:"white",fontSize:20,}} 
  onClick={()=>{
  dispatch(decrement())}}
  
  >DEC(-)</button> 
      </div>
    
  )
}
