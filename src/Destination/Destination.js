import React, { useState } from 'react';
import {Button, Container, Row, Col } from 'react-bootstrap';
import Map from '../Map/Map';
import { useParams } from 'react-router';
import { FakeData } from './../FakeData/filterData';

import ShowResult from './../ShowDestination/ShowResult';

const Destination = () => {
    document.title = 'Blog';
    const { ServiceName } = useParams();

    const [Data, setData] = useState([]);
    console.log(Data);
    const handleSearchResult = () => {
       
        const result = FakeData.filter(obj => obj.ServiceName === ServiceName);
        setData(result);
        
    }

    return (

        <Container>
            <Row sm={1} md={2} lg={3} margin={5}>
                <Col>
                    <div className="searchArea">
                        <form>
                            <input id="search-txt1" type="text" placeholder="" required />
                            <input id="search-txt2" type="text" placeholder="" required />
                            
                        </form>
                        <Button onClick={() => handleSearchResult()}>Button</Button>

                    </div>
                    <div className="Search-result">
                        {
                            Data.map(data => <ShowResult key={data.ServiceId} detail={data}></ShowResult>)
                        }
                    </div>
                </Col>

                <Col>
                    <Map></Map>
                </Col>
            </Row>
        </Container>


    );
};

export default Destination;