import React from "react";
import "../styles/DogImage.scss"

type DogImageProps = {
  imgUrl: string;
  imgTitle: string;
  alt: string;
};

export default function DogImage({ imgUrl, imgTitle, alt }: DogImageProps) {
  return (
    <div className="dog-image-container">
      <div className="dog-image-box">
        <img className="dog-img" src={imgUrl} alt={alt} /> 
        <div className="dog-image-text">
          <p>{imgTitle}</p>
        </div>
      </div>
    </div>
  );
}