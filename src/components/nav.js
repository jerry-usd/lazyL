import React from 'react'
import { Link,Redirect ,useHistory} from 'react-router-dom';
const Nav = (Props) => {
    let Cmp=Props.cmp;
    const history=useHistory();
    function navv (){

        if (document.getElementById('mnav').classList.contains('hasClass')) {
      
          document.getElementById('mnav').src ="images/menu1.svg";
          document.getElementById('mnav').classList.remove("hasClass");
      
        }
        else{
          document.getElementById('mnav').src ="images/menu.svg";
          document.getElementById('mnav').classList.add("hasClass");
        }
      
      
        document.getElementById('mnavc').classList.toggle("open");
      }
      
  return (
    <>
      <nav>
          <div className="container-fluid">
            <div className="row">
              <div className="col-1"><img src="images/logo.png" /></div>
              <div className="col-11 container-fluid mt-5">
                <div className="row">
                  <div className="col-7" style={{textAlign: 'right'}}>
                    <span className={Cmp =="home" ? "nav-span me-2 active" : "nav-span me-2"  }    ><a href="/home">Home</a></span>
                    <span className={Cmp =="pride" ? "nav-span me-2 active" : "nav-span me-2"  } ><a href="/pride">Pride</a></span>
                    <span className={Cmp =="den" ? "nav-span me-2 active" : "nav-span me-2"  } ><a href="/den">Den</a></span>
                    <span className={Cmp =="roadmap" ? "nav-span me-2 active" : "nav-span me-2"  } ><a href="/roadmap">Roadmap</a></span>
                    <span className={Cmp =="mar" ? "nav-span me-2 active" : "nav-span me-2"  } ><a target="_blank" href="https://classicart.io/collections/LazyLions">Marketplace</a></span>
                  </div>
                  <div className="col-3">
                    <span className="nav-span me-2"><a href="https://discord.com/invite/2ufKucFwGD"><img src="images/twitter.svg" /></a></span>
                    <span className="nav-span me-2"><a href="https://discord.com/invite/2ufKucFwGD"><img src="images/discord.svg" /></a></span>
                    <span className={Cmp =="mint" ? "nav-span me-2 active" : "nav-span me-2"  } ><a href="/mint">Mint</a></span>
                  </div>
                  <div className="col-2"><button className="btn navbtn" style={{position: 'relative', top: '-8px'}}>Connect Wallet</button></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="mnav ">
          <img src="images/logo.png" className="mlog"  onClick={()=>{window.location="/home"}}/>
          <img src="images/menu.svg" style={{float: 'right'}} className="mnavv hasClass" id="mnav" datad="dds"  onClick={()=> navv()}/>
          <div className="mnavc animate__animated animate__bounceIn" id="mnavc">
            <p onClick={()=>{window.location="/home"}}>Home</p>
            <p onClick={()=>{window.location="/den"}}>Den</p>
            <p onClick={()=>{window.location="/pride"}}>Pride</p>
            <p onClick={()=>{window.location="/roadmap"}}>Roadmap</p>
            <p onClick={()=>{window.location="https://classicart.io/collections/LazyLions"}}>Marketplace</p>
     
            <p onClick={()=>{window.location="https://twitter.com/LazylionsEtc"}}>Twitter <img src="images/twitter.svg" className="ms-2" style={{height: '22px'}} /></p>
            <p onClick={()=>{window.location="https://discord.com/invite/2ufKucFwGD"}}>Discord <img src="images/discord.svg" className="ms-2" style={{height: '22px'}} /></p>
            <p onClick={()=>{window.location="/mint"}}>Mint</p>
            <p onClick={()=>{window.location="#"}}>Connect Wallet</p>
            <center>
              <div style={{fontWeight: 600, fontSize: '8px', lineHeight: '150%', /* or 12px */

textAlign: 'center', width: '68px', color: '#5D5D5D'}} className="mt-3">2022, Lazy Lions
                Stay Lazy.</div>
            </center>
          </div>
        </div>
    </>
  )
}

export default Nav