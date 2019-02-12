import {BrowserRouter as Routers,Route,Switch,Redirect} from 'react-router-dom';
import React, {Component,Fragment} from 'react';
import {Provider} from 'react-redux';
import store from './store'
import App from './App'
import A from './pages/A'
import B from './pages/B'
import Order from './pages/order'
import Home from './pages/home'
import Settlment from './pages/settlment'
export default class Routes extends Component{
        render(){
            return(
                <Provider store={store}>
                    <Fragment>
                        <Routers>
                            <App>
                                <Switch>
                                        <Route exact path='/a' component={A}/>
                                        <Route exact path='/b' component={B}/>
                                        <Route exact path='/home' component={Home}/>
                                        <Route exact path='/settlment' component={Settlment}/>
                                        <Route exact path='/order' component={Order}/>
                                        <Route exact path="/" render={() =>  <Redirect to="/home"/>}/>
                                </Switch>
                            </App>
                        </Routers>
                    </Fragment>
             </Provider>
            );
        }
}