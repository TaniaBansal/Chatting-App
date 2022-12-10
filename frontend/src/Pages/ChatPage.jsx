import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';


const ChatPage = () => {

    const fetchChats = async() => {
        const { data } = await axios.get('/api/chat');

        console.log(data);
    }

    // To call fetchChats function we will use useEffect
    // useEffect is a hook which runs when the component is first rendered

    useEffect(() => {
       fetchChats();
    }, [])

  return (
    <div> Chat Page </div>
  )
}

export default ChatPage
