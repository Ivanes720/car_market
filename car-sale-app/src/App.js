import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormAdvertisement from "./components/Form/FormAdvertisement";
import store from "../src/Redux/reduxStore";
import { Route, Routes } from "react-router-dom";
import CardPageContainer from "./components/CardPage/CardPageContainer";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import InfoCarPageContainer from "./components/information/InfoCarPageContainer";

const App = () => {
  return (
    <div>
      <div> 
        <NavbarComponent />
       </div>
      <div>
        <FormAdvertisement store={store} />
        <Routes>
          <Route exact path="/cardOfCar" element={<CardPageContainer store={store}/>}></Route>
          <Route exact path="/InfoCarPageContainer" element={<InfoCarPageContainer store={store}/>}></Route>
        </Routes>
                   </div>
    </div>
  );
};

export default App;
