import { ReactElement } from "react";
import DogList from "./DogList";
import DogPhoto from "./DogPhoto";
import '../styles/MainPage.scss';

export default function MainPage(): ReactElement {
    return (
      <div className='main-page'>
        <DogList />
        
      </div>
    );
  }