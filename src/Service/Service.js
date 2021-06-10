import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceData from '../FakeData/FakeData';
import CardBox from './../CardBox/CardBox';
const Service = () => {

    const [Services, setService] = useState([]);

    useEffect(() => {
        setService(ServiceData);

    }, []);



    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center"><span className="heading-text">Find <span className="special-text">Your</span> Service</span></h2>
                </div>
                {
                    Services.map(Service => <CardBox key={Service} Service={Service}></CardBox>)
                }
            </div>
        </div>

    );
};

export default Service;