const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

let mysql      = require('mysql2');
let connection = mysql.createConnection({
  host     : 'host.docker.internal',
  user     : 'root',
  password : 'root',
  database : 'MyDatabase'
});


connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected as id ' + connection.threadId);
});


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
}); 


app.get("/data/:page_id", (req, res) => {
  const pageId = req.params.page_id;
  const query = "SELECT title, decription, path FROM MyDatabase.MyDatabase WHERE page_id = ?"; 
  connection.query(query, [pageId], (err, results) => {
    if (err) {
      console.error('Error query: ' + err);
      res.status(500).json({ error: 'Error getting data' });
      return;
    }

    console.log('Результаты запроса:', results);

    if (results.length > 0) {
      const data = results[0];
      res.status(200).json({data})
    } else {
      res.status(404).json({ error: 'No data' });
    }
  });
});







 

 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});