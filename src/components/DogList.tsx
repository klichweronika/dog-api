import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import '../styles/DogList.scss'

type DogsListProps = {
  filteredDogs: string[];
  handleClick: (dog: string) => void;
};

export default function DogList() {
  const [dogsList, setDogsList] = useState<string[]>([]);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [search, setSearch] = useState<string>("");
  const [filteredDogs, setFilteredDogs] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then(
        (result) => {
          setDogsList(Object.keys(result.message));

        },
        ((error) => {
          setError(error);
        })
      );
   });

  useEffect(() => {
    setFilteredDogs(
      dogsList.filter((dog) => dog.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, dogsList]);

  if (error) {
    return <div>Error</div>;
  } else {

    return (
    <div className="dogs-list-container">
      <p>Choose dog breed!</p>
        <SearchInput
          placeholderText="Search Dog Breed"
          onChangeFun={(e) => setSearch(e.target.value)}
        />
        <div className="dogs-breeds">
        
        <ul>
          {filteredDogs.map((dog) => (
            <li key={dog}>{dog}
            </li>
          ))}
        </ul>
        </div>
      </div>
    );
  }
}
