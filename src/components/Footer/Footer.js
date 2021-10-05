import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white pt-5">
            <div className="container">
                <div className="">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <h3>STAMFORD UNIVERSITY</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <div>
                                <h6>Home</h6>
                                <h6>About Us</h6>
                                <h6>Contact Us</h6>
                                <h6>Courses</h6>
                                <h6>Polices</h6>
                                </div>
                            </div>
                        </div>
                
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <div>
                                    <p>Emergency information</p>
                                    <p>Terms & Condition</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="text-center">
                            <p className="pb-3 mt-3 mb-0">
                            Copyright &copy;2021 University of STAMFORD All Reserved!
                            </p>
                        </div>      
                </div>
            </div>
        </div>
    );
};

export default Footer;