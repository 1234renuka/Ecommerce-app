import React, { useState, useRef, useEffect, useContext } from 'react';
import { MessageCircle, X, Send, User, Store } from 'lucide-react';
import { ShopContext } from '../../context/ShopContext.jsx';
import { backendUrl } from '../config/config.js';

const BargainingChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);
  const [chatSession, setChatSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pollingIntervalId, setPollingIntervalId] = useState(null);

  const messagesEndRef = useRef(null);
  const chatInputRef = useRef(null);
  const { token } = useContext(ShopContext);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatSession?.messages]);

  useEffect(() => {
    if (isOpen && chatInputRef.current) {
      chatInputRef.current.focus();
    }
  }, [isOpen]);

  // Load existing chat session from localStorage on initial component mount
  useEffect(() => {
    const savedChatId = localStorage.getItem('currentChatId');
    if (savedChatId) {
      loadChatSession(savedChatId);
    }
  }, []);

 
  useEffect(() => {
    if (chatSession?._id) {
      const interval = setInterval(() => {
        loadChatSession(chatSession._id);
      }, 5000); 
      setPollingIntervalId(interval);

      return () => clearInterval(interval);
    } else if (pollingIntervalId) {
      clearInterval(pollingIntervalId);
      setPollingIntervalId(null);
    }
  }, [chatSession]);

  // Corrected startChatSession function
// Corrected startChatSession function
const startChatSession = async (name) => {
    try {
        setLoading(true);

        const response = await fetch(`${backendUrl}/api/chat/start`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerName: name,
                customerEmail: '',
                customerId: null, // Pass null if no userId is available
            }),
        });

        const data = await response.json();
        if (data.success) {
            setChatSession(data.chatSession);
            localStorage.setItem('currentChatId', data.chatSession._id);
        } else {
            console.error('Failed to start chat:', data.message);
        }
    } catch (error) {
        console.error('Failed to start chat:', error);
    } finally {
        setLoading(false);
    }
};

  const sendMessage = async (message, productInfo = null) => {
    if (!chatSession?._id) {
      console.error('No chat session available');
      return;
    }

    try {
      // Temporarily add message to local state for instant UI update
      const tempMessage = {
        sender: 'customer',
        message: message,
        timestamp: new Date().toISOString(),
        _id: Date.now(), // Use a temporary ID
      };
      setChatSession((prevSession) => ({
        ...prevSession,
        messages: [...prevSession.messages, tempMessage],
      }));
      setCurrentMessage('');
      scrollToBottom();

      const response = await fetch(`${backendUrl}/api/chat/${chatSession._id}/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          productInfo,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setChatSession(data.chatSession);
      } else {
        console.error('Failed to send message:', data.message);
        // Revert UI if message sending failed
        setChatSession((prevSession) => ({
          ...prevSession,
          messages: prevSession.messages.filter((msg) => msg._id !== tempMessage._id),
        }));
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const loadChatSession = async (chatId) => {
    try {
      const response = await fetch(`${backendUrl}/api/chat/${chatId}`);
      const data = await response.json();
      if (data.success) {
        setChatSession(data.chatSession);
        setIsNameSet(true);
        setCustomerName(data.chatSession.customerName);
      } else {
        localStorage.removeItem('currentChatId');
      }
    } catch (error) {
      console.error('Failed to load chat:', error);
      localStorage.removeItem('currentChatId');
    }
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim() || loading) return;

    if (!isNameSet) {
      setCustomerName(currentMessage.trim());
      setIsNameSet(true);
      await startChatSession(currentMessage.trim());
    } else {
      await sendMessage(currentMessage);
    }
    setCurrentMessage('');
  };

  const handleProductClick = async (product) => {
    const message = `I'm interested in ${product.name} for ₹${product.price}`;
    await sendMessage(message, {
      product: product.name,
      productId: product._id || product.id,
      originalPrice: product.price,
    });
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return new Date().toLocaleTimeString();
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center gap-2"
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline">Chat & Bargain</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-96 h-96 flex flex-col border">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Store size={20} />
              <div>
                <h3 className="font-semibold">Bargain Chat</h3>
                <p className="text-xs opacity-90">
                  {chatSession ? `Chatting as ${chatSession.customerName}` : 'Start Chatting'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 rounded p-1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {loading && (
              <div className="text-center text-gray-500">
                <p>Starting chat...</p>
              </div>
            )}
            
            {chatSession?.messages?.map((msg, index) => {
              const isCustomer = msg.sender === 'customer';
              const isAdmin = msg.sender === 'admin';
              const isSystem = msg.sender === 'system';

              const messageClasses = isCustomer
                ? 'bg-blue-600 text-white'
                : isAdmin
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-800 border';

              return (
                <div
                  key={`${msg._id || index}`}
                  className={`flex ${isCustomer ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs px-3 py-2 rounded-lg ${messageClasses}`}>
                    <div className="flex items-start gap-2">
                      {isSystem && <Store size={16} className="mt-1 text-blue-600" />}
                      {isAdmin && <User size={16} className="mt-1" />}
                      {isCustomer && <User size={16} className="mt-1" />}
                      <div className="flex-1">
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs opacity-70 mt-1">{formatTimestamp(msg.timestamp)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {!chatSession && !loading && (
              <div className="flex justify-start">
                <div className="max-w-xs px-3 py-2 rounded-lg bg-white text-gray-800 border">
                  <div className="flex items-start gap-2">
                    <Store size={16} className="mt-1 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm">Hello! Welcome to our store. Feel free to ask about any product or start bargaining!</p>
                      <p className="text-xs opacity-70 mt-1">{new Date().toLocaleTimeString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {isNameSet && chatSession && (
            <div className="px-4 py-2 bg-gray-100 flex gap-2 flex-wrap">
              <button
                onClick={() => sendMessage('Show me products')}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
              >
                Show Products
              </button>
              <button
                onClick={() => sendMessage('Can we bargain?')}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors"
              >
                Let's Bargain
              </button>
            </div>
          )}

          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                ref={chatInputRef}
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                placeholder={!isNameSet ? 'Enter your name to start chatting...' : 'Type your message or offer...'}
                disabled={loading}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
              <button
                onClick={handleSendMessage}
                disabled={!currentMessage.trim() || loading}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BargainingChatbox;

