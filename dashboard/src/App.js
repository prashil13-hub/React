import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar/Topbar'
import Sidebar from './Components/Sidebar/Sidebar'


function App() {
    return (
      <div >
          <Topbar/>
          <div className='container'>
            <Sidebar/>
            Other pages
          </div>
      </div>
    );
}

export default App;
