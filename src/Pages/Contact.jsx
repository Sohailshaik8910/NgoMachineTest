import React from 'react'

const Contact = () => {
  return (

    <>

    <h1 style={{ marginTop:"69px", textAlign:"center", backgroundColor:"#06402b", color:"white",fontFamily:"monospace", paddingTop:"10px", paddingBottom:"15px"}} >Contact Us</h1>


    <div style={{display:"flex", justifyContent:"space-around", marginTop:"100px", marginBottom:"50px"}} >

    

    <div style={{marginTop:"40px"}}>
        <h4>All General Queries</h4>
        <p>info@NKFoundation.org</p>

        <br/>

        <h4>Donation Related Queries</h4>
        <h4>FOR NEW DONORS</h4>
        <p>Aakanksha Wahi – 704222224</p>

        <br/>


        <h4>FOR EXISTING DONORS</h4>
        <p>Steffi Stephen – 888888888</p>

        <br/>

        <h4>FOR MEDIA-RELATED QUERIES</h4>
        <p>sandip@NKFoundation.email</p>
    </div>

    <div>
        <h4> Name</h4>
        <input type='text' style={{width:"300px"}} />
        <h4>Email</h4> 
        <input type='text' style={{width:"300px"}}/>
        <h4>Message</h4>
        <textarea style={{width:"300px", height:"250px"}}></textarea> <br/>
        <button type="button" style={{backgroundColor:"#06402b", marginLeft:"110px", marginTop:"20px"}}  class="btn btn-primary ">Submit</button>


    </div>



    </div>

    </>
  )
}

export default Contact;
