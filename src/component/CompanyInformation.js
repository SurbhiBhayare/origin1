import React from 'react';
import { At, Telephone } from 'react-bootstrap-icons';
import axios from 'axios';
import { useState,useEffect } from 'react';

function CompanyInformation({ data }) {
    if (!data || data.length === 0) {
        return <p>No data available</p>; // or any fallback UI when data is null or empty
      }
    

        return (
            <>
                <div className="row shadow-sm p-3 mb-2 bg-body rounded border">
                    <div className="w-6 px-1">
                        <div className="avatar gradient-color mx-0">CN</div> </div>
                    <div className="col-md-4 px-0"> <h4 className="col-md-12 px-0 my-0">Company Name</h4>
                        <p className="my-0 fs-6">Customer ID: <span>{data.length > 0 ? data[0].customer.customerId : ''}</span></p> </div>
                    <div className="col-md-5">
                        <p className="my-0 d-flex align-items-center fs-6">
                            <At size={28} className="ml-2 mr-1" /><span>Email Address:</span> <span className="mx-1">{data.length > 0 ? data[0].customer.email : ''}</span></p>
                        <p className="my-0 d-flex align-items-center fs-6"><Telephone size={20} className="ml-2 mr-1" /><span className="ms-2">Phone Number:</span> <span className="mx-1">(+1)203 455 0118</span></p>
                    </div>
                </div>
            </>
        );
        }
    
export default CompanyInformation;