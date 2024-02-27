import Hero from '../Component/Hero';
import Navbar from '../Component/Navbar';
import HomeImg from "../assets/joel-vodell-TApAkERW5pQ-unsplash.jpg"
import Destination from '../Component/Destination';
import Trip from '../Component/Trip';
import Footer from '../Component/Footer';
function Home(){
return(
    <>
    <Navbar/>
    <Hero 
    cName="hero"
    heroImg= {HomeImg}
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination"
    btnText="Travel Plan"
    url="/"
    btnclass="show"
    />
     <Destination/>
     <Trip/>
     <Footer/>
    </>
);
}
export default Home; 