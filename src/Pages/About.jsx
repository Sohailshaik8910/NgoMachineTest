import banner from "../Images/Aboutbanner.png";
import banner2 from "../Images/Aboutbanner2.jpeg";

const About = ()=>
{
    return(
        <>

        <h1 style={{ marginTop:"69px", textAlign:"center", backgroundColor:"#06402b", color:"white", fontFamily:"monospace", paddingTop:"10px", paddingBottom:"15px"}} >About Us</h1>


        <div style={{marginTop:"50px"}}>
            <div style={{display:"flex", justifyContent:"center", marginBottom:"80px"}} >
                <img src={banner} height={400} />
            </div>

            <div style={{textAlign:"center", marginLeft:"80px", marginRight:"80px", marginBottom:"80px"}} >
                <p>
                Smile Foundation was initiated in 2002 when a group of friends came together with the intention of giving back to the society. They were inspired by the thought and philosophy of Peter Senge, the founder of the Society for Organizational Learning who has propagated that “sustainability, social equality and the environment are now business problems…” and corporate leaders can’t expect governments to solve them alone.
What triggered these thoughts was the liberalisation of the Indian economy in the 1990’s which brought with it immense opportunities. Business revived, and India became not just a market, but also an investment prospect for the developed world. Disposable incomes and early settlements became a living reality for the working middle-class. For the first time in India, professionals could think beyond making a living, and contribute towards the society.
                </p>
            </div>

            <div style={{display:"flex", justifyContent:"center", marginBottom:"80px"}} >
                <img src={banner2} height={400} />
            </div>

            <div style={{textAlign:"center", marginLeft:"80px", marginRight:"80px", marginBottom:"80px"}} >
                <p>
Fuelled with enthusiasm, Smile’s founders gave a shape to their dream, and Smile Foundation was born. Over the last two decades, Smile has evolved as a sustainable Indian social institution – committed to do real work on the ground, and make the society and businesses inclusive in the process of bringing change.

On our way, we had to make many difficult choices and constantly innovate – whether it was choosing to work on the ground through a service-delivery approach, practicing management principles and adopting a business-like approach in the development sector, creating a unique resource modeling keeping businesses at the centre, or promoting the concept of civic driven change. Yes, we almost always took the road less travelled, and as they say, that has made all the difference!</p>
            </div>

        </div>


        </>
    )
}

export default About;