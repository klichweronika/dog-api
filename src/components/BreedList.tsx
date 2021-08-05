import { useActiveBreed } from "../common/DogContext";
import { Locale } from "../common/Locale";
import "../styles/BreedList.scss";

type DogsListProps = {
  breeds: string[];
};

export default function BreedList({ breeds: filteredBreeds }: DogsListProps) {
  const { setActiveBreed } = useActiveBreed();

  if (filteredBreeds.length > 0) {
    return (
      <ul className="breed-list">
        {filteredBreeds.map((breed) => (
          <li
            className="breed-list-item"
            key={breed}
            onClick={() => setActiveBreed(breed)}
          >
            <p>{breed}</p>
          </li>
        ))}
      </ul>
    );
  }
  return <p>{Locale.thereAreNoBreeds}</p>;
}
