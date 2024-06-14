import "./contactus.css"
function Contactus()
{
function resetinputs()
{   
    alert(`hi ${document.getElementById("name").value}, your response has been submitted `)
    document.getElementById("name").value='';
    document.getElementById("number").value=
    document.getElementById("message").value='';
}
return(
    <div className="contactus">
        <h1>CONTACT US</h1>
        <div className="contact-content">
            <div className="tags-container">
                <div className="tag">
                    <img src="./src/assets/location.png"></img>
                    <div className="tag-content">
                        <h3>LOCATION</h3>
                        <p>Anukampa Flats near Marine Drive,Mumbai</p>
                    </div>
                </div>
                <div className="tag">
                    <img src="./src/assets/phone.png"></img>
                    <div className="tag-content">
                        <h3>PHONE</h3>
                        <p>+91 8005781598</p>
                    </div>
                </div>
                <div className="tag">
                    <img src="./src/assets/instagram.png"></img>
                    <div className="tag-content">
                        <h3>INSTRAGRAM</h3>
                        <p>FLyHigh_1905</p>
                    </div>
                </div>
                <div className="tag">
                    <img src="./src/assets/internet.png"></img>
                    <div className="tag-content">
                        <h3>WEBSITE</h3>
                        <p>https:/FLyHigh.com</p>
                    </div>
                </div>
            </div>
            
        <div className="contact-card">
            <p className="margin heading">Fill Up The Form</p>
            <div className="input1">
            <p className="margin" >Name:</p>
            <input className="margin" id="name" type="text" ></input>
            </div>
            <div className="input1">
            <p className="margin">Phone. Number</p>
            <input className="margin"  id="number" type="number" ></input>
            </div>
            <p className="margin">Your Message:</p>
            <textarea id="message" className="margin"></textarea>
            <button className="margin" onClick={resetinputs}>Submit</button>
        </div>
        </div>
    </div>
)
}
export default Contactus;