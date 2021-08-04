import React from "react";
import "../styles/DogList.scss";

type DogsListProps = {
  filteredDogs: string[];
  handleClick: (dog: string) => void;
};

export default function DogsList({ filteredDogs, handleClick }: DogsListProps) {
  if (filteredDogs.length > 0) {
    return (
      <>
        <h3>Dogs List</h3>
        <ul>
          {filteredDogs.map((dog: string) => (
            <li key={dog} onClick={() => handleClick(dog)}>
              {dog}
            </li>
          ))}
        </ul>
      </>
    );
  }
  return <p>No results!</p>;
}
