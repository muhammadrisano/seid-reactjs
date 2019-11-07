import React, {Component} from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
// import Description from '../../components/description';
import ContentHeader from '../../components/contentheader';
import Content from '../../components/content';
import Volunteer from '../../components/volunteer';
import Passion from '../../components/passion';
import Work from '../../components/work';
import './home.css';
import Footer from '../../components/footer';
class Home extends Component{
  render(){
    return(
      <div className="background">
        <Navbar/>
        <Header/>
        {/* <Description/> */}
        <ContentHeader/>
        <Content/>
        <Volunteer/>
        <Passion/>
        <Work/>
        <Footer/>
      </div>
    )
  }
}
export default Home;