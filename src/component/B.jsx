import React from 'react'
import { useSelector } from 'react-redux'

function B() {
     const {count,name}= useSelector((state) =>state.counter_A)
  return (
    <div>
        <h1> Component  B</h1>  
    <h3>Acess to Store values  from any Component </h3>  
  <p style={{fontSize:40}}>Product:{name}  count :<span style={{color:"red"}}>  {count} </span></p>
    </div>
  )
}

export default B
