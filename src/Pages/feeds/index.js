import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedCards from '../Components/FeedCards';


class Feeds extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { feedData } = this.props.feeds;
        console.log(feedData);
        const storageData = JSON.parse(localStorage.getItem('itemArray'));
        console.log(storageData);

        return (
            <div className="feeds-container-div">
                <FeedCards feedData={storageData !== null ? storageData : 'no result'} />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        feeds: state.feeds
    }
}

export default connect(mapStateToProps, null)(Feeds)