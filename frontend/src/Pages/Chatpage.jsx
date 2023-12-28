import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chatpage = () => {

  const [chats, setchats] = useState([])
  const fetchChat = async () => {
    const {data} =  await axios.get("/api/chat");
    setchats(data);
  }
  
  useEffect(() => {
    fetchChat();
  }, []);
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {chats.map((chat) => (
                <li className="list-group-item" key={chat._id}>{chat.chatName}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatpage