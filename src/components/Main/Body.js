import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { darkMode } from "../atom/atom";
export default function Body(props) {
  const [countryName, setCountryName] = useState("");
  const [region, setRegion] = useState("Filter by Region");
  const getDarkMode = useRecoilValue(darkMode);
  useEffect(() => {
    props.getSearchInput({
      countryName: countryName.toLowerCase(),
      region: region,
    });
  }, [countryName, region]);

  function changeRegion(e) {
    setRegion(e.target.innerText);
  }

  return (
    <div className="w-full my-6">
      <div className="w-10/12 flex flex-col justify-between items-center m-auto sm:flex-row">
        <div
          className={` ${getDarkMode} p-3 flex items-center bg-white shadow-lg`}
        >
          <FontAwesomeIcon icon={faSearch} className="mx-4 text-gray-500" />
          <input
            className={`${getDarkMode} w-full h-full outline-none text-lg`}
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => setCountryName(e.target.value)}
            value={countryName}
          />
        </div>
        <div className="filter-bar mt-4 relative cursor-pointer lg:mt-0">
          <span
            className={`${getDarkMode} flex justify-between items-center p-4 bg-white rounded-md shadow-lg font-semibold`}
          >
            {region}{" "}
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              className="arror-icon mr-1 rotate-180"
            />
          </span>
          <div
            className={`${getDarkMode} dropdown-menu absolute overflow-hidden mt-2 shadow-lg`}
          >
            <p onClick={changeRegion}>All</p>
            <p onClick={changeRegion}>Africa</p>
            <p onClick={changeRegion}>Americas</p>
            <p onClick={changeRegion}>Asia</p>
            <p onClick={changeRegion}>Europe</p>
            <p onClick={changeRegion}>Oceania</p>
          </div>
        </div>
      </div>
      <div className="w-10/12"></div>
    </div>
  );
}
