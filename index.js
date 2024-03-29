const express = require("express");
const { boot } = require("./utils");
require("dotenv").config()

const PORT = process.env.PORT || 4000;

const app = express();

require('./controllers')(app);

app.listen(PORT, boot(PORT));