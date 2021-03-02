const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const port = 3001; 

let app = express();
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/weather/:query', (req, res) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(req.params.query)}&appid=fc9331f99b901f7ad8d6c32816c49820&units=metric`)
        .then(res => {
            setData(res.data);
            queries.push({
                query: event.target.city.value,
                date: datetime
            })
            localStorage.setItem('query',  JSON.stringify(queries));
            event.target.city.value = '';
        })
    res.json(req.params)
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})