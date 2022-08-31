import { useState } from "react";
import Body from "./Body";
import Countries from "./Countries";
import Header from "./Header";
import { useRecoilValue } from "recoil";
import { darkMode } from "../atom/atom";
import "./Main.css";
export default function Main() {
  const [searchInput, setSearchInput] = useState({});
  const getDarkMode = useRecoilValue(darkMode);
  function getSearchInput(e) {
    setSearchInput(e);
  }
  return (
    <div className={`${getDarkMode} w-full h-auto min-h-screen`}>
      <Header />
      <Body getSearchInput={getSearchInput} />
      <Countries searchInput={searchInput} />
    </div>
  );
}
