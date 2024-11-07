const MessageBubble = ({ text, isUser }) => {
    return (
      <div className={`message-bubble ${isUser ? 'user' : 'bot'}`}>
        {text}
      </div>
    );
  };
  
  export default MessageBubble;
  