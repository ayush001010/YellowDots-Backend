// backend/seeder.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import Work from './models/Work.js';

dotenv.config();

const seedWorks = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');

    // Read seed data from JSON file
    const dataPath = path.join(process.cwd(), 'data', 'works.json');
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const worksData = JSON.parse(fileContent);

    // Clear existing documents
    await Work.deleteMany();
    console.log('Existing works removed');

    // Insert seed data
    const createdWorks = await Work.insertMany(worksData);
    console.log(`${createdWorks.length} works seeded!`);

    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedWorks();
