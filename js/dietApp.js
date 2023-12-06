const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.post("/save", (req, res) => {
  let data = JSON.stringify(req.body, null, 2);
  fs.writeFile("./json/data.json", data, (err) => {
    if (err) throw err;
    res.status(200).send("Data saved");
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
