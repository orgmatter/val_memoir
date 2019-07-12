import React, { useState } from 'react';
import Home from './home';
//import Feeds from './feeds';
import Header from './Components/Navigation/header';
import BottomNav from './Components/Navigation/bottomNav';
import AlertDialogSlide from './Components/Dialog';
import { connect } from 'react-redux';

function Pages(props)  {

    const { noAccessFeedback } = props.appFeedbacks;

    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="body-container-div">
            <AlertDialogSlide handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} setOpen={setOpen} noAccessFeedback={noAccessFeedback} />
            <div className="header-div">
                <Header title="Val Memoir" handleClickOpen={handleClickOpen} />
            </div>
            <div className="body-content-div">
                <Home />
            </div>
            {/* <div className="bottom-nav-div">
                <BottomNav />
            </div> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        appFeedbacks: state.appFeedbacks,
    }
}

export default connect(mapStateToProps, null)(Pages);

