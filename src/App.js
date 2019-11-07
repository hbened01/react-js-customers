import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

    renderHome = () => (<HomeContainer/>);
    renderCustomerContainer = () => (<CustomersContainer/>);
    renderCustomerListContainer = () => (<h1>Customer List Container</h1>);
    renderCustomerNewContainer = () => (<h1>Customer New Container</h1>);

    render(){
        return (
            <Router>
                <div className="App">
                    <Route exact path='/' component={this.renderHome}/>
                    <Route exact path='/customers' render={this.renderCustomerContainer}/>
                    <Switch>
                        <Route path='/customers/new' component={this.renderCustomerNewContainer}/>
                        <Route path='/customers/:dni' component={this.renderCustomerContainer}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
