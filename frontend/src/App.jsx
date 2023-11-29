import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} >
        </Route>
        <Route path="/article" element={<Article />} >
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;