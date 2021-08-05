import React from 'react';
import { Locale } from '../common/Locale';
import '../styles/SearchInput.scss'

type SearchInputProps = {
    placeholderText: string;
    onChangeFun: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

export default function SearchInput({ placeholderText, onChangeFun }: SearchInputProps) {
  return (
    <div className='search-input-box'>
      <p>{Locale.searchInputDog}</p>
        <input 
          type='text' 
          placeholder={placeholderText} 
          onChange={onChangeFun} 
        />
    </div>
  );
}
