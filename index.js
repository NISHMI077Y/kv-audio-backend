import express from "express";
import bodyParser from "body-parser";
import mongoose from  "mongoose";
import userRouter from "./route/userRouter.js";
import productRouter from "./route/productRouter.js";
import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";
import reviewRouter from "./route/reviewRouter.js";
import inquiryRouter from "./route/inquiryRouter.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use((req,res,next)=>{

    let token = req.header
    ("Authorization");

    if (token!=null){
        token = token.replace("Bearer ","");

        jwt.verify(token, process.env.JWT_SECRET,
(err, decode)=>{

    if(!err){ 
      req.user = decode;

    }

}); 
    }
    next()
});





let mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)

const connection = mongoose.connection


connection.once("open" ,()=>{
    console.log("MongoDB connection established successfully")
})

app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
app.use("/api/reviews",reviewRouter);
app.use("/api/inquiries",inquiryRouter);

app.listen(3000, () =>{  
console.log("Server is running on port 3000");
});

//`app.listen` method will start the server on the given port


/*"email": "yasiru1@gmail.com",
"password": "12345",
"role": "customer"*/

/*"email": "nishmi1@gmail.com",
    "password": "123456",
    "role": "admin",*/