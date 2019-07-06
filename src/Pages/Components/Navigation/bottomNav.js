import React, { useState } from 'react';
import { classNames } from 'classnames';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';
import { routes as ROUTES } from '../../../Routes';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

import Home from '@material-ui/icons/Home';
import WebAsset from '@material-ui/icons/WebAsset';
import { styles } from '../styles';
//import { Button } from '@material-ui/core';


function BottomNav (props) {
    const { handleClickOpen } = props;
    const classes = styles();
    const [value, setValue] = useState(0)

    return (
        <div className={classes.pageRoot} >
            <Paper className={classes.paperRoot}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.bottomNavRoot}
                >
                    <BottomNavigationAction label="Home" icon={<Home />} className={classes.bottomNavItem} component={Link} to={ROUTES.home} />
                    <BottomNavigationAction className={classes.bottomNavItem} />
                    <BottomNavigationAction label="Feeds" icon={<WebAsset />} className={classes.bottomNavItem} component={Link} to={ROUTES.feeds} />
                </BottomNavigation>
                <Fab color="primary" aria-label="Add" className={`${classes.bottomNavFabButton} bottom-fab-btn`} onClick={handleClickOpen}>
                    <AddIcon />
                </Fab>
            </Paper>
        </div>
    )
}

export default BottomNav;