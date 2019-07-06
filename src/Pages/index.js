import React, { useState } from 'react';
import Home from './home';
import Feeds from './feeds';
import Header from './Components/Navigation/header';
import BottomNav from './Components/Navigation/bottomNav';
import AlertDialogSlide from './Components/Dialog';
import { routes as ROUTES } from '../Routes';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


function Pages(props)  {

    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="body-container-div">
            <AlertDialogSlide handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} setOpen={setOpen} />
            <Router>
                <div className="header-div">
                    <Header title="Val Memoir"/>
                </div>
                <div className="body-content-div">
                    <Switch>
                        <Route exact path={ROUTES.home} component={Home} />
                        <Route path={ROUTES.feeds} component={Feeds} />
                    </Switch>
                </div>
                <div className="bottom-nav-div">
                    <BottomNav handleClickOpen={handleClickOpen} />
                </div>
            </Router>
        </div>
    )
}

export default Pages;

