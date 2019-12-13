import React from 'react';
import "./valunteer.css";
const Volunteer =()=>{
  return(
    <div className="volunteer">
      
      <div className="bg-section-left">
        <h1 className="title">Volunteer</h1>
        <div className="section-left">
          <div className="volunteer-img">
            <img src={require('../../assets/img/volunteer.svg')} alt="volunteer" /> 
          </div>
          <h5 className="text-center">Menjadi bagian dari sebuah perubahan yang baik</h5> 
        </div>
      </div>
      <div className="bg-section-right">
        <div className="section-right">
            <div className="volunteer-img">
              <img src={require('../../assets/img/volunteer2.svg')} alt="valunteer2" />
            </div>
            <h5 className="text-center">
              Bekerjasama dengan Global dan Local Foundation
            </h5>
        </div>
      </div>
    </div>
  )
}
export default Volunteer;