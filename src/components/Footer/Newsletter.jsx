import React from 'react';
import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title='Newsletter'/>
      <h1 className='headtext__cormorant'></h1>
    </div>
  </div>
);

export default Newsletter;
