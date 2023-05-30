import { useEffect, useState } from 'react'
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import PoDetails from '../../component/PoDetails';
import CompanyInformation from '../../component/CompanyInformation';
import ContactDetails from '../../component/ContactDetails';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function CreateReturn() {

    const [returnData, setReturnData] = useState([])
    const [updatedData, setUpdatedData] = useState([])
    const [search, setSearch] = useState('')

    const [buttonEnabled, setButtonEnabled] = useState(); // Disable the button on page load

   

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const zipCode = queryParams.get('zipcode');
    const poNumber = queryParams.get('poNo');
    const invoiceNo = queryParams.get('invoiceNo');
    const customerId = queryParams.get('customerId');
    
    //debugger
    useEffect(() => {
        if (queryParams.get('enable')) {
          // Enable the proceed button when coming back from review page
          setButtonEnabled(true);
        }else{
          setButtonEnabled(false);
        }
      }, []);

    const navigate = useNavigate();

    function handleProceed() {

        const proceed = localStorage.getItem("proceedData")

        localStorage.setItem("proceedData", JSON.stringify(returnData))
        localStorage.setItem("updatedData", JSON.stringify(updatedData))
        localStorage.setItem("orgData", JSON.stringify(data))

        navigate("/return");

        console.log(proceed);

    }

    let [data, setData] = useState([]);
    // const orgData = JSON.parse(localStorage.getItem('orgData'));
    // if (!orgData || orgData.length === 0) {
    //     data = orgData;
    // }
//debugger
    useEffect(() => {
        const retData = JSON.parse(localStorage.getItem('proceedData'));
        const updData = JSON.parse(localStorage.getItem('updatedData'));
        setReturnData(retData);
        //debugger
        // Check if data is null (indicating first visit to the page)
        if (updData === null) {
            fetchData(zipCode, poNumber);
            } else {
                // Data already exists, no need to fetch from the API
                setData(updData);
            }
        }, []);
        //debugger
        const fetchData = async (zipcode, poNo) => {
            try {
              const response = await axios.get('http://localhost:8080/continuum/PO/search', {
                params: {
                  zipcode,
                  poNo,
                },
              });
              console.log(response.data);
              setData(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          
    
    console.log('Data after API call',data)



    function deleteItems() {
        // Clear localStorage items 
        localStorage.clear();
      }
   

      function handleButtonClick(rowData) {
        const orderItems = data[0]?.orderItems || [];
        const selectedRow = orderItems.find((orderItem) => orderItem.id === rowData.id);
      
        // Enable the proceed button after the click event
        setButtonEnabled(true);

        if (selectedRow && selectedRow.quantity > 0) {
          selectedRow.quantity -= 1;
            
          // Update the orderItems in the data object
          const updatedData = data.map((order) => {
            if (order.id === rowData.orderId) {
              return {
                ...order,
                orderItems: order.orderItems.map((item) => {
                  if (item.id === rowData.id) {
                    return { ...item, quantity: item.quantity - 1 };
                  }
                  return item;
                }),
              };
            }
            return order;
          });
      
          setData(updatedData);
          setUpdatedData(updatedData);

          if (returnData) {
            const existingRow = returnData.find((orderItem) => orderItem.id === rowData.id);
            if (existingRow) {
              existingRow.quantity += 1;
            } else {
              setReturnData((prevReturnData) => [{ ...selectedRow, quantity: 1 }, ...prevReturnData]);
            }
          } else {
            setReturnData([{ ...selectedRow, quantity: 1 }]);
          }
      
          if (selectedRow.quantity === 0) {
            const filteredData = updatedData.map((order) => {
              if (order.id === rowData.orderId) {
                return {
                  ...order,
                  orderItems: order.orderItems.filter((item) => item.id !== rowData.id),
                };
              }
              return order;
            });
            setData(filteredData);
            setUpdatedData(updatedData);
          }
        }
      }
        
     
    function handleDecrease(rowData) {
        console.log("in dec")
        //var existingRow = data[0].orderItems.find((item) => item.id == rowData.id);
        var existingRow = data[0]?.orderItems?.find((item) => item.id === rowData.id);

        const newReturnData = [...returnData];
        const selectedRow = newReturnData?.find((item) => item.id == rowData.id);
        console.log("selectedRow", selectedRow);
        console.log("existingRow", existingRow);
        if (existingRow == undefined) {
            data.push({ ...selectedRow, quantity: 0 });
            console.log("undef")
        }
        //existingRow = data[0].orderItems.find((item) => item.id == rowData.id);
        existingRow = data[0]?.orderItems?.find((item) => item.id === rowData.id);

        console.log("new existingRow", existingRow);

        if (existingRow?.quantity >= 0) {
            const newReturnData = [...returnData];
            const selectedRow = newReturnData?.find((item) => item.id == rowData.id);
            if (selectedRow.quantity > 0) {
                existingRow.quantity += 1;
                setData([...data]);
                setUpdatedData(...data);


                console.log("after set data");
                if (selectedRow) {
                    selectedRow.quantity -= 1;
                } else {
                    newReturnData.push({ ...existingRow, quantity: 1 });
                }

                setReturnData(newReturnData);
                console.log("A", selectedRow.quantity)
                if (selectedRow.quantity == 0) {
                    setReturnData((newReturnData) => newReturnData.filter((row) => row.id !== rowData.id));
                    if(data.length == 1){
                        // Disable the button after no data in return basket
                        //setButtonEnabled(false);
                    }
                }
            }
        
            console.log("AB", selectedRow.quantity)
            if (selectedRow.quantity == 0) {

                setReturnData((newReturnData) => newReturnData.filter((row) => row.id !== rowData.id));
                if(data.length == 1){
                    // Disable the button after no data in return basket
                    //setButtonEnabled(false);
                }
            }
        }
    }


    function handleIncrease(rowData) {

        //const selectedRow = data[0].orderItems.find((item) => item.id == rowData.id);
        const selectedRow = data[0]?.orderItems?.find((item) => item.id === rowData.id);


        if (selectedRow?.quantity > 0) {
            selectedRow.quantity -= 1;
            setData([...data]);
            setUpdatedData(...data);
            const newReturnData = [...returnData];
            const existingRow = newReturnData.find((item) => item.id == rowData.id);
            if (existingRow) {
                existingRow.quantity += 1;
            } else {
                newReturnData.push({ ...selectedRow, quantity: 1 });
            }
            setReturnData(newReturnData);
            if (selectedRow.quantity == 0) {
                setData((data) => data.filter((row) => row.id !== rowData.id));
                //setUpdatedData((data) => data.filter((row) => row.id !== rowData.id));
            }
        }
    }



    return (
        <div className="returnDetails">
            <div className="m-4">
                <nav className="breadcrumb-arrow" aria-label="breadcrumb">
                    <ol className="breadcrumb  bg-white">
                        <li className="breadcrumb-item"><a>Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Create Return</li>
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
                        <li className="active">
                            <div className="d-flex mr-5">
                                <div className="circle-step mt-2">2</div>
                                <div className="d-block mx-3 my-3">
                                    <h6 className="fw-bold">Create a Return Order</h6>
                                    <p>Initiate the return</p>
                                </div>
                            </div>
                        </li>
                        <div className="line-active"></div>
                        <li>
                            <div className="d-flex mr-5">
                                <div className="circle-step mt-2">3</div>
                                <div className="d-block mx-3 my-3">
                                    <h6 className="fw-bold">Enter Return Details</h6>
                                    <p>Complete return details</p>
                                </div>
                            </div>
                        </li>
                        <div className="line-inactive"></div>
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
                            <CompanyInformation data={data}/>
                            {/* Po Details */}
                            <PoDetails data={data}/>
                            {/* Contact Details */}
                            <ContactDetails data={data}/>
                       
                   
                    <div className="row justify-content-center shadow-sm p-3 mt-2 bg-body rounded border">
                        <div className="row px-0">
                            <div className="d-block col-md-8">
                                <div className="fw-bold d-flex align-items-center mb-3">
                                    <div className="text-white rounded-circle title-icon gradient-color mr-2">
                                        <i className="bi bi-card-list" size={14} />
                                    </div>
                                    <div className="d-block">
                                        <h5 className="fw-bold mb-0">Line Level Details</h5>
                                        <p className="mb-0 fw-normal">Balance equals complete quantity's total value</p>
                                    </div>
                                </div>
                            </div>
                            <label className="col-md-4" htmlFor="search">
                                <input id="search" type="phone" className="form-control" placeholder='Search SKU/ Description....' onChange={(e) => setSearch(e.target.value)} />
                            </label>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th className="col-md-1 tablehead"><button type="button" className="btn btn-success btn-sm" style={{ width: '100px' }}>Select All</button></th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Part #</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Array.isArray(data) && data.filter((item) => {
                                        return (search && search.toLowerCase() === '' ? item : item.orderItems[0].itemName.toLowerCase().includes(search))
                                            || search.toLowerCase() === '' ? item : item.description.toLowerCase().includes(search)
                                    })
                                        .map((item) => {


                                            return (
                                                //item.orderItems.map((orderItem)=>{
                                                item.orderItems.filter(item => item.quantity > 0).map((orderItem) => {
                                                    return (
                                                        <tr key={orderItem.id}>
                                                            <td className="col-md-1">
                                                                <button onClick={() => handleButtonClick(orderItem)} style={{ border: "none", background: "none" }} ><PlusCircle color="#58AD63" className="mx-2" /></button>
                                                            </td>

                                                            <td>{orderItem.quantity}</td>
                                                            <td>{orderItem.itemName}</td>
                                                            <td>{orderItem.description}</td>
                                                            <td>${(orderItem.amount * orderItem.quantity).toFixed(2)}</td>
                                                        </tr>
                                                    );
                                                })
                                            )
                                        })
                                }

                            </tbody>
                            <tbody >

                                <td colspan="12" >
                                    {/* <div className="row justify-content-center shadow-sm p-3 mt-2 bg-body rounded border">*/}
                                    <div className="row justify-content-center shadow-sm p-3 mt-2 bg-body rounded border">
                                        <div className="row px-0">
                                            <div className="d-block col-md-8">
                                                <div className="fw-bold d-flex align-items-center mb-3">
                                                    <div className="text-white rounded-circle title-icon gradient-color mr-2">
                                                        <i className="bi bi-card-list" size={14} />
                                                    </div>
                                                    <div className="d-block">
                                                        <h5 className="fw-bold mb-0">Return Basket </h5>
                                                        <p className="mb-0 fw-normal">Select the quantity you would like to return each item</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col-md-4">
                                <input type="phone" className="form-control" placeholder='Search SKU/ Description....' />
                            </div>*/}
                                        </div>
                                        {
                                            returnData && (
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            {/*<th className="w-10"><button type="button" className="btn btn-success btn-sm">Select All</button></th>*/}
                                                            <th></th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Part #</th>
                                                            <th scope="col">Description</th>
                                                            <th scope="col">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            returnData
                                                                .map((orderItem) => {
                                                                    return (
                                                                        <tr key={orderItem}>
                                                                            <td >
                                                                                <span><button style={{ border: "none", background: "none", fontSize: "18px" }} onClick={() => handleIncrease(orderItem)}><AiOutlinePlusCircle color="#58AD63" /></button></span>
                                                                                <span> <button style={{ border: "none", background: "none", fontSize: "18px" }} onClick={() => handleDecrease(orderItem)}><AiOutlineMinusCircle color="red" /></button></span>

                                                                            </td>
                                                                            {/*<td  className="input col-md-1 ">{item.quantity}</td>*/}
                                                                            <td className="col-md-1"> <div class="form-group my-0" htmlFor="exampleInput">
                                                                                <input type="number" class="form-control  text-center" id="exampleInput" value={orderItem.quantity} />
                                                                            </div>
                                                                            </td>
                                                                            <td>{orderItem.itemName}</td>
                                                                            <td>{orderItem.description}</td>
                                                                            <td>${(orderItem.amount * orderItem.quantity).toFixed(2)}</td>
                                                                        </tr>

                                                                    )
                                                                })
                                                        }
                                                    </tbody>
                                                </table>

                                            )
                                        }


                                    </div>
                                </td>
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                        <Link to={'/'}><input type="button" value="Back" className="px-4 py-2 btn btn-outline-secondary" onClick={deleteItems}/></Link>
                        <input type="button" value="Proceed" className="px-4 py-2 mx-2 btn btn-primary" onClick={handleProceed} disabled={!buttonEnabled} />
                    </div>
                </div>

            </div>
        </div>

    );
}

export default CreateReturn;