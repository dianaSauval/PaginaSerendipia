import React from "react";
import logo from "./logo.svg";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import {useTranslation} from "react-i18next";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="Cargando traducciones">
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
    </Suspense>
  );
}

export default App;
