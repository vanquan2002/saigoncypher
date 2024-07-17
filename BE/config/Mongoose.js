import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const uri = process.env.MONGO_URL;
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Mongo Connected");
  } catch (error) {
    console.log("Connect err: ", error);
    process.exit(1);
  }
};

export default connectDatabase;
