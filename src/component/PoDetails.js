import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PoDetails({ data }) {
    //const [data, setData] = useState([]);
    if (!data || data.length === 0) {
        return <p>No data available</p>; // or any fallback UI when data is null or empty
      }
    
            return (
                    <div className="row justify-content-center shadow-sm p-3 mt-2 bg-body rounded border">
                        <div className="fw-bold d-flex align-items-center mb-3">
                            <div className="text-white rounded-circle title-icon gradient-color mr-2">
                                <i className="bi bi-card-list" size={14} />
                            </div>
                            <h5 className="fw-bold mb-0">PO Details</h5>
                        </div>
                        <div className="col-md-3">
                            <h6 className="fw-bold">Po Number</h6>
                            <p className="mb-0">{data.length > 0 ? data[0].ponumber : ''}</p>
                        </div>
                        <div className="col-md-3">
                            <h6 className="fw-bold">Buyer ID</h6>
                            <p className="mb-0">{data.length > 0 ? data[0].customer.customerId : ''}</p>
                        </div>
                        <div className="col-md-3">
                            <h6 className="fw-bold">Buyer Name</h6>
                            <p className="mb-0">{data.length > 0 ? data[0].customer.displayName : ''}</p>
                        </div>
                        <div className="col-md-3">
                            <h6 className="fw-bold">Email Address</h6>
                            <p className="mb-0">{data.length > 0 ? data[0].customer.email : ''}</p>
                        </div>
                    </div> 
                    
                    
                
            );
    
}

export default PoDetails;