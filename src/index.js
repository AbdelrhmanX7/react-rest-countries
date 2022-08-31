import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainInfo from "./components/MainInfo/MainInfo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route exact path="/react-rest-countries" element={<App />} />
        <Route
          path="/react-rest-countries/country-info/:name"
          element={<MainInfo />}
        />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
