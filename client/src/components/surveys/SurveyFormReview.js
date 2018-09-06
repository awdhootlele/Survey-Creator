// 2nd step of survey form
import React from 'react';

import { connect } from 'react-redux';
import FIELDS from './formFields';
import _ from 'lodash';

const SurveyFormReviewComponent = props => {
  const { values } = props;
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
        className="yellow left darken-3 btn-flat"
        onClick={props.onCancel}
        type="submit"
        name="action"
      >
        Back
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
  null
)(SurveyFormReviewComponent);
