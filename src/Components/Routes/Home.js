import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

const Home = () => {
    return(
        <>
        <Navbar />
        <Hero cName="hero"
        title="Start Your Jounrey"
        btnName="Book Now"
        btnClass="book"
        imageName = {require("../../Assets/HomeHero.jpg")}
         />
         <Footer />
        </>
    )
}

export default Home;
