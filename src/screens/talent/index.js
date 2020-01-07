import React, {Component} from 'react';
import Navbar2 from '../../components/Navbar2';
// import Header from '../../components/header';
// import Description from '../../components/description';
// import ContentHeader from '../../components/contentheader';
import Content from '../../components/content';
import Volunteer from '../../components/volunteer';
import Passion from '../../components/passion';
import Work from '../../components/work';
import Footer2 from '../../components/Footer2'
import './talent.css';
class Talent extends Component{
  render(){
    return(
      <div className="background">
        <Navbar2/>
        {/* <Header/> */}
        {/* <Description/> */}
        {/* <ContentHeader/> */}
        <Content/>
        <Volunteer/>
        <Passion/>
        <Work link='/register' button='Talent' />
        <Footer2/>
      </div>
    )
  }
}
export default Talent;