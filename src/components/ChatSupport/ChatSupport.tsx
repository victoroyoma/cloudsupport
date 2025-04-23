import React, { useState } from 'react';
import { SendIcon, BotIcon, UserIcon, PaperclipIcon, InfoIcon, RefreshCwIcon } from 'lucide-react';
export const ChatSupport = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([{
    sender: 'bot',
    content: "Hello! I'm your automated cloud support assistant. How can I help you today?",
    timestamp: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  }]);
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    // Add user message to chat
    const userMessage = {
      sender: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setChatHistory([...chatHistory, userMessage]);
    setMessage('');
    // Simulate bot response
    setTimeout(() => {
      let botResponse;
      if (message.toLowerCase().includes('database') || message.toLowerCase().includes('db')) {
        botResponse = {
          sender: 'bot',
          content: "I see you're having an issue with the database. Our database service is currently experiencing degraded performance as shown on the status dashboard. Our engineers are working on it. Would you like me to create a support ticket for your specific issue?",
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })
        };
      } else if (message.toLowerCase().includes('storage') || message.toLowerCase().includes('bucket')) {
        botResponse = {
          sender: 'bot',
          content: 'For storage bucket issues, I recommend checking your IAM permissions first. Would you like me to guide you through the permission troubleshooting process?',
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })
        };
      } else {
        botResponse = {
          sender: 'bot',
          content: "Thank you for your message. I'll analyze your issue and suggest solutions. Can you provide more details about the specific cloud service you're working with?",
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })
        };
      }
      setChatHistory(prevChat => [...prevChat, botResponse]);
    }, 1000);
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const suggestedQueries = ['How do I scale my database?', 'My storage bucket is inaccessible', 'Need help with CDN configuration', 'API key generation process'];
  return <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          AI Support Assistant
        </h1>
        <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <RefreshCwIcon className="h-4 w-4 mr-2" />
          New Conversation
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
        <div className="lg:col-span-3 flex flex-col bg-white shadow rounded-lg overflow-hidden">
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {chatHistory.map((chat, index) => <div key={index} className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-md ${chat.sender === 'user' ? 'bg-blue-600 text-white rounded-l-lg rounded-br-lg' : 'bg-gray-100 text-gray-800 rounded-r-lg rounded-bl-lg'} px-4 py-2 shadow`}>
                    <div className="flex-shrink-0 mr-2 mt-1">
                      {chat.sender === 'user' ? <UserIcon className="h-4 w-4 text-blue-200" /> : <BotIcon className="h-4 w-4 text-gray-500" />}
                    </div>
                    <div>
                      <p className="text-sm">{chat.content}</p>
                      <p className={`text-xs mt-1 ${chat.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                        {chat.timestamp}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <PaperclipIcon className="h-5 w-5" />
              </button>
              <textarea className="flex-1 mx-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Type your message..." rows={1} value={message} onChange={e => setMessage(e.target.value)} onKeyPress={handleKeyPress} />
              <button onClick={handleSendMessage} className={`p-2 rounded-full ${message.trim() ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} disabled={!message.trim()}>
                <SendIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-medium text-gray-900 mb-4">
            Suggested Questions
          </h3>
          <ul className="space-y-2">
            {suggestedQueries.map((query, index) => <li key={index}>
                <button onClick={() => {
              setMessage(query);
            }} className="w-full text-left p-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  {query}
                </button>
              </li>)}
          </ul>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <InfoIcon className="h-5 w-5 text-blue-500" />
              </div>
              <div className="ml-3 text-sm text-gray-500">
                <p>
                  The AI assistant can help with common cloud service issues,
                  but complex problems may require human support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};