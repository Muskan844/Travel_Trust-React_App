import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import AboutImg from "../assets/daniel-sessler-hlPongnSUns-unsplash.jpg";
import Footer from "../Component/Footer";
import AboutUs from "../Component/AboutUs"
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnclass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}
export default About;
