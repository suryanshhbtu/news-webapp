
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Entertainment from "./Components/genre/Entertainment";
import Health from "./Components/genre/Health";
import Home from "./Components/genre/Home";
import Science from "./Components/genre/Science";
import Sports from "./Components/genre/Sports";
import Technology from "./Components/genre/Technology";
import MainNavigation from "./Components/layout/MainNavigation";

function App() {
  return <div className="App">
    
    <MainNavigation/>
    <Switch>

    <Route path='/' exact>
        <Redirect to = '/home'/>
      </Route>

      <Route path='/home' exact>
        <Home/>
      </Route>

      <Route path='/entertainment' exact>
        <Entertainment/>
      </Route>

      <Route path='/health' exact>
        <Health/>
      </Route>

      <Route path='/science' exact>
        <Science/>
      </Route>

      <Route path='/sports' exact>
        <Sports/>
      </Route>

      <Route path='/technology' exact>
        <Technology/>
      </Route>
    </Switch>
    <Sports/>
  </div>;
}

export default App;
