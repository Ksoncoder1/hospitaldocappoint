// const mongoose = require('mongoose');
import mongoose from 'mongoose';

export const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {})
  } catch (err) {
    console.log(err)
  }
};