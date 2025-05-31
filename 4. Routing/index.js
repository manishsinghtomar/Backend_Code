const express = require("express");
const app = express();
const connectDB = require("./db");
const users = require("./routes/users");
const dotenv = require('dotenv');

//load
dotenv.config();

const PORT = process.env.PORT;

// body parser
app.use(express.json());

// connect to database
connectDB();

app.use("/api", users);

//  -> /api/user

app.get("/", (req, res) => {
  console.log("I am inside home page route handler");
  res.send("Hello Jee, Welcome to codehelp");
});

// app ko active kara diya is port no par
app.listen(PORT, () => {
  console.log(`Server is Running at this ${PORT} port`);
});

//https://www.topcoder.com/thrive/articles/how-to-connect-mongodb-to-node-js-using-mongoose

// step 1: npm init -y
// step 2: npm install express mongoose nodemon dotenv
// step 3: add script in package.json --> "dev": "nodemon index.js"
// step 4: create db.js and add mongodb credential key using dotenv (process.env.MONGODB_URI) 
// step 5: connect with db in index.js by calling db.js function (connectDB())
// step 6: then create model and schema using mongoose in models folder 
// step 7: then create route file(users.js) in routes folder
// step 8: inside route file create instance of express, router and import models, write CRUD operations and then export router module
// step 9: import router file (users) in index.js and load it using app.use('/path', router's instance)