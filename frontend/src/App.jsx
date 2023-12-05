import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstArticle from "./pages/FirstArticle";
import SecondArticle from "./pages/SecondArticle";
import ThirdArticle from "./pages/ThirdArticle";
import Home from "./pages/Home";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/home" element={<><Home /></>}  />
        <Route path="/article/:page_id" element={<><FirstArticle /></>} />
        <Route path="/article/:page_id" element={<><SecondArticle /></>} />
        <Route path="/article" element={<><ThirdArticle /></>} />
        <Route path="*" element={<h1>404 Not Found</h1>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;