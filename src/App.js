import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect, withRouter } from 'react-router-dom'
// import PrivateRoute from './components/PrivateRoute'
import { inject, observer } from 'mobx-react'
import Myorder from './routes/myOrder/myorder';  //我的订单
import list from './routes/list/list'
import { debounce } from './utils/index'
// import API from './http/API'

@withRouter @inject("Store") @observer
class App extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Switch>
                    {/* 我的订单 */} 
                    <Route exact path="/" component={ Myorder } />
                    <Route exact path="/myorder" component={ Myorder } />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;

