import React from 'react'
import gallery1 from '../Images/Gallery1.jpg';
import gallery2 from '../Images/Gallery2.jpg';
import gallery3 from '../Images/Gallery3.webp';
import gallery4 from '../Images/Gallery4.jpg';
import gallery5 from '../Images/Gallery5.webp';
import gallery6 from '../Images/Gallery6.jpg';
import gallery7 from '../Images/Gallery7.avif';
import gallery8 from '../Images/Gallery8.png';
import gallery9 from '../Images/Gallery9.webp';
import gallery10 from '../Images/Gallery10.jpg';
import gallery11 from '../Images/Gallery11.webp';
import gallery12 from '../Images/Gallery12.jpg';



const Gallery = () => {
  return (

    <div >
    <h1 style={{ marginTop:"69px", textAlign:"center", backgroundColor:"#06402b", color:"white",fontFamily:"monospace", paddingTop:"10px", paddingBottom:"15px"}} >Gallery</h1>

    <div style={{display:"flex", justifyContent:"space-around", marginTop:"50px"}} >
      <div class="card" style={{width: "18rem"}}>
      <img src={gallery1} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Mumbai</p>
      </div>

      <div class="card" style={{width: "18rem"}}>
      <img src={gallery2} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Pune</p>
      </div>

      <div class="card" style={{width: "18rem"}}>
      <img src={gallery3} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Banglore</p>
      </div>

      <div class="card" style={{width: "18rem"}}>
      <img src={gallery4} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Delhi</p>
      </div>
  </div>


  
  <div style={{display:"flex", justifyContent:"space-around", marginTop:"50px"}} >
      <div class="card" style={{width: "18rem"}}>
      <img src={gallery5} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Rajesthan</p>
      </div>

      <div class="card" style={{width: "18rem"}}>
      <img src={gallery6} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Lonavala</p>
      </div>

      <div class="card" style={{width: "18rem"}}>
      <img src={gallery7} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Jaipur</p>
      </div>

      <div class="card" style={{width: "18rem"}}>
      <img src={gallery8} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Gujrat</p>
      </div>
  </div>


  <div style={{display:"flex", justifyContent:"space-around", marginTop:"50px"}} >
      <div class="card" style={{width: "18rem"}}>
      <img src={gallery9} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Rajesthan</p>
      </div>

      <div class="card" style={{width: "18rem"}}>
      <img src={gallery10} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Lonavala</p>
      </div>

      <div class="card" style={{width: "18rem"}}>
      <img src={gallery11} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Jaipur</p>
      </div>

      <div class="card" style={{width: "18rem"}}>
      <img src={gallery12} class="card-img-top" alt="..." />
      <p style={{textAlign:"center"}} >Gujrat</p>
      </div>
  </div>

  </div>
  )
}

export default Gallery;
