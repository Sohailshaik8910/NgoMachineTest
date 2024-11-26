import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import card1 from '../Images/Card1.avif';
import card2 from '../Images/Card2.png';
import card3 from '../Images/Card3.avif';
import MapBanner from '../Images/MapBanner.jpg';
import gallery3 from '../Images/Gallery3.webp';
import gallery4 from '../Images/Gallery4.jpg';
import gallery5 from '../Images/Gallery5.webp';
import paper1 from "../Images/paper1.webp";
import paper2 from "../Images/paper2.jpg";
import paper3 from "../Images/paper3.webp";
import banner1 from "../Images/banner3.jpg";
import banner2 from '../Images/banner2.webp';
import banner3 from '../Images/banner1.jpg';


function Home() {
  return (
    <>
      {/* Carousel Section */}
      <Carousel style={{ marginTop: "69px", zIndex: "-1" }} indicators={false}>
        <Carousel.Item>
          <img src={banner1} height={500} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to the NK Foundation</h3>
            <p>Our vision is to offer sporting opportunities to underprivileged youth</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner2} height={500}  className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
            <h3>Welcome to the NK Foundation</h3>
            <p>Our vision is to offer sporting opportunities to underprivileged youth</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner3} height={500}  className="d-block w-100" alt="Third slide" />
          <Carousel.Caption>
            <h3>Welcome to the NK Foundation</h3>
            <p>Our vision is to offer sporting opportunities to underprivileged youth</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Card Section */}
      <div style={{ display: "flex", justifyContent: 'space-around', marginTop: "30px" }}>
        <img src={card1} width={350} alt="Card 1" />
        <img src={card2} width={350} alt="Card 2" />
        <img src={card3} width={350} alt="Card 3" />
      </div>

      {/* Map Banner Section */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px', marginBottom: '80px' }}>
        <img src={MapBanner} alt="Map Banner" width={1100} />
      </div>

      {/* Gallery Section */}
      <h1 style={{
        textAlign: "center",
        fontFamily: "monospace",
        backgroundColor: "#06402b",
        color: "white",
        paddingTop: "10px",
        paddingBottom: "10px"
      }}>
        Gallery
      </h1>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
        {[gallery3, gallery4, gallery5].map((image, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={image} className="card-img-top" alt={`Gallery ${index + 1}`} />
            <p style={{ textAlign: "center" }}>Mumbai</p>
          </div>
        ))}
      </div>

      {/* Media Section */}
      <h1 style={{
        textAlign: "center",
        fontFamily: "monospace",
        marginTop: "40px",
        backgroundColor: "#06402b",
        color: "white",
        paddingTop: "10px",
        paddingBottom: "10px"
      }}>
        Media
      </h1>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
        {[paper1, paper2, paper3].map((image, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={image} className="card-img-top" height="400" alt={`Media ${index + 1}`} />
            <p style={{ textAlign: "center" }}>Mumbai</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
