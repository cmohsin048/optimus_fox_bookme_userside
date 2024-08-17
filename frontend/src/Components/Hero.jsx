import React, { useState } from "react";
import Phonebook from "./Phonebook";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import Buses from "./Buses";
import axios from "axios";

const Hero = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [routes, setRoutes] = useState([]);

  const handleFromCitySelect = (name) => {
    setFromCity(name);
  };

  const handleToCitySelect = (name) => {
    setToCity(name);
  };

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const searchData = {
      fromCity: fromCity,
      toCity: toCity,
    };

    try {
      const response = await axios.post(
        "http://localhost:3200/search",
        searchData
      );

      // Assuming the API response contains an array of routes
      setRoutes(response.data.routes);
    } catch (error) {
      console.error("Error fetching routes:", error);
    }
  };

  return (
    <div>
      <div className="Booking">
        <p className="h">Search for Bus</p>
        <p>Find the best deal for your bus travel</p>
        <form onSubmit={handleSubmit}>
          <div className="Travel-input">
            <div className="from">
              <Phonebook
                placeholder="From"
                selectedNames={[fromCity, toCity]}
                onSelectName={handleFromCitySelect}
              />
            </div>
            <div className="to">
              <Phonebook
                placeholder="To"
                selectedNames={[fromCity, toCity]}
                onSelectName={handleToCitySelect}
              />
            </div>
            <div className="departure">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Departure Date"
                  value={departureDate}
                  onChange={handleDepartureDateChange}
                  className="search-input"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="search-button">
              <button type="submit">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <Buses routes={routes} />
    </div>
  );
};

export default Hero;
