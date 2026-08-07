
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const messageRoutes = require("./routes/messageRoutes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-avinish.onrender.com"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

app.use(express.json());

app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Backend API is running");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", function () {
  console.log("Server running on port " + PORT);
});
