// form component to create new Survey

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import vaidateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];
class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, field => {
      const { label, name } = field;
      return (
        <Field
          type="text"
          component={SurveyField}
          name={name}
          label={label}
          key={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button
            className="teal btn-flat right white-text"
            type="submit"
            name="action"
          >
            Next
            <i className="material-icons right">done</i>
          </button>
          <Link to="/surveys" className="red btn-flat white-text" name="action">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

const validate = values => {
  console.log('validating form ->', values);
  const errors = {}; // empty object means valid form
  errors.emails = vaidateEmails(values.emails || '');
  _.each(FIELDS, field => {
    const { name } = field;
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });
  return errors;
};
export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
