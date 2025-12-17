//We will handle connectivity between express and mongodb
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
// if common js --: const mongoose=require('mongoose')

// If module :
const connectDb = () => {
    try {
        // 'mongodb://127.0.0.1:27017/sece_todo'
        mongoose.connect(process.env.MONGODB_URI); //dotenv.process.MONGODB_URL
        console.log("db has been connected")
    } catch (err) {
        console.error(err);
    }
}
export default connectDb