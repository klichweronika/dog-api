import { ChangeEvent, useEffect, useState } from "react";
import { Locale } from "../common/Locale";
import Separator from "../common/Separator";
import BreedList from "./BreedList";
import { Breed } from "./MainPage";
import SearchInput from "./SearchInput";

type ResponseBreed = {
  [index: string]: string[];
};

type BreedResponse = {
  message: ResponseBreed;
};

export default function BreedNavigator() {
  const [breeds, setBreeds] = useState<Breed[] | []>([]);
  const [filteredBreeds, setFilteredBreeds] = useState<Breed[] | []>([]);

  useEffect(() => {
    async function getBreedsList() {
      const allBreedsList = await fetch("https://dog.ceo/api/breeds/list/all");
      const allBreedsListJson = (await allBreedsList.json()) as BreedResponse;

      const finalBreeds: Breed[] = [];
      for (const breedName in allBreedsListJson.message) {
        finalBreeds.push({
          value: breedName,
          subBreeds: allBreedsListJson.message[breedName],
        });
      }

      setBreeds(finalBreeds);
    }
    getBreedsList();
  }, []);

  // const [dogImageSrc, setDogImageSrc] = useState<string>("");
  // const [search, setSearch] = useState<string>("");
  // function handleClick(dog: string): void {
  //   const dogName = dog.split(" ");
  //   if (dogName.length === 1) {
  //     setDogImageSrc(`https://dog.ceo/api/breed/${dogName[0]}/images/random`);
  //   } else {
  //     setDogImageSrc(
  //       `https://dog.ceo/api/breed/${dogName[1]}/${dogName[0]}/images/random`
  //     );
  //   }
  //   setImageTitle(`Photo for: ${dog}`);
  //   setImageAlt(`Picture of ${dog}`);
  // }

  const onBreedSelectedHandler = (searchInput: string) => {
    const normalizedInput = searchInput.toLowerCase();

    breeds.filter(
      (breed) =>
        breed.value.toLowerCase().includes(normalizedInput) ||
        breed.subBreeds.some((subBreed) =>
          subBreed.toLowerCase().includes(normalizedInput)
        )
    );
  };

  const onSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <SearchInput
        placeholderText={Locale.typeDogBreed}
        onChangeHandler={onSearchHandler}
      />
      <Separator />
      <BreedList
        breeds={breeds}
        onBreedSelectedHandler={onBreedSelectedHandler}
      />
    </>
  );
}
