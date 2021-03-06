import express from "express";
import mongoose from "mongoose";
import trackRouter from "./routes/tracks.js";
import userRouter from "./routes/users.js";
import vacunarouter from "./routes/vacuna-service.js";
import faqRouter from "./routes/FAQ.js";

import logger from "morgan";
import cors from "cors";
import { production, development, envConf } from "./config/env.js";
import { populateDB } from "./config/dbPopulation.js";
import { User, UserModel } from "./models/user.js";

console.log(`Running ${process.env.NODE_ENV} configuration`);

let envSettings: envConf;
if (process.env.NODE_ENV === "production") {
  envSettings = production;
} else {
  envSettings = development;
}

const app = express();
const PORT = envSettings.port || 8080;

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/track", trackRouter);
app.use("/user", userRouter);
app.use("/vacuna", vacunarouter);
app.use("/faq", faqRouter);

let db = mongoose.connection;
db.on("error", () => console.log("MONGODB CONNECTION ERROR"));
db.once("open", () => console.log("MONGODB CONNECTION OPEN"));
await mongoose.connect(envSettings.dbUrl || "mongodb://localhost:27017/test");

app.listen(PORT, () => console.log(`listening on ${PORT}`));

const users: User[] = await UserModel.find();
if (!users.length) {
  populateDB();
}
