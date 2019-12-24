import React, {Component} from 'react';
import Navbar2 from '../../components/Navbar2';
import HeaderCostumer from '../../components/headerCostumer';
import ContentCustomer from './component/contentCustomer';
import Work from '../../components/work';
import Footer2 from '../../components/Footer2';
import './costumer.css';
// import Footer from '../../components/footer';
class Costumer extends Component{

  render(){
    return(
      <div className="costumer">
        <Navbar2 />
        <HeaderCostumer/>
        <ContentCustomer/>
        <Work link='/regcostum' button='Costumer'/>
        <Footer2/>
      </div>
    )
  }
}
export default Costumer