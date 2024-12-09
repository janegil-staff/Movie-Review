require('dotenv').config();
const express = require("express");

require('./db')
const userRouter = require("./routes/user");

const app = express();
app.use(express.json())
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 5200;

app.listen(5200, () => {
  console.log(`The server is runniing on port ${PORT}`);
});
