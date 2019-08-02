var express = require("express");
var app = express();

const empRoute = require("./api/route/emp_route");
const userRoute = require("./api/route/user_route");
const refRoute = require("./api/route/ref_route");
const posRoute = require("./api/route/pos_route");

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTION");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Reqeusted-with-content-type ,Content-type"
  );
  res.setHeader("Access-Controll-Allow-Credentials", true);

  next();
});
app.use(express.json());
app.use("/api/emp", empRoute);
app.use("/api/user", userRoute);
app.use("/api/refs", refRoute);
app.use("/api/position", posRoute);

module.exports = app;
