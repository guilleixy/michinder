import React from 'react'
import './Chats.css'
import Chat from './Chat'

const Chats = () => {
  return (
    <div className='chats'>
        <Chat 
            name="Mark"
            message="Yo whats up!"
            timestamp="40 seconds ago"
            profilePic="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png"
        />
    </div>
  )
}

export default Chats