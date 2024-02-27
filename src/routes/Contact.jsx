import Navbar from '../Component/Navbar';
import Hero from "../Component/Hero";
import ContactImg from "../assets/ming-jun-tan-o6ICDlt5_2k-unsplash.jpg";
import Footer from "../Component/Footer";
import ContactForm from '../Component/ContactForm';

function Contact(){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnclass="hide"
      />
      <ContactForm/>
      <Footer/>
        </>
    )
    }
    export default Contact;