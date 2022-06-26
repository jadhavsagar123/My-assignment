import React from 'react'
import stl from './Input.module.css'
function Input(props) {
 
  return (
    <>
    <div>
      <h3>Enter your Bill Amount</h3>
      <input type="number" className={stl.input}  onChange={props.inpChange} placeholder="Enter Bill Amount" />
      <div  className={stl.div}>
       <span>How was the service</span>
       <select style={{width:'200px'}} onChange={props.dropChange}>
       <option >choose...</option>
       <option value={20} type="number">Excellent</option>
       <option value={10} type="number">Medium</option>
       <option value={5}  type="number">Not as good</option>
       </select>
       <input type="text" placeholder='custormer name' onChange={props.custName}/>
       <button type="submit" className={stl.btn} onClick={props.subBill}>
       
         Add Customer</button>
         
       </div>
    </div>
    </>
  )
}

export default Input
