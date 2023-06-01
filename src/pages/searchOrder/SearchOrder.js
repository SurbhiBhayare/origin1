import { useState, useEffect } from "react";
import { Button, Form, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { BsChevronRight, BsChevronDown } from "react-icons/bs"
import { Link } from "react-router-dom";
import Path from "../../component/Path";
import axios from "axios";

function SearchOrder() {

    const [zipCode, setZipCode] = useState("");
    const [poNumber, setPoNumber] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [invoiceNo, setInvoiceNo]= useState("");
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        if (searchResult !== null) {
          // Do something with the search result data
          console.log(searchResult);
        }
      }, [searchResult]);
    
    const handleRetrieve = () => {
        localStorage.clear();
      };
      

      const isFormValid = () => {
        const isZipCodeFilled = zipCode.trim() !== "";
        const isCustomerIdFilled = customerId.trim() !== "";
        const isPoNumberFilled = poNumber.trim() !== "";
        const isInvoiceNoFilled = invoiceNo.trim() !== "";
    
        return (
          (isZipCodeFilled || isCustomerIdFilled) &&
          (isPoNumberFilled || isInvoiceNoFilled)
        );
      };
    
    return (
        <div className="searchOrder">
            <div className="m-4">
                <nav className="breadcrumb-arrow" aria-label="breadcrumb">
                    <ol className="breadcrumb  bg-white">
                        <li className="breadcrumb-item"><a>Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Search Order</li>
                    </ol>
                </nav>
            </div>
            <div className="box">
                <Path />

                <div className="container py-5 col-md-6 border-0">
                    <div className="row justify-content-center shadow-sm p-3 mb-4  bg-body rounded border col">
                        <div className="col-md-5">
                            <label for="exampleInputEmail1" className="form-label fw-bold fs-6 ">Order Zip Code<span className="text-danger">*</span></label>
                            {/*<input type="email" className="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />*/}
                            <input  type="text" className="form-control border border-dark" name="zipCode" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} aria-describedby="emailHelp"/>
                        </div>
                        <div className="col-md-1 text-center pt-4">
                            <h6>OR</h6>
                        </div>
                        <div className="col-md-5">
                            <label for="exampleInputPassword1" className="form-label fw-bold fs-6">Customer ID<span className="text-danger">*</span></label>
                            <input type="text" className="form-control border border-dark" id="customerId" name="customerId" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-9 text-center mb-2"><h5>AND</h5></div>
                    </div>
                    <div className="row justify-content-center shadow-sm p-3 mb-4 bg-body rounded border col">
                        <div className="col-md-5">
                            <label for="exampleInputEmail1" className="form-label  fw-bold fs-6">PO Number<span className="text-danger">*</span></label>
                            <input type="text" className="form-control border border-dark" name="poNumber" id="poNumber" aria-describedby="emailHelp"  value={poNumber} onChange={(e) => setPoNumber(e.target.value)} />
                        </div>
                        <div className="col-md-1 text-center pt-4">
                            <h6>OR</h6>
                        </div>
                        <div className="col-md-5">
                            <label for="exampleInputPassword1" className="form-label fw-bold fs-6">Invoice Number<span className="text-danger">*</span></label>
                            <input type="text" className="form-control border border-dark" id="invoiceNo" name="invoiceNo" value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                {/* <Link to={`/create?zipcode=${zipCode}&poNo=${poNumber}`}>
                    <input type="button" value="Retrieve" className="px-4 py-2 mx-2 btn btn-primary" onClick={handleRetrieve}  disabled={!isFormValid()} />
                </Link> */}
                 
            {isFormValid() ? (
            <Link to={`/create?zipcode=${zipCode}&poNo=${poNumber}`} style={{ textDecoration: "none" }}>
                     <Button variant="primary" className="px-4 py-2 mx-2">
                         Retrieve
                     </Button>
            </Link>
             ) : (
            <Button variant="primary" className="px-4 py-2 mx-2" disabled>
              Retrieve
            </Button>
             )}
        
            </div>
        </div>

    );
}

export default SearchOrder;