import React from 'react'
import project1 from '../Images/project1.jpeg';
import project2 from '../Images/project2.jpeg';
import project3 from '../Images/project3.jpg';
import project4 from '../Images/project4.jpg';
import project5 from '../Images/project5.jpg';
import project6 from '../Images/project6.jpeg';



const Projects = () => {
  return (
    <>

<h1 style={{ marginTop:"69px", textAlign:"center", backgroundColor:"#06402b", color:"white",fontFamily:"monospace", paddingTop:"10px", paddingBottom:"15px"}} >Projects</h1>



  <div style={{ display:"flex", justifyContent:"center"}}>
  <div class="card mb-3" style={{maxWidth: "1000px" ,marginTop:"100px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={project1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Youth Empowerment and Skill Development</h5>
        <p class="card-text">SK in partnership with the HCCB, is dedicated to offering training to 25,000 young people in sales and marketing. The goal of this effort is to provide youth with important skills that will improve</p>
        <p class="card-text"><small class="text-body-secondary">Theme :- Skill Development</small></p>
      </div>
    </div>
  </div>
  </div>
  </div>



  <div style={{ display:"flex", justifyContent:"center"}}>
  <div class="card mb-3" style={{maxWidth: "1000px" ,marginTop:"100px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={project2} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Community Development Initiatives</h5>
        <p class="card-text">SK in colloboration with HCCB aims to improve the well-being of the entire community. HCCB is focusing on regional progress by addressing social and durable infrastructure needs while also</p>
        <p class="card-text"><small class="text-body-secondary">Theme :- Livelihood</small></p>
      </div>
    </div>
  </div>
  </div>
  </div>



  
  <div style={{ display:"flex", justifyContent:"center"}}>
  <div class="card mb-3" style={{maxWidth: "1000px" ,marginTop:"100px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={project3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Women Empowerment</h5>
        <p class="card-text">SK Y4D in colloboration with Hindustan Coca-Cola Beverages (HCCB) to offer extensive financial and digital literacy training to 25,000 women across India. This collaboration reflects a joint commitment</p>
        <p class="card-text"><small class="text-body-secondary">Theme :- Women Empowerment</small></p>
      </div>
    </div>
  </div>
  </div>
  </div>




  <div style={{ display:"flex", justifyContent:"center"}}>
  <div class="card mb-3" style={{maxWidth: "1000px" ,marginTop:"100px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={project4} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Miyawaki – A Modern Plantation Drive Method</h5>
        <p class="card-text">SK Foundation's tree planting initiatives employ traditional tree planting techniques along with the</p>
        <p class="card-text"><small class="text-body-secondary">Theme :- Environment & Sustainability</small></p>
      </div>
    </div>
  </div>
  </div>
  </div>



  <div style={{ display:"flex", justifyContent:"center"}}>
  <div class="card mb-3" style={{maxWidth: "1000px" ,marginTop:"100px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={project5} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Digital Training & Resource Centre</h5>
        <p class="card-text">Digital Technology is the boom of the century and thus Digital Literacy has become a need of the hour. However, India’s Information and Communication Technology</p>
        <p class="card-text"><small class="text-body-secondary">Theme :- Education</small></p>
      </div>
    </div>
  </div>
  </div>
  </div>


  <div style={{ display:"flex", justifyContent:"center"}}>
  <div class="card mb-3" style={{maxWidth: "1000px" ,marginTop:"100px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={project6} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Environment Sustainability & Tree Plantation Drive</h5>
        <p class="card-text">No. of Sapling planted: 30,000+
        Tree plantation is one of Y4Ds major initiatives to contribute toward the solution of climate change and fighting against the</p>
        <p class="card-text"><small class="text-body-secondary">Theme :- Environment Sustainability</small></p>
      </div>
    </div>
  </div>
  </div>
  </div>


    </>
  )
}

export default Projects;
