import { Link } from "react-router-dom";

const Navbar = ()=>
{
    return (
  <div style={{position:"fixed", top:"0", width:"100%", zIndex:"200"}} >
  <div style={{backgroundColor:"#06402b", height:"2px", width:"100%"}} ></div>

  <nav  class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid  p-200 d-flex justify-content-around ">

  <h3 style={{  marginLeft:"20px", marginRight:"260px", color:"#06402b", fontWeight:"bold"}} >NK Foundation</h3>
    
    <div class="collapse navbar-collapse" style={{fontSize:"20px",}}  id="navbarNav">
      <ul class="navbar-nav" >
        <li class="nav-item">
          <Link class="nav-link" to="/" >Home</Link>
        </li>
        <li  class="nav-item">
          <Link class="nav-link" to="/about">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/projects" href="#">Projects</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/media" href="#">Media</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/gallery" href="#">Gallery</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact" href="#">Contact us</Link>
        </li>
      </ul>
    </div>

    <button style={{marginRight:"20px", backgroundColor:"#06402b", padding:"12px" , fontWeight:"bold", width:"130px"}} type="button"  class="btn btn-primary ">Donate Now</button>

    
  </div>
</nav>
  <div style={{backgroundColor:"#06402b", height:"-100px", width:"100%"}} ></div>


</div>
    )
}

export default Navbar;