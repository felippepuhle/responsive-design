import React from 'react';
import { Step } from 'react-presents';
import { ContentSlide } from '../common';

import MobileFirstImage from '../assets/mobile-first.png';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>

    <ContentSlide.SubTitle>Mobile first</ContentSlide.SubTitle>
    <div style={styles.imageWrapper}>
      <img src={MobileFirstImage} />
    </div>

    <Step index={1}>
      <ul>
        <li>
          Start the design process with mobile considerations and constraints and then work your way
          up from there
        </li>
        <li>Content prioritization</li>
        <li>Speed matters</li>
        <li>Save money with less bandwidth costs</li>
      </ul>
    </Step>
  </ContentSlide>
);

const styles = {
  imageWrapper: {
    padding: '20px 0px',
  },
};

slide.title = 'Concepts';

export default slide;
