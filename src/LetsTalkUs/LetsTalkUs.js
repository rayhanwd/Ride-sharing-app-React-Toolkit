import React from 'react';

const LetsTalkUs = () => {
    return (
        <div className="bg-light my-5">
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-6">
                        <h2 className="text-center">Lets Talk Us</h2>
                    </div>
                    <div className="col-md-6">
                    <form class="d-flex">
                        <input class="form-control me-2 input-message" type="search" placeholder="Enter your email address" aria-label="Search" />
                        <button class="message__button" type="submit">Lets Talk</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsTalkUs;