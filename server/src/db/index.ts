import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL!);
    console.log("DB connected");
  } catch (error) {
    console.error("MongoDB connection failed",error);
    process.exit(1);
  }
};

export default connectDB;
