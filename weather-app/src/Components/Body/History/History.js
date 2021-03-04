import axios from 'axios';
import React, { useState, useEffect } from 'react';


function History(){
    // const [offset, setOffset] = useState(0);
    // const [limit, setLimit] = useState(2);
    let offset = 0
    let limit = 5
    const [page, setPage] = useState(0);
    const [data, setData] = useState(null);
    
    function fetchData(){
        console.log(`http://localhost:3001/history?offset=${offset}&limit=${limit}`)
        axios.get(`http://localhost:3001/history?offset=${offset}&limit=${limit}`)
        .then(res => {
            setData(res.data)
        })
    }

    useEffect(()=>{
        fetchData()
    }, [])

    let nextPage = async (event) => {
        offset = limit * (page + 1)
        setPage(page + 1)
        fetchData()
    }
    let prevPage = async (event) => {
        if(page == 0) return;
        offset = limit * (page - 1)
        setPage(page - 1)
        fetchData()
    }
        if(data){
            let history = data.map((entry) => {
                return (
                    <tr >
                        <td>{entry.city_name}</td>
                        <td>
                            This is the weather of {entry.city_name} on {entry.date}. The weather is {entry.description} 
                            with average temperture at {" " + entry.temp} <sup>o</sup>C (with min temperture: {entry.min_temp} 
                            <sup>o</sup>C and max temperture {entry.max_temp} <sup>o</sup>C). Humidity: {entry.humidity}%, 
                            Pressure: {entry.pressure} pascal, Visibility: {Number(entry.visibility) / 1000} km, Wind speed: 
                            {entry.wind_speed} km/h</td>
                        <td><button type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
                )
            });
            return (
                <div>
                    <table className="table">
                    <tr>
                        <th scope="col">City</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                        {history}
                    </table>
                    
                    <button className="btn btn-primary" onClick={prevPage}>Prev</button>
                    <span>  {page}  </span>
                    <button className="btn btn-primary" onClick={nextPage}>Next</button>
                    
                </div>
            )   
        }
         return (
            <div>
                <button className="btn btn-primary" onClick={prevPage}>Prev</button>
                <span>{page}</span>
                <button className="btn btn-primary" onClick={nextPage}>Next</button>
            </div>
        )
}
    
export default History;