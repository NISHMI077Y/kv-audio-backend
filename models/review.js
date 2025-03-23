import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    Comment : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true,
        default : Date.now()
    },
    profilePicture : {
        type : String,
        required : true,
        default : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1742705281~exp=1742708881~hmac=55ad43d0def8e390059c2f59f503cd422829964e002e0b988a23b786918bd2a4&w=826"
},
    isApproved : {
        type : Boolean,
        required : true,
        default : false
    }

})

const Review = mongoose.model("Review",reviewSchema)

export default Review;