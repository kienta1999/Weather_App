function Header() {
    return (
      <div className="center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="/">WeatherApp</a>
            </div>
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item active"><a className="nav-link" href="/history">History</a></li>
            <li className="nav-item active"><a className="nav-link" href="/chart">Chart</a></li>
            {/* <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li> */}
            </ul>
        </div>
        </nav>
        <br></br>
        <h1>Welcome to our Weather App</h1>

      </div>
    );
  }
  
  export default Header;
  