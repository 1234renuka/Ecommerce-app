import mongoose from "mongoose";

const chatSessionSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  status: { 
    type: String, 
    enum: ['active', 'waiting', 'completed'], 
    default: 'waiting' 
  },
  lastMessage: { type: String, default: '' },
  unreadCount: { type: Number, default: 0 },
  product: { type: String },
  productId: { type: String },
  originalPrice: { type: Number },
  negotiatedPrice: { type: Number },
  sessionStarted: { type: Date, default: Date.now },
  dealCompleted: { type: Date },
  messages: [{
    sender: { 
      type: String, 
      enum: ['customer', 'admin', 'system'],
      required: true 
    },
    message: { type: String, required: true },
    timestamp: { type: String },
    time: { type: Date, default: Date.now },
    type: { type: String, default: 'text' } // for product messages
  }]
}, { timestamps: true });

const chatModel = mongoose.models.chatsession || mongoose.model('chatsession', chatSessionSchema);

export default chatModel;