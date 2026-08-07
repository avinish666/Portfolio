const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const messageRoutes = require("./routes/messageRoutes");

const app = express();


// Security middleware
app.use(helmet());


// Logger
app.use(morgan("dev"));


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
    credentials: true
  })
);


// Body parser
app.use(express.json());


// MongoDB Connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("MongoDB connected successfully ✅");
})
.catch((error) => {
  console.error("MongoDB connection failed ❌");
  console.error(error.message);
});


// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Avinish Portfolio API is running 🚀"
  });
});


// API Routes
app.use(
  "/api/messages",
  messageRoutes
);


// 404 Handler
app.use((req,res)=>{
  res.status(404).json({
    message:"Route not found"
  });
});


// Global Error Handler
app.use((err,req,res,next)=>{
  console.error(err.stack);

  res.status(500).json({
    message:"Internal Server Error"
  });
});


// Server
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  "0.0.0.0",
  ()=>{
    console.log(
      `Server running on port ${PORT} 🚀`
    );
  }
);


// Graceful shutdown
process.on(
"SIGTERM",
()=>{
 console.log("SIGTERM received");

 server.close(()=>{
   mongoose.connection.close(false,()=>{
     console.log("MongoDB connection closed");
     process.exit(0);
   });
 });

});
