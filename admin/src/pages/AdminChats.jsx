// pages/AdminChats.jsx - Updated with real backend integration
import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  User, 
  Clock, 
  Search, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Users,
  DollarSign,
  MessageCircle,
  ShoppingBag,
  RefreshCw
} from 'lucide-react';
import { currency, backendUrl } from '../App';

const AdminChats = ({ token }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [adminMessage, setAdminMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [chatSessions, setChatSessions] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-refresh interval
  useEffect(() => {
    fetchChats();
    fetchStats();
    
    // Auto refresh every 10 seconds
    const interval = setInterval(() => {
      fetchChats();
      fetchStats();
    }, 10000);

    return () => clearInterval(interval);
  }, [token]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat]);

  // Fetch all chats from backend
  const fetchChats = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/chat/admin/all`, {
        headers: {
          'token': token
        }
      });
      const data = await response.json();
      
      if (data.success) {
        setChatSessions(data.chats);
        
        // Update selected chat if it exists
        if (selectedChat) {
          const updatedSelectedChat = data.chats.find(chat => chat._id === selectedChat._id);
          if (updatedSelectedChat) {
            setSelectedChat(updatedSelectedChat);
          }
        }
      }
    } catch (error) {
      console.error('Failed to fetch chats:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch stats from backend
  const fetchStats = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/chat/admin/stats`, {
        headers: {
          'token': token
        }
      });
      const data = await response.json();
      
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  // Send admin message
  const handleSendMessage = async () => {
    if (!adminMessage.trim() || !selectedChat || sending) return;

    setSending(true);
    try {
      const response = await fetch(`${backendUrl}/api/chat/admin/${selectedChat._id}/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify({ message: adminMessage })
      });

      const data = await response.json();
      if (data.success) {
        setSelectedChat(data.chat);
        setAdminMessage('');
        fetchChats(); // Refresh all chats
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setSending(false);
    }
  };

  // Mark chat as completed
  const markAsCompleted = async (chatId) => {
    try {
      const response = await fetch(`${backendUrl}/api/chat/admin/${chatId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify({ status: 'completed' })
      });

      const data = await response.json();
      if (data.success) {
        fetchChats();
        fetchStats();
      }
    } catch (error) {
      console.error('Failed to mark as completed:', error);
    }
  };

  // Mark chat as read
  const markAsRead = async (chatId) => {
    try {
      await fetch(`${backendUrl}/api/chat/admin/${chatId}/read`, {
        method: 'PUT',
        headers: {
          'token': token
        }
      });
      fetchChats();
    } catch (error) {
      console.error('Failed to mark as read:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'waiting': return 'text-yellow-600 bg-yellow-100';
      case 'completed': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredChats = chatSessions.filter(chat => {
    const matchesSearch = chat.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chat.product?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chat.customerEmail?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || chat.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center h-64">
        <div className="text-center">
          <RefreshCw className="animate-spin mx-auto mb-4" size={32} />
          <p>Loading chats...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <MessageSquare size={28} />
            Chat Management
          </h1>
          <button
            onClick={() => {
              fetchChats();
              fetchStats();
            }}
            className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Chats</p>
                <p className="text-xl font-bold text-blue-800">{stats.totalChats || 0}</p>
              </div>
              <MessageCircle className="text-blue-600" size={20} />
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Active</p>
                <p className="text-xl font-bold text-green-800">{stats.activeChats || 0}</p>
              </div>
              <Users className="text-green-600" size={20} />
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Waiting</p>
                <p className="text-xl font-bold text-yellow-800">{stats.waitingChats || 0}</p>
              </div>
              <Clock className="text-yellow-600" size={20} />
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">Completed</p>
                <p className="text-xl font-bold text-purple-800">{stats.completedChats || 0}</p>
              </div>
              <CheckCircle className="text-purple-600" size={20} />
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-600 text-sm font-medium">Revenue</p>
                <p className="text-xl font-bold text-orange-800">{currency}{stats.totalRevenue || 0}</p>
              </div>
              <DollarSign className="text-orange-600" size={20} />
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-600 text-sm font-medium">Unread</p>
                <p className="text-xl font-bold text-red-800">{stats.totalUnread || 0}</p>
              </div>
              <AlertCircle className="text-red-600" size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat List */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b">
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="waiting">Waiting</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {filteredChats.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <MessageSquare size={32} className="mx-auto mb-2 opacity-50" />
                <p>No chats found</p>
              </div>
            ) : (
              filteredChats.map((chat) => (
                <div
                  key={chat._id}
                  onClick={() => {
                    setSelectedChat(chat);
                    if (chat.unreadCount > 0) {
                      markAsRead(chat._id);
                    }
                  }}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedChat?._id === chat._id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {chat.customerName?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-gray-800 truncate">{chat.customerName || 'Anonymous'}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(chat.status)}`}>
                            {chat.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate mb-1">{chat.lastMessage || 'No messages yet'}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock size={10} />
                          <span>{new Date(chat.updatedAt).toLocaleTimeString()}</span>
                          {chat.product && (
                            <>
                              <span>•</span>
                              <ShoppingBag size={10} />
                              <span className="truncate">{chat.product}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    {chat.unreadCount > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm flex flex-col">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {selectedChat.customerName?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{selectedChat.customerName || 'Anonymous User'}</h3>
                      <p className="text-sm text-gray-600">{selectedChat.customerEmail || 'No email provided'}</p>
                      {selectedChat.product && (
                        <p className="text-sm text-blue-600">
                          {selectedChat.product} - {currency}{selectedChat.originalPrice}
                          {selectedChat.negotiatedPrice && ` → ${currency}${selectedChat.negotiatedPrice}`}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    {selectedChat.status !== 'completed' && (
                      <button
                        onClick={() => markAsCompleted(selectedChat._id)}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 text-sm transition-colors"
                      >
                        Mark Complete
                      </button>
                    )}
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedChat.status)}`}>
                      {selectedChat.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64 bg-gray-50">
                {selectedChat.messages?.map((message, index) => (
                  <div
                    key={message._id || index}
                    className={`flex ${
                      message.sender === 'customer' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg shadow-sm ${
                        message.sender === 'customer'
                          ? 'bg-blue-500 text-white'
                          : message.sender === 'admin'
                          ? 'bg-green-500 text-white'
                          : 'bg-white text-gray-800 border'
                      }`}
                    >
                      <div className="text-xs opacity-75 mb-1">
                        {message.sender === 'customer' ? 'Customer' : 
                         message.sender === 'admin' ? 'You' : 'System'}
                      </div>
                      <p className="text-sm">{message.message}</p>
                      <p className="text-xs opacity-75 mt-1">
                        {message.timestamp || new Date(message.time).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={adminMessage}
                    onChange={(e) => setAdminMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !sending && handleSendMessage()}
                    placeholder="Type your reply..."
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={selectedChat.status === 'completed' || sending}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!adminMessage.trim() || selectedChat.status === 'completed' || sending}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    {sending ? <RefreshCw size={18} className="animate-spin" /> : <Send size={18} />}
                  </button>
                </div>
                
                {/* Quick Responses */}
                {selectedChat.status !== 'completed' && (
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => setAdminMessage('Thanks for your interest! Let me check the best price for you.')}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                      disabled={sending}
                    >
                      Check Price
                    </button>
                    <button
                      onClick={() => setAdminMessage('That sounds like a fair deal! Would you like to proceed?')}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                      disabled={sending}
                    >
                      Accept Offer
                    </button>
                    <button
                      onClick={() => setAdminMessage(`I can offer you a special discount of ${currency}50. How does that sound?`)}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                      disabled={sending}
                    >
                      Special Discount
                    </button>
                    <button
                      onClick={() => setAdminMessage('Let me connect you with our sales team for the best deal.')}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                      disabled={sending}
                    >
                      Connect Sales
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MessageSquare size={48} className="mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium mb-2">Select a chat to start managing</p>
                <p className="text-sm">Choose a customer conversation from the list to view and respond to messages</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminChats;