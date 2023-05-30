import React from 'react'

function Path() {
  return (
    <>
         <div className="steps">
                    <ul className="nav justify-content-center mt-3">
                        <li className="active">
                            <div className="d-flex">
                                <div className="circle-step mt-2">1</div>
                                <div className="d-block mx-3 my-3">
                                    <h6 className="fw-bold">Search Order</h6>
                                    <p>Enter search information</p>
                                </div>
                            </div>
                        </li>
                        <div className="line-active"></div>
                        <li className="inactive">
                            <div className="d-flex mr-5">
                                <div className="circle-step mt-2">2</div>
                                <div className="d-block mx-3 my-3">
                                    <h6 className="fw-bold">Create a Return Order</h6>
                                    <p>Initiate the return</p>
                                </div>
                            </div>
                        </li>
                        <div className="line-inactive"></div>
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
    </>
  )
}

export default Path