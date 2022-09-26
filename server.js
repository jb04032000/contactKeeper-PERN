require("./database/connection");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Setup Env Variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 8080;

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Define Routes
app.use("/api/auth", require("./routes/auth.routes.js"));
app.use("/api/users", require("./routes/users.routes.js"));
app.use("/api/contacts", require("./routes/contacts.routes.js"));

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
