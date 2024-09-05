import express from "express";
import dotenv from "dotenv";
import authRoutes from "../backend/routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server runin on http://localhost:" + PORT);
});
