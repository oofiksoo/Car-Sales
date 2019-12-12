import React from "react";
import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
//import CarCard from "./components/CarCard";
const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };
  // const [listingdata, setListingData] = useState([]);
  // var proxyUrl = "https://cors-anywhere.herokuapp.com/",
  //   targetUrl =
  //     "https://marketcheck-prod.apigee.net/v1/search?api_key=QvZEqHZSO7OuNEiTA2PEaB9SCic6MrVo&seller_type=dealer&year=2019&make=ford&model=mustang";
  // fetch(proxyUrl + targetUrl)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setListingData(data.listings);
  //     console.log(listingdata);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //     return e;
  //   });
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          addFeature={buyItem}
        />
      </div>
      <div className="box">
        <div className="listings">
          <h3>Other Vechicle Listings</h3>
          {
            // <CarCard cars={listingdata} />
          }
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
