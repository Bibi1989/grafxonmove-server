const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/subscribers");

const app = express();

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("mongo db connected!!!"))
  .catch((err) => console.log(err));

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/subscribers", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.get('*', (req, res) => {
  res.status(404).json({status: 'error', message: 'This path does not exist'})
})

module.exports = app;
