import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price :{type:Number,required:true},
    image :{type:Array,requried:true},
    category :{type:String,required:true},
    subCategory :{type:String,required:true},
    sizes :{type:Array,required:true},
    bestseller :{type:Boolean},
    date : {type:Number ,requried :true}
})


const productModel = mongoose.models.product || mongoose.model("product",productSchema)

export default productModel