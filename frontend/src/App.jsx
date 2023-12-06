import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Article from "./pages/Article";
import Home from "./pages/Home";
import Menu from "$components/Menu";
import { DataProvider } from "$context/DataContext";

function App() {
  return (
    <DataProvider> 
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/article/:page_id" element={<Article />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
