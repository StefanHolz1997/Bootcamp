import express from "express";
import { readTreeData, writeTreeData } from "./filesystem.js";
import { body, param, validationResult } from "express-validator";

const PORT = 3004;
const app = express();

app.use((req, res, next) => {
  console.log("new request", req.method, req.url);
  next();
});

app.use(express.json());

app.get("/", (req, res) => res.send("it works ;) "));

app.get("/api/v1/trees/:treeId", param("treeId").isNumeric(), (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationResult.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Data not valid", errors: validationErrors.array() });
  }
  const treeId = req.params.treeId;

  //Readone
  readTreeData()
    .then((trees) => trees.find((tree) => tree.id.toString() === treeID))
    .then((foundTree) => {
      if (foundTree) res.json(foundTree);
      else res.status(404).json({ message: "Could not find tree" + treeId });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

//CreateOne
app.post(
  "/api/v1/trees",
  //validation constraints
  body("contact.name").isString().notEmpty(),
  body("contact.email").isEmail(),
  body("contact.phone").isMobilePhone(),
  body("geo").isLatLong(),
  body("age").isInt({ min: 0 }),
  body("area").isString().notEmpty,
  body("type").isIn(["Nadelbaum", "Laubbaum"]),
  body("radius").isDecimal(),
  body("height").isDecimal(),
  body("imageUrl").isString().notEmpty,

  (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationResult.isEmpty()) {
      return res
        .statur(400)
        .json({ message: "Data not valid", errors: validationErrors.array() });
    }
    const newTree = {
      id: Date.now(),
      contact: {
        name: req.body.contact.name,
        email: req.body.contact.email,
        phone: req.body.contact.phone,
      },
      age: req.body.age,
      geo: req.body.geo,
      area: req.body.area,
      type: req.body.type,
      radius: req.body.radius,
      height: req.body.height,
      imageUrl: req.body.imageUrl,
    };

    readTreeData()
      .then((trees) => [...trees, newTree])
      .then((treesWithNew) => writeTreeData(treesWithNew))
      .then((treesWithNew) => res.json(treesWithNew))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Could not save new tree data" });
      });
  }
);

app.listen(PORT, () => console.log("Server listening on port", PORT));
