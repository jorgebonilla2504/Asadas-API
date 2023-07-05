import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import {createTest, getTest, getTestAll} from './database.js'

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Asada Project." });

  
});

// simple route
app.get("/testall", async(req, res) => {
  const log = await getTestAll()
  res.json(log)
});

// simple route
app.get("/test/:id", async(req, res) => {
  const id = req.params.id
  const log = await getTest(id)
  res.json(log)
});
// simple route
app.post("/testInsert", async(req, res) => {
  const {name, key} = req.body
  const log = await createTest(name, key)
  res.json(log)
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});