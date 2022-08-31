import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Countries(props) {
  const [countriesData, setCountriesData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((respone) => {
        let saveArr = [];

        for (let i = 0; i < Object.values(respone.data).length; i++) {
          saveArr.push(Object.values(respone.data)[i]);
        }

        setCountriesData(saveArr);
        setError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);
  let navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="w-10/12 m-auto countries-container">
        {isLoading ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : error ? (
          <div className="error-btn p-6 text-4xl font-extrabold">Error</div>
        ) : (
          countriesData.map((el) => {
            if (props.searchInput.region === el.region) {
              if (props.searchInput.countryName) {
                if (
                  el.name.common
                    .toLowerCase()
                    .includes(props.searchInput.countryName)
                ) {
                  return (
                    <div
                      key={Math.random()}
                      className="country-data shadow-lg rounded-md m-auto cursor-pointer"
                      onClick={() => {
                        navigate(`/country-info/${el.name.common}`);
                      }}
                    >
                      <img className="rounded-md" src={el.flags.png} alt="" />
                      <div className=" p-5 font-semibold rounded-md">
                        <p className="font-bold my-3">{el.name.common}</p>
                        <p className="py-0.5">Population: {el.population}</p>
                        <p className="py-0.5">Region: {el.region}</p>
                        <p className="py-0.5">Captial: {el.capital}</p>
                      </div>
                    </div>
                  );
                }
              } else {
                return (
                  <div
                    key={Math.random()}
                    className="country-data shadow-lg rounded-md m-auto"
                    onClick={() => {
                      navigate(`/country-info/${el.name.common}`);
                    }}
                  >
                    <img className="rounded-md" src={el.flags.png} alt="" />
                    <div className=" p-5 font-semibold rounded-md">
                      <p className="font-bold my-3">{el.name.common}</p>
                      <p className="py-0.5">Population: {el.population}</p>
                      <p className="py-0.5">Region: {el.region}</p>
                      <p className="py-0.5">Captial: {el.capital}</p>
                    </div>
                  </div>
                );
              }
            } else if (
              props.searchInput.region === "All" ||
              props.searchInput.region === "Filter by Region"
            ) {
              if (props.searchInput.countryName) {
                if (
                  el.name.common
                    .toLowerCase()
                    .includes(props.searchInput.countryName)
                ) {
                  return (
                    <div
                      key={Math.random()}
                      className="country-data shadow-lg rounded-md m-auto"
                      onClick={() => {
                        navigate(`/country-info/${el.name.common}`);
                      }}
                    >
                      <img className="rounded-md" src={el.flags.png} alt="" />
                      <div className=" p-5 font-semibold rounded-md">
                        <p className="font-bold my-3">{el.name.common}</p>
                        <p className="py-0.5">Population: {el.population}</p>
                        <p className="py-0.5">Region: {el.region}</p>
                        <p className="py-0.5">Captial: {el.capital}</p>
                      </div>
                    </div>
                  );
                }
              } else {
                return (
                  <div
                    key={Math.random()}
                    className="country-data shadow-lg rounded-md m-auto"
                    onClick={() => {
                      navigate(`/country-info/${el.name.common}`);
                    }}
                  >
                    <img className="rounded-md" src={el.flags.png} alt="" />
                    <div className=" p-5 font-semibold rounded-md">
                      <p className="font-bold my-3">{el.name.common}</p>
                      <p className="py-0.5">Population: {el.population}</p>
                      <p className="py-0.5">Region: {el.region}</p>
                      <p className="py-0.5">Captial: {el.capital}</p>
                    </div>
                  </div>
                );
              }
            }
          })
        )}
        <div></div>
      </div>
    </div>
  );
}
