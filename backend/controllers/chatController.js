import chatModel from "../models/chatModel.js";
import userModel from "../models/userModel.js";

// Start new chat session
const startChat = async (req, res) => {
  try {
    const { customerName, customerEmail, customerId } = req.body;

    let existingChat = await chatModel.findOne({
      $or: [
        { customerEmail: customerEmail },
        { customerId: customerId }
      ],
      status: { $in: ['active', 'waiting'] }
    });

    if (existingChat) {
      return res.json({ success: true, chatSession: existingChat });
    }

    const newChat = new chatModel({
      customerName,
      customerEmail,
      customerId,
      messages: [{
        sender: 'system',
        message: `Hello ${customerName}! Welcome to our store. How can I help you today?`,
        timestamp: new Date().toLocaleTimeString()
      }]
    });

    await newChat.save();
    res.json({ success: true, chatSession: newChat });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Customer sends message
const sendCustomerMessage = async (req, res) => {
  try {
    const { chatId } = req.params;
    const { message, productInfo } = req.body;

    const chat = await chatModel.findById(chatId);
    if (!chat) {
      return res.json({ success: false, message: "Chat session not found" });
    }

    const newMessage = {
      sender: 'customer',
      message,
      timestamp: new Date().toLocaleTimeString()
    };

    chat.messages.push(newMessage);
    chat.lastMessage = message;
    chat.unreadCount += 1;
    chat.status = 'waiting';

    if (productInfo) {
      chat.product = productInfo.product;
      chat.productId = productInfo.productId;
      chat.originalPrice = productInfo.originalPrice;
      if (productInfo.negotiatedPrice) {
        chat.negotiatedPrice = productInfo.negotiatedPrice;
      }
    }

    await chat.save();
    res.json({ success: true, chatSession: chat });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Admin sends message
const sendAdminMessage = async (req, res) => {
  try {
    const { chatId } = req.params;
    const { message } = req.body;

    const chat = await chatModel.findById(chatId);
    if (!chat) {
      return res.json({ success: false, message: "Chat session not found" });
    }

    chat.messages.push({
      sender: 'admin',
      message,
      timestamp: new Date().toLocaleTimeString()
    });

    chat.lastMessage = message;
    chat.status = 'active';

    await chat.save();
    res.json({ success: true, chat });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// Other functions remain the same
const getCustomerChat = async (req, res) => {
  try {
    const { chatId } = req.params;
    const chat = await chatModel.findById(chatId);
    
    if (!chat) {
      return res.json({ success: false, message: "Chat session not found" });
    }

    res.json({ success: true, chatSession: chat });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getAllChats = async (req, res) => {
  try {
    const chats = await chatModel.find()
      .populate('customerId', 'name email')
      .sort({ updatedAt: -1 });

    res.json({ success: true, chats });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getChatById = async (req, res) => {
  try {
    const { chatId } = req.params;
    const chat = await chatModel.findById(chatId)
      .populate('customerId', 'name email');

    if (!chat) {
      return res.json({ success: false, message: "Chat session not found" });
    }

    res.json({ success: true, chat });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


const updateChatStatus = async (req, res) => {
  try {
    const { chatId } = req.params;
    const { status } = req.body;

    const updateData = { status };
    if (status === 'completed') {
      updateData.dealCompleted = new Date();
    }

    const chat = await chatModel.findByIdAndUpdate(chatId, updateData, { new: true });

    if (!chat) {
      return res.json({ success: false, message: "Chat session not found" });
    }

    res.json({ success: true, chat });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const markChatAsRead = async (req, res) => {
  try {
    const { chatId } = req.params;

    const chat = await chatModel.findByIdAndUpdate(
      chatId, 
      { unreadCount: 0 }, 
      { new: true }
    );

    if (!chat) {
      return res.json({ success: false, message: "Chat session not found" });
    }

    res.json({ success: true, chat });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getChatStats = async (req, res) => {
  try {
    const totalChats = await chatModel.countDocuments();
    const activeChats = await chatModel.countDocuments({ status: 'active' });
    const waitingChats = await chatModel.countDocuments({ status: 'waiting' });
    const completedChats = await chatModel.countDocuments({ status: 'completed' });
    
    const completedDealsData = await chatModel.find({ 
      status: 'completed', 
      negotiatedPrice: { $exists: true } 
    });
    
    const totalRevenue = completedDealsData.reduce((sum, chat) => sum + (chat.negotiatedPrice || 0), 0);
    const totalUnread = await chatModel.aggregate([
      { $group: { _id: null, total: { $sum: "$unreadCount" } } }
    ]);

    const stats = {
      totalChats,
      activeChats,
      waitingChats,
      completedChats,
      totalRevenue,
      totalUnread: totalUnread[0]?.total || 0
    };

    res.json({ success: true, stats });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  startChat,
  sendCustomerMessage,
  getCustomerChat,
  getAllChats,
  getChatById,
  sendAdminMessage,
  updateChatStatus,
  markChatAsRead,
  getChatStats
};