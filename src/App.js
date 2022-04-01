import {createContext, useState} from "react";
import './App.css';
import "../src/static/style/reset.css"
import RouterList from "./router/index.js"
import store from './store';
export const AppContext = createContext();
function App() {
  const [flag, setFlag] = useState(true);
  const changeHandle = () => {
    if(flag) {
      store.dispatch({type: "CHANGE_TOKEN", payload: "dsadasdadsada"})
      setFlag(false)
    }else{
      store.dispatch({type: "CHANGE_TOKEN", payload: "dsadasdadsada"})
      setFlag(true)
    }
  }
  return (
    <div className="App">
      <button onClick={changeHandle}>点击事件</button>
      <AppContext.Provider value={store}>
        <RouterList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
