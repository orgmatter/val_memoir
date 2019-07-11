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
        const imageParams = "w=100&h=800&fit=facearea";

        const carouselImages = images.map((src, index) => {
            console.log(src.urls.raw);
            const srcParams = src.urls.raw+imageParams;
            console.log(srcParams);
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
//https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc5NjM5fQ

export default ReactResponsiveCarousel;
