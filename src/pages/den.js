import React from 'react'
import Nav from '../components/nav'
const den = () => {
  return (
    <>
    
    <div className="wrap1" style={{background: '#EBE7E3'}}>
      <Nav cmp="den"/>
        <div className="content container-fluid">
          <div className="container  pb-4">
            <h2 className="tit">ALL LAZY LIONS</h2>
            <p style={{width: '40vw'}} className="mb-5 mfw">Ethereum Classic Lazy lions, is an exclusive 5,000 only mint-able premium NFT living on the Ethereum Classic (ETC) blockchain. No two pieces of these digital Lazy Lions are alike. Each being unique and pristine, there is an order of rarity that makes certain ones more valuable than the others. These Lazy Lions are amongst the first high-quality art projects in the blockchain ecosystems and in ETC. Be part of the club! </p>
            <center>
              <div style={{width: '50vw'}} className="filter mfw">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search By Id" />
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Or Sort By:</button>
                  <ul className="dropdown-menu dropdown-menu-end" style={{background: '#F0EDEA', padding: '20px'}}>
                    <li><a className="dropdown-item" href="#">Lowest Token Id</a></li>
                    <li><a className="dropdown-item" href="#">Highest Token Id</a></li>
                    <li><a className="dropdown-item" href="#">Low Rarity</a></li>
                    <li><a className="dropdown-item" href="#">Top Rarity</a></li>
                  </ul>
                </div>
              </div>
            </center>
            <div className="container-fluid pt-5">
              <div className="row">
                <div className="col-sm-3 p-2 mb-3">
                  <div className="teambox p-2" onClick={()=>{window.location='/lion'}}>
                    <img style={{maxHeight: '330px'}} src="images/5.png" className="img-fluid mb-3" />
                    <span style={{color: '#66E848'}}> Lazy Lions # 2</span>
                    <p>Rarity Rank # 841</p>
                  </div>
                </div>
                <div className="col-sm-3 p-2 mb-3">
                  <div className="teambox p-2" onClick={()=>{window.location='/lion'}}>
                    <img style={{maxHeight: '330px'}} src="images/2576.png" className="img-fluid mb-3" />
                    <span style={{color: '#66E848'}}> Lazy Lions # 2</span>
                    <p>Rarity Rank # 841</p>
                  </div>
                </div>
                <div className="col-sm-3 p-2 mb-3">
                  <div className="teambox p-2" onClick={()=>{window.location='/lion'}}>
                    <img style={{maxHeight: '330px'}} src="images/5.png" className="img-fluid mb-3" />
                    <span style={{color: '#66E848'}}> Lazy Lions # 2</span>
                    <p>Rarity Rank # 841</p>
                  </div>
                </div>
                <div className="col-sm-3 p-2 mb-3">
                  <div className="teambox p-2" onClick={()=>{window.location='/lion'}}>
                    <img style={{maxHeight: '330px'}} src="images/796.png" className="img-fluid mb-3" />
                    <span style={{color: '#66E848'}}> Lazy Lions # 2</span>
                    <p>Rarity Rank # 841</p>
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

export default den