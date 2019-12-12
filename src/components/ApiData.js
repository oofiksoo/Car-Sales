import React from "react";

export default function ApiData() {
  fetch(
    "http://api.marketcheck.com/v1/search?api_key={{QvZEqHZSO7OuNEiTA2PEaB9SCic6MrVo}}&year=2019&make=ford&latitude=34.05&longitude=-118.24&radius=100&car_type=used&start=0&rows=2&seller_type=dealer",
    {
      method: "GET",
      mode: "no-cors"
    }
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  return <div> </div>;
}
