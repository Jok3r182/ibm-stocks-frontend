import "./App.css";
import React from "react";
import Background from "./components/page-content/background/Background";
import SearchPage from "./pages/SearchPage";
import video from "./assets/video/background.mp4";
import { Routes, Route, Navigate } from "react-router-dom";
import ChartPage from "./pages/ChartPage";

function App() {
  return (
    <>
      <Background source={video} />
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="home" element={<SearchPage />}>
          <Route path="chart" element={<ChartPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
