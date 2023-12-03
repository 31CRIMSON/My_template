const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'root',
  database : 'database'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected as id ' + connection.threadId);
});;
 
 
connection.end();



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});