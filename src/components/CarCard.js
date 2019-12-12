import React from "react";

export default props => {
  return (
    <div className="cars">
      {props.cars.map(car => (
        <div className="carCard" key={car.id}>
          {car.media.photo_links.slice(0, 1).map(img => (
            <div key={img.id}>
              <img src={img} alt="carpic" />
            </div>
          ))}

          <h1>{car.availability_status}</h1>
          <h3>MSRP:{car.msrp}</h3>
          <div className="price">
            <h2>You Pay:{car.price}</h2>
            <p>{car.source}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
