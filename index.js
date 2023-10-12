const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/img", express.static(path.join(__dirname, "img")));

app.get("/test", (req, res) => {
  res.send("Hi from test!");
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
