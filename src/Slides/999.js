import React from 'react';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>

    <ul>
      <li>
        <a href="https://en.wikipedia.org/wiki/Responsive_web_design">Responsive web design</a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Unobtrusive_JavaScript">Unobtrusive JavaScript</a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Progressive_enhancement">Progressive enhancement</a>
      </li>
    </ul>
  </ContentSlide>
);

slide.title = 'Reference';

export default slide;
