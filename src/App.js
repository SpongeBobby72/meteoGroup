import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Weather />} />
        <Route path="/article" exact element={<Articles/>} />
        <Route element={NotFound} />
      </Routes>
    </HashRouter>
  );
};

export default App;
