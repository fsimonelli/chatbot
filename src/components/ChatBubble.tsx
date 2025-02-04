import ReactMarkdown from 'react-markdown'

interface ChatBubbleProps {
  message: string
  isChat?: number
}

const ChatBubble = ({ message, isChat }: ChatBubbleProps) => {
  return (
    <div
      className={`${
        isChat ? 'bg-gray-400' : 'bg-gray-200 right-0'
      } text-black m-2 p-4 rounded-lg shadow-md size-fit `}
    >
      <ReactMarkdown className='text-2xl'>{message}</ReactMarkdown>
    </div>
  )
}

export default ChatBubble
