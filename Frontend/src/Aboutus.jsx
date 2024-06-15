import "./aboutus.css"
function Aboutus()
{
    return(
        <div className="about-us-components">
            <div className="img-sec-abt">
            <img  id="igg1" src="./src/assets/bg2.jpg"></img>
            </div>
            <div className="about-content1">
                <p>"As an airline crew, we ensure your travel is safe and enjoyable. Our strengths are in safety, training, and personalized service. Despite some challenges like delays, we are dedicated to serving you with professionalism and care."</p>
            </div>
            <div className="about-content2">
               <h3>STRENGTHS</h3> 
               <div className="lists">
                <ol>
                    <li>1000+ Aircrafts</li>
                    <li>2000+ Professional Pilots</li>
                    <li>10000+ Crew Members</li>
                </ol>
                <ol>
                    <li>Affordable Rates</li>
                    <li>High Class Services</li>
                    <li>Premium Food Servives</li>
                </ol>
                <ol>
                    <li>Friendly Behavious</li>
                    <li>Over 1 Million + Boarders</li>
                    <li>10k+ Trips done</li>
                </ol>
               </div>
            </div>
            <div className="about-content3">
                <img className="igm" id="ig1"src="./src/assets/about1.jpg"></img>
                <img  className="igm"src="./src/assets/about2.jpg"></img>
            </div>
            <div className="about-content1">
                <p>"Thank you for choosing FLyHigh Airlines! We're thrilled to have you on board and committed to providing a safe, comfortable, and memorable flying experience. Sit back, relax, and enjoy your flight with us!"</p>
            </div>
        </div>
    )
}
export default Aboutus;