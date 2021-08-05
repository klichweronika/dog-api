import { Locale } from "../common/Locale";
import "../styles/DogDataList.scss";
import { Breed } from "./MainPage";

type DogsListProps = {
  breeds: Breed[];
  onBreedSelectedHandler: (dog: string) => void;
};

export default function BreedList({
  breeds: filteredDogs,
  onBreedSelectedHandler,
}: DogsListProps) {
  if (filteredDogs.length > 0) {
    return (
      <>
        <ol>
          {filteredDogs.map((breed) => (
            <li
              key={breed.value}
              onClick={() => onBreedSelectedHandler(breed.value)}
            >
              {breed.subBreeds.length > 0 ? (
                <ol>
                  {breed.subBreeds.map((subBreed) => (
                    <li
                      key={subBreed}
                      onClick={() => onBreedSelectedHandler(subBreed)}
                    >
                      {subBreed}
                    </li>
                  ))}
                </ol>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ol>
      </>
    );
  }
  return <p>{Locale.thereAreNoBreeds}</p>;
}
