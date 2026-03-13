import { Schema,model } from "mongoose";
const userSchema=new Schema({
    pid:{
        type:String,
        required:[true,"product id is required"]
    },
    pname:{
        type:String,
        required:[true,"product name is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        max:[50000,"max price is 50k"],
        min:[10000,"min price is 10k"]
    },
    brand:{
        type:String,
        required:[true,"brand name is required"]
    }
})

export const userPro=model("pro",userSchema)