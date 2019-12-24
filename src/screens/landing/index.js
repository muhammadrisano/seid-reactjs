import React, {Component} from 'react';
import Navbar2 from '../../components/Navbar2';
import Header from './component/header';
import Footer from '../../components/footer';

class LandingPage extends Component{
  render() {
    return(
      <div>
        <Navbar2/>
        <div className="container">
        <Header/>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default LandingPage;