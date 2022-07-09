import React from "react";
import formatNumber from "format-number";
//import photographer from "./images/girl.png";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux'
import { decrementByTenThousand, decrementByFiveThousand } from './slices/withdrawSlice'
 function App() {

   const count = useSelector((state) => state.withdraw.value)
   console.log(count)
  const dispatch = useDispatch()

   

  const clickHandle= (e) => {

    console.log(e.target.value)
    
    if(e.target.value==10000){
    dispatch(decrementByTenThousand())
    }
    else if(e.target.value=5000){
      dispatch(decrementByFiveThousand())
    }
  }

 

    return (
      <div className="App">
        <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
        <p className="App__username">Hello,  </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })
          (count)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button value="10000"
            onClick={clickHandle}
            >WITHDRAW $10,000</button>
          <button value="5000"
            onClick={clickHandle}
            >WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }


export default App;