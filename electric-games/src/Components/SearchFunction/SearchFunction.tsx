import { ISearch } from "../../interfaces/ISearch";
import { useState } from "react";
import { FC } from "react";
import scrollFunction from "../ScrollFunction/ScrollFunction";

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
      <div className="search-function">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
          <div className="add-icon" onClick={() =>{scrollFunction("add-function")}}>
            <i className="fa-regular fa-square-plus fa-xl"></i>
          </div>
      </div>
    </>
    );
}

export default SearchFunction;

