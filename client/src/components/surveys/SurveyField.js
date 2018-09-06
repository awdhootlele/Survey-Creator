// single form field component rendered by SurveyForm

import React, { Component } from 'react';

export default props => {
  const { input, label } = props; // inout contains all input events and attrs like onBlur, onChange, name, etc

  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
