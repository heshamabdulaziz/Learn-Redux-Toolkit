
import { useDispatch, useSelector } from 'react-redux'

import { useState } from 'react';

export default  function UserCompont() {
  const[userName,setUserName]=useState("")
  const[userEmail,setUserEmail]=useState("")
 const {name,email}= useSelector((state) =>state.user)
 const dispatch=useDispatch();

 const handlSubmit=(e)=>{ 
    setUserName(e.target.value);
    setUserEmail(e.target.value);
    
     dispatch()}
  return (
    <div>

        <p>UserName  :  {name}</p>
         <p>UserEmail  :  {email}</p>
         
     <fieldset style={{color:"red",fontSize:20,backgroundColor:"gray"}}>
            <legend>LOGIN FORM</legend>
<form onSubmit={handlSubmit}>
    <label> Username(*) </label>
<input type='text' placeholder='Enter your name '  value={userName}/><br/><br/>
  <label>Email(*)</label>
<input type='email' placeholder='Enter your name'  value={userEmail} /><br/><br/>

<button style={{backgroundColor:"blue",color:"white",fontSize:20,}} 
  onClick={()=>{
  dispatch()}}
  
  >Send</button> 


</form>
</fieldset>
      </div>
    
  )
}
