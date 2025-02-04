import ChatBubble from './ChatBubble'
import { ScrollArea } from './ui/ScrollArea'
import { useEffect, useRef } from 'react'

interface ChatHistoryProps {
  messages: string[]
}

const ChatHistory = ({ messages }: ChatHistoryProps) => {
  const chatContainer = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    if (chatContainer.current) {
      chatContainer.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <>
      {messages.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-full'>
          <p className='text-gray-400'>No messages yet</p>
        </div>
      ) : (
        <ScrollArea className='flex flex-col h-full mb-10 relative'>
          <div ref={chatContainer}>
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex flex-col ${!(i % 2) ? 'items-end' : ''}`}
              >
                <ChatBubble message={message} isChat={i % 2} />
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </>
  )
}

export default ChatHistory
