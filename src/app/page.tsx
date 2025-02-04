'use client'

import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import ChatHistory from '../components/ChatHistory'

export default function Home() {
  const [message, setMessage] = useState('')
  const [messageHistory, setMessageHistory] = useState([])

  async function send_message() {
    const newMessageHistory = [...messageHistory, message]
    setMessageHistory(newMessageHistory)
    setMessage('')
    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })

    const data = await response.json()
    setMessageHistory([...newMessageHistory, data.reply])
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-gray-800'>
      <div className='flex flex-col w-3/4 h-3/4 shadow-lg rounded-lg bg-gray-600 p-4 relative'>
        <ChatHistory messages={messageHistory} />
        {/*User input component*/}
        <div className='flex flex-row items-end w-full absolute bottom-0 left-0 p-2'>
          <Input
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send_message()}
            placeholder="What's on your mind?"
          />
          <Button variant='outline' onClick={send_message}>
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
