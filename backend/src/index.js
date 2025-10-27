import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" });
import app from "./app.js";
import { dbConnect } from "./dbConnect/dbConnect.js";

const PORT = process.env.PORT || 8585;

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed :", error);
  });
