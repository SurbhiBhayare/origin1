import React from 'react';
import { CheckSquare } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


function Acknowledgement() {

  return (
    <div className="acknowledgement">
        <div className="m-4">
                <nav className="breadcrumb-arrow" aria-label="breadcrumb">
                    <ol className="breadcrumb  bg-white">
                        <li className="breadcrumb-item"><a>Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Acknowledgement</li>
                    </ol>
                </nav>
            </div>
        <div className="text-center">
            <CheckSquare color="#58AD63" size={60}/>
            <h3 className="my-4">Thank you for submitting your return request with Ref# <span>TLD-41870</span></h3>
            <p>You will receive an email confirmation with instructions shortly. Please do not submit a duplicate request.</p>
            <div className="my-4">
                <button type="button" className="btn btn-outline-success mx-2">View Return History</button>
               <Link to={'/'}><button type="button" className="btn btn-primary">Create a New Return</button></Link>
            </div>
        </div>
    </div>
  );
}

export default Acknowledgement;