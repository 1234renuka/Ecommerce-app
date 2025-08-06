import React, { useState, useEffect } from 'react';
import { MessageSquare, User, Clock, Search, Filter, Eye, Trash2, Send } from 'lucide-react';

const ChatAdminPanel = () => {
  const [chatSessions, setChatSessions] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [loading, setLoading] = useState(true);
  const [adminMessage, setAdminMessage] = useState('');

  // Mock data for development - replace with actual API calls
  useEffect(() => {
    // Simulate loading chat sessions
    setTimeout(() => {
      setChatSessions([
        {
          _id: '1',
          customerName: 'John Doe',
          customerEmail: 'john@example.com',
          status: 'active',
          createdAt: new Date().toISOString(),
          lastMessage: 'I want to bargain for the iPhone',
          messages: [
            {
              _id: '1',
              sender: 'customer',
              message: 'Hello, I want to buy iPhone',
              timestamp: new Date().toISOString()
            },
            {
              _id: '2',
              sender: 'system',
              message: 'Welcome! How can we help you today?',
              timestamp: new Date().toISOString()
            }
          ]
        },
        {
          _id: '2',
          customerName: 'Jane Smith',
          customerEmail: 'jane@example.com',
          status: 'pending',
          createdAt: new Date().toISOString(),
          lastMessage: 'Can you give discount on shoes?',
          messages: [
            {
              _id: '3',
              sender: 'customer',
              message: 'Can you give discount on shoes?',
              timestamp: new Date().toISOString()
            }
          ]
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredChats = chatSessions.filter(chat => {
    const matchesSearch = chat.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chat.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || chat.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleSendAdminMessage = async () => {
    if (!adminMessage.trim() || !selectedChat) return;

    // Add admin message to selected chat
    const newMessage = {
      _id: Date.now().toString(),
      sender: 'admin',
      message: adminMessage,
      timestamp: new Date().toISOString()
    };

    const updatedChat = {
      ...selectedChat,
      messages: [...selectedChat.messages, newMessage]
    };

    setSelectedChat(updatedChat);
    
    // Update in chat sessions list
    setChatSessions(sessions => 
      sessions.map(chat => 
        chat._id === selectedChat._id ? updatedChat : chat
      )
    );

    setAdminMessage('');

    // Here you would make an API call to send the message
    // await sendAdminMessage(selectedChat._id, adminMessage);
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading chat sessions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Chat Admin Panel</h1>
          <p className="text-gray-600">Manage customer chat sessions and bargaining requests</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Search and Filter */}
              <div className="p-4 border-b">
                <div className="space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Search customers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Chat Sessions List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredChats.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    <MessageSquare className="mx-auto mb-2" size={32} />
                    <p>No chat sessions found</p>
                  </div>
                ) : (
                  filteredChats.map((chat) => (
                    <div
                      key={chat._id}
                      onClick={() => setSelectedChat(chat)}
                      className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedChat?._id === chat._id ? 'bg-blue-50 border-blue-200' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <User size={16} className="text-gray-600" />
                            <h3 className="font-semibold text-gray-900">{chat.customerName}</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{chat.customerEmail}</p>
                          <p className="text-sm text-gray-800 truncate">{chat.lastMessage}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(chat.status)}`}>
                              {chat.status}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock size={12} />
                              {formatTimestamp(chat.createdAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="lg:col-span-2">
            {selectedChat ? (
              <div className="bg-white rounded-lg shadow-sm border h-96 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b bg-gray-50 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{selectedChat.customerName}</h2>
                      <p className="text-sm text-gray-600">{selectedChat.customerEmail}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(selectedChat.status)}`}>
                        {selectedChat.status}
                      </span>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Eye size={16} />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {selectedChat.messages.map((message) => (
                    <div
                      key={message._id}
                      className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-3 py-2 rounded-lg ${
                          message.sender === 'customer'
                            ? 'bg-gray-100 text-gray-800'
                            : message.sender === 'admin'
                            ? 'bg-blue-600 text-white'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {formatTimestamp(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Admin Reply */}
                <div className="p-4 border-t bg-gray-50 rounded-b-lg">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={adminMessage}
                      onChange={(e) => setAdminMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendAdminMessage()}
                      placeholder="Type your reply..."
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSendAdminMessage}
                      disabled={!adminMessage.trim()}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MessageSquare size={48} className="mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-semibold mb-2">Select a Chat Session</h3>
                  <p>Choose a chat from the list to view messages and respond</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAdminPanel;