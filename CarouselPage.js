import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const CarouselPage = () => {
  return (
    <div>
      <Carousel data-bs-theme="">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="ad.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="ad.png"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="ad.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselPage
