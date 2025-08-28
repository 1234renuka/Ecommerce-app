import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, 
  MapPin, 
  Phone, 
  Calendar, 
  CreditCard, 
  Truck, 
  CheckCircle, 
  Clock, 
  Search, 
  Filter,
  Sparkles,
  User,
  ShoppingBag,
  DollarSign,
  Eye,
  ArrowUpDown
} from 'lucide-react';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [paymentFilter, setPaymentFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
        setFilteredOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status', 
        { orderId, status: event.target.value }, 
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
        toast.success(`Order status updated to ${event.target.value}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update order status");
    }
  };

  // Filter orders based on search and filters
  useEffect(() => {
    let filtered = orders;
    
    if (searchTerm) {
      filtered = filtered.filter(order => 
        order.address.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.address.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.items.some(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    if (statusFilter !== 'All') {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    if (paymentFilter !== 'All') {
      const isPaid = paymentFilter === 'Paid';
      filtered = filtered.filter(order => order.payment === isPaid);
    }
    
    setFilteredOrders(filtered);
  }, [searchTerm, statusFilter, paymentFilter, orders]);

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const getStatusColor = (status) => {
    const colors = {
      "Order Placed": "bg-blue-500/10 text-blue-600 border-blue-500/20",
      "Packing": "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      "Shipped": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "Out for delivery": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "Delivered": "bg-green-500/10 text-green-600 border-green-500/20"
    };
    return colors[status] || "bg-gray-500/10 text-gray-600 border-gray-500/20";
  };

  const getStatusIcon = (status) => {
    const icons = {
      "Order Placed": <ShoppingBag className="w-4 h-4" />,
      "Packing": <Package className="w-4 h-4" />,
      "Shipped": <Truck className="w-4 h-4" />,
      "Out for delivery": <Truck className="w-4 h-4" />,
      "Delivered": <CheckCircle className="w-4 h-4" />
    };
    return icons[status] || <Clock className="w-4 h-4" />;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fdfbf7] via-white to-[#f2eee9] p-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <motion.div
            className="w-16 h-16 border-4 border-[#8AAAE5]/30 border-t-[#8AAAE5] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbf7] via-white to-[#f2eee9] p-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-1/4 w-80 h-80 bg-[#F2A07B] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/6 w-96 h-96 bg-[#8AAAE5] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.03, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Premium Badge */}
          <motion.div
            className="inline-flex items-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Package className="w-5 h-5 text-[#F2A07B]" />
            <div className="px-6 py-3 bg-gradient-to-r from-[#F2A07B]/10 via-[#8AAAE5]/10 to-[#F2A07B]/10 border border-[#F2A07B]/20 rounded-full">
              <span className="text-sm font-medium text-[#1A202C] tracking-[0.2em] uppercase">
                Order Management • {filteredOrders.length} Orders
              </span>
            </div>
            <Sparkles className="w-5 h-5 text-[#8AAAE5]" />
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-[#1A202C] leading-tight tracking-tight mb-4">
              ORDER
            </h2>
            <div className="relative inline-block">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#F2A07B] italic leading-tight">
                Management
              </h3>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F2A07B] via-[#8AAAE5] to-[#F2A07B] rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Controls Section */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1A202C]/40" />
              <input
                type="text"
                placeholder="Search orders, customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8AAAE5]/50 focus:border-transparent transition-all duration-300 placeholder-[#1A202C]/40"
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Status Filter */}
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-[#F2A07B]" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8AAAE5]/50 focus:border-transparent transition-all duration-300"
                >
                  <option value="All">All Status</option>
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>

              {/* Payment Filter */}
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-[#8AAAE5]" />
                <select
                  value={paymentFilter}
                  onChange={(e) => setPaymentFilter(e.target.value)}
                  className="px-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8AAAE5]/50 focus:border-transparent transition-all duration-300"
                >
                  <option value="All">All Payments</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Orders List */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {filteredOrders.map((order, index) => (
            <motion.div
              key={order._id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              {/* Order Header */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 pb-4 border-b border-white/30">
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8AAAE5]/20 to-[#F2A07B]/20 rounded-xl flex items-center justify-center">
                    <img className="w-6 h-6" src={assets.parcel_icon} alt="" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A202C] text-lg">
                      Order #{order._id.slice(-6).toUpperCase()}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-[#1A202C]/60" />
                      <span className="text-sm text-[#1A202C]/60">
                        {new Date(order.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Payment Status */}
                  <div className={`px-3 py-1 rounded-full border ${
                    order.payment 
                      ? 'bg-green-500/10 text-green-600 border-green-500/20' 
                      : 'bg-red-500/10 text-red-600 border-red-500/20'
                  }`}>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-3 h-3" />
                      <span className="text-sm font-medium">
                        {order.payment ? "Paid" : "Pending"}
                      </span>
                    </div>
                  </div>

                  {/* Total Amount */}
                  <div className="flex items-center gap-2 bg-[#8AAAE5]/10 px-4 py-2 rounded-xl">
                    <span className="w-4 h-4 text-[#8AAAE5] font-bold text-sm flex items-center justify-center">₹</span>
                    <span className="font-bold text-[#1A202C] text-lg">
                      ₹{order.amount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Order Items */}
                <div className="lg:col-span-1">
                  <h4 className="font-semibold text-[#1A202C] mb-3 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-[#F2A07B]" />
                    Items ({order.items.length})
                  </h4>
                  <div className="space-y-2">
                    {order.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center justify-between p-3 bg-white/60 rounded-lg border border-white/40"
                      >
                        <div>
                          <p className="font-medium text-[#1A202C] text-sm">
                            {item.name}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-[#1A202C]/60">
                              Size: {item.size}
                            </span>
                            <span className="text-xs text-[#1A202C]/60">
                              Qty: {item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Details */}
                <div className="lg:col-span-1">
                  <h4 className="font-semibold text-[#1A202C] mb-3 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#8AAAE5]" />
                    Customer Details
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/60 rounded-lg border border-white/40">
                      <p className="font-medium text-[#1A202C]">
                        {order.address.firstName} {order.address.lastName}
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center gap-2 text-sm text-[#1A202C]/70">
                          <MapPin className="w-3 h-3" />
                          <span>{order.address.street}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#1A202C]/70">
                          <MapPin className="w-3 h-3" />
                          <span>
                            {order.address.city}, {order.address.state}, {order.address.country} {order.address.zipcode}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#1A202C]/70">
                          <Phone className="w-3 h-3" />
                          <span>{order.address.phone}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white/60 rounded-lg border border-white/40">
                      <div className="flex items-center gap-2 text-sm">
                        <CreditCard className="w-3 h-3 text-[#F2A07B]" />
                        <span className="text-[#1A202C]/70">Payment Method:</span>
                        <span className="font-medium text-[#1A202C]">
                          {order.paymentMethod}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Management */}
                <div className="lg:col-span-1">
                  <h4 className="font-semibold text-[#1A202C] mb-3 flex items-center gap-2">
                    <ArrowUpDown className="w-4 h-4 text-[#F2A07B]" />
                    Order Status
                  </h4>
                  <div className="space-y-4">
                    {/* Current Status Display */}
                    <div className={`p-4 rounded-xl border ${getStatusColor(order.status)}`}>
                      <div className="flex items-center gap-3">
                        {getStatusIcon(order.status)}
                        <div>
                          <p className="font-semibold text-sm">
                            {order.status}
                          </p>
                          <p className="text-xs opacity-75">
                            Current status
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Status Selector */}
                    <div>
                      <label className="block text-sm font-medium text-[#1A202C] mb-2">
                        Update Status:
                      </label>
                      <select 
                        onChange={(event) => statusHandler(event, order._id)} 
                        value={order.status} 
                        className="w-full p-3 bg-white/70 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8AAAE5]/50 focus:border-transparent transition-all duration-300 text-sm font-medium"
                      >
                        <option value="Order Placed">Order Placed</option>
                        <option value="Packing">Packing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Out for delivery">Out for delivery</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </div>


                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-[#8AAAE5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-[#8AAAE5]/60" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A202C] mb-2">No Orders Found</h3>
            <p className="text-[#1A202C]/60">
              {searchTerm || statusFilter !== 'All' || paymentFilter !== 'All'
                ? 'Try adjusting your search or filters' 
                : 'Orders will appear here once customers start placing them'}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Orders;