import React from 'react';
import '../styles/DogImage.scss'

type DogImageProps = {
  imageUrl: string;
  imageTitle: string;
  imageAlt: string;
};

export default function DogImage({ imageUrl, imageTitle, imageAlt }: DogImageProps) {
  return (
    <div className='dog-image-container'>
      <div className='dog-image-box'>
        <img src={imageUrl}
             alt={imageAlt} /> 
        <div className='dog-image-text'>
          <p>{imageTitle}</p>
        </div>
      </div>
    </div>
  );
}