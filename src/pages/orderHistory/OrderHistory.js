import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';


function OrderHistory() {

  return (
    <>
    <div className="d-flex">
        <Sidebar/>
        <div className="d-flex w-100 justify-content-between flex-column">
            <div>
            <div className="my-4">
            <p className="fw-bold text-uppercase mb-1 text-success h5">History</p>
            <h1 className="fw-bold display-4">Order History</h1>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Id #</th>
                    <th scope="col">Name</th>
                    <th scope="col">Payment Type</th>
                    <th scope="col">Created On</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="align-items-center">
                        <td>TLD-41870</td>
                        <td>Tommy John</td>
                        <td>Cash</td>
                        <td>12-03-2023, 11.00 AM</td>
                        <td>Open</td>
                        <td><button type="button" class="btn btn-outline-secondary rounded-pill">Order Details</button></td>
                    </tr>
                    <tr className="align-items-center">
                        <td>TLD-41870</td>
                        <td>Tommy John</td>
                        <td>Cash</td>
                        <td>12-03-2023, 11.00 AM</td>
                        <td>Open</td>
                        <td><button type="button" class="btn btn-outline-secondary rounded-pill">Order Details</button></td>
                    </tr>
                    <tr className="align-items-center">
                        <td>TLD-41870</td>
                        <td>Tommy John</td>
                        <td>Cash</td>
                        <td>12-03-2023, 11.00 AM</td>
                        <td>Open</td>
                        <td><button type="button" class="btn btn-outline-secondary rounded-pill">Order Details</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        
          <div className="text-center py-2"> &copy; 2023 Company. All rights reserved.</div>
        </div>
      </div>
        
    </>
  );
}

export default OrderHistory;