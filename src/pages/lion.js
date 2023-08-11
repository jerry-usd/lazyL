import React from 'react'
import Nav from '../components/nav'
const Lions = () => {
  return (
    <>
     <div className="wrap1" style={{background: '#EBE7E3'}}>
       <Nav />
        <div className="content1 container-fluid pt-5 dee">
          <div className="container  pb-4">
            <h2 className="tit" style={{textAlign: 'center'}}>LAZY LION # 5</h2>
            <div className="container ">
              <div className="row">
                <div className="col-sm-6 p-3 mb-3" style={{textAlign: 'right'}}>
                  <div className="teambox p-2 ms-5" style={{textAlign: 'right', height: '400px', width: '350px', float: 'right'}}>
                    <img style={{minHeight: '350px'}} src="images/5.png" className="img-fluid mb-3" />
                  </div>
                </div>
                <div className="col-sm-6  mb-3">
                  <div className="detail teambo  m-5 me-0 ">
                    <span className="jj">LAZY LION # 5</span>
                    <p style={{color: 'crimson'}} className="mt-4 mb-2">Rarity Rank # 27</p>
                    <p style={{color: '#969696'}}>Owned By: <span className="ms-2" style={{color: 'blue', cursor: 'pointer'}}>0x024...2778</span></p>
                    {/*<p style="color:#969696"> <span class="nav-span me-2"><a href="#" style="color:#66E848; font-weight:bold; cursor: pointer;">Mint</a></span></p> */}
                    <div className="container-fluid p-0 mt-5">
                      <div className="row mb-3">
                        <div className="col-6 p-2">
                          <span className="jj">Background </span>
                          <p style={{color: '#969696', fontWeight: 'bold'}} className="mt-4 mb-2">LightGreen</p>
                        </div>
                        <div className="col-6 p-2">
                          <span className="jj">Body</span>
                          <p style={{color: '#969696', fontWeight: 'bold'}} className="mt-4 mb-2">PlainBodyETCLogo</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-6 p-2">
                          <span className="jj">Face</span>
                          <p style={{color: '#969696', fontWeight: 'bold', wordBreak: 'break-all'}} className="mt-4 mb-2">ZombieFaceGoldHairBubbleGum</p>
                        </div>
                        <div className="col-6 p-2">
                          <span className="jj">Hair</span>
                          <p style={{color: '#969696', fontWeight: 'bold'}} className="mt-4 mb-2">BunnyEars</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lions