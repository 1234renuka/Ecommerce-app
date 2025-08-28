// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import axios from 'axios'
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'
// import { data } from 'react-router-dom'

// const Add = ({token}) => {

//   const [image1,setImage1] = useState(false);
//   const [image2,setImage2] = useState(false);
//   const [image3,setImage3] = useState(false);
//   const [image4,setImage4] = useState(false);

//   const [name,setName] = useState("");
//   const [description ,setDescription] = useState("");
//   const [price,setPrice] = useState("");
//   const [category,setCategory] =useState("Men");
//   const [subCategory,setSubCategory] = useState("Topwear");
//   const [bestseller,setBestseller] = useState(false);
//   const [sizes,setSizes] = useState([]);
  
//   const onSubmitHandler = async(e)=>{
//          e.preventDefault();

//          try{
//            const formData = new FormData()

//            formData.append("name",name)
//            formData.append("description",description)
//            formData.append("price",price)
//            formData.append("category",category)
//            formData.append("subCategory",subCategory)
//            formData.append("bestseller",bestseller)
//            formData.append("sizes",JSON.stringify(sizes))

//            image1 && formData.append("image1",image1)
//            image2 && formData.append("image2",image2)
//            image3 && formData.append("image3",image3)
//            image4 && formData.append("image4",image4)

//            const response = await axios.post(backendUrl + "/api/product/add" ,formData,{headers:{token}})
           
          
          
//            if(response.data.success){
//             toast.success(response.data.message)
//             setName('')
//             setDescription('')
//             setImage1(false)
//             setImage2(false)
//             setImage3(false)
//             setImage4(false)
//             setPrice('')
//            }else{
//             toast.error(response.data.me)
//            }
        

//          }catch(error){
//           console.log(error);
//           toast.error(error.message)
//          }
//   }

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
//       <div>
//         <p className='mb-2'>Upload Image</p>
//         <div className='flex gap-2'>
//           <label htmlFor="image1">
//             <img className='w-20' src={ !image1 ? assets.upload_area: URL.createObjectURL(image1)} alt="" />
//             <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
//           </label>
//           <label htmlFor="image2">
//             <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
//             <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
//           </label>
//           <label htmlFor="image3">
//             <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
//             <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
//           </label>
//           <label htmlFor="image4">
//             <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
//             <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
//           </label>
//         </div>
//       </div>

//       <div className='w-full'>
//         <p className='mb-2 '>Product name</p>
//          <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
//       </div>
//       <div className='w-full'>
//         <p className='mb-2 '>Product description</p>
//          <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here'  required />
//       </div>
//       <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
//         <div>
//           <p className='mb-2'>Product category</p>
//           <select onChange={(e)=> setCategory(e.target.value)} className='w-full px-3 py-2' >
//             <option  value="Men">Men</option>
//             <option value="Women">Women</option>
//             <option value="Kids">Kids</option>
//           </select>
//         </div>
//         <div>
//           <p className='mb-2'>Sub category</p>
//           <select onChange={(e)=> setSubCategory(e.target.value)} className='w-full px-3 py-2' >
//             <option value="Topwear">Topwear</option>
//             <option value="Bottomwear">Bottomwear</option>
//             <option value="Winterwear">Winterwear</option>
//           </select>
//         </div>
//         <div>
//           <p className='mb-2 '>Product Price</p>
//           <input onChange={(e)=> setPrice(e.target.value)} className='w-ful px-3 py-2 sm:w-[120px] ' type="Number"  placeholder='25'/>
//         </div>
//       </div>
//       <div>
//         <p className='mb-2'>Product Sizes</p>
//        <div className='flex gap-3'>
//         <div onClick={()=>setSizes(prev=>prev.includes("S") ? prev.filter(item=>item !== "S"):[...prev,"S"])}>
//           <p className={ `${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer` }>S</p>
//         </div>
//         <div onClick={()=>setSizes(prev=>prev.includes("M") ? prev.filter(item=>item !== "M"):[...prev,"M"])} >
//           <p className={ `${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer` }>M</p>
//         </div>
//         <div onClick={()=>setSizes(prev=>prev.includes("L") ? prev.filter(item=>item !== "L"):[...prev,"L"])}>
//           <p  className={ `${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer` }>L</p>
//         </div>
//         <div onClick={()=>setSizes(prev=>prev.includes("XL") ? prev.filter(item=>item !== "XL"):[...prev,"XL"])}>
//           <p  className={ `${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer` }>XL</p>
//         </div>
//         <div onClick={()=>setSizes(prev=>prev.includes("XXL") ? prev.filter(item=>item !== "XXL"):[...prev,"XXL"])}>
//           <p  className={ `${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer` }>XXL</p>
//         </div>
//        </div>
//       </div>
//       <div className='flex gap-2 mt-2'>
//         <input onChange={()=> setBestseller(prev => !prev) } checked ={bestseller} type="checkbox" id='bestseller'/>
//         <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
//       </div>
//       <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>Add</button>
//     </form>
//   )
// }

