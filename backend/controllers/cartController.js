


// add products to user cart

import userModel from "../models/userModel.js"

const addToCart = async (req,res) =>{
    try{
        const{ userId , itemId , size} = req.body
        
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1 
            }
            else{
                cartData[itemId][size] = 1
            }
        }
        else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId,{cartData})

        res.json({success:true,message : "Added To Cart"})


    }catch(error){
          console.log(error)
          res.json({success:false,message:error.message})
    }
}

// update  user cart

const updateCart = async (req, res) => {
    try {
        console.log('Received updateCart:', req.body);

      const { userId, itemId, size, quantity } = req.body; // ✅ FIXED: req.body instead of res.body
  
      const userData = await userModel.findById(userId);
      let cartData = userData.cartData;
  
      // ✅ If quantity is 0, remove the size (and item if no sizes left)
      if (quantity === 0) {
        if (cartData[itemId]) {
          delete cartData[itemId][size];
          if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
          }
        }
      } else {
        // ✅ Otherwise, just update or create the item
        if (!cartData[itemId]) cartData[itemId] = {};
        cartData[itemId][size] = quantity;
      }
  
      // ✅ Save the updated cart
      await userModel.findByIdAndUpdate(userId, { cartData });
  
      res.json({ success: true, message: "Cart updated" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };
  
//  get user cart data

const getUserCart = async (req,res) =>{
    try {
        const {userId} = req.body
         
        const userData = await userModel.findById(userId)
        let  cartData = await userData.cartData;

        res.json({success:true,cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export {addToCart,updateCart,getUserCart}