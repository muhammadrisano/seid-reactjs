import React from 'react';
import './footer.css';
const Footer=()=>{
  return(
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-left">
            <img src={require('../../assets/img/hompage2.svg')} alt="img-footer"/>
          </div>
          <div className="col-md-6 footer-right">
            <img src={require('../../assets/img/logo.svg')} alt="logo" className="logo"/>
            <h3>Will be  comming soon on</h3>
            <div className="section-btn-img">
              <img src={require('../../assets/img/button-footer.svg')} alt="btn" />
            </div>
            <div className="content-footer">
              <p className="copyright">@2019 Seid. All Right Reserved</p>
              <p className="footer-item1">#Groundtogrow</p>
              <p className="footer-item1">Customer: +6281381816014</p>
              <p className="footer-item2">omg@seeds-id.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer