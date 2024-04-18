import express from "express";
import { readTreeData, writeTreeData } from "./filesystem.js";

// ! Express Validator
import { body, param, validationResult } from "express-validator";

const PORT = 3004;
const app = express();

// logging middleware
app.use((req, res, next) => {
  console.log("new request", req.method, req.url);
  next();
});

// body parser middleware
app.use(express.json());

// Endpoints
// GET Home
app.get("/", (req, res) => res.send("it works"));

// GET one
app.get(
  "/api/v1/trees/:treeId",
  // ! Validationn Constraints
  param("treeId").isNumeric(), // Id soll immer eine Zahl sein

  (req, res) => {
    // ! Express Validator Logik
    // was soll passieren, wenn ein Validation-Fehler auftritt
    // wie eine Art Türsteher, bevor die eigentliche Logik beginnt
    // Fehler werden in validationResult gespeichert, das wiederum lagere ich in einer Variable
    const validationErrors = validationResult(req);
    // falls die Variable leer ist, gibt es keine Fehler und die eigentliche Logik kann starten
    // falls irgendetwas darin enthalten ist, gibt es also mindestens einen Fehler und der muss erst behoben werden, bevor die Logik starten kann
    if (!validationErrors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Data not valid", errors: validationErrors.array() });
    }

    // eigentliche Logik, um Daten eines Baum zu erhalten:
    const treeId = req.params.treeId;
    readTreeData()
      .then((trees) => trees.find((tree) => tree.id.toString() === treeId))
      .then((foundTree) => {
        if (foundTree) res.json(foundTree);
        else res.status(400).json({ message: "Could not find tree " + treeId });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: "Internal Server Error" });
      });
  }
);

// POST one
app.post(
  "/api/v1/trees",

  // ! Validation Constraints
  //   https://express-validator.github.io/docs/api/validation-chain/
  body("age").isInt(), // muss ganze Zahl sein
  body("contact.name").isString().notEmpty(), // muss string und nicht leer sein
  body("contact.email").isEmail(), // muss email format sein
  body("contact.phone").isMobilePhone(), // muss mobile phone nummer sein (also auch 0 oder + am Anfang erlauben)
  //   body("geo.lat").isLatLong(), // muss lat/long format sein
  //   body("geo.long").isLatLong(),
  body("age").isInt({ min: 0 }), // muss Mindestnummer sein
  body("area").isString().notEmpty(),
  body("type").isIn(["Laubbaum", "Nadelbaum"]), // enumeration gibt konkrete Werte vor, die ein Datenpunkt annehmen darf; hier kann es nur Nadel- oder Laubbaum sein, nichts anderes, aber case sensitive
  body("radius").isDecimal(), // muss Dezimalzahl sein, Kommastellen aber erlaubt
  body("height").isDecimal(),
  body("imageUrl").isString().notEmpty(),

  (req, res) => {
    // ! Express Validator Logik
    // wie eine Art Türsteher, bevor die eigentliche Logik beginnt
    // Fehler werden in validationResult gespeichert, das wiederum lagere ich in einer Variable
    const validationErrors = validationResult(req);
    // falls die Variable leer ist, gibt es keine Fehler und die eigentliche Logik kann starten
    // falls irgendetwas darin enthalten ist, gibt es also mindestens einen Fehler und der muss erst behoben werden, bevor die Logik starten kann
    if (!validationErrors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Data not valid", errors: validationErrors.array() });
      // Response: bad request (du hast mir was gesendet, das Format stimmt aber nicht)
      // außerdem sende ich ein Array mit den Fehlern als Response
    }

    // validationErrors in der Backend-Konsole sieht so aus:
    // Result {
    //   formatter: [Function: formatter],
    //   errors: [
    //     {
    //       type: 'field',
    //       value: 'mypamailinator.com',
    //       msg: 'Invalid value',
    //       path: 'email',
    //       location: 'body'
    //     }
    //   ]
    // }

    // eigentliche Logik, um neuen Baum zu erstellen:
    const newTree = {
      id: Date.now(),
      contact: {
        name: req.body.contact.name,
        email: req.body.contact.email,
        phone: req.body.contact.phone,
      },
      age: req.body.age,
      geo: {
        long: req.body.geo.long,
        lat: req.body.geo.lat,
      },
      area: req.body.area,
      type: req.body.type,
      radius: req.body.radius,
      height: req.body.height,
      imageUrl: req.body.imageUrl,
    };

    readTreeData()
      .then((trees) => [...trees, newTree])
      .then((treesWithNew) => writeTreeData(treesWithNew))
      .then((treesWithNew) => res.status(200).json(treesWithNew))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: "Could not save new tree data" });
      });
  }
);

// PATCH one
app.patch(
  "/api/v1/trees/:treeId",

  //! validation constraints
  param("treeId").isNumeric(),
  // ...
  body("age").isInt({ min: 0 }), // Integer: Ganze-Zahl 3 -3
  body("area").isString().notEmpty(),
  body("type").isIn(["Laubbaum", "Nadelbaum"]), // Laubbaum Nadelbaum
  body("radius").isDecimal(), // Decimal: Komma-Zahl 64.3
  body("height").isDecimal(),
  body("imageUrl").isString().notEmpty(),

  (req, res) => {
    // ! Validation Logic
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Data not valid", errors: validationErrors.array() });
    }

    // ... update logik würde hier folgen
  }
);

app.listen(PORT, () => console.log("Server ready at port", PORT));
