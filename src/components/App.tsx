import React from 'react';
import DogList  from './DogList';
import Header from './Header';
import "../styles/App.scss";
import DogPhoto from './DogPhoto';
import MainPage from './MainPage';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Header/>
      <MainPage/>
      <Footer/>
    </>
  );
}

