import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { darkMode } from "../atom/atom";
import { useEffect } from "react";
export default function Header() {
  const [getDarkMode, setDarkMode] = useRecoilState(darkMode);
  useEffect(() => {
    setDarkMode(localStorage.getItem("darkMode"));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", getDarkMode);
  }, [getDarkMode]);

  return (
    <div className={`${getDarkMode} header-container w-full`}>
      <div className="flex justify-between w-10/12 mx-auto py-5 font-bold">
        <p className="text-base font-extrabold sm:text-xl">
          Where in the world?
        </p>
        <div
          onClick={() => {
            if (getDarkMode === "light-mode") {
              setDarkMode("dark-mode");
              return 0;
            }
            setDarkMode("light-mode");
          }}
          className="flex items-center cursor-pointer"
        >
          <FontAwesomeIcon icon={faMoon} className="mr-2 -rotate-12" />
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
}
