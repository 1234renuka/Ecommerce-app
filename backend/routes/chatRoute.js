import express from 'express';
import {
  startChat,
  sendCustomerMessage,
  getCustomerChat,
  getAllChats,
  getChatById,
  sendAdminMessage,
  updateChatStatus,
  markChatAsRead,
  getChatStats
} from '../controllers/chatController.js';
import adminAuth from '../middleware/adminAuth.js';

const chatRouter = express.Router();

// Customer routes (public)
chatRouter.post('/start', startChat);
chatRouter.post('/:chatId/message', sendCustomerMessage);
chatRouter.get('/:chatId', getCustomerChat);

// Admin routes (protected)
chatRouter.get('/admin/all', adminAuth, getAllChats);
chatRouter.get('/admin/stats', adminAuth, getChatStats);
chatRouter.get('/admin/:chatId', adminAuth, getChatById);
chatRouter.post('/admin/:chatId/message', adminAuth, sendAdminMessage);
chatRouter.put('/admin/:chatId/status', adminAuth, updateChatStatus);
chatRouter.put('/admin/:chatId/read', adminAuth, markChatAsRead);

export default chatRouter;