import React from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios'


const Display = () => {

  const [state , setState]= useState([])
  const [name , setName]= useState("")

const handelChange=(e)=>{
    setName(e.target.value)
}

const handelPostRequest=()=>{
  axios.post("https://jsonplaceholder.typicode.com/users",{
    name 
  }).then(response=>{
    
    console.log(response.data)
  
})
}


  const apiCall=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
    setState(response.data)

   }).catch(err=>{
      console.log(err);

   })
  }

  useEffect(function(){
      apiCall();
  },[])


  return (
    <div className='row col-8 offset-2 '>
      <h2 style={{marginTop:"20px"}}>Hello User</h2>
      <div>
      <input type="text" name='name' onChange={handelChange} /> <br /> <br />
      <button className='btn btn-primary btn-sm' onClick={handelPostRequest}>Add user</button>
      </div>
      <div>
   {
       state.map(function(ele){
         return <div className="card row col-6 offset-3 " style={{marginTop:"20px"}}>
           <ul className="list-group list-group-flush"style={{margin:"10px"}}>
             <li className="list-group-item ">{ele.name}</li>
           </ul>
         </div>
       })
   }
   </div>
    </div>

  )
}

export default Display
