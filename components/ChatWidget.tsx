import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';
import { Button, Form, InputGroup } from 'react-bootstrap';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: ChatSender.BOT,
      text: 'Hello! Welcome to Ideal Cure Homeopathy. How can I assist you with your health journey today?',
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: ChatSender.USER,
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => `${m.sender}: ${m.text}`).join('\n');
      const responseText = await generateChatResponse(history, userMsg.text);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: ChatSender.BOT,
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="position-fixed bottom-0 end-0 mb-4 me-4 d-flex flex-column align-items-end z-3" style={{ pointerEvents: 'none' }}>
      {/* Chat Window */}
      <div 
        className={`bg-white rounded-4 shadow-lg overflow-hidden transition-all duration-300 border mb-3 ${isOpen ? 'd-block' : 'd-none'}`}
        style={{ width: '350px', maxWidth: '90vw', pointerEvents: 'auto' }}
      >
        {/* Header */}
        <div className="bg-brand-600 p-3 d-flex justify-content-between align-items-center text-white rounded-top-4">
          <div className="d-flex align-items-center gap-2">
            <div className="p-2 bg-white bg-opacity-25 rounded-circle d-flex">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="h6 mb-0 fw-bold">Ideal Cure Assistant</h3>
              <p className="mb-0 small text-white-50" style={{ fontSize: '0.75rem' }}>Powered by Gemini AI</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="btn btn-link text-white p-0 text-decoration-none">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="bg-light p-3 overflow-y-auto" style={{ height: '350px' }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`d-flex mb-3 ${msg.sender === ChatSender.USER ? 'justify-content-end' : 'justify-content-start'}`}>
              <div 
                className={`p-2 px-3 small ${
                  msg.sender === ChatSender.USER 
                    ? 'bg-brand-600 text-white shadow-sm' 
                    : 'bg-white text-dark border shadow-sm'
                }`}
                style={{ 
                  borderRadius: '1rem', 
                  maxWidth: '85%',
                  borderBottomRightRadius: msg.sender === ChatSender.USER ? '0' : '1rem',
                  borderBottomLeftRadius: msg.sender === ChatSender.BOT ? '0' : '1rem',
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="d-flex mb-3 justify-content-start">
               <div className="bg-white text-secondary p-2 px-3 rounded shadow-sm d-flex gap-1" style={{ borderBottomLeftRadius: '0', borderRadius: '1rem' }}>
                 <div className="spinner-grow spinner-grow-sm text-secondary" style={{ width: '0.5rem', height: '0.5rem' }} role="status"></div>
                 <div className="spinner-grow spinner-grow-sm text-secondary" style={{ width: '0.5rem', height: '0.5rem', animationDelay: '0.2s' }} role="status"></div>
                 <div className="spinner-grow spinner-grow-sm text-secondary" style={{ width: '0.5rem', height: '0.5rem', animationDelay: '0.4s' }} role="status"></div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-2 bg-white border-top">
          <InputGroup>
            <Form.Control
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="rounded-pill bg-light border-0 px-3 py-2 fs-6"
              style={{ boxShadow: 'none' }}
            />
            <Button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              variant="primary"
              className="rounded-circle ms-2 d-flex align-items-center justify-content-center p-2"
              style={{ width: '40px', height: '40px' }}
            >
              <Send size={18} />
            </Button>
          </InputGroup>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center"
        style={{ width: '60px', height: '60px', pointerEvents: 'auto' }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};