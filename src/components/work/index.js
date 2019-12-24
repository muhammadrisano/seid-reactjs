import React from 'react';
import './work.css';
import {Link} from 'react-router-dom';
const Work =(props)=>{
  return(
    <div className="work">
    <div className="container">
      <div className="box-work">
      <div className="row">
        <div className="col-md-6">
          <img src={require('../../assets/img/work.svg')} alt="work"/>
        </div>
        <div className="col-md-6 work-right">
            <h1>How's it <span>WORK</span></h1>
            <div className="button-container">
              {/* <Link to="/register" className="btn btn-talent">Talent</Link> */}
              <Link to={props.link} className="btn btn-costumer">{props.button}</Link>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
export default Work;