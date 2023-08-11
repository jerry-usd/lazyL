import React from 'react'
import Nav from '../components/nav'
const Mint = () => {
  return (
    <>
    <div className="wrap1" style={{background: '#EBE7E3'}}>
       <Nav cmp="mint" />
        <div className="conten container-fluid">
          <div className="container  pb-4">
            <div className="container-fluid pt-5">
              <center>
                <span className="jj mfw me-3" style={{textTransform: 'capitalize', color: 'crimson'}}>2 ETC to mint 1 NFT.</span>  <span className="jj" style={{}}>Sold: 0 / 2000</span>
                <div className="mintbox mt-5">
                  <center>
                    <h6 className=" mb-5" style={{fontWeight: 600, fontSize: '24px', lineHeight: '150%', color: '#5D5D5D'}}> How many Lazy Lions do you want to mint? (1-20)</h6>
                    <div className="input-group mb-3" style={{maxWidth: '70%'}}>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                      </select>
                      <button className="btn btn-outline-secondary btn-lg" type="button" id="button-addon2">MINT</button>
                    </div>
                  </center>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mint