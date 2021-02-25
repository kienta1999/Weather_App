import BarChart from './BarChart'
import PieChart from './PieChart'

function Weather(props){
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    if(props.city){
        return(
            <div className="weather">
                <p>Your query is: {props.query}</p>
                <h2>This is the weather of {props.city} on {datetime}</h2>
                <h3>
                The weather is {props.description} with average temperture at 
                {" " + props.temp} <sup>o</sup>C (with min temperture: {props.temp_min} 
                <sup>o</sup>C and max temperture {props.temp_max} <sup>o</sup>C). 
                </h3>
                <h3>Humidity: {props.humidity}%</h3>
                <h3>Pressure: {props.pressure} pascal</h3>
                <h3>Visibility: {Number(props.visibility) / 1000} km</h3>
                <h3>Wind speed: {props.wind_speed} km/h</h3>
                <BarChart data={[props.temp_min, props.temp, props.temp_max]}/>
                <PieChart humidity={props.humidity}/>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>No result found</h1>
            </div>
        )
    }
}

export default Weather;