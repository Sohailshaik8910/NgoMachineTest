import React from 'react'
import paper1 from "../Images/paper1.webp";
import paper2 from "../Images/paper2.jpg";
import paper3 from "../Images/paper3.webp";
import paper4 from "../Images/paper4.jpg";
import paper5 from "../Images/paper5.jpg";
import paper6 from "../Images/paper6.webp";


const Media = () => {
  return (
    <>

    <h1 style={{ marginTop:"69px", textAlign:"center", backgroundColor:"#06402b", color:"white", fontFamily:"monospace", paddingTop:"10px", paddingBottom:"15px"}} >Media</h1>


    <div style={{display:"flex", justifyContent:"space-around", marginTop:"100px"}} >

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




<div style={{display:"flex", justifyContent:"space-around", marginTop:"50px"}} >
<div class="card" style={{width: "18rem"}}>
<img src={paper4} class="card-img-top" height="400" alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>

<div class="card" style={{width: "18rem"}}>
<img src={paper5} class="card-img-top" height="400" alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>

<div class="card" style={{width: "18rem"}}>
<img src={paper6} class="card-img-top" height="400" alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>
</div>


<div style={{display:"flex", justifyContent:"space-around", marginTop:"50px", marginBottom:"100px"}} >
<div class="card" style={{width: "18rem"}}>
<img src={paper1} class="card-img-top" height="400" alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>

<div class="card" style={{width: "18rem"}}>
<img src={paper4} class="card-img-top" height="400" alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>

<div class="card" style={{width: "18rem"}}>
<img src={paper2} class="card-img-top" height="400" alt="..." />
<p style={{textAlign:"center"}} >Mumbai</p>
</div>
</div>


    </>
  )
}

export default Media;
