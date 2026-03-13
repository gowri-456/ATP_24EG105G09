import exp from 'express';
import {connect} from 'mongoose';
import {userApp} from "./useAp.js";
const app=exp();
app.use(exp.json());
app.use("/pro-api",userApp);
async function connectDB() {
    try{
        await connect("mongodb://localhost:27017/anuragdb");
        console.log("db connection succesfull")
        //start local server is
        app.listen(4000,()=>console.log("server is running on port 4000"))
    }
    catch(err)
    {
        console.log("err in db connction:",err)
    }
}
connectDB();