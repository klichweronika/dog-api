import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import DogImage from "./DogImage";
import DogsList from "./DogList";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/MainPage.scss'

export default function App() {
  const defaultImg: string = "https://icon-library.com/images/dog-icon-png/dog-icon-png-18.jpg";
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [dogsList, setDogsList] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filteredDogs, setFilteredDogs] = useState<string[]>([]);
  const [dogImageSrc, setDogImageSrc] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>(defaultImg);
  const [imgTitle, setImgTitle] = useState<string>("");
  const [imgAlt, setImgAlt] = useState<string>("dog picture");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then(
        (result: { message: { [key: string]: string[] } }) => {
          setIsLoaded(true);
          const dogs = result.message;
          let allDogs: string[] = [];
          Object.keys(dogs).forEach((key) =>
            dogs[key].length > 0
              ? dogs[key].forEach((subbreed) =>
                allDogs.push(subbreed + " " + key)
              )
              : allDogs.push(key)
          );
          setDogsList(allDogs);
        },
        (error: { message: string }) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [dogsList]);

  useEffect(() => {
    setFilteredDogs(
      dogsList.filter((dog: string) =>
        dog.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, dogsList]);

  function handleClick(dog: string): void {
    const dogName = dog.split(" ");
    if (dogName.length === 1) {
      setDogImageSrc(`https://dog.ceo/api/breed/${dogName[0]}/images/random`);
    } else {
      setDogImageSrc(
        `https://dog.ceo/api/breed/${dogName[1]}/${dogName[0]}/images/random`
      );
    }
    setImgTitle(`Photo for: ${dog}`);
    setImgAlt(`Picture of ${dog}`);
  }

  useEffect(() => {
    if (dogImageSrc === "") return;
    fetch(dogImageSrc)
      .then((res) => res.json())
      .then(
        (result: { message: string }) => {
          setIsLoaded(true);
          setImgUrl(result.message);
        },
        (error: { message: string }) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [dogImageSrc]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="main-page">
        <div className="dogs-list-container">
          <SearchInput
            placeholderText="Choose dog breed"
            onChangeFun={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <DogsList filteredDogs={filteredDogs} handleClick={handleClick} />
        </div>
        <DogImage imgUrl={imgUrl} imgTitle={imgTitle} alt={imgAlt} />
      </div>
    );
  }
}


