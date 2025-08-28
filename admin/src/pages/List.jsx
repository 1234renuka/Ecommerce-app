

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  currency } from '../App'
const  backendUrl =import.meta.env.VITE_BACKEND_URL;
import { toast } from 'react-toastify'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Package, 
  Trash2, 
  Edit, 
  Eye, 
  Search, 
  Filter, 
  Grid, 
  List as ListIcon,
  Sparkles,
  AlertTriangle,
  Star,
  Tag,
  DollarSign,
  Image as ImageIcon
} from 'lucide-react'

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(null);

  const fetchList = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.product);
        setFilteredList(response.data.product);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const removeProduct = async (id, name) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });
      
      if (response.data.success) {
        toast.success(`${name} removed successfully`);
        await fetchList();
        setShowDeleteModal(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  // Filter products based on search and category
  useEffect(() => {
    let filtered = list;
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    setFilteredList(filtered);
  }, [searchTerm, selectedCategory, list]);

  useEffect(() => {
    fetchList();
  }, []);

  const categories = ['All', ...new Set(list.map(item => item.category))];

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
                Product Management • {filteredList.length} Items
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
              PRODUCT
            </h2>
            <div className="relative inline-block">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#F2A07B] italic leading-tight">
                Collection
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
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8AAAE5]/50 focus:border-transparent transition-all duration-300 placeholder-[#1A202C]/40"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-[#F2A07B]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8AAAE5]/50 focus:border-transparent transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-white/60 rounded-xl p-1 border border-white/50">
              <motion.button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-[#8AAAE5] text-white shadow-lg' 
                    : 'text-[#1A202C]/60 hover:text-[#1A202C]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Grid className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'table' 
                    ? 'bg-[#8AAAE5] text-white shadow-lg' 
                    : 'text-[#1A202C]/60 hover:text-[#1A202C]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ListIcon className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Products Display */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            // Grid View
            <motion.div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredList.map((item, index) => (
                <motion.div
                  key={item._id}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={item.image[0]}
                      alt={item.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.button
                        className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-[#8AAAE5] hover:bg-white transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-[#F2A07B] hover:bg-white transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => setShowDeleteModal(item)}
                        className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-red-500 hover:bg-white transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-[#1A202C] line-clamp-1 group-hover:text-[#8AAAE5] transition-colors duration-300">
                        {item.name}
                      </h3>
                      {item.bestseller && (
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-[#8AAAE5]/10 text-[#8AAAE5] text-xs rounded-full font-medium">
                        {item.category}
                      </span>
                      <span className="px-2 py-1 bg-[#F2A07B]/10 text-[#F2A07B] text-xs rounded-full font-medium">
                        {item.subCategory}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#1A202C]">
                        {currency}{item.price}
                      </span>
                      <div className="flex items-center gap-1">
                        {item.sizes.slice(0, 3).map(size => (
                          <span key={size} className="w-6 h-6 bg-[#F7F8F8] text-xs font-medium rounded flex items-center justify-center text-[#1A202C]/70">
                            {size}
                          </span>
                        ))}
                        {item.sizes.length > 3 && (
                          <span className="text-xs text-[#1A202C]/50">+{item.sizes.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Table View
            <motion.div
              key="table"
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Table Header */}
              <div className="bg-gradient-to-r from-[#F7F8F8] to-white px-6 py-4 border-b border-white/50">
                <div className="hidden lg:grid grid-cols-[80px_2fr_1fr_1fr_1fr_120px] gap-4 items-center">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#1A202C]/80">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold text-[#1A202C]/80">Product Name</div>
                  <div className="text-sm font-semibold text-[#1A202C]/80">Category</div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#1A202C]/80">
                    <DollarSign className="w-4 h-4" />
                    Price
                  </div>
                  <div className="text-sm font-semibold text-[#1A202C]/80">Sizes</div>
                  <div className="text-sm font-semibold text-[#1A202C]/80 text-center">Actions</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-white/20">
                {filteredList.map((item, index) => (
                  <motion.div
                    key={item._id}
                    className="px-6 py-4 hover:bg-white/40 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[80px_2fr_1fr_1fr_1fr_120px] gap-4 items-center">
                      {/* Image */}
                      <div className="relative">
                        <img
                          className="w-16 h-16 object-cover rounded-xl shadow-sm"
                          src={item.image[0]}
                          alt={item.name}
                        />
                        {item.bestseller && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-white fill-current" />
                          </div>
                        )}
                      </div>

                      {/* Product Name */}
                      <div className="space-y-1">
                        <h3 className="font-semibold text-[#1A202C] line-clamp-2">{item.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-[#F2A07B]/10 text-[#F2A07B] text-xs rounded-full">
                            {item.subCategory}
                          </span>
                        </div>
                      </div>

                      {/* Category */}
                      <div className="lg:block hidden">
                        <span className="px-3 py-1 bg-[#8AAAE5]/10 text-[#8AAAE5] text-sm rounded-full font-medium">
                          {item.category}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="lg:block hidden">
                        <span className="text-lg font-bold text-[#1A202C]">
                          {currency}{item.price}
                        </span>
                      </div>

                      {/* Sizes */}
                      <div className="lg:block hidden">
                        <div className="flex flex-wrap gap-1">
                          {item.sizes.slice(0, 4).map(size => (
                            <span
                              key={size}
                              className="w-6 h-6 bg-[#F7F8F8] text-xs font-medium rounded flex items-center justify-center text-[#1A202C]/70"
                            >
                              {size}
                            </span>
                          ))}
                          {item.sizes.length > 4 && (
                            <span className="text-xs text-[#1A202C]/50">+{item.sizes.length - 4}</span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-center gap-2">
                        <motion.button
                          className="w-8 h-8 bg-[#8AAAE5]/10 text-[#8AAAE5] rounded-lg flex items-center justify-center hover:bg-[#8AAAE5]/20 transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          className="w-8 h-8 bg-[#F2A07B]/10 text-[#F2A07B] rounded-lg flex items-center justify-center hover:bg-[#F2A07B]/20 transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Edit className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          onClick={() => setShowDeleteModal(item)}
                          className="w-8 h-8 bg-red-500/10 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-500/20 transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>

                      {/* Mobile Info */}
                      <div className="lg:hidden col-span-1 pt-3 border-t border-white/20 mt-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-3 py-1 bg-[#8AAAE5]/10 text-[#8AAAE5] text-sm rounded-full">
                            {item.category}
                          </span>
                          <span className="text-lg font-bold text-[#1A202C]">
                            {currency}{item.price}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.sizes.map(size => (
                            <span
                              key={size}
                              className="w-6 h-6 bg-[#F7F8F8] text-xs font-medium rounded flex items-center justify-center text-[#1A202C]/70"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredList.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-[#8AAAE5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-[#8AAAE5]/60" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A202C] mb-2">No Products Found</h3>
            <p className="text-[#1A202C]/60">
              {searchTerm || selectedCategory !== 'All' 
                ? 'Try adjusting your search or filters' 
                : 'Start by adding your first product'}
            </p>
          </motion.div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A202C]">Delete Product</h3>
                  <p className="text-sm text-[#1A202C]/60">This action cannot be undone</p>
                </div>
              </div>
              
              <p className="text-[#1A202C]/80 mb-6">
                Are you sure you want to delete <strong>"{showDeleteModal.name}"</strong>? 
                This will permanently remove the product from your collection.
              </p>
              
              <div className="flex gap-3 justify-end">
                <motion.button
                  onClick={() => setShowDeleteModal(null)}
                  className="px-6 py-2 text-[#1A202C]/70 hover:text-[#1A202C] transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={() => removeProduct(showDeleteModal._id, showDeleteModal.name)}
                  className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Delete
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default List;