// components are defined with uppercase letter at start
// starting point of react-router and react part of the app

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from '../components/Dashboard';
import SurveyNew from '../components/surveys/SurveyNew';

import { connect } from 'react-redux'; // to give thic component ability to call action and (or) get state data
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    // lifecycle method like ngOnInit in angular4
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// connect(mapStateToProps function, dispatch action)(Component)
export default connect(
  null,
  actions
)(App);
