import React from 'react'
import { Link,Redirect ,useHistory} from 'react-router-dom';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
const Welcomepage = () => {
    const history=useHistory();
    
        setTimeout(function(){
      
      document.getElementById('video').style.display='none';
      document.getElementById('premain').style.display='block';
      
        },6000);
     
      

  return (
    <>
    <div className="bg-video-wrap animate__animated animate__fadeOut  animate__delay-5s" id="video">
          <video src="images/play.mp4" muted autoPlay loop className="video">
          </video>
          <video src="images/playm.mp4" muted autoPlay loop className="videom">
          </video>
        </div>
        <div className="premain animate__animated animate__fadeIn  " id="premain">
          <div className="container-fluid">
            <center>
              <p className="mb-0">Do you dare?</p>
              <div className="btn-wrapper  animate__animated animate__tada  animate__delay-1s">
                <div className="btn-wrapper__container">
                  <div className="btn-inner" >
              
                    <a className="btn-inner__text" href="/home"  >Step Into The Den <img src="images/arrow.svg" className="ms-2" /></a>
                  </div>
                </div>
              </div>
            </center>
          </div>
          <img src="images/music.svg" className="musicimg" />
        </div>
    </>
  )
}

export default Welcomepage