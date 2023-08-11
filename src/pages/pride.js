import React from 'react'
import Nav from '../components/nav'
const Pride = () => {
  return (
    <>
    <div className="wrap1" style={{background: '#EBE7E3'}}>
         <Nav cmp="pride"/>
          <div className="content container-fluid">
            <div className="container mb-5 pb-4">
              <h2 className="tit">MEET THE PRIDE</h2>
              <p style={{width: '40vw'}} className="mb-5 mfw">The team at Lazy lions is mostly located at Los Angeles, comprising of a group of Alpha Predators, each specially skilled in their craft, working together to bring your digital dreams to a stunning Reality. </p>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-2 col-6 p-2">
                    <div className="teambox p-2">
                      <img src="images/5.png" className="img-fluid mb-3" />
                      <span style={{color: '#66E848'}}>Courtney</span>
                      <p>Co-founder</p>
                      <img src="images/twitter.svg" className="teamsoc" />
                    </div>
                  </div>
                  <div className="col-sm-2 col-6 p-2">
                    <div className="teambox p-2">
                      <img src="images/2576.png" className="img-fluid mb-3" />
                      <span style={{color: '#66E848'}}>Courtney</span>
                      <p>Co-founder</p>
                      <img src="images/twitter.svg" className="teamsoc" />
                    </div>
                  </div>
                  <div className="col-sm-2 col-6 p-2">
                    <div className="teambox p-2">
                      <img src="images/5.png" className="img-fluid mb-3" />
                      <span style={{color: '#66E848'}}>Courtney</span>
                      <p>Co-founder</p>
                      <img src="images/twitter.svg" className="teamsoc" />
                    </div>
                  </div>
                  <div className="col-sm-2 col-6 p-2">
                    <div className="teambox p-2">
                      <img src="images/796.png" className="img-fluid mb-3" />
                      <span style={{color: '#66E848'}}>Courtney</span>
                      <p>Co-founder</p>
                      <img src="images/twitter.svg" className="teamsoc" />
                    </div>
                  </div>
                  <div className="col-sm-2 col-6 p-2">
                    <div className="teambox p-2">
                      <img src="images/2576.png" className="img-fluid mb-3" />
                      <span style={{color: '#66E848'}}>Courtney</span>
                      <p>Co-founder</p>
                      <img src="images/twitter.svg" className="teamsoc" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mb-5 pb-4">
              <h2 className="tit">LAZER EYE HOLDERS</h2>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-2 col-6 p-2">
                    <div className="teambox p-2">
                      <img src="images/5.png" className="img-fluid mb-3" />
                      <span style={{color: '#66E848'}}>Courtney</span>
                      <p>Co-founder</p>
                      <img src="images/twitter.svg" className="teamsoc" />
                    </div>
                  </div>
                  <div className="col-sm-2 col-6 p-2">
                    <div className="teambox p-2">
                      <img src="images/2576.png" className="img-fluid mb-3" />
                      <span style={{color: '#66E848'}}>Courtney</span>
                      <p>Co-founder</p>
                      <img src="images/twitter.svg" className="teamsoc" />
                    </div>
                  </div>
                  <div className="col-sm-2 col-6 p-2">
                    <div className="teambox p-2">
                      <img src="images/5.png" className="img-fluid mb-3" />
                      <span style={{color: '#66E848'}}>Courtney</span>
                      <p>Co-founder</p>
                      <img src="images/twitter.svg" className="teamsoc" />
                    </div>
                  </div>
                  <div className="col-sm-2 col-6 p-2">
                    <div className="teambox p-2">
                      <img src="images/796.png" className="img-fluid mb-3" />
                      <span style={{color: '#66E848'}}>Courtney</span>
                      <p>Co-founder</p>
                      <img src="images/twitter.svg" className="teamsoc" />
                    </div>
                  </div>
                  <div className="col-sm-2 col-6 p-2">
                    <div className="teambox p-2">
                      <img src="images/2576.png" className="img-fluid mb-3" />
                      <span style={{color: '#66E848'}}>Courtney</span>
                      <p>Co-founder</p>
                      <img src="images/twitter.svg" className="teamsoc" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container  pb-4 pt-5">
              <h2 className="tit">JOIN THE PRIDE</h2>
              <p style={{width: '40vw'}} className="mb-5 mfw">To the ones with the courage to join Our Pride, One that sticks with you and builds a sense of community and togethereness. </p>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 p-3 mb-3">
                    <div className="tesoc p-5" onClick={()=>{window.location='https://twitter.com/LazylionsEtc';}}>
                      <div className="row">
                        <div className="col-5">
                          <img src="images/str.svg" />
                        </div>
                        <div className="col-7">
                          <h2 className="mb-1"><b>TWITTER</b></h2>
                          <small>Follow us on our Socials</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 p-3 mb-3">
                    <div className="tesoc p-5" onClick={()=>{window.location='https://discord.com/invite/2ufKucFwGD';}}>
                      <div className="row">
                        <div className="col-5">
                          <img src="images/str.svg" />
                        </div>
                        <div className="col-7">
                          <h2 className="mb-1"><b>DISCORD</b></h2>
                          <small>Follow us on our Socials</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 p-3 mb-3">
                    <div className="tesoc p-5" onClick={()=>{window.location='https://medium.com/@etclazylions/lazy-lions-on-ethereum-classic-988d51dae175';}} >
                      <div className="row">
                        <div className="col-5">
                          <img src="images/str.svg" />
                        </div>
                        <div className="col-7">
                          <h2 className="mb-1"><b>MEDIUM</b></h2>
                          <small>Follow us on our Socials</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 p-3 mb-3">
                    <div className="tesoc p-5" onClick={()=>{window.location='mailto:etclazylions@gmail.com';}} >
                      <div className="row">
                        <div className="col-5">
                          <img src="images/str.svg" />
                        </div>
                        <div className="col-7">
                          <h2 className="mb-1"><b>EMAIL</b></h2>
                          <small>Follow us on our Socials</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot ">
          <h2 className="tit mb-4">FAQ</h2>
          <p style={{width: '40vw'}} className="mb-5 mfw">These are some frequently asked questions</p>
          <div style={{width: '55vw'}} className="mb-5 mfw">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  What Are Lazy Lions?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body ps-5 ms-2">
                  Lazy Lions, is an exclusive 5,000 only mint-able premium NFT. No two pieces of these 5,000 digital beauties are alike. Each being unique and pristine, there is an order of rarity that makes certain ones more valuable than the others. Each Lazy Lion is inspired by its Ethereum counterpart.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What Is An NFT?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body ps-5 ms-2">
                  Non Fungible Token, replace Fungible to Replaceable. There you get it! It is unique one of kind item that is provably rare. </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How Much Does A Lion Cost?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body ps-5 ms-2">
                  Each Lion costs 2 ETC (+gas) with a maximum mintage of 20 Lions.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThreee">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreee" aria-expanded="false" aria-controls="collapseThree">
                  Where Can I Get ETC?
                  </button>
                </h2>
                <div id="collapseThreee" className="accordion-collapse collapse" aria-labelledby="headingThreee" data-bs-parent="#accordionExample">
                  <div className="accordion-body ps-5 ms-2" style={{fontWeight: "bolder"}}>
                  ETC is Ethereum Classic the original Ethereum founded in 2014. You can buy it using coinbase or the crypto app. Just be sure to transfer your coins to a metamask to be able to mint your very own Lion!</div>
                </div>
              </div>
            </div>
          </div>
          <span style={{width: '100px'}}>
            2022, Lazy Lions<br />
            Stay Lazy.
          </span>
        </div>
    </>
  )
}

export default Pride