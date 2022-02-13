import './App.css';
import FireAuth from './Component/FireAuth';
import Firebase from './Component/Firebase';
import Firestore from './Component/Firestore';


function App() {
    return (
      <div>
        <FireAuth/>
        {/* <Firebase/> */}
        <Firestore/>
      </div>
    );
}

export default App;
