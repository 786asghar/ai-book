import React, { useState, useEffect, useRef } from 'react';
import './ChatbotWidget.css';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'full_book' | 'selected_text_only'>('full_book');
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Capture selected text from the page
  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        setSelectedText(selection.toString());
      }
    };

    document.addEventListener('mouseup', handleSelectionChange);
    
    return () => {
      document.removeEventListener('mouseup', handleSelectionChange);
    };
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMode = () => {
    setMode(prev => prev === 'full_book' ? 'selected_text_only' : 'full_book');
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Prepare payload for API call
      const payload = {
        user_query: inputValue,
        selected_text: selectedText,
        mode: mode,
      };

      // Call backend API
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add assistant response to chat
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.assistant_response,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error processing your request.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-widget">
      {!isOpen ? (
        <button 
          className="chatbot-toggle-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open chatbot"
        >
          💬
        </button>
      ) : (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Physical AI & Robotics Assistant</h3>
            <div className="header-controls">
              <button 
                className={`mode-toggle ${mode === 'selected_text_only' ? 'active' : ''}`}
                onClick={toggleMode}
                title="Toggle between full book mode and selected text only mode"
              >
                {mode === 'selected_text_only' ? '🔒 Selected Text Only' : '📚 Full Book'}
              </button>
              <button 
                className="close-button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
              >
                ×
              </button>
            </div>
          </div>
          
          <div className="chatbot-messages">
            {messages.length === 0 ? (
              <div className="welcome-message">
                <p>Hello! I'm here to help you with information about Physical AI & Humanoid Robotics.</p>
                <p>Select text on the page to use in "Selected Text Only" mode.</p>
                {mode === 'selected_text_only' && selectedText && (
                  <div className="selected-text-indicator">
                    <strong>Using your selected text:</strong> "{selectedText.substring(0, 50)}..."
                  </div>
                )}
              </div>
            ) : (
              messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`message ${message.role}-message`}
                >
                  <div className="message-content">{message.content}</div>
                  <div className="message-timestamp">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="message assistant-message">
                <div className="message-content">
                  <span className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {mode === 'selected_text_only' && selectedText && (
            <div className="selected-text-preview">
              <small>Selected: "{selectedText.substring(0, 80)}{selectedText.length > 80 ? '...' : ''}"</small>
            </div>
          )}
          
          <div className="chatbot-input-area">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Physical AI & Robotics..."
              disabled={isLoading}
              rows={1}
              className="chatbot-input"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="send-button"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;