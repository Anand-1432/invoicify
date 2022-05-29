import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCustomer from "./pages/addCustomer/AddCustomer";
import Add from "./pages/add_invoice/Add";
import DashBoard from "./pages/dashboard/DashBoard";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Manually from "./pages/manually/Manually";
import Product from "./pages/product/Product";
import Scan from "./pages/qrscan/Scan";
import Sales from "./pages/sales/Sales";
import Service from "./pages/service/Service";
import UserDetails from "./pages/user_details/UserDetails";
import UserType from "./pages/user_type/UserType";

function App() {
  return (
    <Routes>

      <Route path="/login" element={<Login/>}/>
      <Route path="/select_user_type" element={<UserType/>}/>
      {/* //////////////////////////////////////////////////////////// */}
      
      <Route path="/user_details" element={<UserDetails/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/add_invoice" element={<Add/>}/>
      <Route path="/service_center" element={<Service/>}/>
      {/* //////////////////////////////////////////////////////////// */}

      <Route path="/scan" element={<Scan/>}/>
      <Route path="/add_customer" element={<AddCustomer/>}/>
      <Route path="/dashBoard" element={<DashBoard/>}/>
      <Route path="/sales" element={<Sales/>}/>
      <Route path="/add_details_manually" element={<Manually/>}/>

    </Routes>
  );
}

export default App;
