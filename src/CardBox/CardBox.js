import React from 'react';
import { useHistory } from 'react-router-dom';


const CardBox = (props) => {
  const { ServicePhoto, ServiceName } = props.Service;
  const history = useHistory()
  const handleBook = (name) => {
    history.push(`/destination/${name}`);
  }

  return (
    <div className="col-md-12 col-lg-3">
      <div className="card border-0 shadow text-center mt-5">
        <img src={ServicePhoto} className="image-fluid p-5" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ServiceName}</h5>
          <button onClick={() => handleBook(ServiceName)} className="btn btn-primary">Get a Quot</button>
        </div>
      </div>
    </div>
  );
}

export default CardBox;