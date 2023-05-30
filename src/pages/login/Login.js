import React from 'react';
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../component/sidebar/logo.png";

function Login() {
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = `/dashboard`; 
        navigate(path);
    }

  return (
    <div className="login">
      <div className="container-fuild">
        <div className="row">
          <div className="col-md-5 image">
            <div>
              <div className="content-area text-white">
              <h3 className="display-3 fw-bold">Automate Your RMA Process</h3>
              <p className="h6">Automating your product returns process can improve efficiency, reduce workload, and increase customer satisfaction. Implementing a returns management system and using AI-powered customer service tools can streamline the entire process, from creating a return label to processing the return and refunding the customer.</p>
              <ul>
                <li className="h6">Stop manually keying RMA's</li>
                <li className="h6">Deliver better customer experiences</li>
                <li className="h6">Simple set up and ERP Integration </li>
              </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7 d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <img src={logo} width={140} className="mt-5"/>
              <p className="h2">Welcome Continuum!</p>
              <p>A login for starting the return process simplifies returns for your valuable data for businesses to track return preferences.</p>
              <input type="button" value="Login" className="px-4 py-2 mx-2 btn btn-primary" onClick={routeChange}/>
            </div>
          </div>
        </div>
      </div>
    </div>
        
  );
}

export default Login;