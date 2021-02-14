import React from "react"
import Navbar from "./components/Navbar/Navbar"
import './assest/App.scss';
import { Provider } from "react-redux";
import store from "./redux/store/Store";
import CardUser from "./components/card/CardUser";
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="py-3">
          <CardUser/>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
