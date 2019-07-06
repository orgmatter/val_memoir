import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const styles = { height: 400, width: "100%" };

class ReactResponsiveCarousel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showThumbs: false,
        autoPlay: true,
      };
    }

    render () {;
        const { images } = this.props;
        const imageParams = "&w=1000&h=1000&dpi=2";

        const carouselImages = images.map((src, index) => {
            console.log(src.urls.raw);
            const srcParams = src.urls.raw+imageParams;
            return (
                <div className="carousel-img-cover" key={src.id}>
                    <img src={srcParams} key={src.id} className="carousel-image" />
                </div>
            )
        })

        return (
            <div className="carousel-cover-div">
                <Carousel showThumbs={this.state.showThumbs} autoPlay={this.state.autoPlay} className="carousel-main-cover">
                    {carouselImages}
                </Carousel>
            </div>
        )
    }

}

export default ReactResponsiveCarousel;
