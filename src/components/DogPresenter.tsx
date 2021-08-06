import { useCallback, useEffect, useState } from "react";
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

  const loadNewImageHandler = useCallback(() => {
    if (activeBreed == null || activeBreed === "") {
      return;
    }

    const breedNames = activeBreed.split(" ");

    async function SetActiveDogImage(breedNames: string[]) {
      if (breedNames.length === 1) {
        setActiveDog({
          imageUrl: await getBreedImageUrl(breedNames),
          text: `Picture of ${breedNames[0]}.`,
          imageAlt: breedNames[0],
        });

        return;
      }

      setActiveDog({
        imageUrl: await getSubBreedImageUrl(breedNames),
        text: `Picture of ${breedNames[1]} ${breedNames[0]}.`,
        imageAlt: `${breedNames[1]} ${breedNames[0]}`,
      });
    }

    SetActiveDogImage(breedNames);
  }, [activeBreed]);

  useEffect(() => loadNewImageHandler(), [activeBreed, loadNewImageHandler]);

  const getBreedImageUrl = async (breedNames: string[]) => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breedNames[0]}/images/random`
    );
    const json = await response.json();
    return json.message;
  };

  const getSubBreedImageUrl = async (breedNames: string[]) => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breedNames[0]}/${breedNames[1]}/images/random`
    );
    const json = await response.json();
    return json.message;
  };

  const { imageUrl, text } = activeDog;

  return (
    <div className="dog-image">
      <div className="dog-image__box">
        <button onClick={loadNewImageHandler}>{Locale.seeNextImage}</button>
        <img src={imageUrl} alt={Locale.dogImageNotAvailable} />
        <div className="dog-image__text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
