import React from 'react';
import Great_Img from '../images/Rider_solution.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const GreatSolution = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <Fade left><h2>Build your own carrier with us</h2></Fade>
                    <Fade bottom><div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus dolores amet quod, rerum id consectetur. Ut sapiente libero assumenda atque repudiandae.</p>
                    <button type="button" class="btn btn-md btn-primary" >Get more</button>
                    </div>
                    </Fade>
                </div>
                <Zoom>
                    <div className="col-md-6">
                        <img src={Great_Img} class="img-fluid" alt="..." />
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default GreatSolution;