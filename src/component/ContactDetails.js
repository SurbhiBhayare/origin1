import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ContactDetails({ data }) {


  //Onclicking the Same as PO Details Checkbox
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  //Save "Same as PO" data to local storage
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedMail = localStorage.getItem('mail');
    const storedPhone = localStorage.getItem('phone');

    if (storedName) setName(storedName);
    if (storedMail) setMail(storedMail);
    if (storedPhone) setPhone(storedPhone);
  }, []);

  const SameAsPo = (e) => {
    if (e.target.checked) {
    if (data) {
     
      const newName = data[0].customer.displayName;
      const newMail = data[0].customer.email;
      const newPhone = '(+1)203 455 0118';

      localStorage.setItem('name', newName);
      localStorage.setItem('mail', newMail);
      localStorage.setItem('phone', newPhone);

      setName(newName);
      setMail(newMail);
      setPhone(newPhone);
      
    }
  }else {
    // Clear "Same as PO" data from local storage
    localStorage.removeItem('name');
    localStorage.removeItem('mail');
    localStorage.removeItem('phone');

    setName('');
    setMail('');
    setPhone('');
  }
  }

//Mannual insertion of contact details
  const handleNameInput = (e) => {
    const enterName = e.target.value;
    setName(enterName);
    localStorage.setItem('name', enterName);
  };
  
  const handleMailInput = (e) => {
    const enterMail = e.target.value;
    setMail(enterMail);
    localStorage.setItem('mail', enterMail);
  };

  const handlePhoneInput = (e) => {
    const enterPhone = e.target.value;
    setPhone(enterPhone);
    localStorage.setItem('phone', enterPhone);
  };

  const handleBlur = () => {
    console.log('Entered Name:', name);
    console.log('Entered Email:', mail);
    console.log('Entered Phone Number:', phone);
  };

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }
  
  
  return (
    <>
      <div className="row justify-content-center shadow-sm p-3 mt-2 bg-body rounded border">
        <div className="row px-0">
          <div className="d-block col-md-19">
            <div className="fw-bold d-flex align-items-center mb-3">
              <div className="text-white rounded-circle title-icon gradient-color mr-2">
                <i className="bi bi-card-list" size={14} />
              </div>
              <h5 className="fw-bold mb-0">Contact Details</h5>
              <div className="col-md-9 text-right">
                <input type="checkbox" onChange={SameAsPo} /> Same as PO Details
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="name" className="form-label fw-bold">
            Name<span className="text-danger">*</span>{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter"
            value={name}
            onBlur={handleBlur}
            onChange={handleNameInput}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="mail" className="form-label fw-bold">
            Email Address <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter"
            value={mail}
            onBlur={handleBlur}
            onChange={handleMailInput}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="phone" className="form-label fw-bold">
            Phone Number<span className="text-danger">*</span>
          </label>
          <input
            type="phone"
            className="form-control"
            placeholder="Enter"
            value={phone}
            onBlur={handleBlur}
            onChange={handlePhoneInput}
            required
          />
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
