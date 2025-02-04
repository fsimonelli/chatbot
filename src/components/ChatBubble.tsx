import ReactMarkdown from 'react-markdown'
import { useTypewriter } from 'react-simple-typewriter'
import { useEffect } from 'react'

interface ChatBubbleProps {
  message: string
  isChat?: number
  scrollToBottom: () => void
}

const ChatBubble = ({ message, isChat, scrollToBottom }: ChatBubbleProps) => {
  const [text] = useTypewriter({
    words: [message],
    loop: 1,
    deleteSpeed: 0,
    typeSpeed: 15,
  })

  useEffect(() => {
    scrollToBottom()
  }, [text])

  return (
    <div
      className={`${
        isChat ? 'bg-gray-400' : 'bg-gray-200 right-0'
      } text-black m-2 p-4 rounded-lg shadow-md size-fit `}
    >
      <ReactMarkdown className='text-2xl'>
        {isChat ? text : message}
      </ReactMarkdown>
    </div>
  )
}

export default ChatBubble
