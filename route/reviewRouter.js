import express from "express";
import { addReview, deleteReview, getReviews } from "../controllers/reviewController.js";

const reviewRouter = express.Router();
reviewRouter.post("/",addReview)
reviewRouter.get("/",getReviews)
reviewRouter.delete(":email",deleteReview)

reviewRouter.get("/:email",
     (req,res)=>{
    console.log("This is email route")
})

reviewRouter.get("/approved",
(req,res)=>{
    console.log("this is approved route")
})

reviewRouter.get("/:email",
    (res,req)=>{
        console.log("This is email route")
    }
)

export default reviewRouter;