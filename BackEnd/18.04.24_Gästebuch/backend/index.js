import express from "express";

const app = express();
const PORT = 1337;

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());

app.get("/", (req, res) => res.send("it works ;) "));