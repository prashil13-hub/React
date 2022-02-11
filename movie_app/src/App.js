import './App.css';
import Navbar from './Components/Navbar'
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router> 

        <Navbar/>
        <Switch>
          <Route exact path="/" render={(props)=>(
            <>
              <Banner {...props}/>
              <Movies {...props}/>
            </>
          )} />
          <Route path="/favourites" component={Favourites}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
