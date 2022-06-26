import React from 'react';
import design from'./Collect.module.css'
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Input from './Input/Input';
import Output from './Output/Output';
import {  useState } from 'react';

const Collect=()=>{
   const[drop,setDrop] = useState(0)
   let [inp,setInp] = useState(0)
   const[cust,setCust] =useState("")
   let [bill,setBill] = useState(0)
   let [tip,setTip] = useState(0)
   let [count,setCount] = useState(0)
   let [list,setList] = useState([{}])
   const custName=(e)=>{
      setCust(e.target.value)
   }
   const dropChange=(e)=>{
      const dropValue = e.target.value;
      setDrop(Number(dropValue))
     
   }
   const inpChange=(e)=>{
      setInp(e.target.value)
   }
   
   const subBill=()=>{
      if(inp===0 || drop===0 || cust===""){
         alert("All fields are mandatory")
      }
      else{
      setBill(Number(inp*drop/100)) 
      setCount(++count) 
      }
      // setList([{...list,nam:cust,amt:bill}])
   }
   
   const showList=()=>{
      const total = {cust,bill}
      setList((all)=>{
        return [...all,total]
      })
   }

   console.log(list)
   const calculate=()=>{
      setTip(tip+=bill)
   }
    return(
       <div className={design.collect}>
         <Header/>
         <Input custName={custName} subBill={subBill}
           dropChange={dropChange} inpChange={inpChange} 
         />
         <Output details={list}  showList={showList}/>
         <Footer calculate={calculate} total={tip} count={count}/> 
       </div>  
    )
}

export default Collect;