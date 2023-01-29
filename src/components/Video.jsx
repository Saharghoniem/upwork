
import video from "./img/gooo.mp4"
import logo from "./img/logo.png"



function Video() {
  return (
    <div>
      <video src={video} loop autoPlay muted alt="#"></video> 


       <span><img src={logo} alt="#"/></span>
    

      <div className="headerbg"></div>
    </div>
  );
}
export default Video;
