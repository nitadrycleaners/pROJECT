import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your Nita Dry Cleaners assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickResponses = [
    "What are your prices?",
    "What are your hours?",
    "Do you offer pickup?",
    "How long does cleaning take?"
  ];

  const botResponses: { [key: string]: string } = {
    "prices": "Our dry cleaning starts at 100 rupee per kg per item, laundry service with delivery is 110/kg, and alterations start at 50. Express service available with 150 rupee.",
    "hours": "We're open Monday-Friday 7AM-7PM, Saturday 8AM-6PM, and closed Sundays. Emergency service available 24/7!",
    "pickup": "Yes! We offer free pickup and delivery service within 5 miles. Same-day pickup available if you call before 2PM.",
    "cleaning": "Standard turnaround is 24-48 hours. Express same-day service available for urgent needs with priority handling.",
    "default": "Thank you for your question! For detailed information, please call us at (977) 9761-1799032 or visit our store. Our team will be happy to help!"
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return botResponses.prices;
    }
    if (message.includes('hour') || message.includes('time') || message.includes('open')) {
      return botResponses.hours;
    }
    if (message.includes('pickup') || message.includes('delivery') || message.includes('collect')) {
      return botResponses.pickup;
    }
    if (message.includes('how long') || message.includes('when ready') || message.includes('turnaround')) {
      return botResponses.cleaning;
    }
    
    return botResponses.default;
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Add bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border transition-all duration-300 z-50 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{ width: '384px', height: '500px' }}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 p-2 rounded-full">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">CleanPress Assistant</h3>
              <p className="text-blue-100 text-sm">Online now</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-700 p-1 rounded transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-blue-600 text-white'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <Bot className="h-4 w-4 mt-0.5 text-blue-600" />
                  )}
                  <p className="text-sm">{message.text}</p>
                  {!message.isBot && (
                    <User className="h-4 w-4 mt-0.5 text-blue-200" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Responses */}
        <div className="px-4 py-2 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {quickResponses.map((response, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(response)}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors duration-200"
              >
                {response}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;