const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const flash = require("express-flash");
const session = require("express-session");
const passport = require("passport");

const userRouter = require("./controller/userController");

const app = express();

// view engine setup
app.set("view engine", "ejs");

app.use(logger("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(passport.session());

// Middleware to copy session to locals
app.use((req, res, next) => {
  res.locals = req.session;
  next();
});

app.use("/", userRouter);

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

module.exports = app;
