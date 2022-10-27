import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormAdvertisement from "./components/Form/FormAdvertisement";
import store from "../src/Redux/reduxStore";
import { Route, Routes } from "react-router-dom";
import CardPage from "./components/CardPage/CardPage";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import InfoCarPage from "./components/information/InfoCarPage";

const App = () => {
  return (
    <div>
      <div> 
        <NavbarComponent />
       </div>
      <div>
        <FormAdvertisement store={store} />
        <Routes>
          <Route exact path="/cardOfCar" element={<CardPage store={store}/>}></Route>
          <Route exact path="/InfoCarPage" element={<InfoCarPage store={store}/>}></Route>
        </Routes>
                   </div>
    </div>
  );
};

export default App;
