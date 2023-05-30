import React from 'react';
import "./Sidebar.css";
import logo from "./logo.png";
import { Grid, PersonCircle, PlusSquare, Check2All, ClockHistory, Telephone, InfoCircle, BoxArrowLeft } from 'react-bootstrap-icons';

function Sidebar() {

  return (
       <nav id="sidebar" className="d-flex justify-content-between flex-column col-md-2">
            <ul class="list-unstyled px-4 py-5">
                <div className="d-flex pb-5 align-items-center">
                    <img src={logo}  className="mx-2" alt="continuum"/>
                    <h5 className="text-uppercase text-dark mb-0">Continuum</h5>
                </div>
                
                <li className="navbar-grouping text-uppercase">Manage</li>
                <li>
                    <a href="/dashboard" className="text-decoration-none d-flex align-items-center"><Grid className="mx-2"/> Dashboard</a>
                </li>
                <li>
                    <a href="#" className="text-decoration-none"><PersonCircle className="mx-2"/>My Profile</a>
                </li>
                <li className="navbar-grouping text-uppercase">RMA</li>
                <li class="active">
                    <a href="/1" className="text-decoration-none"><PlusSquare className="mx-2"/>Create</a>
                </li>
                <li>
                    <a href="#" className="text-decoration-none"><Check2All className="mx-2"/>Status</a>
                </li>
                <li>
                    <a href="/history" className="text-decoration-none"><ClockHistory className="mx-2"/>History</a>
                </li>
                <li className="navbar-grouping text-uppercase">Preference</li>
                <li>
                    <a href="#" className="text-decoration-none"><Telephone className="mx-2"/>Contact</a>
                </li>
                <li>
                    <a href="#" className="text-decoration-none"><InfoCircle className="mx-2"/>Help</a>
                </li>
            </ul>
            <ul class="list-unstyled px-3">
                <li className="">
                    <a href="/" className="text-decoration-none"><BoxArrowLeft className="mx-2"/>Logout</a>
                </li>
            </ul>
        </nav>
  );
}

export default Sidebar;