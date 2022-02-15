import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login';
import Feed from './Components/Feed';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/" component={Feed}/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
