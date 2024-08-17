import React, { useEffect, useState } from "react";
import axios from "axios";

const Buses = ({ routes }) => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3200/companies")
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching companies:", error);
      });
  }, []);

  const getCompanyLogo = (companyName) => {
    const company = companies.find((c) => c.name === companyName);
    return company ? company.logo : null;
  };

  return (
    <div className="buses-container">
      {routes.length > 0 ? (
        routes.map((route, index) => (
          <div key={index} className="detail-card">
            <div className="cn">
              <h5>{route.company}</h5>
            </div>
            <div className="details">
              <div className="img">
                <img
                  src={getCompanyLogo(route.company)}
                  alt={route.company}
                  style={{ width: "50px", height: "50px" }} // Adjust the size as needed
                />
              </div>
              <div className="tf">
                <div>{route.fromCity}</div>
                <div>
                  <svg
                    className="img-fluid"
                    width="47"
                    height="16"
                    viewBox="0 0 47 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.5 8C0.5 8.236 0.598 8.462 0.772 8.628C0.946 8.795 1.182 8.889 1.429 8.889L43.328 8.889L37.484 14.481C37.398 14.563 37.329 14.662 37.283 14.77C37.236 14.878 37.212 14.994 37.212 15.11C37.212 15.227 37.236 15.343 37.283 15.451C37.329 15.559 37.398 15.657 37.484 15.739C37.571 15.822 37.673 15.888 37.786 15.932C37.899 15.977 38.02 16 38.142 16C38.264 16 38.385 15.977 38.497 15.932C38.61 15.888 38.713 15.822 38.799 15.739L46.227 8.629C46.314 8.547 46.382 8.449 46.429 8.341C46.476 8.233 46.5 8.117 46.5 8C46.5 7.883 46.476 7.767 46.429 7.659C46.382 7.551 46.314 7.453 46.227 7.371L38.799 0.261C38.713 0.178 38.61 0.113 38.497 0.068C38.385 0.023 38.264 0 38.142 0C38.02 0 37.899 0.023 37.786 0.068C37.673 0.113 37.571 0.178 37.484 0.261C37.398 0.343 37.329 0.441 37.283 0.549C37.236 0.657 37.212 0.773 37.212 0.89C37.212 1.007 37.236 1.123 37.283 1.23C37.329 1.338 37.398 1.437 37.484 1.519L43.328 7.111L1.429 7.111C1.182 7.111 0.946 7.206 0.772 7.373C0.598 7.539 0.5 7.766 0.5 8Z"
                      fill="#9F9F9F"
                    ></path>
                  </svg>
                </div>
                <div>{route.toCity}</div>
              </div>
            </div>
            <div className="fb">
              <div>{route.fare} PKR</div>
              <button className="signup">Bookme</button>
            </div>
          </div>
        ))
      ) : (
        <p>No routes found</p>
      )}
    </div>
  );
};

export default Buses;
