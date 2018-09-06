import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReviewComponent from './SurveyFormReview';
import { reduxForm } from 'redux-form';
// this shows SurvetForm component
class SurveyNew extends Component {
  // State initialization using constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     new: true
  //   };
  // }
  // new create-react-app way to initialize state
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReviewComponent
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
