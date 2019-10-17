import React from 'react';

// import style from './Landing.css';

import './Landing.scss';

// console.log('STYLE ', style)

const Landing = () => {
  return (
    <div className="Landing">
      <img className="responsive-img" src="./images/emaily_landing.jpg" />
      <h3 className="header">
        Emaily
      </h3>
      <p className="headerText">
        Collect feedback from your users
      </p>
    </div>
  );
};

export default Landing;
