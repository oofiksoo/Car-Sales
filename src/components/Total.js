import React from "react";

const Total = props => {
  return (
    <div className="content">
      <h4>
        Total (Base Price + Features): $
        {props.car.price + props.additionalPrice}
      </h4>
    </div>
  );
};

export default Total;
