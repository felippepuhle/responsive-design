import React from 'react';
import { Step } from 'react-presents';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>

    <ContentSlide.SubTitle>Unobtrusive JavaScript</ContentSlide.SubTitle>
    <ul>
      <li>Separate JS from HTML</li>
      <li>All content should be available without JS</li>
      <li>Best practices to avoid common JS errors (browser inconsistencies)</li>
    </ul>

    <Step index={1}>
      <div>
        <ContentSlide.SubTitle>Progressive enhancement</ContentSlide.SubTitle>
        <ul>
          <li>Core content prioritization</li>
          <li>Adds layers/features as the end-user's browser/internet connection allow</li>
          <li>Allows everyone to access the basic content and functionality of a web page</li>
          <li>Mobile first is the perfect example of progressive enhancement</li>
        </ul>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Concepts';

export default slide;
