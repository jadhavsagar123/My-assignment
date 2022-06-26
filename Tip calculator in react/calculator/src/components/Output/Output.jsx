import React from 'react'
import design from'./Output.module.css'
function Output(props){
  return (
    <div>
     <h2>Customer List</h2>
     <button onClick={props.showList}>View List-Click here</button>
     {props.details.map((ele)=>{
       console.log(ele)
       return (
       <div className={design.div}>
       <ul>
        <li style={{marginBottom:'0px'}}>{ele.cust} offering a tip of {ele.bill} rupees</li>
       </ul>
         </div>
       )
     })}
    </div>
  )
}

export default Output
