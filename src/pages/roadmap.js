import React from 'react'
import Nav from '../components/nav'
const Roadmap = () => {
  return (
    <>
    <div className="wrap1" style={{background: '#EBE7E3'}}>
         <Nav cmp="roadmap"/>
          <div className="content container-fluid pb-5">
            <div className="container  pb-4">
              <h2 className="tit">ROADMAP</h2>
              <p style={{width: '40vw'}} className="mb-5 mfw">Our goal is to continue these activities long into the future and make it a primary purpose of our community, to be a force for good in our world

.</p>
              <div className="container-fluid">
                <div className="row mb-3">
                  <div className="col-sm-4 p-2">
                    <div className="roadmap" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <h1 className="mb-2"><b>01</b></h1>
                      <p>Building</p>
                      <img src="images/var3.png" className="rmf1" style={{textAlign: 'right', height: '260px', position: 'relative', right: '-100px'}} />
                    </div>
                  </div>
                  <div className="col-sm-4 p-2">
                    <div className="roadmap" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                      <div style={{textAlign: 'right'}}>
                        <h1 className="mb-2"><b>02</b></h1>
                        <p>Website</p>
                      </div>
                      <img src="images/var1.png" style={{textAlign: 'right', height: '200px', position: 'relative', left: '-40px', bottom: '-60px'}} />
                    </div>
                  </div>
                  <div className="col-sm-4 p-2">
                    <div className="roadmap" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                      <img src="images/varg4.png" style={{textAlign: 'right', position: 'relative', top: '-20px'}} className="mb-3 img-fluid" />
                      <h1 className="mb-2" style={{textAlign: 'right'}}><b>03</b></h1>
                      <p style={{textAlign: 'right'}}>Community</p>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12 ">
                    <div className="roadmap" style={{minHeight: 'initial'}} data-bs-toggle="modal" data-bs-target="#exampleModal4">
                      <div style={{float: 'right'}}>
                        <h1 className="mb-0" style={{display: 'inline-block', lineHeight: 'initial', position: 'relative', right: '-30px'}}><b>04</b></h1>
                        <p style={{display: 'inline-block', transform: 'rotate(90deg)', lineHeight: 'initial'}} className="m-0 ">Mint</p>
                      </div>
                      <img src="images/logo.png" style={{textAlign: 'right', height: '220px', position: 'relative', left: '-20px', bottom: '0px'}} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3 rmf5">
                    <div className="roadmap" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                      <div style={{textAlign: 'right'}}>
                        <h1 className="mb-2"><b>05</b></h1>
                        <p>Marketing</p>
                      </div>
                      <img src="images/var2.png" style={{textAlign: 'right', height: '230px', position: 'relative', left: '-50px', bottom: '-30px'}} />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="roadmap" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                      <div style={{float: 'right', position: 'relative', top: '280px'}} className="rmf9">
                        <h1 className="mb-0 rmf10" style={{display: 'inline-block', lineHeight: 'initial', position: 'relative', right: '-100px'}}><b>06</b></h1>
                        <p className="rmf3" style={{display: 'inline-block', transform: 'rotate(270deg)', lineHeight: 'initial', position: 'relative', right: '-50px'}}>IRL Lions</p>
                      </div>
                      <img src="images/var6.png" className="rmf2" style={{textAlign: 'right', height: '300px', position: 'relative', left: '-40px', bottom: '-165px'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*modal1*/}
        <div className="modal animate__animated animate__bounceIn" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered  modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="exampleModalToggleLabel" style={{color: '#969696'}}><b>Building</b></h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body" id='modal-body1'>
                <div className="mbo">
                  <button className="btn mb-3 p-3" style={{display: 'block', background: '#F0EDEA', border: '1px solid #D8D8D8'}}> <a className="btn-inner__text" href="#" style={{fontSize: '1em', textDecoration: 'none', color: 'initial', fontFamily: 'com', fontWeight: 'bolder'}}><img src="images/strike.png" className="me-2" /><b>Building</b></a></button>
                  <p>Countless of hours coding and building</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*modal2*/}
        <div className="modal animate__animated animate__bounceIn" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered  modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="exampleModalToggleLabel" style={{color: '#969696'}}><b>Website</b></h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body" id='modal-body2'>
                <div className="mbo">
                  <button className="btn mb-3 p-3" style={{display: 'block', background: '#F0EDEA', border: '1px solid #D8D8D8'}}> <a className="btn-inner__text" href="#" style={{fontSize: '1em', textDecoration: 'none', color: 'initial', fontFamily: 'com', fontWeight: 'bolder'}}><img src="images/strike.png" className="me-2" /><b>Webiste</b></a></button>
                  <p>Countless of hours coding and building

</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*modal3*/}
        <div className="modal animate__animated animate__bounceIn" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered  modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="exampleModalToggleLabel" style={{color: '#969696'}}><b>Community</b></h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body" id='modal-body3'>
                <div className="mbo">
                  <button className="btn mb-3 p-3" style={{display: 'block', background: '#F0EDEA', border: '1px solid #D8D8D8'}}> <a className="btn-inner__text" href="#" style={{fontSize: '1em', textDecoration: 'none', color: 'initial', fontFamily: 'com', fontWeight: 'bolder'}}><img src="images/strike.png" className="me-2" /><b>Community</b></a></button>
                  <p>Build LazyLions community by launching Discord, Twitter, and Medium. Start gathering the community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        
        {/*modal4*/}
        <div className="modal animate__animated animate__bounceIn" id="exampleModal4" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered  modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="exampleModalToggleLabel" style={{color: '#969696'}}><b>Mint</b></h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body" id='modal-body4'>
                <div className="mbo">
                  <button className="btn mb-3 p-3" style={{display: 'block', background: '#F0EDEA', border: '1px solid #D8D8D8'}}> <a className="btn-inner__text" href="#" style={{fontSize: '1em', textDecoration: 'none', color: 'initial', fontFamily: 'com', fontWeight: 'bolder'}}><img src="images/strike.png" className="me-2" /><b>Mint</b></a></button>
                  <p>Opening the doors to the outside world, Launch minting!.</p>
                </div>
              </div>
            </div>
          </div>
        </div>






        
        {/*modal5*/}
        <div className="modal animate__animated animate__bounceIn" id="exampleModal5" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered  modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="exampleModalToggleLabel" style={{color: '#969696'}}><b>Marketing</b></h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body" id='modal-body5'>
                <div className="mbo mb-3">
                  <button className="btn mb-3 p-3" style={{display: 'block', background: '#F0EDEA', border: '1px solid #D8D8D8'}}> <a className="btn-inner__text" href="#" style={{fontSize: '1em', textDecoration: 'none', color: 'initial', fontFamily: 'com', fontWeight: 'bolder'}}><img src="images/strike.png" className="me-2" /><b>Marketing</b></a></button>
                  <p>Marketing campaigns. We'll have amazing giveaways!.</p>
                  <button className="btn mb-3 p-3" style={{display: 'block', background: '#F0EDEA', border: '1px solid #D8D8D8'}}> <a className="btn-inner__text" href="#" style={{fontSize: '1em', textDecoration: 'none', color: 'initial', fontFamily: 'com', fontWeight: 'bolder'}}><img src="images/strike.png" className="me-2" /><b>Sold Out</b></a></button>
                  <p>All LazyLions sold out!</p>
                </div>

                
              </div>
            </div>
          </div>
        </div>






        
        {/*modal6*/}
        <div className="modal animate__animated animate__bounceIn" id="exampleModal6" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered  modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="exampleModalToggleLabel" style={{color: '#969696'}}><b>IRL Lions</b></h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body" id='modal-body6'>
                <div className="mbo">
                  <button className="btn mb-3 p-3" style={{display: 'block', background: '#F0EDEA', border: '1px solid #D8D8D8'}}> <a className="btn-inner__text" href="#" style={{fontSize: '1em', textDecoration: 'none', color: 'initial', fontFamily: 'com', fontWeight: 'bolder'}}><img src="images/strike.png" className="me-2" /><b>IRL Lions</b></a></button>
                  <p>Integrating marketplace with ClassicArt to make selling and bidding feel effortless</p>
                  <p>Exclusive access to future mutations and upcoming partnerships as the community continues to grow. Make sure to join our discord for more info!</p>
                </div>
              </div>
            </div>
          </div>
        </div>





        
        

        
    </>
  )
}

export default Roadmap