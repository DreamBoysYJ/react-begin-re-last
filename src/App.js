import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./routers/Detail";
import Home from "./routers/Home";
import "../src/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
