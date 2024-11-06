console.log("Sveiki atvyke i Node.JS");

import express from "express";
import cors from "cors";
import taskRouter from "./src/controller/recommendation.js";
const app = express();

const router = express.Router();

app.use(cors());

app.use(express.json());

app.use(taskRouter);

app.use((req, res) => {
  res.status(404).json({ response: "your endpoint does not exit" });
});
const port = 3000;

app.listen(port, () => {
  console.log(`App was started on port ${port}`);
});
