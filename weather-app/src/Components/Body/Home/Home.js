import React, { useState } from 'react';
import Weather from './Weather'
import axios from 'axios';

function Home() {
    const [query, setQuery] = useState(null);
    const [data, setData] = useState(null);
    const [queries, setQueries] = useState([])
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    
    let handleSubmit = (event) => { 
        event.preventDefault();
        setQuery(event.target.city.value);
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(event.target.city.value)}&appid=fc9331f99b901f7ad8d6c32816c49820&units=metric`)
        .then(res => {
            setData(res.data);
            queries.push({
                query: event.target.city.value,
                date: datetime
            })
            localStorage.setItem('query',  JSON.stringify(queries));
            event.target.city.value = '';
        })
    }

    
    if(data == null){
        return (
            <div className="center">
                <div className="form-group form-group-lg">
                    <form action="/" method="get" onSubmit={handleSubmit}>
                    <input type="text" name="city" placeholder="city" className="input-lg"/>
                    <br></br><br></br>
                    <button className="btn btn-primary">Search</button>
                </form>
                </div>
                <Weather query={query}/>
            </div>
          );
    }
    else{
        return (
            <div className="center">
                <div className="form-group form-group-lg">
                    <form action="/" method="get" onSubmit={handleSubmit}>
                    <input type="text" name="city" placeholder="city" className="input-lg"/>
                    <br></br><br></br>
                    <button className="btn btn-primary">Search</button>
                </form>
                </div>
                <Weather 
                    query={query}
                    city_id={data.id}
                    city={data.name} 
                    description = {data.weather[0].description}
                    temp_min={data.main.temp_min}
                    temp_max={data.main.temp_max}
                    temp={data.main.temp_max}
                    humidity={data.main.humidity} 
                    pressure={data.main.pressure}
                    visibility={data.visibility}
                    wind_speed={data.wind.speed}
                />
            </div>
        )
    }
  }
  
  export default Home;
  