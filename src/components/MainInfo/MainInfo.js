import { useParams, useNavigate } from "react-router-dom";
import Header from "../Main/Header";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { darkMode } from "../atom/atom";
import axios from "axios";
import "./MainInfo.css";
export default function MainInfo() {
  const { name } = useParams();
  const [saveCountry, setSaveCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  const [allCountries, setAllCountries] = useState({});
  const getDarkMode = useRecoilValue(darkMode);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((respone) => {
        setAllCountries(respone.data);
        const saveCountry = Object.values(respone.data).filter((el) => {
          return el.name.common === name;
        });
        setSaveCountry(Object.values(saveCountry)[0]);
        setIsLoading(false);
        setError(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);
  let navigate = useNavigate();
  return (
    <div className={`${getDarkMode} h-auto min-h-screen`}>
      <Header />
      <div className="w-full my-6">
        <div className="w-10/12 flex justify-between items-center m-auto">
          <div
            onClick={() => {
              navigate("/");
            }}
            className=" px-2 h-10 w-32 flex justify-center items-center shadow-lg rounded-md cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              className="mr-2 text-gray-500"
            />
            <button className="h-full outline-none text-lg font-bold">
              Back
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-10/12 m-auto">
          <div className="flex flex-col items-center justify-between lg:flex-row">
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
              <>
                <div className="w-full lg:w-5/12">
                  <img className="w-full" src={saveCountry.flags.png} alt="" />
                </div>
                <div className="flex flex-col mt-6 self-center h-full w-full lg:w-5/12 lg:mt-6">
                  <p className="font-black text-4xl mb-6 lg:mb-12 lg:text-2xl lg:font-bold">
                    {saveCountry.name.common}
                  </p>
                  <div className="country-info font-bold">
                    <p>
                      Native Name:{" "}
                      {Object.values(saveCountry.name.nativeName)[0].official}
                    </p>
                    <p>Population: {saveCountry.population}</p>
                    <p>Region: {saveCountry.region}</p>
                    <p>Sub Region: {saveCountry.subregion}</p>
                    <p>Capital: {saveCountry.capital}</p>
                    <p>Top Level Domain: {Object.values(saveCountry.tld)[0]}</p>
                    <p>
                      Currencies:{" "}
                      {Object.values(saveCountry.currencies)[0].name}
                    </p>
                    <p>
                      Languages:{" "}
                      {Object.values(saveCountry.languages).map((el) => {
                        return el + ",";
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-start flex-wrap my-5 sm:flex-row sm:items-center sm:flex-nowrap">
                    <p className="font-bold">Border Countries: </p>
                    <div className="flex w-auto font-bold">
                      <button
                        onClick={(e) => {
                          navigate(`/country-info/${e.target.innerText}`);
                          window.location.reload();
                        }}
                        className="shadow-md rounded-md p-3 w-28 mx-0 sm:mx-2"
                      >
                        {
                          Object.values(allCountries)[
                            Math.floor(
                              Math.random() *
                                Object.values(allCountries).length +
                                1
                            )
                          ].name.common
                        }
                      </button>
                      <button
                        onClick={(e) => {
                          navigate(`/country-info/${e.target.innerText}`);
                          window.location.reload();
                        }}
                        className="shadow-md rounded-md p-3 w-28 mx-2"
                      >
                        {
                          Object.values(allCountries)[
                            Math.floor(
                              Math.random() *
                                Object.values(allCountries).length +
                                1
                            )
                          ].name.common
                        }
                      </button>
                      <button
                        onClick={(e) => {
                          navigate(`/country-info/${e.target.innerText}`);
                          window.location.reload();
                        }}
                        className="shadow-md rounded-md p-3 w-28 mx-2"
                      >
                        {
                          Object.values(allCountries)[
                            Math.floor(
                              Math.random() *
                                Object.values(allCountries).length +
                                1
                            )
                          ].name.common
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
