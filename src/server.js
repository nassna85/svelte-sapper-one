require("dotenv").config();
import sirv from "sirv";
//import polka from "polka";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import postsRoute from "./routes-api/posts";

const app = express();

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

console.log({ PORT });

app.use("/api", postsRoute);
app.use(express.json());

app
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
