import mongoose from 'mongoose';

export const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`It connected: ${con.connection.host
        }`);
        process.exit(0);
    } catch (error){
        console.error(`Error: ${error.message}`);
        process.exit(1); //error code to show that there was problem in connecting
        // 1 means failure, 0 means success
        
    }
}

export default connectDB