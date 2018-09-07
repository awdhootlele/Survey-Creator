import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      {/* <div
        style={{
          position: 'relative',
          backgroundImage: `url('./images/emaily_landing.jpg')`
        }}
      /> */}
      <img className="responsive-img" src="./images/emaily_landing.jpg" />
      <h3
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white'
        }}
      >
        Emaily
      </h3>
      <p
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white'
        }}
      >
        Collect feedback from your users
      </p>
    </div>
  );
};

export default Landing;
