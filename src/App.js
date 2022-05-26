import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/add_invoice/Add";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Scan from "./pages/qrscan/Scan";
import Service from "./pages/service/Service";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/add_invoice" element={<Add/>}/>
      <Route path="/service_center" element={<Service/>}/>
      {/* //////////////////////////////////////////////////////////// */}

      <Route path="/scan" element={<Scan/>}/>

    </Routes>
  );
}

export default App;
