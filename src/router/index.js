import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Talent from '../screens/talent';
import Costumer from '../screens/costumer';
import Login from '../screens/login';
import Register from '../screens/register2';
import Angket from '../screens/angket';
import Regcostum from '../screens/regcostum';
import LandingPage from '../screens/landing/index';

class Router extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch> 
            <Route path='/' exact component={LandingPage} />
            <Route path="/costumer" exact component={Costumer}/>
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register}/>
            <Route path='/angket' exact component={Angket} />
            <Route path='/regcostum' exact component={Regcostum} />
            <Route path='/talent' exact component={Talent}/>

        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;