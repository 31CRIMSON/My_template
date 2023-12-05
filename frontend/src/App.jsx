import { BrowserRouter, Routes, Route } from "react-router-dom";

import Article from "./pages/Article";
import Home from "./pages/Home";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/home" element={<><Home /></>}  />
        <Route path="/article/:page_id" element={<><Article /></>} />
        <Route path="*" element={<h1>404 Not Found</h1>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;