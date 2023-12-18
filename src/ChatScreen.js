import React, {useState} from 'react'
import './ChatScreen.css'
import Avatar from '@mui/material/Avatar';

const ChatScreen = () => {
  const [input, setInput] = useState('') 
  const [messages, setMessages] = useState([
    {
        name: 'Mark',
        image: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png',
        message: 'Whats up'
    },
    {
        name: 'Mark',
        image: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png',
        message: 'Hola'
    },
    {
        message: 'Gatito'
    },
  ])

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, {message: input}]);
    setInput('');
    setTimeout(() => {
      setMessages([...messages, {name: 'Mark', image: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png', message: 'Meow'}]);
    }, 1000);
  }

  return (
    <div className='chatScreen'>
        <p className='chatScreen__timestamp'>YOU MATCHED WITH MIKE ON 10/07/20</p>
        {messages.map((message, index) =>(
          message.name ?  (
            <div className='chatScreen__message' key={index}>
                <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                <p className='chatScreen__text'>{message.message}</p>
            </div>
          ) : (
            <div className='chatScreen__message' key={index}>
                <p className='chatScreen__textUser'>{message.message}</p>
            </div>
          )

        ))}

        <form className='chatScreen__input'>
          <input onChange={(e) => setInput(e.target.value)} value={input} className='chatScreen__inputField' type='text' placeholder='Type a message'/>
          <button type='submit' className='chatScreen__inputButton' onClick={handleSend}>SEND</button>
        </form>

    </div>
  )
}

export default ChatScreen