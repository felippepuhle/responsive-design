import React from 'react';
import { TitleSlide } from '../common';

const slide = () => (
  <TitleSlide>
    <h1>{slide.title}</h1>
    <h2>
      <TitleSlide.FontAwesome icon="github" />{' '}
      <a href="https://github.com/felippepuhle/responsive-design">
        github.com/felippepuhle/responsive-design
      </a>
    </h2>
    <p>(Use the right and left arrow keys to navigate)</p>
  </TitleSlide>
);

slide.title = 'Responsive Web Design';

export default slide;
