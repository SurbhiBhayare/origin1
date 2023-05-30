import React from 'react';
import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
import { At, Telephone } from 'react-bootstrap-icons';
import { Modal,  Button } from "react-bootstrap";
import CompanyInformation from "../../component/CompanyInformation";
import PoDetails from "../../component/PoDetails";
import ContactDetails from "../../component/ContactDetails";
import { useState, useEffect } from 'react';
import axios from "axios";

{/*const fileTypes = ["JPG", "PNG", "GIF"];*/}




function ReviewReturn() {

    const data = JSON.parse(localStorage.getItem('proceedData'));
    const orgData = JSON.parse(localStorage.getItem('orgData'));
//   const [data, setData] = useState([]);
//   const getData = () => {
//     fetch("data.json", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((myjson) => {
//         setData(myjson);
//       });
//   };
//     console.log();
//     useEffect(() => {
//         getData();
//       }, []); 

      const [detail, setDetail] = useState([]);
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await axios.get('http://localhost:8080/continuum/PO/search?zipcode=12345&poNo=PO1112');
                  setDetail(response.detail);
                  
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          };
          fetchData();
      }, []);
 // console.log(detail[0].shipTo.street1)
  console.log("hy",);



    /*Modal*/
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    
const [selected, setSelected] = useState(null);
const toggle = (id) => {
    if (selected == id) {
      return setSelected(null);
    }
    setSelected(id);
  };


  /*Total Quantity */
  const getTotalQuantity = () => {
    let total = 0;
    data.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  /*Total Amount */
  const getTotalAmount = () => {
    let total = 0;
    data.forEach((item) => {
     total +=  (item.amount*item.quantity);
    });
    return total.toFixed(2);
  };

  

  
    return (
        <div className="reviewReturn">
            <div className="m-4">
                <nav className="breadcrumb-arrow" aria-label="breadcrumb">
                    <ol className="breadcrumb  bg-white">
                        <li className="breadcrumb-item"><a>Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Review Return</li>
                    </ol>
                </nav>
            </div>
            <div className="box">
                <div className="steps">
                    <ul className="nav justify-content-center mt-3">
                        <li className="done">
                            <div className="d-flex">
                                <div className="circle-step mt-2">1</div>
                                <div className=" mx-3 my-3">
                                    <h6 className="fw-bold">Search Order</h6>
                                    <p>Enter search information</p>
                                </div>
                            </div>
                        </li>
                        <div className="line-done"></div>
                        <li className="done">
                            <div className="d-flex mr-5">
                                <div className="circle-step mt-2">2</div>
                                <div className=" mx-3 my-3">
                                    <h6 className="fw-bold">Create a Return Order</h6>
                                    <p>Initiate the return</p>
                                </div>
                            </div>
                        </li>
                        <div className="line-done"></div>
                        <li className="done">
                            <div className="d-flex mr-5">
                                <div className="circle-step mt-2">3</div>
                                <div className=" mx-3 my-3">
                                    <h6 className="fw-bold">Enter Return Details</h6>
                                    <p>Complete return details</p>
                                </div>
                            </div>
                        </li>
                        <div className="line-done"></div>
                        <li className="active">
                            <div className="d-flex mr-5">
                                <div className="circle-step mt-2">4</div>
                                <div className=" mx-3 my-3">
                                    <h6 className="fw-bold">Review Return</h6>
                                    <p>Verify return information</p>
                                </div>
                            </div>
                        </li>
                        <div className="line-active"></div>
                        <li>
                            <div className="d-flex">
                                <div className="circle-step mt-2">5</div>
                                <div className=" mx-3 my-3">
                                    <h6 className="fw-bold">Acknowledgement</h6>
                                    <p>Return confirmation</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
               
                <div className="container py-5">
                    {/* Company Information */}
                    <CompanyInformation data={orgData}/>
                    {/* Po Details */}
                    <PoDetails data={orgData}/>
                    {/* Contact Details */}
                    <ContactDetails data={orgData}/>

                    <div className="row justify-content-center shadow-sm p-3 mt-2 bg-body rounded border">
                        <div className="row px-0">
                            <div className=" col-md-8">
                                <div className="fw-bold d-flex align-items-center mb-3">
                                    <div className="text-white rounded-circle title-icon gradient-color mr-2">
                                    <i class="bi bi-cart-dash" size={14}/>
                                    </div>
                                    <div className="">
                                        <h5 className="fw-bold mb-0">Return Items</h5>
                                        <p className="mb-0 fw-normal">You can initiate the return as per your requirement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped">

                            <thead>

                                <tr>

                                    <th scope="col">QTY</th>

                                    <th scope="col">Part #</th>

                                    <th scope="col">Description</th>

                                    <th scope="col">Restocking fee</th>

                                    <th scope="col">Refund Amount</th>

                                    <th></th>

                                </tr>

                            </thead>

                            <tbody>
                            {data.map((item, id) =>
                            <> 
                                 <tr className="align-items-center">

                                    <td className="col-md-1">{item.quantity}</td>

                                    <td>{item.itemName}</td>

                                    <td>{item.description}</td>

                                    <td className="text-danger">-$21</td>

                                    <td>${(item.amount*item.quantity).toLocaleString("en-US")}</td>

                                    <td><a onClick={() => toggle(id)} className="border-none text-dark">{selected == id ? <i class="bi bi-caret-down-square"></i> : <i class="bi bi-caret-right-square"></i>}</a></td>

                                </tr>

                                 

                                <tr>
                                    <td colspan="12" className="p-0" >
                                     <div className={selected == id ? 'd-block py-2 mx-1' : 'd-none'}> 
                                    <div className="row justify-content-center shadow-sm p-3 mt-2 bg-body rounded border  ">
                            <div className="fw-bold d-flex align-items-center mb-3  ">
                                <div className="text-white rounded-circle title-icon gradient-color mr-2">
                                    <i className="bi bi-card-list" size={14} />
                                </div>
                                <h5 className="fw-bold mb-0  ">Shipping Information</h5>
                            </div>
                            <div className="row px-0 py-3">
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Ship to Address</h6>
                                    
                                    <p className="mb-0">5678 Oak Street Hollywood, CA 90028</p>
                                </div>
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Bill-to Account</h6>
                                    <p className="mb-0">5678 Oak Street Hollywood, CA 90028</p>
                                </div>
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Billing Address</h6>
                                    <p className="mb-0">5678 Oak Street Hollywood, CA 90028</p>
                                </div>
                            </div>
                            <div className="row px-0 pb-3">
                                <div className="col-md-4">
                                    <h6 className="fw-bold">First Name</h6>
                                    <p className="mb-0">Emily</p>
                                </div>
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Last Name</h6>
                                    <p className="mb-0">Brown</p>
                                </div>
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Email Address</h6>
                                    <p className="mb-0">emilybrown9012@email.com</p>
                                </div>
                            </div>
                            <div className="row px-0">
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Phone Number</h6>
                                    <p className="mb-0">(323) 555-9012</p>
                                </div>
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Fax</h6>
                                    <p className="mb-0">(323) 555-3456</p>
                                </div>

                            </div>
                        </div>

                        <div className="row justify-content-center shadow-sm p-3 mt-2 bg-body rounded border">
                            <div className="row px-0">
                                <div className="">
                                <div className="fw-bold d-flex align-items-center mb-3">
                                    <div className="text-white rounded-circle title-icon gradient-color mr-2">
                                        <i className="bi bi-card-list" size={14} />
                                    </div>
                                    <div className="">
                                        <h5 className="fw-bold mb-0">Problem Description</h5>
                                        <p className="mb-0 fw-normal">Submit your return statement why you initiate for order return.</p>
                                    </div>
                                </div>
                        </div>
                            </div>
                            <div className="row px-0 py-3">
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Reason Listing</h6>
                                    <p className="mb-0">Component Damage</p>
                                </div>
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Category</h6>
                                    <p className="mb-0">Elbow</p>
                                </div>
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Code</h6>
                                    <p className="mb-0">Broken & Cracked</p>
                                </div>
                            </div>
                            <div className="row px-0 pb-3">
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Problem Details</h6>
                                    <p className="mb-0">Left area is cracked</p>
                                </div>
                                <div className="col-md-4">
                                    <h6 className="fw-bold">Upload Attachment</h6>
                                    <p className="mb-0 text-primary">left-elbow-broken.png</p>
                                </div>
                            </div>
                        </div>
                        </div>  
                                    </td>

                                </tr>
                                </>)}
                            </tbody>

                        </table>
                        

                        <div className="d-flex  justify-content-between shadow-sm pt-3 pb-2 mt-2 bg-body rounded border">
                            <h6 className="fw-bold">Total Quantity: <span className="fw-normal">{getTotalQuantity()}</span></h6>
                            <h6 className="fw-bold">Total Amount: <span className="fw-normal">${getTotalAmount()}</span></h6>
                        </div>
                        <div className="shadow-sm pt-3 pb-2 mt-2 bg-body rounded border">
                            <input type="checkbox" onClick={handleShow} /> I agree to the Terms & Conditions.
                            {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                                centered
                                size="lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title><h3>Terms and Conditions</h3></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>The Continuum will only accept returned goods if such return complies with the provisions below.</p>
                                    <h5 className="fw-normal text-success">Please note the following exceptions to our return and refund policy:</h5>
                                    <ul>
                                        <li>Refrigerated or sterile products may not be returned, even if they are unmarked or unused.</li>
                                        <li>Made-to-order or specially ordered items (items not routinely stocked by The Continuum, Inc. or currently not sold by The Continuum, Inc.) may not be returned.</li>
                                        <li>Obsolete, discontinued, expired, short-dated, used, or items in units of measure less than the original unit of sale from The Continuum, Inc. may not be returned for credit.</li>
                                        <li>Hazardous items and chemicals may not be returned.</li>
                                    </ul>
                                    <h5 className="fw-normal text-success">Important Items to Remember for Returns:</h5>
                                    <ul>
                                        <li>To ensure credit, returns must be pre-approved by an authorised The Continuum, Inc. representative, and assigned a Return Merchandise Authorisation number which must accompany the return.</li>
                                        <li>Risk of loss on items to be returned does not pass to The Continuum, Inc. until received by The Continuum. or an authorised vendor of The Continuum.</li>
                                        <li>If The Continuum. determines that the return is a result of customer error, such items must be returned at the expense of the customer. Except for items which are returned as a result of a warranty repair failure, all items must be returned in their original box unmarked, unused, unopened, and in a resalable condition.</li>
                                        <li>Returns may be subject to a restocking fee of up to 35%.</li>
                                    </ul>
                                    <h5 className="fw-normal text-success">Did you receive a damaged item?</h5>
                                </Modal.Body>
                                <Modal.Footer className="d-flex justify-content-between">
                                    <Button variant="secondary" onClick={handleClose}>
                                        Decline
                                    </Button>
                                    <Button variant="primary">Accept</Button>
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <Link to={'/return'}><input type="button" value="Back" className="px-4 py-2 btn btn-outline-secondary" /></Link>
                        <Link to={'/acknow'}><input type="button" value="Submit Return" className="px-4 py-2  btn btn-primary" /></Link>
                    </div>
                </div>
                
            </div>
        </div>

    );
}

export default ReviewReturn