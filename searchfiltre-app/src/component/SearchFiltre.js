import React, { useState } from "react";
import "./Style.css";
var data = require("./MOCK_DATA .json");

const SearchFiltre = () => {
  const [value, setValue] = useState("");

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    //our api to fetch the search result
    console.log("Search", searchTerm);
  };
  return (
    <div className="App">
      <h1>Search</h1>
      <div className="search-container">
        <div className="search-inner">
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button onClick={() => onSearch(value)}>Search</button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            }).slice(0,10)
            .map((item) => (
              <div
                key={item.full_name}
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFiltre;
