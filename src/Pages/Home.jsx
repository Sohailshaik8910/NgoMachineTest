import img from '../Images/banner3.jpg';
import paper1 from "../Images/paper1.webp";
import paper2 from "../Images/paper2.jpg";
import paper3 from "../Images/paper3.webp";
import gallery3 from '../Images/Gallery3.webp';
import gallery4 from '../Images/Gallery4.jpg';
import gallery5 from '../Images/Gallery5.webp';
import img2 from '../Images/banner2.webp';
import img3 from '../Images/banner1.jpg';
import Navbar from '../components/Navbar';
import card1 from '../Images/Card1.avif';
import card2 from '../Images/Card2.png';
import card3 from '../Images/Card3.avif';
import MapBanner from '../Images/MapBanner.jpg';




const Home = ()=>
{
    return (

      <>


<div style={{marginTop:"69px", zIndex:"-1"}}  id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img}  alt="..." />
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<div style={{display:"flex", justifyContent: 'space-around', marginTop: "30px"}}>


  <img  src={card1} width={350} />

  <img  src={card2} width={350} />

  <img  src={card3} width={350}/>


</div>


<div style={{display:'flex', justifyContent:'center', marginTop:'80px', marginBottom:'80px'}}>
  <img src={MapBanner} alt='' width={1100} />
</div>

<h1 style={{textAlign:"center" ,fontFamily:"monospace", backgroundColor:"#06402b", color:"white", paddingTop:"10px", paddingBottom:"10px" }} >Gallery</h1>

<div style={{display:"flex", justifyContent:"space-around", marginTop:"40px"}} >
<div class="card" style={{width: "18rem"}}>
<img src={gallery3} class="card-img-top" alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>

<div class="card" style={{width: "18rem"}}>
<img src={gallery4} class="card-img-top" alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>

<div class="card" style={{width: "18rem"}}>
<img src={gallery5} class="card-img-top"  alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>
</div>



<h1 style={{textAlign:"center",fontFamily:"monospace", marginTop:"40px", backgroundColor:"#06402b", color:"white", paddingTop:"10px", paddingBottom:"10px"}} >Media</h1>

<div style={{display:"flex", justifyContent:"space-around", marginTop:"40px"}} >
<div class="card" style={{width: "18rem"}}>
<img src={paper1} class="card-img-top" height="400" alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>

<div class="card" style={{width: "18rem"}}>
<img src={paper2} class="card-img-top" height="400" alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>

<div class="card" style={{width: "18rem"}}>
<img src={paper3} class="card-img-top" height="400" alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>
</div>




</>

    )
}

export default Home;