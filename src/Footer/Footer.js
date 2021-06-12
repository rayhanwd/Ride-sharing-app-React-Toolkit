import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row mt-5">
                    <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                        <h5 className="pt2">Find us</h5>
                        <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p> 9878/25 sec 9 rohini 35 </p>
                        <p>  +91-9999878398  </p>
                        <p> info@example.com  </p>
                    </div>
                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="ml-4">Quick links</h5>
                        <ul className="">
                            <li><a href="#">Find Rider</a></li>
                            <li><a href="#">Add book now</a></li>
                            <li><a href="#">Quick booking</a></li>
                            <li><a href="#">Special Offer</a></li>
                            <li><a href="#">Personal rider</a></li>
                            <li><a href="#">Build your own carrier</a></li>
                        </ul>
                    </div>
                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="ml-4">Quick links</h5>
                        <ul className="">
                            <li><a href="#">Find Rider</a></li>
                            <li><a href="#">Add book now</a></li>
                            <li><a href="#">Quick booking</a></li>
                            <li><a href="#">Special Offer</a></li>
                            <li><a href="#">Personal rider</a></li>
                            <li><a href="#">Build your own carrier</a></li>
                        </ul>
                    </div>
                    <div className=" col-sm-4 col-md  col-12 col">
                        <h5 className="ml-4">Follow us</h5>
                        <ul className="">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Youtube</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <ul className="d-flex">
                    <li className="mr-3"><a href="#">Home</a></li>
                    <li className="mx-3"><a href="#">Destination</a></li>
                    <li className="mx-3"><a href="#">Services</a></li>
                    <li className="mx-3"><a href="#">Pricing</a></li>
                    <li className="mx-3"><a href="#">Blog</a></li>
                    <li className="mx-3"><a href="#">Contact</a></li>
                </ul>
                <p className="text-center">Copyright @2021 | Designed With by <a href="#">Kazi Rayhan</a></p>
            </div>
        </footer>
    );
};

export default Footer;