import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import ShoppingArea from "./shoppingArea";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ShoppingArea />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;