import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "router";

dotenv.config();

const server = express();
const SERVER_PORT = process.env.PORT || 3419;

// Middleware
server.use(cors({ credentials: true }));
server.use(express.json());
server.use(cookieParser());
server.use(compression());
server.use("/", router);

// Database connection
const db_connection: string = process.env.MONGODB_URL || "";

mongoose
  .connect(db_connection)
  .then(() => {
    console.log("Connected to MongoDB");
    // Routes
    server.get("/", (req, res) => {
      res.send("Hello from express");
    });

    server.listen(SERVER_PORT, () => {
      console.log(`Server is running on port ${SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
