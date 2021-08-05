import DogPresenter from "./DogPresenter";
import "../styles/MainPage.scss";
import BreedNavigator from "./BreedNavigator";

export type Breed = {
  value: string;
  subBreeds: string[];
};

export type BreedPresentation = {
  text: string;
  imageUrl: string;
  imageAlt: string;
};

export default function DogGalleryContainer() {
  return (
    <div className="main-page">
      <div className="dogs-list-container">
        <BreedNavigator />
      </div>
      <DogPresenter breedPresentation={null} />
    </div>
  );
}
