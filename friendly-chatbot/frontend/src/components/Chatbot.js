import { useState } from 'react';
import axios from 'axios';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message) return;
    setLoading(true);
    setResponses((prev) => [...prev, { text: message, isUser: true }]);

    try {
      const res = await axios.post('http://localhost:5000/chat', { message });
      setResponses((prev) => [
        ...prev,
        { text: res.data.reply, isUser: false }
      ]);
    } catch (error) {
      console.error('Error:', error);
      setResponses((prev) => [
        ...prev,
        { text: 'Sorry, I am facing some issues.', isUser: false }
      ]);
    }
    setMessage('');
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-box">
        {responses.map((response, index) => (
          <MessageBubble key={index} text={response.text} isUser={response.isUser} />
        ))}
        {loading && <TypingIndicator />}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
