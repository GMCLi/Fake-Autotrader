import React from "react";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function VehDetails(props) {
  const images = [props.images
    //   "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/06/2018-BMW-M4-110.jpg?fill=2:1&resize=980:*",
    //   "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/15q4/662479/dinan-s1-bmw-m4-instrumented-test-review-car-and-driver-photo-662862-s-original.jpg",
    //   "https://acd27e678d077c01a703-8687be8436127d2a9934ef3f865789b4.ssl.cf1.rackcdn.com/WBS4S9C57GK578711/a321a2039c219bfdffa04310ef4ac101.jpg"
  ];
  // console.log(images);
  // console.log(props.images.splice(0-5));
  const displayImg = props.images.splice(0 - 5).map(image => {
    return <div key={props.id}>
      <img src={image} />
    </div>
  })

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

  // console.log(displayImg);
  return (
    <div className="card">

      <Carousel>
        {displayImg}
        {/* <div>
        <img src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/06/2018-BMW-M4-110.jpg?fill=2:1&resize=980:*" />
      </div>
      <div>
        <img src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/15q4/662479/dinan-s1-bmw-m4-instrumented-test-review-car-and-driver-photo-662862-s-original.jpg" />
      </div>
      <div>
        <img src="https://acd27e678d077c01a703-8687be8436127d2a9934ef3f865789b4.ssl.cf1.rackcdn.com/WBS4S9C57GK578711/a321a2039c219bfdffa04310ef4ac101.jpg" />
      </div> */}
      </Carousel>

      <div className="card-body">

        <p>{props.year} {props.make} {props.model}</p>
        <p>{formatter.format(props.price)}</p>

      </div>
    </div>
  )
}

{/* <ul>
<li>{props.id}</li>
<li>{props.name}</li>
</ul> */}


//   <ul>
//   <li>{props.year} {props.make} {props.model}</li>
//   <li>{props.price}</li>
// </ul>
export default VehDetails;