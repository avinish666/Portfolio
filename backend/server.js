const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const messageRoutes = require("./routes/messageRoutes");

const app = express();


// CORS FIRST
app.use(
  cors({
    origin: [
      "https://portfolio-avinish.onrender.com",
      "http://localhost:5173"
    ],
    methods:[
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS"
    ],
    allowedHeaders:[
      "Content-Type",
      "Authorization"
    ],
    credentials:true
  })
);


// Body parser
app.use(express.json());


// Routes
app.use(
"/api/messages",
messageRoutes
);
