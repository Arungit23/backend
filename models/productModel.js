const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
 user : {
     type: mongoose.Schema.Types.ObjectId,
     required:true,
     ref : 'User',
 },
 name:{
     type:String,
     required :[true,'Please add the name of the product'],
     trim:true
  },
  sku:{
   type:String,
   required :true,
   default:'SKU',
   trim:true
},
category:{
   type:String,
   required:[true,'Please add the category of the product'],
   trim:true
},
quantity:{
   type:String,
   required:[true,'Please add the quantity of the product'],
   trim:true
},
price:{
   type:String,
   required:[true,'Please add the price of the product'],
   trim:true
},
description:{
   type:String,
   required:[true,'Please add the description of the product'],
   trim:true
},
image:{
   type:Object,
   default:{}
}


},{
timestamps:true
   

})

const Product = mongoose.model("Product", productSchema)
module.exports = Product;