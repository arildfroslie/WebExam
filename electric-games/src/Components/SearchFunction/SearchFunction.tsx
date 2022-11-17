import "./SearchFunction.css";
import { ISearch } from "../../interfaces/ISearch";
import { useState } from "react";
import { FC } from "react";

const SearchFunction : FC<ISearch> = ({onChange}) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
    
    if (onChange) {
      onChange(event.target.value);
    }
  }

  return (
    <>
      <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
      </div>
    </>
    );
}

export default SearchFunction;
