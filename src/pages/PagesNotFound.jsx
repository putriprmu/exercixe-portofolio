import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PagesNotFound() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h3>Oopsie!</h3>
        <p>Sorry, the page you were looking for could not be found...</p>
      </div>
      <Footer />
    </>
  );
}

export default PagesNotFound;
