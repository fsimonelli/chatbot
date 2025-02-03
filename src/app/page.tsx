'use client'

import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function Home() {
  const [message, setMessage] = useState('')

  async function send_message() {
    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })

    const data = await response.json()
    console.log('Chatbot Reply:', data)
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-gray-800'>
      <div className='flex w-1/2 h-3/4 shadow-lg rounded-lg bg-gray-600 p-4'>
        {/*User input component*/}
        <div className='flex flex-row items-end w-full'>
          <Input
            value={message}
            onChange={e => setMessage(e.target.value)}
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
