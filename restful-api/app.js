const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const axios = require('axios');
const port = 3001; 

var mysql = require('mysql');
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "weather"
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });



let app = express();
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/weather/:query', (req, res) => {
    let query = req.params.query;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=fc9331f99b901f7ad8d6c32816c49820&units=metric`)
        .then(data => {
            data = data.data
            db.query("INSERT INTO history (`query`, `date`, `city_id`, `city_name`, `description`, `avg_temp`, `min_temp`, `max_temp`, `humidity`, `pressure`, `visibility`, `wind_speed`) VALUES (?,CURRENT_DATE,?,?,?,?,?,?,?,?,?,?)",
                    [query, data.id, data.name, data.weather[0].description, data.main.temp, data.main.temp_min, data.main.temp_max, data.main.humidity, data.main.pressure, data.visibility, data.wind.speed]
                    , (error, results) => {
                    if(error) 
                        throw error;
                    else {
                        res.json(data)
                    }
            });
        })
        .catch(error => {
            res.json(null); 
        })
})

//http://localhost:3001/history?offset=0&limit=1
app.get('/history', (req, res) => {
    let limit = Number(req.query.limit) || 10
    let offset = Number(req.query.offset) || 0
    db.query('SELECT * FROM history LIMIT ? OFFSET ?', [limit, offset], (err, his) => {
        if(err) throw err;
        res.json(his);
    });
});

app.delete('/history/:id', (req, res) => {
    id = req.params.id
    console.log(id);
    db.query('DELETE FROM history where id=?', [id], (err) => {
        if(err){
            res.json({success: false});
        }
        else{
            res.json({success: true});
        }
    });
});

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`)
})