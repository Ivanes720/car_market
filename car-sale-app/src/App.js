import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormAdvertisement from "./components/Form/FormAdvertisement";
import store from "../src/Redux/reduxStore";
import { Route, Routes } from "react-router-dom";
import CardPage from "./components/CardPage/CardPage";
import NavbarComponent from "./components/Navbar/NavbarComponent";
const App = () => {
  return (
    <div>
      <div>
        <NavbarComponent />
       </div>
      <div>
        <FormAdvertisement store={store} />
        <Routes>
          <Route path="/cardOfCar" element={<CardPage store={store}/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
