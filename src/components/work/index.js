import React from 'react';
import './work.css';
const Work =()=>{
  return(
    <div className="work">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={require('../../assets/img/volunteer.svg')} alt="work"/>
        </div>
        <div className="col-md-6 work-right">
            <h1>HOW'S <span>WORK</span></h1>
            <div className="button-container">
            <button className="btn btn-talent">Talent</button>
            <button className="btn btn-costumer">Costumer</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Work;