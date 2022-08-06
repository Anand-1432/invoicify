import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCustomer from "./pages/addCustomer/AddCustomer";
// import Add from "./pages/add_invoice/Add";
import Warranty from "./pages/add_invoice/add_warranty/Warranty";
import BestOffer from "./pages/BestOffer/BestOffer";
import Cart from "./pages/cart/Cart";
import Distributer from "./pages/cart/distributer/Distributer";
import DashBoard from "./pages/dashboard/DashBoard";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Manually from "./pages/manually/Manually";
import MyProduct from "./pages/myProduct/MyProduct";
import DistributerHistory from "./pages/orderHistory/distributerHistory/DistributerHistory";
import History from "./pages/orderHistory/History";
import Category from "./pages/placeOrder/category/Category";
import InnerCate from "./pages/placeOrder/innerCate.jsx/InnerCate";
import Order from "./pages/placeOrder/order/Order";
import ProductPage from "./pages/placeOrder/productPage/ProductPage";
import Product from "./pages/product/Product";
import AddAddress from "./pages/profile/address/AddAddress";
import Address from "./pages/profile/address/Address";
import EditAddress from "./pages/profile/address/EditAddress";
import Addbank from "./pages/profile/bank/Addbank";
import Bank from "./pages/profile/bank/Bank";
import Editbank from "./pages/profile/bank/Editbank";
import EditProfile from "./pages/profile/editprofile/EditProfile";
import Profile from "./pages/profile/Profile";
import Scan from "./pages/qrscan/Scan";
import Sales from "./pages/sales/Sales";
import Service from "./pages/service/Service";
import Register from "./pages/store_register/Register";
import MyProfile from "./pages/userProfile/MyProfile";
import UserDetails from "./pages/user_details/UserDetails";
import UserType from "./pages/user_type/UserType";

function App() {
  return (
    <Routes>

      <Route path="/login" element={<Login/>}/>
      <Route path="/select_user_type" element={<UserType/>}/>
      {/* //////////////////////////////////////////////////////////// */}
      
      <Route path="/user_details" element={<UserDetails/>}/>
      <Route path="/user_profile" element={<MyProfile/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      {/* <Route path="/add_invoice" element={<Add/>}/> */}
      <Route path="/add_warranty" element={<Warranty/>}/>
      <Route path="/my_product" element={<MyProduct/>}/>
      <Route path="/best_offer" element={<BestOffer/>}/>
      <Route path="/service_center" element={<Service/>}/>
      {/* //////////////////////////////////////////////////////////// */}

      <Route path="/scan" element={<Scan/>}/>
      <Route path="/add_customer" element={<AddCustomer/>}/>
      <Route path="/dashBoard" element={<DashBoard/>}/>
      <Route path="/sales" element={<Sales/>}/>
      <Route path="/store_register" element={<Register/>}/>
      <Route path="/add_details_manually" element={<Manually/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/order/brand" element={<Category/>}/>
      <Route path="/order/brand/category" element={<InnerCate/>}/>
      <Route path="/order/brand/category/product" element={<ProductPage/>}/>
      
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/cart/distributer" element={<Distributer/>}/>

      <Route path="/history" element={<History/>}/>
      <Route path="/history/distributer" element={<DistributerHistory/>}/>

      <Route path="/profile" element={<Profile/>}/>
      <Route path="/profile/editprofile" element={<EditProfile/>}/>
      <Route path="/profile/address" element={<Address/>}/>
      <Route path="/profile/address/addAddress" element={<AddAddress/>}/>
      <Route path="/profile/address/editAddress" element={<EditAddress/>}/>
      <Route path="/profile/bank" element={<Bank/>}/>
      <Route path="/profile/bank/addbank" element={<Addbank/>}/>
      <Route path="/profile/bank/editbank" element={<Editbank/>}/>


    </Routes>
  );
}

export default App;
