import React from 'react';
import Chatbot from './components/Chatbot';
import './styles/Chatbot.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Friendly Chatbot</h1>
      <Chatbot />
    </div>
  );
};

export default App;
