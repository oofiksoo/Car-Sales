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
            {car.media.photo_links.slice(0, 1).map(img => (
              <img src={img} alt="carpic" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
