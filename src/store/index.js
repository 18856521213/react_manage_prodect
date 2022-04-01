import { createStore } from "redux";

let stateLocal = {
  token: "dsadsad",
  showLodding: false
}

const reducer = function(state = stateLocal, action) {
  switch(action.type){
    case "CHANGE_TOKEN":
      return {...state, token: action.payload};
    case "CHANGE_SHOWLODDING" :
      return {...state, showLodding: action.payload};
    default:
      return state;
  }

}

export default createStore(reducer)