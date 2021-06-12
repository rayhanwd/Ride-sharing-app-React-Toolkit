import React from 'react';
import single_img from '../../src/images/Frame-2.png';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

const TalkAbout = () => {
    return (
        <div className="container">
            <div className="row">
                <Slide left>
                    <div className="col-md-6">
                        <div className="my-5 py-5">
                            <h1 className="mt-5">Hello,<span className="special-text">world!</span></h1>
                            <p className="my-5">
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                            <p>
                            <button className="btn btn-primary mt-4">Learn more</button>
                            </p>
                        </div>
                    </div>
                </Slide>
                <Zoom>
                    <div className="col-md-6">
                        <div className="image-fluid m-5 py-5">
                            <img src={single_img} alt="" srcset="" />
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default TalkAbout;