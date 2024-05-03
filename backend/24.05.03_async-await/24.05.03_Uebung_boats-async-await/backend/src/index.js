import express from "express";
import morgan from "morgan";
import cors from "cors";

import { connectToDatabase } from "./models/connectDb.js";
import { boatsRouter } from "./routes/boatsRouter.js";
import { reservationsRouter } from "./routes/reservationsRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/boats", boatsRouter);
app.use(reservationsRouter);

try {
  await connectToDatabase();
  const PORT = 3003;
  app.listen(PORT, () => console.log("Server listening at PORT", PORT));
} catch (err) {
  console.log(err);
  process.exit();
}
