import express from 'express';
import dotenv from 'dotenv'; //thus lets us get extra variables and stuff to access from the .env file we make
import {connectDB} from './config/db.js';
import Product from './models/products.js';
dotenv.config();

const app = express(); //make an express app
//to do the get function from port 5000 if u have GET request, use app.get, also have: app.post

app.post("/products", async (req,res) => { //write async here to make it an async function, needed when connecting to the db
    const message = req.body; // req.body is what the user will send as a request
    if (!message.name || !message.price || !message.image){ //if the fields arent provided by user
        return res.status(400).json({success:false,message:"Not all fields provided, please send"});
    }
    else{
        const newProduct = new Product(message) //make new variable that is of the Product type we made in the products.js file

        //save to db
        try{
            await newProduct.save(); //save newProduct to db
            res.status(200).json({success:true, data: `Saved the following to the database:`, productName: message.name, productPrice: message.price})
        } catch(error){
            console.error(`error in creating message`, error.message);
            res.status(500).json({Success:false, message: "Server error"})

        }
    }

});

// to listen to the port for anything
app.listen(5000, ()=>{
    connectDB();
    console.log("Server started at http://localhost:5000 tomato");
})

