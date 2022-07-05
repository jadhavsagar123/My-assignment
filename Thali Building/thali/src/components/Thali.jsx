import React from 'react'
import Card from './Card'
import NavBar from './NavBar'
import thalliItems from '../thaliItems'



function Thali() {
 
  
  
  return (
    <div >
      <NavBar/>
      <h1>Welcome to the biggest Thali's ordering website </h1>
      <h3>Order Thali's And Grab Upto 20% OFF</h3><h5>ORDER SOON!!</h5>
      <div className="container">
        <div className="row">
        { thalliItems.map((ele)=>{
          return(
          <div className="col" key={ele.id}>
             <Card food={ele}/>
          </div>
        )})}
       
        </div>
      </div>
    </div>
  )
}

export default Thali
