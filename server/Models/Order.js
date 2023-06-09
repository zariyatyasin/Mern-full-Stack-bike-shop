import mongoose from "mongoose";

const oderSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        
    },
    oderItems:[
        {
            name:{
                type:String,
                required:true
            },
            qty:{
                  type:Number,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            ProductId:{
                type:String,
                required:true,
              
                
            },
        }
    ],
    shippingAddress:{
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        postalCode:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
    },
    paymentMethod:{
        type:String,
        required:true,
       
    },
    paymentResult:{
       id:{type:String},
       status:{type:String},
       update_time:{type:String},
       email_address:{type:String},
       
    },
    textPrice:{
        type:Number,
        required:true,
        default:0
       
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0
       
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0
       
    },
    isPaid:{
        type:Boolean,
        required:true,
        default: false
       
    },
    paid:{
        type:Date,

    },
    isDelivered:{
        type:Boolean,
        required:true,
        default: false
    },
    deliveredAt:{
        type:Date
    }
  
   
},{
    timestamps:true
})

const Order = mongoose.model("Order",oderSchema);

export default Order;