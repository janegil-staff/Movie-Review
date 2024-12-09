const express = require("express");
require("dotenv").config();
require("express-async-errors");
const morgan = require("morgan");
require("./db");
const userRouter = require("./routes/user");
const { errorHandler } = require("./middlewares/error");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/user", userRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5200;

app.listen(5200, () => {
  console.log(`The server is runniing on port ${PORT}`);
});
