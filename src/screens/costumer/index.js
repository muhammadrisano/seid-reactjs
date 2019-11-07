import React, {Component} from 'react';
import Navbar from '../../components/navbar';
import HeaderCostumer from '../../components/headerCostumer';
import ContentCustomer from '../../components/contentCustomer';
import Footer from '../../components/footer';
class Costumer extends Component{

  render(){
    return(
      <div>
        <Navbar />
        <HeaderCostumer/>
        <ContentCustomer/>
        <Footer/>
      </div>
    )
  }
}
export default Costumer