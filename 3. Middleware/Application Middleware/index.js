const express = require("express");
const app = express();
const port = 3000;

// express.json() -> inbuilt middleware

// loading middleware into the app
app.use(express.json());

// middleware - logging, auth, validation

// logging Middleware
const loggingMiddleware = (req, res, next) => {
  console.log("Logged kar");
  next();
};


// Authentication Middleware
const authMiddleware = (req, res, next) => {
  console.log("auth karra hu");
  res.send("Chalo seedhe ghar"); //After using res.send(), the middleware and route handlers mentioned below will not run.
    // next();
};

// app.use(authMiddleware);

// validation Middleware
const validationMiddleware = (req, res, next) => {
  console.log("validation krra hu");
  next();
};

//loading middleware into application  
app.use(loggingMiddleware);
app.use(authMiddleware);
app.use(validationMiddleware);

// route handler (it is a callback function)
app.get("/", (req, res) => {
  console.log("Main router handler hu");
  console.log(req.body); //not able to parse without inbuilt middleware
  res.send("Hello manish!");
});

app.listen(port, () => {
  console.log(`Example app listening on part ${port}`);
});

// The express.json() function is a built-in middleware in Express that is used for parsing incoming requests with JSON payload.
