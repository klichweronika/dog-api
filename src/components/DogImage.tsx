import React from 'react';
import '../styles/DogImage.scss'

type DogImageProps = {
  imageUrl: string;
  imgTitle: string;
  alt: string;
};

export default function DogImage({ imageUrl, imgTitle, alt }: DogImageProps) {
  return (
    <div className='dog-image-container'>
      <div className='dog-image-box'>
        <img className='dog-img' src={imageUrl} alt={alt} /> 
        <div className='dog-image-text'>
          <p>{imgTitle}</p>
        </div>
      </div>
    </div>
  );
}