import { Navigate, useParams } from "react-router-dom";
import "../styles/DetailPorto.css";
import { portfolioList } from "../data/DataPorto";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function DetailPorto() {
  const { id } = useParams();
  const data = portfolioList.find((item) => item.id === id);

  if (data == undefined) {
    return <Navigate to="/page-not-found" />;
  }
  return (
    <>
      <Navbar />
      <section id="detail-portofolio">
        <div className="wrapper">
          <h1>{data.title}</h1>
          <img src={data.image} />
          <p className="awards">
            <b>Awards :</b> {data.awards}
          </p>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default DetailPorto;
