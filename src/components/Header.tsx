import React from "react";
import "../styles/Header.scss"
import '../common/Locale'
import { Locale } from "../common/Locale";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="header">
      <div className="header-icon"></div>
      <div className="header-text">
        <h1>{Locale.headerWelcome}</h1>
        <p>{Locale.headerChooseDog}</p>
      </div>
    </div>
  );
}
