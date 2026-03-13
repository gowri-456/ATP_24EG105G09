import exp from 'express';
export const userApp=exp.Router()
import { userPro } from './useMod.js';
import bcryptjs from "bcryptjs";
//user login
import jwt from 'jsonwebtoken'
const {sign}=jwt
userApp.post("/auth",async(req,res)=>{
    //get user cred obj from client
    const {pid,pname}= req.body;
    //verify pid
    let user=await userPro.findOne({pid:pid})
    //if pid not existed
    if(user===null)
    {
        return res.status(404).json({message:"pid not valid"})
    }
    let result=await bcryptjs.compare(req.body.pname,user.pname)
    //if passwords not matched
    if(result===false)
    {
        return res.status(401).json({message:"pname invalid"})
    }
    //if passwords are valid then create token in reasponse
    //cretae token
    const signedToken=sign({pid:user.pid},"abcdef",{expiresIn:100})
    //send token in res
    res.status(200).json({message:"login success",token:signedToken})
})

userApp.post("/product",async(req,res)=>{
    try{
        const newpro=req.body;
        const newproDoc=new userPro(newpro);
        await newproDoc.save();
        console.log("result:",newproDoc)
        res.status(201).json({message:"product created"})
    }
    catch(err)
    {
        res.json({message:"error",reason:err})
    }
})
userApp.get("/product",async(req,res)=>{
    let prolist=await userPro.find()
    res.status(200).json({message:"users",payload:prolist})
})
userApp.get("/product/:id",async(req,res)=>{
    const pid=req.params.id
    let prolist=await userPro.findOne({pid})
    {
        res.status(200).json({message:"product",payload:prolist})
    }
})
userApp.put("/product/:id", async (req,res)=>{
 try{

    const modifiedpro = req.body;
    const pid = req.params.id;

    const updatepro = await userPro.findByIdAndUpdate(
        pid,
        {$set: modifiedpro},
        {returnDocument:'after', runValidators:true}
    );

    if(!updatepro){
        return res.status(404).json({message:"product not found"})
    }

    res.status(200).json({
        message:"product updated",
        payload:updatepro
    })

 }
 catch(err){
    res.status(500).json({message:"error",reason:err.message})
 }
})
userApp.delete("/product/:id",async(req,res)=>{
    const pid=req.params.id
    let proObj=await userPro.findByIdAndDelete(pid)
    if(!proObj)
    {
        return res.status(404).json({message:"product not found"})
    }
    res.status(200).json({message:"product deleted",payload:proObj})
})