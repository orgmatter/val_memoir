import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../../Store/Actions/ImageActions';
//import NukaCarousel from './Components/Sliders/NukaCarousel';
//import BoostrapCarousel from './Components/Sliders/BoostrapCarousel';
import ReactResponsiveCarousel from './Components/Sliders/ReactResponsiveCarousel';



class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getImages();
    }

    render () {
        const { imageData } = this.props.images;
        
        console.log(imageData);

        return (
            <div className="home-container-div">
                <ReactResponsiveCarousel images={imageData} />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getImages: () => dispatch(getImages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);