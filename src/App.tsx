import "./index.css";
import { Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<div />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
