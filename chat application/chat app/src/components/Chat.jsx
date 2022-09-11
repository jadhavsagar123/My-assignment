import React, { useEffect, useState } from "react";
import { User } from "./Join";
import socketIo from "socket.io-client";
import "./Chat.css";
import Message from "./Message";
import ReactScrollToBottom from 'react-scroll-to-bottom'

let socket;
const ENDPOINT = "https://gentle-journey-27047.herokuapp.com/";

const Chat = () => {
  const [messages,setMessages] =useState([])
  const [id,setId] =useState('')

 
  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      setId(socket.id)
    });

    socket.emit('joined',{User})
    
    socket.on('welcome',(data)=>{
      setMessages([...messages,data])
      console.log(data)
        
    })

    socket.on('userJoined',(data)=>{
      setMessages([...messages,data])
        
  })

  socket.on('leave',(data)=>{
    setMessages([...messages,data])
  })
return ()=>{
    socket.emit('left');
    socket.off();
}
  
  },[]);

 

  const handleClick =()=>{
    const message=document.getElementById('input').value;
    socket.emit('message',{message,id})
    document.getElementById('input').value=''
  }

  useEffect(()=>{
    socket.on('sendMessage',(data)=>{
      setMessages([...messages,data])
      
    })
  },[messages])
  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="header">
          <h1>Cat Chat</h1>
          <a href="/"> <img src="https://www.pngmart.com/files/3/Cancel-Button-PNG-Photos.png" alt="close" /></a>
        </div>
        <ReactScrollToBottom className="chat-box">
            {messages.map((item,i)=> 
            <Message message={item.message} user={item.id===id?'':item.User} classs={item.id===id?'right':'left'}/>
          )}
        </ReactScrollToBottom>
        <div className="input-box">
          <input type="text"  id='input' placeholder="message" onKeyUp={(event)=> event.key==='Enter'?handleClick():null} />
          <button className="btn" onClick={handleClick}>
            <img
              src="https://png.pngtree.com/element_our/sm/20180620/sm_5b29c1e7b8dd3.jpg"
              alt="send"
              sizes="100%"
            />
         
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;