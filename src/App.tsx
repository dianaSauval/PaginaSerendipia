import React from "react";
import logo from "./logo.svg";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import {useTranslation} from "react-i18next";
import { Suspense } from "react";
import CircularIndeterminate from "./components/spinner/Spinner";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Suspense fallback={<CircularIndeterminate/>}>
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
    </Suspense>
    </ThemeProvider>
  );
}

export default App;
