// over here im going to show the schema for mongoDB so that the content follows a certain rule of input
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},{
    timestamps: true // gives createdAt and updatedAt time
}
)

const Product = mongoose.model("Product",productSchema); //makes a Product of the mongoose model that uses the schema we showed, and names it Product
//Product is called Product (and not products) cuz mongoose is going to take it and make the collections plural by itself and call it products itself

export default Product;