import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../screens/home'
import Costumer from '../screens/costumer'
class Router extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch> 
            <Route path='/' exact component={Home} />
            <Route path="/costumer" exact component={Costumer}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;