import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

const Terms = () => {
    return(
        <>
      <Navbar />
      <Hero
        cName="hero-secondary"
        imageName={require("../../Assets/legal.jpg")}
      />
      <h1>Terms and Conditions</h1>
      <div className="content-container">
        <div className="text-container">
          <h2>Heading 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="text-container">
          <h2>Heading 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <Footer />
    </>
    )
}

export default Terms;