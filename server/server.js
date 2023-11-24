const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");

const { MongoClient } = require("mongodb");

const app = express();
const port = 3005;

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

client.connect((err) => {
  if (err) {
    console.error("Error connecting to database", err);
  } else {
    console.log("Connected to MongoDB");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.post("/Checkoutdata", async (req, res) => {
  try {
    const data = req.body;
    const db = client.db("Oasis");
    const collection = db.collection("CONTACTA");
    const result = await collection.insertOne(data);

    if (result.acknowledged) {
      res.status(201).json({
        message: "form created successfully",
      });
    } else {
      console.error("Failed to insert form into the database");
      res.status(500).json({ error: "Failed to create form" });
    }
  } catch (err) {
    console.error("Error creating form:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
