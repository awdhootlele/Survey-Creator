// single form field component rendered by SurveyForm

import React, { Component } from 'react';

export default props => {
  const {
    input,
    label,
    meta: { error, touched }
  } = props; // input contains all input events and attrs like onBlur, onChange, name, etc
  // meta object contains errors if any and all validation props like touched, valid ,etc
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div style={{ marginBottom: '20px' }} className="red-text">
        {touched && error}
      </div>
    </div>
  );
};
