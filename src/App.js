import './App.css';
import { ChatEngine } from 'react-chat-engine'
import Chatfeed from './components/ChatFeed'
import Loginform from './components/LoginForm';




import React from 'react'

export default function App(props) {
  
  if (!localStorage.getItem('username')) return <Loginform />

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="cce34405-7282-440e-9c11-38a87241515f"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <Chatfeed {...chatAppProps} />}

      />
    </>
  )
}

