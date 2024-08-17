import React, { useState } from "react";
import cities from "../assets/cities.json";

const Phonebook = ({ placeholder, selectedNames, onSelectName }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const handleSelectName = (name) => {
    onSelectName(name);
    setSearchTerm(name);
    setIsFocused(false);
  };

  return (
    <div className="search-dropdown">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="search-input"
      />
      {isFocused && (
        <div className="dropdown">
          {cities
            .filter(
              (city) =>
                city.toUpperCase().includes(searchTerm.toUpperCase()) &&
                !selectedNames.includes(city)
            )
            .map((city, index) => (
              <div
                className={`List ${index === 0 ? "first-item" : ""}`}
                key={index}
                onClick={() => handleSelectName(city)}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="24"
                    viewBox="0 0 18 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.692 2C6.91793 2.00237 5.21716 2.70816 3.96266 3.96266C2.70785 5.21747 2.00203 6.91876 2 8.6933C2.00022 9.78209 2.36691 11.1483 3.04972 12.6924C3.72176 14.2121 4.63849 15.7682 5.59359 17.1977C6.74596 18.9224 7.91517 20.4053 8.69158 21.344C9.46862 20.4049 10.6376 18.9229 11.7897 17.199C12.7448 15.7701 13.6614 14.2144 14.3334 12.6946C15.016 11.1508 15.3829 9.78407 15.3832 8.69369C15.3809 6.91932 14.675 5.21826 13.4205 3.96348C12.1662 2.70902 10.4659 2.00297 8.692 2ZM8.69231 0C6.38767 0.00229279 4.17807 0.918822 2.54845 2.54845C0.918821 4.17807 0.00229279 6.38766 0 8.6923C0 14.6407 7.77862 23.3719 8.10917 23.74C8.18254 23.8218 8.27232 23.8873 8.37267 23.9321C8.47302 23.9768 8.58168 24 8.69158 24C8.80148 24 8.91014 23.9768 9.01049 23.9321C9.11084 23.8873 9.20063 23.8218 9.27401 23.74C9.60455 23.3705 17.3832 14.6464 17.3832 8.6923C17.3805 6.38803 16.464 4.17888 14.8348 2.54938C13.2056 0.919877 10.9966 0.00305603 8.69231 0ZM9.59809 22.4047L9.5972 22.4037L9.59809 22.4047Z"
                      fill="#101828"
                    ></path>
                    <ellipse
                      cx="8.69043"
                      cy="8.69141"
                      rx="4"
                      ry="4"
                      fill="#101828"
                    ></ellipse>
                  </svg>
                </span>
                {city}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Phonebook;
