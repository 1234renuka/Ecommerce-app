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
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product' }, // Improved type
  originalPrice: { type: Number },
  negotiatedPrice: { type: Number },
  dealCompleted: { type: Date },
  messages: [{
    sender: {
      type: String,
      enum: ['customer', 'admin', 'system'],
      required: true
    },
    message: { type: String, required: true },
    time: { type: Date, default: Date.now }, // Single, standard timestamp field
    type: { type: String, default: 'text' }
  }]
}, { timestamps: true }); // This adds `createdAt` and `updatedAt`

const chatModel = mongoose.models.chatsession || mongoose.model('chatsession', chatSessionSchema);

export default chatModel;