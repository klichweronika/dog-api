import ActiveBreedProvider from "../common/DogContext";
import "../styles/App.scss";
import BreedNavigator from "./BreedNavigator";
import DogPresenter from "./DogPresenter";
import Footer from "./Footer";

export default function App() {
  return (
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
  );
}
