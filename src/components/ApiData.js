import React, { useState } from "react";
import CarCard from "./CarCard";

export default function ApiData() {
  const [listingdata, setListingData] = useState([]);
  var proxyUrl = "https://cors-anywhere.herokuapp.com/",
    targetUrl =
      "https://marketcheck-prod.apigee.net/v1/search?api_key=QvZEqHZSO7OuNEiTA2PEaB9SCic6MrVo&seller_type=dealer&year=2019&make=ford&model=mustang";
  fetch(proxyUrl + targetUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setListingData(data.listings);
      console.log(listingdata);
    })
    .catch(e => {
      console.log(e);
      return e;
    });
  return (
    <div className="listings">
      <h3>Other Vechicle Listings</h3>
      <CarCard cars={listingdata} />
    </div>
  );
}
