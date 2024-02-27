import Des1 from "../assets/chelsea-gates-0653_wY0nRc-unsplash.jpg";
import Des2 from "../assets/rayyu-maldives-VyEeKOwo3t0-unsplash.jpg";
import Des3 from "../assets/anna-hunko-rN4vnXFOhfQ-unsplash.jpg";
import Des4 from "../assets/maksym-harbar--15TZyzbZSU-unsplash.jpg";
import "./DestinationStyles.css"; 
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Dive into our top destinations—a world of unforgettable experiences awaits.</p>
        <DestinationData
         clName="first-des"
         heading="Maldives"
         text=" Coming in at the top of the world’s best bucket list destinations
         is the idyllic cluster of islands known as the Maldives—which is
         known for its stunning white sands, bright blue waters and
         incredible sunsets. It topped the travel bucket list for 121
         countries. Known for world-class diving, miles of empty white-sand
         beaches, and resorts oozing with luxury, the Known for its
         luxurious overwater bungalows, the Maldives is a popular
         destination for honeymooners and travelers seeking a tranquil
         escape. "
         img1={Des1}
         img2={Des2}
        />
        <DestinationData
         clName="first-des-reverse"
         heading="Italy"
         text=" 
         Italy, a land where history, art, and natural beauty seamlessly converge, beckons travelers to immerse themselves in an unforgettable experience. From the ancient ruins of Rome to the Renaissance wonders of Florence, Italy is a living canvas that showcases the heights of human achievement. One cannot help but succumb to the allure of its rich cultural tapestry, evident in every cobblestone street and architectural marvel. "
         img1={Des3}
         img2={Des4}
        />
      </div>
    </>
  );
};
export default Destination;
