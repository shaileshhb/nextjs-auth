import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection

    connection.on('connected', () => {
      console.log("MongoDB connected successfully");
    })

    connection.on('error', (err) => {
      console.error(" === Some error occured in mongodb === ");
      console.error(err);
    })

  } catch (error) {
    console.error(error);
  }
}