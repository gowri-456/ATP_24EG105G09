import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./EmpApp.js";
import cors from "cors";

const app = exp();
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/empdb";

// Add dynamic CORS middleware to support both Localhost and Deployed Frontend
const allowedOrigins = [
  "http://localhost:5173", 
  process.env.FRONTEND_URL // Add your frontend deployment URL in Render Env Vars later
].filter(Boolean); // Removes undefined values if FRONTEND_URL isn't set yet

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);

// Body parser middleware
app.use(exp.json());

// Employee API middleware
app.use("/emp-api", empRoute);

// DB connection and Server Initialization
const connectDB = async () => {
  try {
    console.log(
      process.env.MONGO_URL
        ? "MONGO_URL found in environment. Attempting connection..."
        : "MONGO_URL not found, attempting local MongoDB connection..."
    );

    // Reduced timeout to 5000ms so it fails/succeeds faster on startup
    await connect(MONGO_URL, { serverSelectionTimeoutMS: 5000 });
    
    console.log("DB connected successfully 🎉");
    
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
  } catch (err) {
    console.error("========================================");
    console.error("❌ DATABASE CONNECTION ERROR:");
    console.error(err.message);
    console.error("========================================");
    
    // Gives Render 500ms to flush the logs to the dashboard before killing the process
    setTimeout(() => {
      process.exit(1);
    }, 500);
  }
};

connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});