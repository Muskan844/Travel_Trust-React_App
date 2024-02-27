import "./TripStyles.css";
import TripData from "./TripData";
import T1 from "../assets/devansh-bhikajee-Qj5k443IOS0-unsplash.jpg";
import T2 from "../assets/cristina-gottardi-I1Lv2yX67GI-unsplash.jpg";
import T3 from "../assets/sven-V7WkmXntA8M-unsplash.jpg";


function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p> You can discover unique destinations using Google Map.</p>
      <div className="tripcard">
      <TripData
          Img={T2}
          heading="Trip to New York"
          text="New York, one of the world's most iconic cities, is a bustling metropolis that captivates with its cultural diversity, and vibrant energy. Home to landmarks like Times Square, Central Park, and the Statue of Liberty, it's a city that seamlessly blends history, art, and modernity."
        />
        <TripData
          Img={T1}
          heading="Trip to Singapore"
          text="
          Singapore is a modern city-state at the crossroads of Asia. Known for its stunning skyline, multicultural neighborhoods, and lush greenery, Singapore offers a harmonious fusion of diverse cuisines, world-class shopping, and cutting-edge architecture."
        />
        
        <TripData
          Img={T3}
          heading="Trip to Switzerland"
          text="
          Switzerland, a picturesque Alpine nation, is renowned for its stunning landscapes, precision craftsmanship, and cultural diversity. Home to pristine lakes and charming villages, it offers a perfect blend of outdoor adventure and refined urban living."
        />
      </div>
      
    </div>
  );
}
export default Trip;
