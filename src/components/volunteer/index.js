import React from 'react';
import "./valunteer.css";
const Volunteer =()=>{
  return(
    <div className="volunteer">
      <div className="container">
        <h1 className="text-center">Volunteer</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="vulunteer-img">
            <img src={require('../../assets/img/volunteer.svg')} alt="volunter1" />
            </div>
            <h5 className="text-center">Menjadi bagian dari sebuah perubahan yang baik</h5>
          </div>
          <div className="col-md-6">
            <div className="vulunteer-img">
            <img src={require('../../assets/img/volunteer2.svg')} alt="valunteer2"/>
            </div>
            <h5 className="text-center">
            Bekerjasama dengan Global dan Local Foundation
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Volunteer;