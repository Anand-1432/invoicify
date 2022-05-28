import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCustomer from "./pages/addCustomer/AddCustomer";
import Add from "./pages/add_invoice/Add";
import DashBoard from "./pages/dashboard/DashBoard";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Scan from "./pages/qrscan/Scan";
import Sales from "./pages/sales/Sales";
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
      <Route path="/add_customer" element={<AddCustomer/>}/>
      <Route path="/dashBoard" element={<DashBoard/>}/>
      <Route path="/sales" element={<Sales/>}/>

    </Routes>
  );
}

export default App;
