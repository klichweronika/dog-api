import { ChangeEvent, useEffect, useState } from "react";
import { Locale } from "../common/Locale";
import Separator from "../common/Separator";
import BreedList from "./BreedList";
import SearchInput from "./SearchInput";
import "../styles/BreedNavigator.scss";

type ResponseBreed = {
  [index: string]: string[];
};

type BreedResponse = {
  message: ResponseBreed;
};

export default function BreedNavigator() {
  const [breeds, setBreeds] = useState<string[] | []>([]);
  const [filteredBreeds, setFilteredBreeds] = useState<string[] | []>([]);

  useEffect(() => {
    async function getBreedsList(): Promise<void> {
      const allBreedsList = await fetch("https://dog.ceo/api/breeds/list/all");
      const allBreedsListJson = (await allBreedsList.json()) as BreedResponse;

      const finalBreeds: string[] = [];
      for (const breedName in allBreedsListJson.message) {
        finalBreeds.push(
          breedName,
          ...allBreedsListJson.message[breedName].map(
            (x) => `${breedName} ${x}`
          )
        );
      }

      setFilteredBreeds(finalBreeds);
      setBreeds(finalBreeds);
    }
    getBreedsList();
  }, []);

  const onSearchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const userInput = event.currentTarget.value;

    if (userInput === "") {
      setFilteredBreeds(breeds);
    }

    const normalizedInput = event.currentTarget.value.toLowerCase();

    const filteredBreeds = breeds.filter((breed) =>
      breed.toLowerCase().includes(normalizedInput)
    );

    setFilteredBreeds(filteredBreeds);
  };

  return (
    <div className="breed-navigator">
      <SearchInput
        placeholderText={Locale.typeDogBreed}
        onChangeHandler={onSearchHandler}
      />
      <Separator />
      <BreedList breeds={filteredBreeds} />
    </div>
  );
}
