import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    key : {
        type : String,
        required : true,
        unique : true


    },
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true,
        default : "uncategorized"
    },
    dimensions : {
        type : String,
        required : true

    },
    description : {
        type : String,
        required : true
    },
    availability : {
        type : Boolean,
        required: true,
        default: true
    },
    image : {
        type : [String],
        required : true,
        default :["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fpicture&psig=AOvVaw344Mu3eZ890c_m89O1JXcF&ust=1743008509742000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiXjeHbpYwDFQAAAAAdAAAAABAE"]

    },

})

const Product = mongoose.model("Product",productSchema)

export default Product;