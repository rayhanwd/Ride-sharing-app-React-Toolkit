import React from 'react';
import { Container, Row} from 'react-bootstrap';
const ShowResult = (props) => {
    document.title = 'ShowResult';
    
    const { ServicePhoto, ServiceName, Price } = props.detail;
    return (
        <Container>
            <Row className="ShowResult" sm={1} md={2} lg={4} margin={5}>
                <div className="show-result">
                    <img className="show-img" src={ServicePhoto} alt="" srcset="" />
                    <h5>{ServiceName}</h5>
                    <h6>${Price}</h6>
                </div>
            </Row>

        </Container>
    );
};

export default ShowResult;