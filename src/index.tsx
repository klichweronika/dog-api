import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ActiveBreedProvider from "./common/DogContext";
import "./styles/App.scss";
import BreedNavigator from "./components/BreedNavigator";
import DogPresenter from "./components/DogPresenter";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <ActiveBreedProvider>
        <div className="menu">
          <BreedNavigator />
        </div>

        <div className="presenter">
          <DogPresenter />
        </div>
      </ActiveBreedProvider>

      <div className="footer">
        <Footer />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
