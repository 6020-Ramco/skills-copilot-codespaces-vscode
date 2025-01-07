//Create web server with express
const express = require("express");
const app = express();
//Create a route to handle incoming requests
app.get("/comments", (req, res) => {
  res.send("You have reached the comments route!");
});
//Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
//Run the server with node comments.js
//Visit http://localhost:3000/comments in your browser
