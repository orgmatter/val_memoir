import React from 'react';
import Carousel from 'nuka-carousel';
import { height } from '@material-ui/system';

function NukaCarousel ({images}) {
    const imageParams = "&w=1000&h=1000&dpi=2";
    const carouselImages = images.map((src, index) => {
        console.log(src.urls.raw);
        const srcParams = src.urls.raw+imageParams;
        return (
            <img src={srcParams} key={src.id} className="carousel-image" />
        )
    })
    return (
      <Carousel className="carousel-cover">
        {carouselImages}
      </Carousel>
    );
}

export default NukaCarousel;