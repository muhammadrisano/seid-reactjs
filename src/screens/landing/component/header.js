import React, {Component} from 'react';
import './style.css';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <>
      <div className="header-landing">
        <div className="left-section">
          <div className="section-img">
            <img src={require('../../../assets/img/header.svg')} alt="" />
          </div>
        
          <div className="text-section">
          <p>Platform yang memberikan ruang untuk tumbuh, dan berkembang, serta membantu kamu untuk mandiri secara finansial</p>
          </div>
        </div>
        <div className="right-section">
          <div className="img-landing">
            <img src={require('../../../assets/img/content-header-icon.svg')} alt="" />
          </div>
          <div className="text-section">
          <p>Part time job yang keren, sampai dengan sekedar berbuat baik menjadi relawan di program sosial</p>
          </div>
        </div>
      </div>
        <div className="box-button-landing">
          <h6 className="ml-2">Join Now !</h6>
          <Link to="/costumer"><button className="btn-seid">Costumer</button></Link>
          <p className="text-center or">Or</p>
          <Link to="/talent"><button className="btn-seid">Talent</button></Link>
        </div>
      </>
    )
  }
}
export default Header;