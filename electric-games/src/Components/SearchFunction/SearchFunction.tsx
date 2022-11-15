import "./SearchFunction.css";

import { useState } from "react";

const SearchFunction = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);

  }
  return (
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
    );
}

export default SearchFunction;

