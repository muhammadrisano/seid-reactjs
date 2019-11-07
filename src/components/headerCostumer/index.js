import React from 'react';
import './header.css';
const HeaderCustomer =()=>{
  return(
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h4>Inilah saatnya untuk kamu mendukung dan memberi kepercayaan kepada telenta muda untuk tumbuh dan berkembang sesuai dengan keinginan mereka</h4>
          </div>
          <div className="col-md-7">
            <img src={require('../../assets/img/costumer.svg')} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeaderCustomer