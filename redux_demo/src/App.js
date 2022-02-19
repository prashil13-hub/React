import './App.css';
import Bat from './Component/Bat'
import Ball from './Component/Ball';
import {Provider} from 'react-redux'
import store from './Redux/store';

function App() {
  return (
    <div >
      <Provider store={store}>
        <Bat/>
        <Ball/>
      </Provider>
      
    </div>
  );
}

export default App;
