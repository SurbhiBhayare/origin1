import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import {BrowserRouter as Router, Routes, Route}from "react-router-dom"
import SearchOrder from "./searchOrder/SearchOrder";
import Acknowledgement from "./acknowledgement/Acknowledgement";
import ReturnDetails from "./createReturn/CreateReturn";
import CreateReturn from "./returnDetails/ReturnDetails";
import ReviewReturn from "./reviewReturn/ReviewReturn";
function Pages() {

    return (
        <>
       <Router>
      <Routes>
        <Route path="/" element={<SearchOrder/>}/>
        <Route path="/create" element={<ReturnDetails/>}/>
        <Route path="/return" element={<CreateReturn/>}/>
        <Route path="/review" element={<ReviewReturn/>}/>
        <Route path="/acknow" element={<Acknowledgement/>}/>
      </Routes>
     </Router>
        </>
    );
  }
  
  export default Pages;