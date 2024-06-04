/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { CCarouselCaption } from '@coreui/react';
import { CCarousel } from '@coreui/react';
import { CImage } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';

import { golf } from "../../public/golfFinal.png";
import { scala } from "../../public/skalaFinale.png";
import { fabia } from "../../public/skodaFinal.png";

function Carousel() {
  return (
    <CCarousel controls indicators>
   <CCarouselItem>
    <CImage className="d-block w-100" src={ golf } alt="Golf" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={ scala } alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={ fabia } alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
  )
}

export default Carousel