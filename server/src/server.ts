import { router } from "./routes";
import express from "express";
// const cors = require("cors");

const app = express();
app.use(express.json());
app.use(router);
// app.use(cors());

app.listen("2999", () => {
  console.log("Server Started");
});
