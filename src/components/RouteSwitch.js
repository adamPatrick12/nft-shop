import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import ShoppingArea from "./shoppingArea";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ShoppingArea />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;