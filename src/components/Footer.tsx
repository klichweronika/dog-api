import React from "react";
import "../styles/Footer.scss"
import { Locale } from "../common/Locale";

export default function DogPhoto() {
  return (
    <div className="footer-container">
      <p>{Locale.footerTheBestDog}</p>
      <p>{Locale.allRightsReserved}</p>
    </div>
  );
}