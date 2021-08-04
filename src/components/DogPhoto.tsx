import React from "react";
import "../styles/DogPhoto.scss"

type DogImageProps = {
  imgUrl: string;
  imgTitle: string;
  alt: string;
};

export default function DogPhoto({ imgUrl, imgTitle, alt }: DogImageProps) {
  return (
    <div className="dog-photo-container">
      <div>{imgTitle}</div>
      <img className="dog-img" src={imgUrl} alt={alt} />
    </div>
  );
}