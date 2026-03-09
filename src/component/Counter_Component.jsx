
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByInputValue, reset } from '../redux/Counterslice';
import { useState } from 'react';

export default  function Counter_Component() {
  const[inputValue,setInputValue]=useState(0)
 const {count,name}= useSelector((state) =>state.counter_A)
 const dispatch=useDispatch();

 const handlincreament=()=>{  dispatch(increment())}
  return (
    <div>
    
 <p style={{fontSize:40}}>Product:{name}        count :<span style={{color:"red"}}>  {count} </span> </p>

<input type='number'  value={inputValue} onChange={(e)=>{
setInputValue(e.target.value);

}}/><br/><br/>

<button style={{backgroundColor:"blue",color:"white",fontSize:20,}} 

onClick={handlincreament}>INC(+)

</button> <br/><br/>
<button  style={{backgroundColor:"blue",color:"white",fontSize:20,}}

 onClick={()=>{ dispatch(increment(3))}}

>INC(+3)</button><br/><br/>
<p style={{color:"red",fontSize:20,}}>INC BY input value A</p>
<button  style={{backgroundColor:"blue",color:"white",fontSize:20,}}

 onClick={()=>{ dispatch(incrementByInputValue(Number(inputValue)))}}

>Value Input ({inputValue})</button><br/><br/>

<button style={{backgroundColor:"blue",color:"white",fontSize:20,}} 
  onClick={()=>{
  dispatch(decrement())}}
  
  >DEC(-)</button> 

  <br/><br/>

<button style={{backgroundColor:"blue",color:"white",fontSize:20,}} 
  onClick={()=>{
  dispatch(reset(0))}}
  
  >Reset</button> 
      </div>
    
  )
}
