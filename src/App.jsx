import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./router/Index";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
