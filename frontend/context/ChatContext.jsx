
import React, { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext();

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatContextProvider');
  }
  return context;
};

export const ChatContextProvider = ({ children }) => {
  const [chatSessions, setChatSessions] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('chatSessions');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentSessionId, setCurrentSessionId] = useState(null);

  // Save to localStorage whenever chatSessions change
  useEffect(() => {
    localStorage.setItem('chatSessions', JSON.stringify(chatSessions));
  }, [chatSessions]);

  // Create a new chat session
  const createChatSession = (customerName) => {
    const newSession = {
      id: Date.now(),
      customerName,
      status: 'active',
      createdAt: new Date().toISOString(),
      lastMessage: '',
      timestamp: new Date().toISOString(),
      unreadCount: 0,
      product: null,
      originalPrice: null,
      negotiatedPrice: null,
      messages: [
        {
          id: 1,
          sender: 'system',
          message: `Hello ${customerName}! Welcome to our store. How can I help you today?`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]
    };

    setChatSessions(prev => [...prev, newSession]);
    setCurrentSessionId(newSession.id);
    return newSession.id;
  };

  // Add message to a chat session
  const addMessage = (sessionId, message) => {
    setChatSessions(prev =>
      prev.map(session =>
        session.id === sessionId
          ? {
              ...session,
              messages: [...session.messages, message],
              lastMessage: message.message,
              timestamp: new Date().toISOString(),
              unreadCount: message.sender === 'customer' ? session.unreadCount + 1 : session.unreadCount
            }
          : session
      )
    );
  };

  // Update session status
  const updateSessionStatus = (sessionId, status) => {
    setChatSessions(prev =>
      prev.map(session =>
        session.id === sessionId ? { ...session, status } : session
      )
    );
  };

  // Update session product info
  const updateSessionProduct = (sessionId, productInfo) => {
    setChatSessions(prev =>
      prev.map(session =>
        session.id === sessionId
          ? { ...session, ...productInfo }
          : session
      )
    );
  };

  // Mark messages as read (for admin)
  const markAsRead = (sessionId) => {
    setChatSessions(prev =>
      prev.map(session =>
        session.id === sessionId ? { ...session, unreadCount: 0 } : session
      )
    );
  };

  // Get current session
  const getCurrentSession = () => {
    return chatSessions.find(session => session.id === currentSessionId);
  };

  // Get all active sessions
  const getActiveSessions = () => {
    return chatSessions.filter(session => session.status === 'active');
  };

  // Get session by ID
  const getSessionById = (sessionId) => {
    return chatSessions.find(session => session.id === sessionId);
  };

  const value = {
    chatSessions,
    currentSessionId,
    setCurrentSessionId,
    createChatSession,
    addMessage,
    updateSessionStatus,
    updateSessionProduct,
    markAsRead,
    getCurrentSession,
    getActiveSessions,
    getSessionById,
    setChatSessions
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};