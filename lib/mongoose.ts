import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
    // Set strict query mode for Mongoose to prevent unknown field queries.
    mongoose.set("strictQuery", true);
    
    if (!process.env.MONGODB_URL) return console.log('Missing MongoDB URL');
    if(isConnected) { 
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}