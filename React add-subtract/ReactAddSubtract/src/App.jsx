import { useState } from 'react'
import './App.css'

function App() {
  let [value, setValue] = useState("")
  let [total, setTotal] = useState(0)
function handalChange(event){
value= (event.target.value)
setValue(value)
console.log(value)
}



function add(){
  if (value!=""){
  total= parseInt( total)+parseInt (value)
  }
  else{
    alert("please enter value")
  }
  setTotal(total)
}

function subtract(){
  if (value!=""){
    total= parseInt( total)-parseInt (value)
    }
    else{
      alert("please enter value")
    }
  setTotal(total)
}

  return (
    <div className="text-center w-50 my-2 offset-3 bg-info">
      <label  className="sr-only">Enter a value to Add/Subtract </label><br/>
      <input type="number" id="inputEmail" className="form-control " onChange={handalChange} placeholder="Enter number" required="please enter number "/><br/>
      <button className="btn btn-primary btn-lg btn-block w-100"onClick={add} type="button">  Add  </button><br/><br/>
      <button className="btn btn-danger btn-lg btn-block w-100" onClick={subtract} type="button">  Subtract  </button><br/><br/>
      <h4>result: {total}</h4>
</div>
  )
}

export default App
