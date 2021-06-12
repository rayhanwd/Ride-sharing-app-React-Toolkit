import React from 'react';
import Fade from 'react-reveal/Fade';

const HeaderContent = () => {
    return (
        <div className="container">
            <div className="row">
                <Fade left>
                    <div className="col-md-6">
                        <div class="message__box">
                            <h3 class="text-center mb-5 text-white">Get a Quot for rider</h3>
                            <form>
                                <input class="form-control my-2" type="search" placeholder="Your name" aria-label="Search" />
                                <input class="form-control my-2" type="search" placeholder="Phone Number" aria-label="Search" />
                                <input class="form-control my-2" type="search" placeholder="Email address" aria-label="Search" />
                                <button class="btn btn-primary my-2" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </Fade>
                <div className="col-md-6">
                    <div class="m-5 p-5">
                        <Fade top>
                            <h1>THE BEST SAFETY MEASURES</h1>
                        </Fade>
                        <Fade bottom>
                        <p>When you’re behind the wheel of a car – whether alone or with passengers – driving safely should always be your top concern. We’re more distracted than ever, so it’s crucial to know the basics of safe driving and practice them every time you’re on the road.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;