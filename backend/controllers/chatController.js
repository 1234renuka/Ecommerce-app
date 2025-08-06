import chatModel from "../models/chatModel.js";
import userModel from "../models/userModel.js";

// Start new chat session
const startChat = async (req, res) => {
  try {
    const { customerName, customerEmail, customerId } = req.body;

    // Check if customer already has an active chat
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

    // Create new chat session
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

    // Add customer message
    const newMessage = {
      sender: 'customer',
      message,
      timestamp: new Date().toLocaleTimeString()
    };

    chat.messages.push(newMessage);
    chat.lastMessage = message;
    chat.unreadCount += 1;
    chat.status = 'active';

    // Update product info if provided
    if (productInfo) {
      chat.product = productInfo.product;
      chat.productId = productInfo.productId;
      chat.originalPrice = productInfo.originalPrice;
      if (productInfo.negotiatedPrice) {
        chat.negotiatedPrice = productInfo.negotiatedPrice;
      }
    }

    await chat.save();

    // Generate system response
    setTimeout(async () => {
      await generateSystemResponse(chatId, message);
    }, 1000);

    res.json({ success: true, chatSession: chat });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Generate system response (automated responses)
const generateSystemResponse = async (chatId, customerMessage) => {
  try {
    const chat = await chatModel.findById(chatId);
    if (!chat) return;

    const msg = customerMessage.toLowerCase();
    let responseMessage = '';

    // Sample products for bargaining
    const sampleProducts = [
      { id: 'prod_001', name: 'Cotton T-Shirt', price: 500, minPrice: 350 },
      { id: 'prod_002', name: 'Denim Jeans', price: 1200, minPrice: 900 },
      { id: 'prod_003', name: 'Summer Dress', price: 800, minPrice: 600 },
      { id: 'prod_004', name: 'Casual Shirt', price: 700, minPrice: 500 }
    ];

    // Check if customer is asking about products
    if (msg.includes('product') || msg.includes('available') || msg.includes('show') || msg.includes('catalog')) {
      responseMessage = 'Here are our available products:';
      
      chat.messages.push({
        sender: 'system',
        message: responseMessage,
        timestamp: new Date().toLocaleTimeString()
      });

      // Add product messages
      sampleProducts.forEach((product, index) => {
        chat.messages.push({
          sender: 'system',
          message: `${product.name} - ₹${product.price}`,
          timestamp: new Date().toLocaleTimeString(),
          type: 'product'
        });
      });

      await chat.save();
      return;
    }

    // Check for bargaining
    if (msg.includes('bargain') || msg.includes('price') || msg.includes('discount') || msg.includes('cheaper')) {
      responseMessage = 'Great! I love a good bargain. Which product are you interested in? Please mention the product name and your offer.';
    }
    // Check if customer is making an offer
    else {
      const priceMatch = msg.match(/(\d+)/);
      const productMatch = sampleProducts.find(p => 
        msg.includes(p.name.toLowerCase()) || 
        msg.includes(p.name.split(' ')[0].toLowerCase())
      );

      if (priceMatch && productMatch) {
        const offeredPrice = parseInt(priceMatch[1]);
        const product = productMatch;
        
        // Update chat with product info
        chat.product = product.name;
        chat.productId = product.id;
        chat.originalPrice = product.price;
        chat.negotiatedPrice = offeredPrice;
        
        if (offeredPrice >= product.minPrice) {
          responseMessage = `Great offer! I can accept ₹${offeredPrice} for the ${product.name}. An admin will confirm this shortly.`;
          chat.status = 'waiting'; // Waiting for admin approval
        } else if (offeredPrice < product.minPrice && offeredPrice > product.minPrice - 100) {
          const counterOffer = product.minPrice + Math.floor(Math.random() * 50);
          responseMessage = `That's a bit low for me. How about ₹${counterOffer}? It's a fair price for the quality.`;
        } else {
          responseMessage = `I appreciate your interest, but ₹${offeredPrice} is too low for the ${product.name}. My best price would be ₹${product.minPrice}. What do you think?`;
        }
      } else {
        // Generic responses
        const responses = [
          'I understand. What specific product were you looking at?',
          'Sure! Let me know which item caught your eye and we can discuss the price.',
          'I\'m here to help! Feel free to make an offer on any product you like.',
          'An admin will be with you shortly to help with your inquiry.'
        ];
        responseMessage = responses[Math.floor(Math.random() * responses.length)];
      }
    }

    // Add system response
    chat.messages.push({
      sender: 'system',
      message: responseMessage,
      timestamp: new Date().toLocaleTimeString()
    });

    chat.lastMessage = responseMessage;
    await chat.save();

  } catch (error) {
    console.log(error);
  }
};

// Get customer's chat session
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

// ADMIN ROUTES

// Get all chat sessions
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

// Get specific chat session
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

// Admin sends message
const sendAdminMessage = async (req, res) => {
  try {
    const { chatId } = req.params;
    const { message } = req.body;

    const chat = await chatModel.findById(chatId);
    if (!chat) {
      return res.json({ success: false, message: "Chat session not found" });
    }

    // Add admin message
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

// Update chat status
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

// Mark chat as read
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

// Get chat statistics
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