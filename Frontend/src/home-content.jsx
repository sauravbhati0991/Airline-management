import "./home-content.css"
import { useLayoutEffect } from 'react';
function Mycomponent()
{   
    useLayoutEffect(() => {
        const hiddenElements = document.querySelectorAll(".hidden");

        const observer = new IntersectionObserver((entries) => {
            console.log('Callback function executed!');
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        hiddenElements.forEach((el) => {
            console.log(`Observing element: ${el}`);
            observer.observe(el);
        });

        return () => {
            hiddenElements.forEach((el) => {
                observer.unobserve(el);
            });
        };
    }, []);
  
    return(
        <div className="content">
                        <div className="home-content1">
                <p>"Welcome aboard FlyHigh Airlines!,We're thrilled to welcome you to our website, your gateway to seamless travel experiences and unparalleled service. Explore our destinations, discover exclusive deals, and let us take you on a journey above the clouds. Happy travels with FlyHigh!"</p>
            </div>
{/* 1 */}
        <div className="card hidden">
            <div className="vid">
            <video src='./src/assets/airdream.mp4'  autoPlay loop muted></video>
            </div>
            <div className="text">
            <h1>Dream Flying?Dream High</h1>
            <p>FlyHigh Airline transforms the dream of flying into reality for everyone, offering affordable fares without compromising on quality or comfort. Our modern fleet ensures smooth, safe journeys, while our dedicated staff provides exceptional service from booking to landing. With an extensive route network, FlyHigh connects you to global destinations, making travel easier than ever. Whether a first-time flyer or a seasoned traveler, FlyHigh helps you reach new heights and explore the world, fulfilling your dreams of flight. Experience the joy of flying with FlyHigh, where your aspirations take flight..</p>
            </div>
        </div>
{/* 2 */}
<div className="card hidden">
            <div className="text">
            <h1>We're happy to serve you</h1>
            <p>At FlyHigh Airline, we're happy to serve you with a commitment to exceptional service and a passion for making your journey memorable. Our friendly and professional staff go above and beyond to ensure your comfort and satisfaction from the moment you book your flight until you reach your destination. With FlyHigh, you can relax and enjoy the journey, knowing that your happiness and convenience are our top priorities. Experience the joy of flying with FlyHigh, where we're always delighted to serve you.</p>
            </div>
            <div className="vid">
            <video src='./src/assets/airport.mp4'  autoPlay loop muted></video>
            </div>
        </div>
        {/* 3 */}
        <div className="card hidden">
            <div className="vid">
            <video src='./src/assets/pane.mp4'  autoPlay loop muted></video>
            </div>
            <div className="text">
            <h1>Get!Set!Let's Go High</h1>
            <p>Get ready, set, and let's go high with FlyHigh Airline! Embrace the excitement of air travel with our exceptional service and modern fleet, designed to make every journey unforgettable. From the moment you board, our dedicated crew ensures a seamless and enjoyable flight experience. Whether you're heading to a business meeting or a dream vacation, FlyHigh takes you to new heights with comfort and ease. Join us and discover the thrill of flying with FlyHigh – your gateway to the skies!</p>
            </div>
        </div>
{/* 4 */}
           <div className="card hidden">
            <div className="text">
            <h1>High Class Crew And Serivces At Heights</h1>
            <p>Experience the pinnacle of air travel with FlyHigh Airline's high-class crew and services at heights. Our professional and attentive staff are dedicated to providing exceptional service, ensuring your comfort and satisfaction throughout your journey. Enjoy luxurious amenities, gourmet dining, and personalized attention that make every flight a delightful experience. With FlyHigh, you can relax and relish the journey, knowing you’re in the best hands. Fly with us and discover unparalleled service at the highest level.</p>
            </div>
            <div className="vid">
            <video src='./src/assets/airvideo.mp4'  autoPlay loop muted></video>
            </div>
        </div>
        <div className="celeb-sec">
        <div className="about-content2">
               <h3>We're First Choice of Every Star</h3> 
               <div className="lists">
                <ol>
                    <li>Shahid kapoor</li>
                    <li>Sonam Bajwa</li>
                    <li>Virat kohli</li>
                </ol>
                <ol>
                    <li>Karan Johar</li>
                    <li>Kiara Advani</li>
                    <li>Buvan Bam</li>
                </ol>
                <ol>
                    <li>Arjit singh</li>
                    <li>Ranveer Singh</li>
                    <li>Angelina Jones</li>
                </ol>
               </div>
            </div>
        <div className="home-content3">
                <img className="igm" id="ig1"src="./src/assets/celeb1.jpg"></img>
                <img  className="igm"src="./src/assets/celeb2.jpg"></img>
                <img  className="igm"src="./src/assets/celeb3.jpg"></img>
            </div>
            </div>
        </div>
    )
}
export default Mycomponent;