import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";

dotenv.config();
console.log(process.env.MONGO_URI);
connectDB();

const app: Application = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use("/api/users", userRoutes);

// home route
app.get("/", (req: Request, res: Response) => {
  res.send("This is going to be an amazing MTG app.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. You better go catch it!`);
});
