const express  = require("express");

const app = express();
const bodyParser = require("body-parser");
const customerRouter = require("./router/customer.router");

app.use(bodyParser.json());

 const db = require("./db.config");

//Create table if not exists
db.sequelize.sync();

// app.use("/demo", (req, res)=>{
//     console.log("Recieved request");
//     res.status(200).send("As an captain of team India/Bharat Rohit sharma lifted ICC 2023 ODI worldcup trophy");
// });

app.use('/customerApi', customerRouter);

app.listen(3000, () => {
    console.log("I'm ready to listen you on 3000");
  });
  