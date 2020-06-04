/*
 * @author: zhidl
 * @Date: 2020-06-04 10:39:34
 * @description: 
 * @LastEditTime: 2020-06-04 11:30:36
 * @LastEditors: zhidl
 */ 
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import App from '../App';
import Admin from '../Admin';
import NotFound from '../Nofound';
import Home from '../views/home/Home';
export default class RouterConfig extends React.Component{
  render() {
    return (
      <Router>
        <App>
          <Route path='/admin' render={() => (
            <Admin>
              <Switch>
                <Route path="/admin/main" component={Home}/>
                <Route component={NotFound}/>
              </Switch>
            </Admin>
          )} />
          <Route exact path="/" render={() => <Redirect to="/admin/main"/>} />
        </App>
      </Router>
    )
  }
}