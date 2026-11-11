import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
   const conn= await mongoose.connect(process.env.MONGO_URI);
      console.log("Mongo Db connected ");
      
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default ConnectDb;