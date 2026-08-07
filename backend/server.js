
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const messageRoutes = require("./routes/messageRoutes");

const app = express();


// CORS
app.use(
  cors({
    origin: [
      "https://portfolio-avinish.onrender.com",
      "http://localhost:5173"
    ],
    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS"
    ],
    allowedHeaders: [
      "Content-Type",
      "Authorization"
    ],
    credentials: true,
  })
);


// Middleware
app.use(express.json());


// MongoDB connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("MongoDB connected successfully ✅");
})
.catch((error) => {
  console.error("MongoDB connection failed ❌");
  console.error(error.message);
});


// Test route
app.get("/", (req,res)=>{
  res.json({
    message:"Avinish Portfolio API is running 🚀"
  });
});


// Contact messages
app.use(
"/api/messages",
messageRoutes
);


// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT,"0.0.0.0",()=>{
 console.log(`Server running on port ${PORT}`);
});
