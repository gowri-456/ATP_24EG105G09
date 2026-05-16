import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./EmpApp.js";
import cors from "cors";

const app = exp();
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/empdb";

//add cors middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
//body parser middleware
app.use(exp.json());
//emp api middleware
app.use("/emp-api", empRoute);

//DB connection
const connectDB = async () => {
  try {
    await connect(MONGO_URL);
    console.log("DB connected");
    app.listen(PORT, () => console.log(`server listening on port ${PORT}..`));
  } catch (err) {
    console.log("err in DB connection", err.message);
    process.exit(1);
  }
};

connectDB();

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});

