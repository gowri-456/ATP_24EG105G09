import exp from 'express'; 

// creating router object from express
export const userApp=exp.Router() 

// importing model (probably mongoose model)
import { userPro } from './useMod.js'; 

import bcryptjs from "bcryptjs"; //user login 

// importing jwt for token generation
import jwt from 'jsonwebtoken' 

// extracting sign method from jwt
const {sign}=jwt 


// ================= LOGIN API =================
userApp.post("/auth",async(req,res)=>{     

    //get user cred obj from client     
    const {pid,pname}= req.body;     

    //verify pid (check if user exists in DB)
    let user=await userPro.findOne({pid:pid})     

    //if pid not existed     
    if(user===null)     
    {         
        return res.status(404).json({message:"pid not valid"})     
    }     

    // compare entered password with hashed password in DB
    let result=await bcryptjs.compare(req.body.pname,user.pname)     

    //if passwords not matched     
    if(result===false)     
    {         
        return res.status(401).json({message:"pname invalid"})     
    }     

    //if passwords are valid then create token in response     

    //create token (payload + secret key + expiry time)
    const signedToken=sign({pid:user.pid},"abcdef",{expiresIn:100})     

    //send token in response     
    res.status(200).json({message:"login success",token:signedToken}) 
}) 


// ================= CREATE PRODUCT =================
userApp.post("/product",async(req,res)=>{     
    try{         
        // getting product data from request body
        const newpro=req.body;         

        // creating new document using mongoose model
        const newproDoc=new userPro(newpro);         

        // saving product to database
        await newproDoc.save();         

        // logging saved product in console
        console.log("result:",newproDoc)         

        res.status(201).json({message:"product created"})     
    }     
    catch(err)     
    {         
        // sending error response if something fails
        res.json({message:"error",reason:err})     
    } 
}) 


// ================= GET ALL PRODUCTS =================
userApp.get("/product",async(req,res)=>{     

    // fetching all products from DB
    let prolist=await userPro.find()     

    // sending response with product list
    res.status(200).json({message:"users",payload:prolist}) 
}) 


// ================= GET SINGLE PRODUCT =================
userApp.get("/product/:id",async(req,res)=>{     

    // getting product id from URL params
    const pid=req.params.id     

    // finding product using pid
    let prolist=await userPro.findOne({pid})     

    {         
        // sending found product
        res.status(200).json({message:"product",payload:prolist})     
    } 
}) 


// ================= UPDATE PRODUCT =================
userApp.put("/product/:id", async (req,res)=>{  
 try{      

    // updated data from client
    const modifiedpro = req.body;     

    // getting id from params
    const pid = req.params.id;      

    // updating product using MongoDB _id
    const updatepro = await userPro.findByIdAndUpdate(         
        pid,         
        {$set: modifiedpro},   // updating fields         
        {returnDocument:'after', runValidators:true} // return updated doc + validate     
    );      

    // if product not found
    if(!updatepro){         
        return res.status(404).json({message:"product not found"})     
    }      

    // sending updated product
    res.status(200).json({         
        message:"product updated",         
        payload:updatepro     
    })   
 }  

 catch(err){     
    // error handling
    res.status(500).json({message:"error",reason:err.message})  
 } 
}) 


// ================= DELETE PRODUCT =================
userApp.delete("/product/:id",async(req,res)=>{     

    // getting id from params
    const pid=req.params.id     

    // deleting product by _id
    let proObj=await userPro.findByIdAndDelete(pid)     

    // if product not found
    if(!proObj)     
    {         
        return res.status(404).json({message:"product not found"})     
    }     

    // sending deleted product
    res.status(200).json({message:"product deleted",payload:proObj}) 
})