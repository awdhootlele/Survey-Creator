import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import _ from 'lodash';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (!this.props.surveys.length) {
      return (
        <div className="center-align">
          There are no Surveys available at this moment. Please create a Survey
        </div>
      );
    }
    return _.map(this.props.surveys.reverse(), survey => {
      return (
        <div key={survey._id} className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = state => {
  const { surveys } = state;
  return {
    surveys
  };
};
export default connect(
  mapStateToProps,
  actions
)(SurveyList);
