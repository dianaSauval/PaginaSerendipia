import React from "react";
import logo from "./logo.svg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import CircularIndeterminate from "./components/spinner/Spinner";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import ShowSpinology from "./pages/ShowSpinology";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<CircularIndeterminate />}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/show-spinology" element={<ShowSpinology />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
