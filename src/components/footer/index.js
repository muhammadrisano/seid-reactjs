import React from 'react';
import './footer.css';
const Footer=()=>{
  return(
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-left">
            <img src={require('../../assets/img/money.svg')} alt="img-footer"/>
          </div>
          <div className="col-md-6 footer-right">
            <img src={require('../../assets/img/logo.svg')} alt="logo" className="logo"/>
            <h3>Will be  comming soon on</h3>
            <div className="content-footer">
              <p className="copyright">@2019 Seid. All Right Reserved</p>
              <p className="footer-item1">#Groundtogrow</p>
              <p className="footer-item2">omg@seeds-id.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer