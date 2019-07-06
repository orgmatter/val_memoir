import React, { Component } from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

const styles = { height: 400, width: "100%" };

class BoostrapCarousel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        autoplay: true
      };
    }

    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
    visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
    };
    slideNext = () => {
    this.slider.slideNext();
    };
    slidePrev = () => {
    this.slider.slidePrev();
    };
    goToSlide = () => {
    this.slider.goToSlide(4);
    };
    autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
    };

    render () {
        let { leftIcon, rightIcon } = this.state;
        const { images } = this.props;
        const imageParams = "&w=1000&h=1000&dpi=2";

        const carouselImages = images.map((src, index) => {
            console.log(src.urls.raw);
            const srcParams = src.urls.raw+imageParams;
            return (
                <div className="carousel-img-cover" key={src.id} style={{ height: 400 }}>
                    <img src={srcParams} key={src.id} className="carousel-image" />
                    <div className="carousel-caption">Image</div>
                </div>
            )
        })

        return (
            <div className="carousel-cover">
                <RBCarousel
                    animation={true}
                    autoplay={this.state.autoplay}
                    slideshowSpeed={2000}
                    defaultActiveIndex={0}
                    leftIcon={leftIcon}
                    rightIcon={rightIcon}
                    onSelect={this.onSelect}
                    ref={r => (this.slider = r)}
                >
                    {carouselImages}
                </RBCarousel>
            </div>
        )
    }

}

export default BoostrapCarousel;
