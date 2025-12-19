const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js"); // Import from config

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express?.json());

// Connect to Database
await connectDB(); // Call the function

// Routes
app.use("/api/counts", require("./routes/countRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.get("/", (req, res) => {
  res.send("Shooting Profiling Backend Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
