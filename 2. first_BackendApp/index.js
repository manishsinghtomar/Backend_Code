  //including express module and initilising express app
  const express = require('express'); 
  const app = express(); 

  // variable that stores port number
  const port=3000;
  


  app.get('/', (req,res) =>{
    res.send("Get request receive hui hai")
  })

 //request -> get / put / post / delete
 //path - /, /about, /articles, /blog


  //start your app or server
  app.listen(port, () => {          
     console.log("Application start ho chuki hai")
  });

//app.listen method is used for binding the application with the specific port number and takes callback to perform task at the starting of application