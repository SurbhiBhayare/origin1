import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Detailrow from "./Detailrow";
import { At, Telephone } from "react-bootstrap-icons";
import "../../css/style.css";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { MdOutlineUploadFile } from "react-icons/md";
import CompanyInformation from "../../component/CompanyInformation";
import PoDetails from "../../component/PoDetails";
import ContactDetails from "../../component/ContactDetails";
import axios from "axios";

const fileTypes = ["JPG", "PNG", "GIF"];

function ReturnDetails() {
  const data = JSON.parse(localStorage.getItem('proceedData'));
  const orgData = JSON.parse(localStorage.getItem('orgData'));
  const navigate = useNavigate();




  function handleProceed() {

    // const proceed = localStorage.getItem("proceedData")

    navigate("/review");

// console.log(proceed);

}
  // const [data, setData] = useState([]);
  // const getData = () => {
  //   fetch("data.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((myjson) => {
  //       setData(myjson);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

//   const [data, setData] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/continuum/PO/search');
//                 setData(response.data);
                
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);
// console.log(data)


  const [showForm, setShowForm] = useState(false);

  const toggleForm = (id) => {
    setShowForm(!showForm);
  };

  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    if (selected == id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  // const [visibleSectionId, setVisibleSectionId] = useState(null);

  // const toggleSection = (id) => {
  //   if (visibleSectionId === id) {
  //     setVisibleSectionId(null); // Hide the section
  //   } else {
  //     setVisibleSectionId(id); // Show the section
  //   }
  // };

  return (
    <div className="createReturn">
      <div className="m-4">
          <nav className="breadcrumb-arrow" aria-label="breadcrumb">
              <ol className="breadcrumb  bg-white">
                  <li className="breadcrumb-item"><a>Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Enter Return Detail</li>
              </ol>
          </nav>
      </div>
      <div className="box">
        <div className="steps">
            <ul className="nav justify-content-center mt-3">
                <li className="done">
                    <div className="d-flex">
                        <div className="circle-step mt-2">1</div>
                        <div className="d-block mx-3 my-3">
                            <h6 className="fw-bold">Search Order</h6>
                            <p>Enter search information</p>
                        </div>
                    </div>
                </li>
                <div className="line-done"></div>
                <li className="done">
                    <div className="d-flex mr-5">
                        <div className="circle-step mt-2">2</div>
                        <div className="d-block mx-3 my-3">
                            <h6 className="fw-bold">Create a Return Order</h6>
                            <p>Initiate the return</p>
                        </div>
                    </div>
                </li>
                <div className="line-done"></div>
                <li className="active">
                    <div className="d-flex mr-5">
                        <div className="circle-step mt-2">3</div>
                        <div className="d-block mx-3 my-3">
                            <h6 className="fw-bold">Enter Return Details</h6>
                            <p>Complete return details</p>
                        </div>
                    </div>
                </li>
                <div className="line-active"></div>
                <li>
                    <div className="d-flex mr-5">
                        <div className="circle-step mt-2">4</div>
                        <div className="d-block mx-3 my-3">
                            <h6 className="fw-bold">Review Return</h6>
                            <p>Verify return information</p>
                        </div>
                    </div>
                </li>
                <div className="line-inactive"></div>
                <li>
                    <div className="d-flex">
                        <div className="circle-step mt-2">5</div>
                        <div className="d-block mx-3 my-3">
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
            <div className="d-block">
                <div className="fw-bold d-flex align-items-center mb-3">
                    <div className="text-white rounded-circle title-icon gradient-color mr-2">
                    <i className="bi bi-card-list" size={14} />
                    </div>
                    <div className="d-block">
                        <h5 className="fw-bold mb-0">Return Items</h5>
                        <p className="mb-0 fw-normal">You can initiate the return as per your requirement</p>
                    </div>
                </div>
            </div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">QTY</th>
                  <th scope="col">Part #</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((item, id) =>
                  <> 
                  <tr className="align-items-center">
                    <td className="col-md-1">{item.quantity}</td>
                    <td>{item.itemName}</td>
                    <td>{item.description}</td>
                    <td>${item.amount*item.quantity}</td>
                    <td><a onClick={() => toggle(id)} className="border-none text-dark">{selected == id ? <i class="bi bi-caret-down-square"></i> : <i class="bi bi-caret-right-square"></i>}</a></td>
                  </tr>
                  <>
                    <tr>
                      <th colspan="12" className="p-0">

                        <Form className={selected == id ? 'd-block py-2' : 'd-none'} >
                        <div className="d-block">
                            <div className="fw-bold d-flex align-items-center mb-3">
                                <div className="text-white rounded-circle title-icon gradient-color mr-2">
                                    <i className="bi bi-card-list" size={14} />
                                </div>
                                <div className="d-block">
                                    <h5 className="fw-bold mb-0">Problem Description</h5>
                                    <p className="mb-0 fw-normal">Submit your return statement why you initiate for order return.</p>
                                </div>
                            </div>
                        </div>
                          <Form.Group className="row">
                            <div className="col">
                              <Form.Label className="po">Reason Listing<span className="text-danger">*</span></Form.Label>
                              <InputGroup className="mb-3 me-3">

                                <Form.Select defaultValue="Choose..." style={{ width: "20%" }}>
                                  <option>Component Damage</option>

                                </Form.Select>
                              </InputGroup>

                            </div>
                            <div className="col">
                              <Form.Label className="po">Category<span className="text-danger">*</span></Form.Label>
                              <InputGroup className="mb-3 me-3">

                                <Form.Select defaultValue="Choose..." style={{ width: "20%" }}>
                                  <option>Elbow</option>

                                </Form.Select>
                              </InputGroup>
                            </div>
                            <div className="col">
                              <Form.Label>Code<span className="text-danger">*</span></Form.Label>
                              <InputGroup className="mb-3 ">

                                <Form.Select defaultValue="Choose..." style={{ width: "20%" }}>
                                  <option>Broked & Cracked</option>

                                </Form.Select>
                              </InputGroup>
                            </div>
                          </Form.Group>
                          <Form.Group className="row">
                            <div className="col">
                              <Form.Label className="po">Problem Details<span className="text-danger">*</span></Form.Label>
                              <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '150px', border: "1px solid #000", borderRadius: "0px" }}
                              />
                            </div>
                            <div className="col">
                              <Form.Label>Upload Attachment</Form.Label>
                              <div
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}

                              >
                                {image ? (
                                  <img src={image} alt="uploaded image" style={{ height: "100px" }} />
                                ) : (
                                  <div className="d-flex flex-column align-items-center justify-content-center col py-3" style={{ height: '150px', border: "1px solid #242424" }}>
                                    <MdOutlineUploadFile style={{ fontSize: "35px", textAlign: "center", color: "#77bc7f" }} />
                                    <label htmlFor="file-input" style={{ textAlign: "center" }}> <div>Drag and Drop here</div> or <div style={{ color: "#77bc7f" }} >Browse File </div></label>
                                    <input
                                      id="file-input"
                                      type="file"
                                      placeholder="browse"
                                      accept="image/*"
                                      onChange={handleFileChange}
                                      style={{ textAlign: "center", marginLeft: "20%", position: "absolute", top: "100px", visibility: "hidden" }}

                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </Form.Group>

                        </Form>

                      </th>
                    </tr>
                  </>
                </>)}

              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <Link to={"/create?enable=false"}>
              <input
                type="button"
                value="Back"
                className="px-4 py-2 btn btn-outline-secondary"
              />
            </Link>
            <Link to={"/review"}>
              <input
                type="button"
                value="Proceed"
                className="px-4 py-2 btn btn-primary"
              />
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ReturnDetails;
