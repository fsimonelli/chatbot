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
      <p className='text-2xl'>{message}</p>
    </div>
  )
}

export default ChatBubble
