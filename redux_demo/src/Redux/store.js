import {createStore} from 'redux'
import BatReducer from './batReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer';   // reot reducer multiple reducer ko combine krne ka kam krta hai.

// const store = createStore(BatReducer,composeWithDevTools());  //here we cannot create multiple reducer

const store = createStore(rootReducer,composeWithDevTools());

export default store;
