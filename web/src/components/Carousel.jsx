/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { CCarouselCaption } from '@coreui/react';
import { CCarousel } from '@coreui/react';
import { CImage } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';

function Carousel() {
  return (
    <CCarousel controls indicators>
   <CCarouselItem>
    <CImage className="d-block w-100" src="../../public/golfFinal.png" alt="Golf" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Slideul 1</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src="../../public/skalaFinale.png" alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Slideul 2</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src="../../public/skodaFinal.png" alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Slideul 3</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
  )
}

export default Carousel