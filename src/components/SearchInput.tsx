import { ChangeEvent, useState } from "react";
import "../styles/SearchInput.scss";

export type SearchInputProps = {
  placeholderText: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  placeholderText: defaultPlaceholder,
  onChangeHandler,
}: SearchInputProps) {
  const [placeholder] = useState<string>(defaultPlaceholder);

  return (
    <div className="search-input">
      <input type="text" placeholder={placeholder} onChange={onChangeHandler} />
    </div>
  );
}
