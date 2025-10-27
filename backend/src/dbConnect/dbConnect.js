import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" });
import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MogoDB connected successfully || Host :: ${connection.connection.host}`
    );
  } catch (error) {
    console.error("Error while db connection :", error);
    process.exit(1);
  }
}
