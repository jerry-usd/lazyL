import React from 'react'
import Nav from '../components/nav'
const landingpage = () => {

    
  return (
      
    <>
    <div className="wrap" style={{background: '#EBE7E3'}}>
       <Nav cmp="home" />
        <div> 
          <img src="images/jumbo.png" className="jumbo-img" />
          <div className="jumbom-title animate__animated animate__pulse animate__slower animate__infinite">
            <img src="images/lazy.png" />   <img src="images/lions.png" />
          </div>
          <center>
            <img src="images/var6bg2.png" className="jumbom-img" />
          </center>
          <img src="images/title.svg" className="jumbo-title animate__animated animate__pulse animate__slower animate__infinite" />
          <div className="mrm">
            <button className="btn mb-3 p-3" style={{display: 'block', background: '#F0EDEA', border: '1px solid #D8D8D8'}}> <a className="btn-inner__text" href="/roadmap" style={{fontSize: '1em', textDecoration: 'none', color: 'initial', fontFamily: 'com', fontWeight: 'bolder'}}><img src="images/strike.png" className="me-2" /><b>Visit our Roadmap </b><img src="images/arrow.svg" className="ms-2" /></a></button>
            <span style={{float: 'right', width: '160px'}}>2022, Lazy Lions
              Stay Lazy.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default landingpage