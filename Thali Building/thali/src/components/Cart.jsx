import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCustomize, customization, getTotal } from '../slices/thaliSlice'



const Cart = () => {
  var sum=0;

  const cartItems= useSelector((state)=>state.thali.item)
  
  
  
  const dispatch=useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getTotal())
  },[cartItems,dispatch])

  const addHandler= (e) =>{
    dispatch(customization(e))
  }

  const removeHandler = (e) =>{
    dispatch(clearCustomize(e))
  }

const checkOut= () =>{
  if(cartItems.length>1){
    alert('you can process further')
  }else{
    alert('atleast two or more item should be present in thali')
    navigate('/index')
  }
}
  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Sl.no</th>
      <th scope="col">Thali Item Image</th>
      <th scope="col">Thali Item Name</th>
     
      <th scope="col" >Add qty</th>
      <th scope="col">Qty</th>
      <th scope="col">Remove qty</th>
      <th scope="col">Thali Item price</th>
      <th scope="col">Total price of Items</th>
    </tr>
   
  </thead>
  <tbody>
    {cartItems.map((ele,index)=>{

      sum+=ele.price*ele.qty
      
      return(
        <tr key={ele.id}>
        <th scope="row">{index+1}</th>
        <td><img src={ele.image} alt='food'
        style={{width:'5rem'}}/></td>
        <td>{ele.item}</td>
        
        <td><button className='btn btn-success' onClick={()=>addHandler(ele)}>Add</button></td>
        <td >{ele.qty}</td>
        <td><button className='btn btn-danger'onClick={()=>removeHandler(ele)}>Remove</button></td>
        <td>₹{ele.price}</td>
        <td>₹{ele.price*ele.qty}</td>
        </tr>

      
      
      )
    })}
    <tr>
    <th className='contain' scope="col" colSpan={7}>Subtotal</th>

      <td>₹{sum}</td>
    </tr>

    <tr>
    <th className='contain' scope="col" colSpan={8} style={{textAlign:'right' }}><button className='btn btn-primary '  style={{marginRight:'4rem'}} onClick={checkOut} >Check Out</button></th>

      
    </tr>


   
  </tbody>
</table>
    </div>
  )
}

export default Cart
