import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<><Home /><Menu /></>} />
      <Route path="/article" element={<><Article /><Menu /></>} />
        <Route path="*" element={<h1>404 Not Found</h1>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;