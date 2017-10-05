import React from 'react';
import { Step } from 'react-presents';
import { ContentSlide } from '../common';

import ResponsiveImage from '../assets/responsive.png';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>
    It's an approach that makes your web page look good on all devices (desktops, tablets, and
    phones).
    <Step index={1}>
      <div style={styles.wrapper}>
        <img src={ResponsiveImage} style={styles.img} />
      </div>
    </Step>
  </ContentSlide>
);

const styles = {
  wrapper: {
    paddingTop: 40,
    textAlign: 'center',
  },
  img: {
    maxHeight: 700,
  },
};

slide.title = 'What is Responsive Web Design?';

export default slide;
