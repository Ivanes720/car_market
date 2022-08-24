import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAdvertisement from "./components/Form/FormAdvertisement"
class App extends Component {

  render() {
    
    return (
      <div >
        <div>
          <FormAdvertisement/>
        </div>
     
      </div>
    );
  }
}




export default App;
