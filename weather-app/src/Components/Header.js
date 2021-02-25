function Header() {
    return (
      <div className="center">
        <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" href="/">WeatherApp</a>
            </div>
            <ul class="nav navbar-nav">
            <li class="active"><a href="/">Home</a></li>
            <li><a href="/history">History</a></li>
            {/* <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li> */}
            </ul>
        </div>
        </nav>
        <h1>Welcome to our Weather App</h1>

      </div>
    );
  }
  
  export default Header;
  