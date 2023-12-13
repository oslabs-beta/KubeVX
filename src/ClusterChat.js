import React, { useEffect, useState } from 'react';
import '../src/public/clusterView.css';

const ClusterChat = ({ clusterData }) => {
  const [question, setQuestion] = useState('');
  const [convoHistory, setConvoHistory] = useState([]);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    //check to make sure that clusterData has been received
    if (Object.keys(clusterData).length > 0) {
      sendMessage('');
    }
  }, [clusterData]);
  console.log('clusterData:', clusterData);
  const sendMessage = async (userQuestion) => {
    try {
      const response = await fetch('http://localhost:3001/AI', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clusterData: clusterData,
          question: userQuestion,
          convoHistory: convoHistory,
        }),
      });
      if (!response.ok) {
        throw new Error('error');
      }
      const data = await response.json();
      console.log('data:', data);
      setConvoHistory(data.convoHistory);
    
      setMessageList((prevMessages) => [
        ...prevMessages,
        { type: 'ai', message: data.sanitizedResponse },
      ]);
    } catch (error) {
      console.error('Error send message to AI', error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendMessage(question);
    setQuestion('');
    setMessageList((prevMessages) => [
      ...prevMessages,
      { type: 'user', message: question },
    ]);
  };

  return (
    // insert UI
    <div className="chat-container">
      <h4 className="AiTitl">AI Assistant</h4>
      <div className="message-container">
        {messageList.map((item, index) => (
          <div key={index} className={`message ${item.type}`}>
            {item.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="input-form">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me a question..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ClusterChat;
