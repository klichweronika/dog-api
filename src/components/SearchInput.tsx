import React from "react";
import '../styles/SearchInput.scss'

type SearchInputProps = {
    placeholderText: string;
    onChangeFun: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

export default function SearchInput({ placeholderText, onChangeFun }: SearchInputProps) {
  return (
    <div className="search-input-box">
        <input 
          type="text" 
          placeholder={placeholderText} 
          onChange={onChangeFun} 
        />
    </div>
  );
}
