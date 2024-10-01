
import mongoose from 'mongoose';



const connectDB = async () => {
  try {
    console.log();
    await mongoose.connect("mongodb://localhost:27017/voyagai", {
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
export default connectDB;