import React from "react";

export default props => {
  return (
    <div className="CarCard">
      {props.cars.map(car => (
        <div className="car" key={car.id}>
          <h1>{car.availability_status}</h1>
          <h3>MSRP:{car.msrp}</h3>
          <div className="searchCount">
            <h2>You Pay:{car.price}</h2>
            <p>{car.source}</p>
            {car.media.photo_links.map(img => (
              <img src={img} alt="photo" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
