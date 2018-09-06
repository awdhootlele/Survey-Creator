// 2nd step of survey form
import React from 'react';

import { connect } from 'react-redux';
import FIELDS from './formFields';
import _ from 'lodash';
import { withRouter } from 'react-router-dom'; // provides history object reference
import * as actions from '../../actions';

const SurveyFormReviewComponent = props => {
  const { values, history } = props;
  const reviewFields = _.map(FIELDS, field => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>{values[field.name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Good to go?</h5>
      {reviewFields}
      <button
        className="yellow left darken-3 white-text btn-flat"
        onClick={props.onCancel}
        type="submit"
        name="action"
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        type="button"
        name="action"
        onClick={() => props.submitSurvey(values, history)}
      >
        Submit Survey
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  const {
    form: {
      surveyForm: { values }
    }
  } = state;
  return { values };
};
export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReviewComponent));
