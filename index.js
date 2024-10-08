const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("This will be an awesome MTG app.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. You better go catch it.`);
});
