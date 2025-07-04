import mongoose from "mongoose";
import dotenv from "dotenv";
import Featured from "./models/Featured.js";

dotenv.config();

const seedFeatured = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/yourdbname"
    );

    await Featured.deleteMany(); // Optional: clear previous data

    const sampleData = {
      title: "Featured Reels - July 2025",
      links: [
        "zPLiaQ-C-V8",
        "wnYtfYzAqwA",
        "-RFGMum_V3s",
        "s_r3bw-jc5A",
        "hkagi4pL83I",
        "zPLiaQ-C-V8",
        "wnYtfYzAqwA",
        "-RFGMum_V3s",
        "s_r3bw-jc5A",
        "hkagi4pL83I",
        "hkagi4pL83I",
        "zPLiaQ-C-V8",
      ],
    };

    await Featured.create(sampleData);

    console.log("✅ Featured videos seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seedFeatured();
