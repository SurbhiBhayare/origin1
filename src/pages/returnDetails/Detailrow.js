import { useState } from "react";
import { Button, Form, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { BsChevronRight, BsChevronDown } from "react-icons/bs"
import {MdOutlineUploadFile} from "react-icons/md"
const fileTypes = ["JPG", "PNG", "GIF"];

function Detailrow(props) {
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
   
  
    return (
      <div className="proplem-popup">
        <tr>
          <td>{props.qty}</td>
          <td>{props.part}</td>
          <td>{props.description}</td>
          <td>{props.amount}</td>
          <td>
            <Button onClick={toggleForm}><BsChevronRight /></Button>
          </td>
        </tr>
        {showForm && (
          <table style={{ backgroundColor: "white" }}>
            <td colSpan="3">
              <Form style={{ width: "100%" }}>
                <h1>Problem Description</h1>
                <p>Submit your return statement why you initiate for order return.</p>
                <Form.Group className="d-flex">
                  <div className="d-flex flex-column">
                    <Form.Label>Reason Listing*:</Form.Label>
                    <InputGroup className="mb-3 me-3" style={{ width: "300px" }}>
  
                      <Form.Select defaultValue="Choose..." style={{ width: "20%" }}>
                        <option>Component Demage</option>
  
                      </Form.Select>
                    </InputGroup>
  
                  </div>
                  <div className="d-flex flex-column">
                    <Form.Label>Category*</Form.Label>
                    <InputGroup className="mb-3 me-3" style={{ width: "300px" }}>
  
                      <Form.Select defaultValue="Choose..." style={{ width: "20%" }}>
                        <option>Elbow</option>
  
                      </Form.Select>
                    </InputGroup>
                  </div>
                  <div className="d-flex flex-column">
                    <Form.Label>Code*</Form.Label>
                    <InputGroup className="mb-3 " style={{ width: "300px" }}>
  
                      <Form.Select defaultValue="Choose..." style={{ width: "20%" }}>
                        <option>Broked & Cracked</option>
  
                      </Form.Select>
                    </InputGroup>
                  </div>
                </Form.Group>
                <Form.Group className="d-flex">
                  <div className="d-flex flex-column">
                    <Form.Label>Problem Details*</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '150px', width: "400px",border:"1px solid #000", borderRadius:"0px" }}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <Form.Label>Upload Attachment</Form.Label>
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                    
                    >
                      {image ? (
                        <img src={image} alt="uploaded image" style={{height:"100px"}} />
                      ) : (
                        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '150px', width: "400px", border:"1px solid #000", marginLeft:"5px", padding:"5px", textAlign:"center", position:"absolute" }}>
                            <MdOutlineUploadFile  style={{fontSize:"35px", textAlign:"center", color:"#77bc7f"}}/>
                          <label htmlFor="file-input" style={{textAlign:"center"}}> <div>Drag and drop</div> or <div style={{color:"#77bc7f"}} >Browse file here</div></label>
                          <input
                            id="file-input"
                            type="file"
                             placeholder="browse"    
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{textAlign:"center",marginLeft:"20%", position:"absolute", top:"100px", visibility:"hidden" }}
                            
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </Form.Group>
  
              </Form>
            </td>
          </table>
        )}
      </div>
    );
  }
  export default Detailrow;





  