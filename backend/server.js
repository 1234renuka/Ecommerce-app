import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import chatRouter from './routes/chatRoute.js'; // Add this import

// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect to database
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173", // Vite local
      // CRA local
      "https://ecommerce-app-xi-brown.vercel.app/", // 🔗 deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/chat', chatRouter); // Add this line

app.get('/', (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log('Server started on PORT : ' + port));