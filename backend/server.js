import app from "./app.js";
import cloudinary from "cloudinary";
import mongoose from 'mongoose';


cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// app.listen(process.env.PORT, () => {
//   console.log(`Server listening at port ${process.env.PORT}`);
// });
mongoose.connection.once('open', ()=>{
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, ()=>console.log(`Server running on port ${process.env.PORT}`));
})
