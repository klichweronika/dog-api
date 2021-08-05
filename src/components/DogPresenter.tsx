import { useEffect, useState } from "react";
import { useActiveBreed } from "../common/DogContext";
import { Locale } from "../common/Locale";
import "../styles/DogPresenter.scss";

export type BreedPresentation = {
  text: string;
  imageUrl: string;
  imageAlt: string;
};

export default function DogPresenter() {
  const [activeDog, setActiveDog] = useState<BreedPresentation>({
    imageUrl: "https://image.flaticon.com/icons/png/512/194/194279.png",
    imageAlt: Locale.dogImageNotAvailable,
    text: "",
  });
  const { activeBreed } = useActiveBreed();

  useEffect(() => {
    if (activeBreed == null || activeBreed === "") {
      return;
    }

    const breedNames = activeBreed.split(" ");

    if (breedNames.length === 1) {
      setActiveDog({
        imageUrl: `https://dog.ceo/api/breed/${breedNames[0]}/images/random`,
        text: `Picture of ${breedNames[0]}.`,
        imageAlt: breedNames[0],
      });

      return;
    }

    setActiveDog({
      imageUrl: `https://dog.ceo/api/breed/${breedNames[1]}/${breedNames[0]}/images/random`,
      text: `Picture of ${breedNames[1]} ${breedNames[0]}.`,
      imageAlt: `${breedNames[1]} ${breedNames[0]}`,
    });
  }, [activeBreed]);

  const { imageUrl, text } = activeDog;

  return (
    <div className="dog-image">
      <div className="dog-image__box">
        <img src={imageUrl} alt={Locale.dogImageNotAvailable} />
        <div className="dog-image__text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
