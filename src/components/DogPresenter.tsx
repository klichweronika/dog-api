import { Locale } from "../common/Locale";
import "../styles/DogImage.scss";
import { BreedPresentation } from "./MainPage";

type DogImageProps = {
  breedPresentation?: BreedPresentation | null;
};

export default function DogPresenter({ breedPresentation }: DogImageProps) {
  const fallbackImage =
    "https://image.flaticon.com/icons/png/512/194/194279.png";
  const fallbackAlt = Locale.dogImageNotAvailable;

  const imageAlt = breedPresentation?.imageAlt ?? fallbackAlt;
  const imageUrl = breedPresentation?.imageUrl ?? fallbackImage;
  const breedText = breedPresentation?.text ?? "No description  :(";

  return (
    <div className="dog-image">
      <div className="dog-image__box">
        <img src={imageUrl ?? fallbackImage} alt={imageAlt ?? fallbackAlt} />
        <div className="dog-image__text">
          <p>{breedText}</p>
        </div>
      </div>
    </div>
  );
}
