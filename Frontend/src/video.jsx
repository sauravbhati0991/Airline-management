import "./video.css"
function Video()
{
    return(
    <div className="main">
    <video src="./src/assets/5608053-uhd_3840_2160_30fps.mp4"  autoPlay loop muted></video>
    <div className="contet">
        <h1>Welcome to FLyHigh,</h1>
        <h3>Let's get you high in skies.</h3>
    </div>
    </div>
)
}
export default Video