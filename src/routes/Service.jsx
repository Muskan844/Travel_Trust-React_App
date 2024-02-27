import Navbar from '../Component/Navbar';
import Hero from "../Component/Hero";
import ServiceImg from "../assets/benson-low-jh6V4Y2s6OU-unsplash.jpg";
import Footer from "../Component/Footer";
import Trip from '../Component/Trip';

function Service(){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        btnclass="hide"
      />
      <Trip/>
      <Footer/>
        </>
    )
    }
    export default Service;