import express from "express";
import bodyParser from "body-parser";
import mongoose from  "mongoose";
import userRouter from "./route/userRouter.js";
import productRouter from "./route/productRouter.js";
import jwt, { decode } from "jsonwebtoken"
;

const app = express();

app.use(bodyParser.json());

app.use((req,res,next)=>{

    let token = req.header
    ("Authorization");

    if (token!=null){
        token = token.replace("Bearer ","");

        jwt.verify(token,"kv secret 89!",
(err, decode)=>{

    if(!err){ 
      req.user = decode;

    }

}); 
    }
    next()
});





let mongoUrl = "mongodb+srv://nishmi:123@cluster0.o3dfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl)

const connection = mongoose.connection


connection.once("open" ,()=>{
    console.log("MongoDB connection established successfully")
})

app.use("/api/users",userRouter);
app.use("/api/products",productRouter)

app.listen(3000, () =>{  
console.log("Server is running on port 3000");
}); //`app.listen` method will start the server on the given port