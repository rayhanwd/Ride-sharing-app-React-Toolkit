import React from 'react';
import Slide from 'react-reveal/Slide';

const ContactForm = () => {
    return (
        <div className="bg-light py-5">
            <div className="container">
                <div class="row">
                <Slide right>
                    <div class="col-md-12">
                        <div>
                            <h2>Want to  a professional rider?
                                <br />Let’s talk about it.</h2>
                        </div>
                    </div>
                    </Slide>
                    <div class="col-md-6">
                        <input type="text" class="form-control my-5" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control my-5" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div class="col-md-12">
                        <input type="text" class="form-control mb-5" placeholder="Your message" aria-label="Last name" />
                    </div>
                    <div class="col-md-12">
                        <button type="button" class="btn btn-md btn-primary" >MESSAGE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;