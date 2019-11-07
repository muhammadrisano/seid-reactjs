import React from 'react';
import './passion.css';
const Passion =()=>{
  return(
    <div className="passion">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="passion1">
            <h1>Kamu bisa ikut pelatihan berdasarkan minat dan bakat</h1>
            <img src={require('../../assets/img/passion.svg')} alt="passion"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="passion2">
            <img src={require('../../assets/img/dukungan.svg')} alt="passion2" className="img-passion2" />
            <h1>Dukungan dan konsultasi untuk pengembahgan pribadi dan karirmu</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Passion;