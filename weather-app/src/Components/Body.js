import React from 'react';
import Home from './Body/Home/Home';
import History from './Body/History/History';
import Chart from './Body/Chart/Chart';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

function Body() {
    return (
      <div className="center">
          {/* <Home /> */}
    <Router>
        
        <Switch>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/chart">
            <Chart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
      </div>
    );
  }
  
  export default Body;
  