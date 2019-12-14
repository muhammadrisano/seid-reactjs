import React, {Component} from 'react';
import './style.css';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <div className="header-landing">
        <div className="left-section">
          <img src={require('../../../assets/img/new logo-02.svg')} alt="" className="logo-seid"/>
          <p>Platform yang memberikan ruang untuk tumbuh, dan berkembang, serta membantu kamu untuk mandiri secara finansial</p>
          <div className="img-landing">
            <img src={require('../../../assets/img/content-header-icon.svg')} alt=""/>
          </div>
          <p className="content-landing">Part time job yang keren, sampai dengan sekedar berbuat baik menjadi relawan di program sosial</p>
        </div>
        <div className="right-section">
          <div className="section-img">
            <img src={require('../../../assets/img/header.svg')} alt=""/>
          </div>
          <div className="box-button">
            <h6 className="ml-2">Join Now !</h6>
            <Link to="/regcostum"><button className="btn-seid">Costumer</button></Link>
            <p className="text-center or">Or</p>
            <Link to="/register"><button className="btn-seid">Talent</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Header;