const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/counts", require("./routes/countRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.get("/", (req, res) => {
  res.send("Shooting Profiling Backend Running!");
});

// Create an async function to start the server
const startServer = async () => {
  try {
    // 1. Connect to Database FIRST
    await connectDB();
    console.log("Database connected successfully");

    // 2. Start listening ONLY after DB is connected
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1); // Exit if DB connection fails
  }
};

startServer();