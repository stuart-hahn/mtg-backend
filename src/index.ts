import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());

// home route
app.get("/", (req: Request, res: Response) => {
  res.send("This is going to be an amazing MTG app.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. You better go catch it!`);
});
