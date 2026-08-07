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
    credentials: true
  })
);


app.options("*", cors());


// Body parser
app.use(express.json());
