import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("🔍 Connecting to:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ SUCCESS: MongoDB Connected!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ ERROR:", err.message);
    process.exit(1);
  });
