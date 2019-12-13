import React, {Component} from 'react';
import Navbar from '../../components/navbar/index';
import Header from './component/header';

class LandingPage extends Component{
  render() {
    return(
      <div>
        <Navbar/>
        <div className="container">
        <Header/>
        </div>
      </div>
    )
  }
}
export default LandingPage;