// export default Add

import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
const  backendUrl =import.meta.env.VITE_BACKEND_URL;
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { 
  Upload, 
  Package, 
  FileText, 
  Tag, 
  DollarSign, 
  Star, 
  Plus,
  Image as ImageIcon,
  Sparkles,
  Check
} from 'lucide-react'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
  
  const onSubmitHandler = async(e) => {
    e.preventDefault();

    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })
      
      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        setSizes([])
        setBestseller(false)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const sizeOptions = ["S", "M", "L", "XL", "XXL"];

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

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
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
            <Plus className="w-5 h-5 text-[#F2A07B]" />
            <div className="px-6 py-3 bg-gradient-to-r from-[#F2A07B]/10 via-[#8AAAE5]/10 to-[#F2A07B]/10 border border-[#F2A07B]/20 rounded-full">
              <span className="text-sm font-medium text-[#1A202C] tracking-[0.2em] uppercase">
                Add New Product • Expand Your Collection
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
              CREATE
            </h2>
            <div className="relative inline-block">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#F2A07B] italic leading-tight">
                New Product
              </h3>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F2A07B] via-[#8AAAE5] to-[#F2A07B] rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-8'>
            
            {/* Image Upload Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] rounded-xl flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A202C]">Product Images</h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#8AAAE5]/30 to-transparent"></div>
              </div>
              
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {[
                  { img: image1, setImg: setImage1, id: "image1" },
                  { img: image2, setImg: setImage2, id: "image2" },
                  { img: image3, setImg: setImage3, id: "image3" },
                  { img: image4, setImg: setImage4, id: "image4" }
                ].map((imgData, index) => (
                  <motion.label
                    key={imgData.id}
                    htmlFor={imgData.id}
                    className="group relative cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative w-full aspect-square bg-gradient-to-br from-[#F7F8F8] to-white rounded-2xl border-2 border-dashed border-[#8AAAE5]/30 group-hover:border-[#8AAAE5]/50 transition-all duration-300 overflow-hidden">
                      {imgData.img ? (
                        <img 
                          className='w-full h-full object-cover rounded-2xl' 
                          src={URL.createObjectURL(imgData.img)} 
                          alt={`Upload ${index + 1}`} 
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <Upload className="w-8 h-8 text-[#8AAAE5]/60 mb-2" />
                          <span className="text-xs text-[#1A202C]/60 text-center px-2">
                            Upload Image {index + 1}
                          </span>
                        </div>
                      )}
                      
                      {/* Overlay for uploaded images */}
                      {imgData.img && (
                        <div className="absolute inset-0 bg-[#8AAAE5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                            <Upload className="w-4 h-4 text-[#8AAAE5]" />
                          </div>
                        </div>
                      )}
                    </div>
                    <input 
                      onChange={(e) => imgData.setImg(e.target.files[0])} 
                      type="file" 
                      id={imgData.id} 
                      hidden 
                      accept="image/*"
                    />
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Product Details Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#F2A07B] to-[#F4B692] rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A202C]">Product Details</h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#F2A07B]/30 to-transparent"></div>
              </div>

              {/* Product Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-[#1A202C]/80">
                  <FileText className="w-4 h-4 text-[#F2A07B]" />
                  Product Name
                </label>
                <input 
                  onChange={(e) => setName(e.target.value)} 
                  value={name} 
                  className='w-full px-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8AAAE5]/50 focus:border-transparent transition-all duration-300 placeholder-[#1A202C]/40' 
                  type="text" 
                  placeholder='Enter product name' 
                  required 
                />
              </div>

              {/* Product Description */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-[#1A202C]/80">
                  <FileText className="w-4 h-4 text-[#F2A07B]" />
                  Product Description
                </label>
                <textarea 
                  onChange={(e) => setDescription(e.target.value)} 
                  value={description} 
                  className='w-full px-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8AAAE5]/50 focus:border-transparent transition-all duration-300 placeholder-[#1A202C]/40 min-h-[100px] resize-none' 
                  placeholder='Describe your product features, materials, and benefits...'  
                  required 
                />
              </div>
            </motion.div>

            {/* Category & Pricing Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] rounded-xl flex items-center justify-center">
                  <Tag className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A202C]">Category & Pricing</h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#8AAAE5]/30 to-transparent"></div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {/* Category */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1A202C]/80">Product Category</label>
                  <select 
                    onChange={(e) => setCategory(e.target.value)} 
                    value={category}
                    className='w-full px-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8AAAE5]/50 focus:border-transparent transition-all duration-300'
                  >
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                  </select>
                </div>

                {/* Sub Category */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1A202C]/80">Sub Category</label>
                  <select 
                    onChange={(e) => setSubCategory(e.target.value)} 
                    value={subCategory}
                    className='w-full px-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8AAAE5]/50 focus:border-transparent transition-all duration-300'
                  >
                    <option value="Topwear">Topwear</option>
                    <option value="Bottomwear">Bottomwear</option>
                    <option value="Winterwear">Winterwear</option>
                  </select>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#1A202C]/80">
                    <DollarSign className="w-4 h-4 text-[#F2A07B]" />
                    Product Price
                  </label>
                  <input 
                    onChange={(e) => setPrice(e.target.value)} 
                    value={price}
                    className='w-full px-4 py-3 bg-white/60 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8AAAE5]/50 focus:border-transparent transition-all duration-300 placeholder-[#1A202C]/40' 
                    type="number"  
                    placeholder='25'
                    required
                  />
                </div>
              </div>
            </motion.div>

            {/* Sizes Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#F2A07B] to-[#F4B692] rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A202C]">Available Sizes</h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#F2A07B]/30 to-transparent"></div>
              </div>

              <div className='flex flex-wrap gap-3'>
                {sizeOptions.map((size, index) => (
                  <motion.div
                    key={size}
                    onClick={() => setSizes(prev => 
                      prev.includes(size) 
                        ? prev.filter(item => item !== size)
                        : [...prev, size]
                    )}
                    className={`relative cursor-pointer px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      sizes.includes(size) 
                        ? 'bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] text-white shadow-lg' 
                        : 'bg-white/60 text-[#1A202C]/70 border border-white/50 hover:bg-[#8AAAE5]/10'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{size}</span>
                    {sizes.includes(size) && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check className="w-3 h-3 text-[#8AAAE5]" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bestseller Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#F2A07B] to-[#F4B692] rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A202C]">Special Options</h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#F2A07B]/30 to-transparent"></div>
              </div>

              <motion.div 
                className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  bestseller 
                    ? 'bg-gradient-to-r from-[#F2A07B]/10 to-[#F4B692]/10 border-[#F2A07B]/50' 
                    : 'bg-white/60 border-white/50 hover:border-[#F2A07B]/30'
                }`}
                onClick={() => setBestseller(prev => !prev)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className='flex items-center gap-3'>
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                    bestseller 
                      ? 'bg-[#F2A07B] border-[#F2A07B]' 
                      : 'border-[#1A202C]/30'
                  }`}>
                    {bestseller && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <label className='text-sm font-medium text-[#1A202C] cursor-pointer'>
                      Mark as Bestseller
                    </label>
                    <p className="text-xs text-[#1A202C]/60 mt-1">
                      This product will be featured in the bestseller section
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.button 
              type='submit' 
              className='group relative bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden mt-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#A2C2E8] to-[#8AAAE5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex items-center justify-center gap-3">
                <Plus className="w-5 h-5" />
                <span>Add Product to Collection</span>
              </div>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Add